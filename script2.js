document.getElementById("formReservasi").addEventListener("submit", function(e) {
  e.preventDefault();

  const paket = document.getElementById("paket").value;
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const telepon = document.getElementById("telepon").value;
  const tanggal = document.getElementById("tanggal").value;
  const jam = document.getElementById("jam").value;
  const tempat = document.getElementById("tempat").value;
  const keterangan = document.getElementById("keterangan").value || "-";

  // Cek kalau ada data kosong
  if (!paket || !nama || !email || !telepon || !tanggal || !jam || !tempat) {
    alert("Harap lengkapi semua data sebelum mengirim!");
    return;
  }

  const nomorWA = "6282335150929"; // Ganti dengan nomor admin
  const text = `*RESERVASI SPEEDBOAT NATUNA*%0A
------------------------------%0A
*Nama:* ${nama}%0A
*Email:* ${email}%0A
*No. Telp:* ${telepon}%0A
*Paket:* ${paket}%0A
*Tanggal:* ${tanggal}%0A
*Jam:* ${jam}%0A
*Tempat:* ${tempat}%0A
*Keterangan:* ${keterangan}%0A
------------------------------%0A
Mohon konfirmasi ketersediaan tempat. Terima kasih 🙏`;

  const url = `https://wa.me/${nomorWA}?text=${text}`;
  window.open(url, "_blank");
});
