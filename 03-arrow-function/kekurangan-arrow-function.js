// ==============================================
// KEKURANGAN ARROW FUNCTION
// ==============================================
// ==============================================
// ==============================================

// ==============================================
// TIDAK BISA UNTUK OBJECT METHOD
// ==============================================
// var obj = {
//   i: 10,
//   b: () => console.log(this.i, this),
//   c: function () {
//     console.log(this.i, this);
//   },
// };

// obj.b(); // prints undefined, Window {...} (or the global object)
// obj.c(); // prints 10, Object {...}

// ==============================================
// TIDAK BISA UNTUK OBJECT CONSTRUCTOR
// ==============================================
// var Foo = () => {};
// var foo = new Foo(); // TypeError: Foo is not a constructor

// ==============================================
// TANPA ARGUMEN
// ==============================================
// var f = () => arguments[0] + n;
// f(2); // Uncaught ReferenceError: arguments is not defined
