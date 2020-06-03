namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite.destroy()
})
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    respornFood()
})
function respornFood () {
    foodList = [img`
. . 2 2 b b b b b . . . . . . . 
. 2 b 4 4 4 4 4 4 b . . . . . . 
2 2 4 4 4 4 d d 4 4 b . . . . . 
2 b 4 4 4 4 4 4 d 4 b . . . . . 
2 b 4 4 4 4 4 4 4 d 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 e . . . . 
2 2 b 4 4 4 4 4 4 4 b e . . . . 
. 2 b b b 4 4 4 b b b e . . . . 
. . e b b b b b b b e e . . . . 
. . . e e b 4 4 b e e e b . . . 
. . . . . e e e e e e b d b b . 
. . . . . . . . . . . b 1 1 1 b 
. . . . . . . . . . . c 1 d d b 
. . . . . . . . . . . c 1 b c . 
. . . . . . . . . . . . c c . . 
`, img`
. . . . . . 2 2 2 2 . . . . . . 
. . . . 2 2 3 3 3 3 2 e . . . . 
. . . 2 3 d 1 1 d d 3 2 e . . . 
. . 2 3 1 d 3 3 3 d d 3 e . . . 
. 2 3 1 3 3 3 3 3 d 1 3 b e . . 
. 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
e 3 d 3 3 1 d d 3 d 1 b b e e . 
. e 3 1 1 d d 1 1 1 b b e e e . 
. . e 3 3 3 3 3 3 b e e e e . . 
. . . e e e e e e e e e e . . . 
`, img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 3 3 3 a a . . 
. . . b d d d 3 3 3 3 3 3 a a . 
. . b d d 3 3 3 3 3 3 3 3 3 a . 
. b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
. b 3 3 3 3 3 a a 3 3 3 3 3 a b 
b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
a a 3 3 3 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`]
    mySprite = sprites.create(foodList[Math.randomRange(0, foodList.length - 1)], SpriteKind.Food)
    mySprite.setPosition(Math.randomRange(8, 128), Math.randomRange(8, 128))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    mySprite.destroy()
    myPlayer.say("Yummy", 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myPlayer.say("Meow", 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    pause(500)
})
let foodList: Image[] = []
let mySprite: Sprite = null
let myPlayer: Sprite = null
scene.centerCameraAt(0, 0)
tiles.setTilemap(tiles.createTilemap(
            hex`0800080001030303030303040802020202020209080202020202020908020202020202090802020202020209080202020202020908020202020202090607070707070705`,
            img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.builtin.forestTiles0,sprites.builtin.forestTiles2,sprites.builtin.forestTiles8,sprites.builtin.forestTiles4],
            TileScale.Sixteen
        ))
let myEnemy = sprites.create(img`
. . 4 4 4 . . . . 4 4 4 . . . . 
. 4 5 5 5 e . . e 5 5 5 4 . . . 
4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
. e e 5 5 5 5 5 5 5 5 e e . . . 
. . e 5 f 5 5 5 5 f 5 e . . . . 
. . f 5 5 5 4 4 5 5 5 f . . f f 
. . f 4 5 5 f f 5 5 2 f . f 5 f 
. . . f 2 2 2 2 2 2 4 4 f 5 5 f 
. . . f 4 5 5 5 5 5 5 4 4 5 f . 
. . . f 5 5 5 5 5 4 5 5 f f . . 
. . . f 5 f f f 5 f f 5 f . . . 
. . . f f . . f f . . f f . . . 
`, SpriteKind.Enemy)
myPlayer = sprites.create(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`, SpriteKind.Player)
mySprite = sprites.create(img`
. . 2 2 b b b b b . . . . . . . 
. 2 b 4 4 4 4 4 4 b . . . . . . 
2 2 4 4 4 4 d d 4 4 b . . . . . 
2 b 4 4 4 4 4 4 d 4 b . . . . . 
2 b 4 4 4 4 4 4 4 d 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 e . . . . 
2 2 b 4 4 4 4 4 4 4 b e . . . . 
. 2 b b b 4 4 4 b b b e . . . . 
. . e b b b b b b b e e . . . . 
. . . e e b 4 4 b e e e b . . . 
. . . . . e e e e e e b d b b . 
. . . . . . . . . . . b 1 1 1 b 
. . . . . . . . . . . c 1 d d b 
. . . . . . . . . . . c 1 b c . 
. . . . . . . . . . . . c c . . 
`, SpriteKind.Food)
myEnemy.setPosition(8, 8)
mySprite.setPosition(Math.randomRange(8, 128), Math.randomRange(8, 128))
info.setLife(3)
forever(function () {
    myEnemy.setImage(img`
. . 4 4 4 . . . . 4 4 4 . . . . 
. 4 5 5 5 e . . e 5 5 5 4 . . . 
4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
. e e 5 5 5 5 5 5 5 5 e e . . . 
. . e f f 5 5 5 5 f f e . . . . 
. . f 5 5 5 4 4 5 5 5 f . . f f 
. . f 4 5 5 f f 5 5 2 f . f 5 f 
. . . f 2 2 2 2 2 2 4 4 f 5 5 f 
. . . f 4 5 5 5 5 5 5 4 4 5 f . 
. . . f 5 5 5 5 5 4 5 5 f f . . 
. . . f 5 f f f 5 f f 5 f . . . 
. . . f f . . f f . . f f . . . 
`)
    pause(500)
    myEnemy.setImage(img`
. . . . . . . . . . . . . . . . 
. . 4 4 4 . . . . 4 4 4 . . . . 
. 4 5 5 5 e . . e 5 5 5 4 . . . 
4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
. e e 5 5 5 5 5 5 5 5 e e . . . 
. . e f f 5 5 5 5 f f e . . . . 
. . f 5 5 5 4 4 5 5 5 f . f f . 
. . . 4 5 5 f f 5 5 2 f f 5 f . 
. . . f 2 2 2 2 2 2 4 f 5 5 f . 
. . . f 5 5 5 5 5 5 5 4 5 f . . 
. . . . f 5 4 5 f 5 f f f . . . 
. . . . . f f f f f f f . . . . 
`)
    pause(500)
})
forever(function () {
    myPlayer.setImage(img`
. . . . . . . . . . . . . . 
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e b f b . 
f d d f d d f d d f f d f . 
f b d d b b d d 2 b f d f . 
. f 2 2 2 2 2 2 d b d b f . 
. f d d d d d d d f f f . . 
. f d b d f f f d f . . . . 
. . f f f f . . f f . . . . 
`)
    pause(500)
    myPlayer.setImage(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`)
    pause(500)
})
forever(function () {
    scene.cameraFollowSprite(myPlayer)
    controller.moveSprite(myPlayer)
})
forever(function () {
    myEnemy.follow(mySprite, 15)
})
