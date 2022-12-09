let hasil = "";

const Mahasiswa = {
  nama: "Ahmad Firdaus",
  nim: 7637262,
  prodi: "Teknik Informatika",
  nilai: 0,
  submit_nilai: function (nilai) {
    this.nilai = nilai;
  },
};

for (x in Mahasiswa) {
  hasil += x + " : " + Mahasiswa[x] + "<br>";
}

document.getElementById("hasil").innerHTML = hasil;
