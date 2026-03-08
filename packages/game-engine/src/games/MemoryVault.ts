import Phaser from 'phaser';

export class MemoryVaultGame extends Phaser.Scene {
  private sequence: number[] = [];
  private playerSequence: number[] = [];
  private level: number = 1;
  private isPlaying: boolean = false;
  private buttons: Phaser.GameObjects.Rectangle[] = [];
  private levelText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'MemoryVault' });
  }

  create() {
    this.add.rectangle(400, 300, 800, 600, 0x1a1a1a);
    
    this.levelText = this.add.text(400, 50, 'Level: 1', {
      fontSize: '32px',
      color: '#FF6B00',
      fontFamily: 'Arial'
    }).setOrigin(0.5);

    // Create 4 colored buttons
    const colors = [0xFF6B00, 0x00FF6B, 0x6B00FF, 0xFFFF00];
    const positions = [
      { x: 300, y: 250 },
      { x: 500, y: 250 },
      { x: 300, y: 450 },
      { x: 500, y: 450 }
    ];

    colors.forEach((color, i) => {
      const btn = this.add.rectangle(positions[i].x, positions[i].y, 150, 150, color);
      btn.setInteractive();
      btn.setData('id', i);
      
      btn.on('pointerdown', () => {
        if (!this.isPlaying) {
          this.handleButtonClick(i);
        }
      });
      
      this.buttons.push(btn);
    });

    this.startLevel();
  }

  private startLevel() {
    this.playerSequence = [];
    this.sequence.push(Phaser.Math.Between(0, 3));
    this.playSequence();
  }

  private async playSequence() {
    this.isPlaying = true;
    
    for (const btnId of this.sequence) {
      await this.flashButton(btnId);
      await this.wait(500);
    }
    
    this.isPlaying = false;
  }

  private flashButton(id: number): Promise<void> {
    return new Promise((resolve) => {
      const btn = this.buttons[id];
      const originalAlpha = btn.alpha;
      
      this.tweens.add({
        targets: btn,
        alpha: 0.3,
        duration: 300,
        yoyo: true,
        onComplete: () => {
          btn.alpha = originalAlpha;
          resolve();
        }
      });
    });
  }

  private wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private handleButtonClick(id: number) {
    this.playerSequence.push(id);
    this.flashButton(id);
    
    const currentIndex = this.playerSequence.length - 1;
    
    if (this.playerSequence[currentIndex] !== this.sequence[currentIndex]) {
      this.gameOver();
      return;
    }
    
    if (this.playerSequence.length === this.sequence.length) {
      this.level++;
      this.levelText.setText(`Level: ${this.level}`);
      
      if (this.level > 10) {
        this.gameWin();
      } else {
        this.time.delayedCall(1000, () => this.startLevel());
      }
    }
  }

  private gameOver() {
    this.scene.pause();
    
    this.add.rectangle(400, 300, 600, 300, 0x000000, 0.9);
    this.add.text(400, 300, `Game Over! Level: ${this.level}`, {
      fontSize: '32px',
      color: '#FF0000',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    this.events.emit('gameComplete', { 
      score: this.level * 100, 
      proof: this.generateProof() 
    });
  }

  private gameWin() {
    this.scene.pause();
    
    this.add.rectangle(400, 300, 600, 300, 0x000000, 0.9);
    this.add.text(400, 300, `Perfect! Level: ${this.level}`, {
      fontSize: '32px',
      color: '#00FF00',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    this.events.emit('gameComplete', { 
      score: this.level * 100, 
      proof: this.generateProof() 
    });
  }

  private generateProof(): string {
    const data = `${this.level}-${Date.now()}-${this.sequence.join(',')}`;
    return btoa(data);
  }
}

export function initMemoryVault(containerId: string, onComplete: (result: any) => void) {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: containerId,
    scene: MemoryVaultGame,
    backgroundColor: '#1A1A1A'
  };

  const game = new Phaser.Game(config);
  
  game.scene.scenes[0].events.on('gameComplete', (result: any) => {
    onComplete(result);
  });

  return game;
}
