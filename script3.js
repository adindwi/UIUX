document.getElementById("laporForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const telepon = document.getElementById("telepon").value;
  const pesan = document.getElementById("pesan").value;

  const fotoInput = document.getElementById("foto");
  const fotoNama = fotoInput.files.length > 0 ? fotoInput.files[0].name : "Tidak ada foto";

  const nomorWA = "6282335150929"; // Ganti dengan nomor tujuan kamu
  const text = `*LAPORAN BASARNAS*%0A
Nama: ${nama}%0A
Email: ${email}%0A
Telepon: ${telepon}%0A
Pesan: ${pesan}%0A
Foto: ${fotoNama}`;

  const url = `https://wa.me/${nomorWA}?text=${text}`;
  window.open(url, "_blank");
});
