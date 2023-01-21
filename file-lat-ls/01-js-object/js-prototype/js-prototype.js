// =====================================
// JS PROTOTYPE FRAMEWORK
// =====================================

// =====================================
// FOR STRING
// =====================================
// let nama = "   Ahmad   ";
// console.log(nama.length);
// console.log(nama.charAt(4));
// console.log(nama.trim());
// nama = nama.trim();
// console.log(nama.length);

// =====================================
// FOR NUMBER
// =====================================
// let usia = 30;
// console.log(usia);
// console.log(usia.toString().length);

// let masa_kontrak = 5;
// // let kode = usia + masa_kontrak;
// // kodeBuku ==> string
// // idBuku ==> Number
// let kode = usia.toString() + masa_kontrak.toString();
// console.log(`kode: ${kode}`);

// =====================================
// FOR BOOLEAN
// =====================================
// let sudahMakan = true;
// console.log(sudahMakan);
// console.log(sudahMakan.toString().length);

// =====================================
// FOR ARRAY
// =====================================
// const tim = ["Ahmad", "Budi", "Charlie"];
// console.log(tim);
// console.log(tim.push("Deni"));
// console.log(tim);

// =====================================
// FOR OBJECT
// =====================================
// const Player = {
//   nama: "Ahmad Firdaus",
//   usia: 30,
//   posisi: [],
//   setPosisi: function (x, y) {
//     this.posisi.push([x, y]);
//   },
// };
// console.log(Player);
// console.log(Player.setPosisi([3, 4]));
// console.log(Player);

// =====================================
// FOR DATE
// =====================================
// let strTanggalLahir = "11 Jun 1999";
// let numTanggalLahir = Date.parse(strTanggalLahir);
// console.log(strTanggalLahir);
// console.log(numTanggalLahir);
// console.log(Date());

// // let tanggalLahir = Date("YYYY-MM-DD");
// let tanggalLahir = new Date("1999-06-11");
// console.log(tanggalLahir);

// =====================================
// FOR MATH
// =====================================
// const phi = 3.1486473735722734567894567845678;

// console.log(phi);
// console.log(Math.round(phi));
// console.log(Math.ceil(phi));
// console.log(Math.floor(phi));
// console.log(parseInt(phi));

// =====================================
// FOR SET
// =====================================
// let tim = new Set();

// tim.add(1);
// tim.add(3);
// tim.add(6);
// tim.add(1); //ignore
// tim.add(4);

// console.log(tim);

// =====================================
// FOR REGEXP
// =====================================
// let kalimat = "Saya sedang belajar regular expression";
// let filter = /ReguLar/i;
// console.log(filter);
// if (filter.test(kalimat)) {
//   console.log("ketemu");
// } else {
//   console.log("tidak ketemu");
// }
