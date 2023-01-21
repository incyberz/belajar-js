// =====================================
// CARA MANUAL
// =====================================
// const Player = {};
// console.log(Player)


// =====================================
// Dengan Object Literal Syntax | { “x” : “y” }
// =====================================
// const Player = {
//     nama: "Ahmad Firdaus",
//     usia: 30,
//     position: [],
//     onTap: function(position){
//         position.push(position)
//     }
// }

// console.log(Player)






// =====================================
// Dengan Function Constructor | function(x,y) { ... }
// =====================================
// function Player(name, sign){
//     this.name = name,
//     this.sign = sign,
//     this.position = [],
//     function onTap(position){
//         this.position.push(position)
//     }
// }

// const player1 = new Player("Ahmad Firdaus", "x")
// console.log(player1)






// =====================================
// Dengan Object.create()
// =====================================
// const Player = {
//     nama: "Ahmad Firdaus",
//     usia: 30,
//     position: [],
//     onTap: function(position){
//         position.push(position)
//     }
// }

// const player1 = Object.create(Player);
// player1.nama = "Budi Rahardjo",
// player1.usia = 25,
// player1.position = [2,5]

// console.log(player1)


















// =====================================
// Dengan new Object() | const x = new Object()
// =====================================
// const Player = new Object();
// Player.nama = "Ahmad Firdaus"
// Player.usia = 30
// Player.onTap = function(position){
//     this.position.push(position)
// }
// console.log(Player)

























// =====================================
// Dengan ES6 class syntax | Class Person = { ... }
// =====================================

class Player{
    constructor(name, sign){
        this.name=name,
        this.sign=sign,
        this.position=[]
    }

    onTap(position){
        this.position.push(position)
    }
}

const player1 = new Player("Ahmad", "x")
player1.onTap([4,7])
console.log(player1)

