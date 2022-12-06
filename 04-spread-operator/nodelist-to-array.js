// ==================================
// Bentuk dari fruit berupa NodeList
// ==================================
const fruit = document.querySelectorAll("li");
console.log(fruit);

// ==================================
// Ubah dengan rest parameter
// ==================================
const arr_fruit = [...fruit].map(f =>f.textContent);
console.log(arr_fruit)


