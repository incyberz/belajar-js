// =====================================
// VAR :: TERKENA HOISTING
// =====================================
// console.log(x);
// var x = 2;

// =====================================
// VAR :: RE-DECLARE
// =====================================
// var x = 3;
// var x = 4;
// var x = 5;
// console.log(x);

// =====================================
// let :: TIDAK TERKENA HOISTING
// let :: LEXICAL DECLARATION
// =====================================
// console.log(y);
// let y = 2;

// =====================================
// let :: TIDAK BISA RE-DECLARE
// =====================================
// let y = 3;
// let y = 4;
// let y = 5;
// console.log(y);

// =====================================
// const :: ISI VARIABLE TIDAK BISA DIUBAH
// =====================================
// const z = 3;
// const z = 4;
// console.log(z);

// =====================================
// var :: STRICT MODE
// =====================================
// "use strict";
// z = 6;
// console.log(z);
// var z;

// =====================================
// let :: STRICT MODE
// =====================================
// "use strict";
// z = 6;
// console.log(z);
// let z;

// =====================================
// var :: ARRAY BISA BERUBAH JADI
//        VARIABEL BIASA (BAD CASE)
// =====================================
// console.log(tim);
// var tim = [];
// tim[0] = "Ahmad";
// tim[1] = "Budi";
// console.log(tim);
// var tim = "Charlie";
// console.log(tim);

// =====================================
// let :: ARRAY TIDAK BISA BERUBAH,
//        ELEMEN ARRAY BISA DIMANIPULASI
// =====================================
// console.log(tim);
// let tim = [];
// tim[0] = "Ahmad";
// tim[1] = "Budi";
// console.log(tim);
// let tim = "Charlie";
// console.log(tim);

// =====================================
// const :: ARRAY TIDAK BISA BERUBAH,
//        ELEMEN ARRAY BISA DIMANIPULASI
//        UKURAN MEMORI PALING KECIL
// =====================================
// const tim = [];
// tim[0] = "Ahmad";
// tim[1] = "Budi";
// console.log(tim);

// =====================================
// const :: PROPERTI OBJECT BISA DIMANIPULASI
//          UKURAN MEMORI PALING KECIL
// =====================================
// const Player = {};
// Player.nama = "Ahmad";
// Player.usia = 20;
// console.log(Player);

// =====================================
// var :: BENTUK MASIH BISA DIUBAH
//        (BAD CASE)
// =====================================
// var Orang = {};
// Orang = [];
// console.log(Orang);

// =====================================
// let :: BENTUK MASIH BISA DIUBAH
//        (BAD CASE)
// =====================================
// let Player = {};
// Player = [];
// console.log(Player);

// =====================================
// const :: BENTUK TIDAK BISA DIUBAH
//          (THE BEST CHOICE)
// =====================================
// const Player = {};
// Player = [];
// console.log(Player);
