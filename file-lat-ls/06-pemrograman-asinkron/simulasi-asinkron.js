//http://latentflip.com/loupe/

$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 5000);
});

// ================================================
// PROSES PERTAMA
// ================================================
console.log("Hi! Ini proses realtime pertama.");

// ================================================
// PROSES KE-2 SANGAT LAMBAT, 
// PROSES UPLOAD VIDEO KE YOUTUBE.
// ================================================
setTimeout(function upload_video() {
    console.log("Upload selesai.");
}, 30000);


// ================================================
// PROSES KE-3 LUMAYAN CEPAT, 
// TIDAK REALTIME TAPI PERLU BEBERAPA DETIK MENUNGGU. 
// ================================================
// CONTOH: 
// ~ CEK SALDO DEBIT ATM
// ~ BROWSING GAMBAR 
// ~ LOAD LIST VIDEO YOUTUBE
// ================================================
setTimeout(function cek_saldo_atm() {
    console.log("Proses ke-3 selesai.");
}, 5000);


// ================================================
// PROSES 4 NYALIP PROSES 2 DAN 3
// ================================================
console.log("Proses ke-4 nyalip proses lainnya.");


