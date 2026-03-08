const hre = require("hardhat");

async function main() {
  console.log("Deploying CrediQuest contracts to Creditcoin Testnet...");

  // Deploy CrediScore first
  const CrediScore = await hre.ethers.getContractFactory("CrediScore");
  const crediScore = await CrediScore.deploy();
  await crediScore.waitForDeployment();
  const crediScoreAddress = await crediScore.getAddress();
  console.log("CrediScore deployed to:", crediScoreAddress);

  // Deploy RoscaCore with UUPS proxy
  const RoscaCore = await hre.ethers.getContractFactory("RoscaCore");
  const roscaCore = await hre.upgrades.deployProxy(RoscaCore, [], {
    initializer: "initialize",
    kind: "uups"
  });
  await roscaCore.waitForDeployment();
  const roscaCoreAddress = await roscaCore.getAddress();
  console.log("RoscaCore deployed to:", roscaCoreAddress);

  // Deploy TournamentArena
  const TournamentArena = await hre.ethers.getContractFactory("TournamentArena");
  const tournamentArena = await TournamentArena.deploy(crediScoreAddress);
  await tournamentArena.waitForDeployment();
  const tournamentArenaAddress = await tournamentArena.getAddress();
  console.log("TournamentArena deployed to:", tournamentArenaAddress);

  // Grant game roles
  console.log("Setting up permissions...");
  await crediScore.grantGameRole(roscaCoreAddress);
  await crediScore.grantGameRole(tournamentArenaAddress);
  console.log("Permissions configured");

  // Save deployment addresses
  const deploymentInfo = {
    network: "creditcoin_testnet",
    chainId: 1029,
    contracts: {
      CrediScore: crediScoreAddress,
      RoscaCore: roscaCoreAddress,
      TournamentArena: tournamentArenaAddress
    },
    timestamp: new Date().toISOString()
  };

  console.log("\n=== Deployment Complete ===");
  console.log(JSON.stringify(deploymentInfo, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
