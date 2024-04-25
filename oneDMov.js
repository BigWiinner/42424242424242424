class oneDMov extends Phaser.Scene {
    constructor() {
        super("oneDMovScene");
        this.startX = 300;
        this.startY = 350;
        this.aKey = null;
        this.spaceKey = null;
        this.dKey = null;
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("player", "character_squareGreen.png");
        this.load.image("projectile", "effect_shot.png");
    }

    create() {
        this.playerSprite = this.add.sprite(this.startX, this.startY, "player");
        this.projSprite = this.add.sprite(this.playerSprite.x, this.playerSprite.y, "projectile");
        this.projSprite.angle += 90;
        this.projSprite.visible = false;
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        if (this.aKey.isDown) {
            this.playerSprite.x -= 10;
            this.playerSprite.flipX = true;
            if (this.playerSprite.x <= 17) this.playerSprite.x = 17;
        }
        if (this.dKey.isDown) {
            this.playerSprite.x += 10;
            this.playerSprite.flipX = false;
            if (this.playerSprite.x >= 783) this.playerSprite.x = 783;
        }
        if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            this.projSprite.x = this.playerSprite.x;
            this.projSprite.y = this.playerSprite.y;
            this.projSprite.visible = true;
            
        }
        if (this.projSprite) {
            this.projSprite.y -= 5;
        }
        
    }
}