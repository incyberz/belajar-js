// ==================================
// Bentuk dari fruit berupa NodeList
// ==================================
const fruit = document.querySelectorAll("li");
console.log(fruit);

// ==================================
// Ubah dengan rest parameter
// ==================================
const arrFruit = [...fruit].map((f) => f.textContent);
console.log(arrFruit);
