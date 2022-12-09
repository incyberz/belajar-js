// ====================================
// CLOSURE = FUNCTION DI DALAM FUNCTION
// ====================================
let x = 2;
function hitung() {
  let y = 3;

  function kalikan() {
    let z = 4;
    return x * y * z;
  }
  return kalikan();
}

console.log(hitung());
