document.getElementById("formReservasi").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const telepon = document.getElementById("telepon").value;
  const tanggal = document.getElementById("tanggal").value;
  const jam = document.getElementById("jam").value;
  const tempat = document.getElementById("tempat").value;
  const keterangan = document.getElementById("keterangan").value;

  if (!nama || !email || !telepon || !tanggal || !jam || !tempat) {
    alert("Harap lengkapi semua data sebelum mengirim!");
    return;
  }

  const nomorWA = "6282335150929"; // ubah ke nomor admin
  const text = `*Reservasi Warung Makan Pak Ipul*%0A
Nama: ${nama}%0A
Email: ${email}%0A
Telepon: ${telepon}%0A
Tanggal: ${tanggal}%0A
Jam: ${jam}%0A
Tempat: ${tempat}%0A
Keterangan: ${keterangan || '-'}`;

  const url = `https://wa.me/${nomorWA}?text=${text}`;
  window.open(url, "_blank");
});
