import Phaser from 'phaser';

export class CreditDashGame extends Phaser.Scene {
  private score: number = 0;
  private timeLeft: number = 60;
  private targets: Phaser.GameObjects.Sprite[] = [];
  private scoreText!: Phaser.GameObjects.Text;
  private timerText!: Phaser.GameObjects.Text;
  private clickPattern: number[] = [];

  constructor() {
    super({ key: 'CreditDash' });
  }

  preload() {
    // Create placeholder graphics
    this.createPlaceholderAssets();
  }

  create() {
    // Background
    this.add.rectangle(400, 300, 800, 600, 0x1a1a1a);
    
    // UI
    this.scoreText = this.add.text(20, 20, 'Score: 0', {
      fontSize: '24px',
      color: '#FF6B00',
      fontFamily: 'Arial'
    });
    
    this.timerText = this.add.text(700, 20, 'Time: 60', {
      fontSize: '24px',
      color: '#FFFFFF',
      fontFamily: 'Arial'
    });

    // Start spawning targets
    this.time.addEvent({
      delay: 1000,
      callback: this.spawnTarget,
      callbackScope: this,
      loop: true
    });

    // Countdown timer
    this.time.addEvent({
      delay: 1000,
      callback: this.updateTimer,
      callbackScope: this,
      loop: true
    });
  }

  private createPlaceholderAssets() {
    const graphics = this.add.graphics();
    graphics.fillStyle(0xFF6B00);
    graphics.fillCircle(25, 25, 25);
    graphics.generateTexture('target', 50, 50);
    graphics.destroy();
  }

  private spawnTarget() {
    if (this.timeLeft <= 0) return;

    const x = Phaser.Math.Between(50, 750);
    const y = Phaser.Math.Between(100, 550);
    
    const target = this.add.sprite(x, y, 'target');
    target.setInteractive();
    target.setScale(0);
    
    // Animate appearance
    this.tweens.add({
      targets: target,
      scale: 1,
      duration: 200,
      ease: 'Back.easeOut'
    });

    // Click handler
    target.on('pointerdown', () => {
      this.hitTarget(target, x, y);
    });

    // Auto-remove after 2 seconds
    this.time.delayedCall(2000, () => {
      if (target.active) {
        target.destroy();
      }
    });

    this.targets.push(target);
  }

  private hitTarget(target: Phaser.GameObjects.Sprite, x: number, y: number) {
    const reactionTime = Date.now();
    this.clickPattern.push(reactionTime);
    
    this.score += 10;
    this.scoreText.setText(`Score: ${this.score}`);
    
    // Particle effect
    const particles = this.add.particles(x, y, 'target', {
      speed: { min: 50, max: 150 },
      scale: { start: 0.5, end: 0 },
      lifespan: 500,
      quantity: 10
    });
    
    this.time.delayedCall(500, () => particles.destroy());
    
    target.destroy();
  }

  private updateTimer() {
    this.timeLeft--;
    this.timerText.setText(`Time: ${this.timeLeft}`);
    
    if (this.timeLeft <= 0) {
      this.endGame();
    }
  }

  private endGame() {
    this.scene.pause();
    
    // Anti-cheat: Check click pattern variance
    const isLegit = this.validateClickPattern();
    
    const finalScore = isLegit ? this.score : 0;
    
    this.add.rectangle(400, 300, 600, 300, 0x000000, 0.9);
    this.add.text(400, 250, `Final Score: ${finalScore}`, {
      fontSize: '32px',
      color: '#FF6B00',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    if (!isLegit) {
      this.add.text(400, 300, 'Suspicious pattern detected', {
        fontSize: '16px',
        color: '#FF0000',
        fontFamily: 'Arial'
      }).setOrigin(0.5);
    }

    // Emit score to parent
    this.events.emit('gameComplete', { score: finalScore, proof: this.generateProof() });
  }

  private validateClickPattern(): boolean {
    if (this.clickPattern.length < 5) return false;
    
    // Check for bot-like perfect timing
    const intervals: number[] = [];
    for (let i = 1; i < this.clickPattern.length; i++) {
      intervals.push(this.clickPattern[i] - this.clickPattern[i - 1]);
    }
    
    const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    const variance = intervals.reduce((sum, val) => sum + Math.pow(val - avgInterval, 2), 0) / intervals.length;
    
    // Human variance should be > 1000ms²
    return variance > 1000;
  }

  private generateProof(): string {
    // Simple proof: hash of score + timestamp + pattern
    const data = `${this.score}-${Date.now()}-${this.clickPattern.length}`;
    return btoa(data);
  }
}

export function initCreditDash(containerId: string, onComplete: (result: any) => void) {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: containerId,
    scene: CreditDashGame,
    physics: {
      default: 'arcade',
      arcade: { gravity: { x: 0, y: 0 } }
    },
    backgroundColor: '#1A1A1A'
  };

  const game = new Phaser.Game(config);
  
  game.scene.scenes[0].events.on('gameComplete', (result: any) => {
    onComplete(result);
  });

  return game;
}
