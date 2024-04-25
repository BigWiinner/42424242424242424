// Nathan Wiinikka
// Created: 4/24/2024
// Phaser: 3.70.0
//
// 42424242424242424
//
// A template for moving a sprite and firing a projectile
// 
// 
// Art assets from Kenny Assets "Scribble Platformer Pack" set:
// https://kenney.nl/assets/scribble-platformer

"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    width: 800,
    height: 600,
    scene: [oneDMov],
    fps: { forceSetTimeOut: true, target: 30}
}

const game = new Phaser.Game(config);