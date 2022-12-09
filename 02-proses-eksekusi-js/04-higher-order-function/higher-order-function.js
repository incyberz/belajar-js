// =============================================
// INPUT ARRAY
// =============================================
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// =============================================
// FUNGSI FILTER-GANJIL
// =============================================
// function filterGanjil(arr) {
//   const filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }
// console.log(filterGanjil(arr));

// =============================================
// FUNGSI FILTER-GENAP
// =============================================
// function filterGenap(arr) {
//   const filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }
// console.log(filterGenap(arr));

// =============================================
// =============================================
// =============================================
// =============================================
// WITH CALLBACK
// =============================================
// FUNGSI FILTER-GANJIL-GENAP-CALLBACK
// =============================================
// function filterFunction(arr, callback) {
//   const filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]) ? filteredArr.push(arr[i]) : null;
//   }
//   return filteredArr;
// }

// function isGanjil(x) {
//   return x % 2 != 0;
// }

// function isGenap(x) {
//   return x % 2 === 0;
// }

// console.log(filterFunction(arr, isGanjil));
// console.log(filterFunction(arr, isGenap));

// =============================================
// =============================================
// =============================================
// =============================================
// BUILT-IN HIGHER ORDER FUNCTION
// =============================================
// ARRAY-MAP
// =============================================
// const hasilKuadrat = arr.map((n) => {
//   return n * n;
// });
// console.log(hasilKuadrat);

// =============================================
// ARRAY-FILTER
// =============================================
// const limaLebih = arr.filter((n) => {
//   return n >= 5;
// });
// console.log(limaLebih);
// console.log(arr.filter(isGanjil));
// console.log(arr.filter(isGenap));

// =============================================
// =============================================
// =============================================
// =============================================
// THE POWER OF JAVASCRIPT :: FUNCTIONAL PROGRAMMING
// =============================================
// FILTER FUNCTION CHAINING
// =============================================
// function lebihDari5(x) {
//   return x > 5;
// }
// function kurangDari10(x) {
//   return x < 10;
// }
// console.log(arr.filter(lebihDari5).filter(kurangDari10).filter(isGenap));
