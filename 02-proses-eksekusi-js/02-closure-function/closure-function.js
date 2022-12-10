// ====================================
// CLOSURE = FUNCTION DI DALAM FUNCTION
// ====================================
let x = 2;
// console.log(y);

function hitung() {
  let y = 3;

  function kalikan() {
    let z = 4;
    return x * y * z;
  }
  return kalikan();
}

console.log(hitung());
