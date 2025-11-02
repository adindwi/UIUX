// Ambil modal
var modal = document.getElementById("imageModal");

// Ambil semua gambar galeri
var galleryItems = document.querySelectorAll(".gallery-item img");

// Ambil elemen gambar dan caption di dalam modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop melalui setiap gambar galeri
galleryItems.forEach(function(img) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src; // Set gambar modal sama dengan gambar yang diklik
        // Ambil nama dari atribut data-name pada parent div .gallery-item
        var itemName = this.closest('.gallery-item').getAttribute('data-name');
        captionText.innerHTML = itemName; 
    }
});

// Ambil elemen <span> (x) untuk menutup modal
var span = document.getElementsByClassName("close")[0];

// Ketika user mengklik <span> (x), tutup modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Tambahan: Tutup modal ketika mengklik di luar gambar
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Tambahan: Tutup modal ketika tombol ESC ditekan
document.onkeydown = function(e) {
    e = e || window.event;
    if (e.key === "Escape" || e.key === "Esc") {
        modal.style.display = "none";
    }
};
