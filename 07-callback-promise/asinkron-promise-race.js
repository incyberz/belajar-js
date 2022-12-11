const rekaman1 = new Promise((sukses, gagal) => {
  sukses("rekaman 1 selesai");
  // jadikan komentar jika belum selesai
});

const rekaman2 = new Promise((sukses, gagal) => {
  // sukses('rekaman 2 selesai')
});

const rekaman3 = new Promise((sukses, gagal) => {
  sukses("rekaman 3 selesai");
});

Promise.race([rekaman1, rekaman2, rekaman3]).then((sukses) => {
  alert(sukses);
});
