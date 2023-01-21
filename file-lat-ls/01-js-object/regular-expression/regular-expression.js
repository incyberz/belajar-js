$(function () {
  //   alert("JQUERY sudah siap");
  $("#no_wa").focusout(function () {
    // alert("Anda telah mengetik!");
    // filter menggunkaan RegExp
    let filter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~a-z]/i;
    let no_wa = $(this).val().trim();
    if (no_wa.length > 0) {
      // alert(no_wa);
      if (filter.test(no_wa)) {
        // terdapat filter
        // alert("Hanya angka saja yang diizinkan!");
        $("#pesan_error").text(
          "Untuk Nomor whatsapp Hanya angka saja yang diizinkan."
        );
        $(this).val("");
        $("#no_wa").focus();
      } else {
        // alert("Nomor whatsApp valid.");
        $("#pesan_error").text("");
      }
    }
  });

  $("#nama").focusout(function () {
    // alert("Anda telah mengetik!");
    // filter menggunkaan RegExp
    let filter = /[!@#$%^&*()_+\-=\[\]{};:"\\|<>\/?~0-9]/gim;
    let nama = $(this).val().trim();
    if (nama.length > 0) {
      // alert(nama);
      if (filter.test(nama)) {
        // terdapat filter
        alert(
          "Untuk nama hanya huruf saja, karakter titik, koma, dan petik tunggal"
        );
        $(this).val("");
        $("#no_wa").focus();
      } else {
        alert("Nama orang valid.");
      }
    }
  });
});
