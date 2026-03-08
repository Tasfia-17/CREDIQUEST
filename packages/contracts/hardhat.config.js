require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    creditcoin_testnet: {
      url: process.env.CREDITCOIN_RPC || "https://rpc.cc3-testnet.creditcoin.network",
      chainId: 1029,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 20000000000
    }
  },
  etherscan: {
    apiKey: {
      creditcoin_testnet: process.env.ETHERSCAN_API_KEY || ""
    }
  },
  paths: {
    sources: "./src",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
