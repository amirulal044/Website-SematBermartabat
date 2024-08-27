// Ambil elemen-elemen yang diperlukan
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const header = document.querySelector("header"); // Pastikan elemen header ada di HTML

// Toggle menu open/close
[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        // Jika transisi sudah ada di CSS, baris ini bisa dihapus
        menu.style.transition = "transform 0.5s ease"; 
    });
});

// Hapus style inline setelah transisi selesai
menu.addEventListener("transitionend", function() {
    this.removeAttribute("style");
});

// Toggle dropdown
menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function() {
        this.closest(".dropdown").classList.toggle("active");
    });
});

// Sticky header functionality
window.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Smooth scroll to section
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scroll-to-tentang').addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetElement = document.getElementById('tentang');
        
        targetElement.scrollIntoView({
            behavior: 'smooth' 
        });
    });
});



function showPantai(divId, buttonId) {
    // Menyembunyikan semua elemen dengan class 'content-pantai'
    const pantaiDivs = document.querySelectorAll('.content-pantai');
    pantaiDivs.forEach(div => div.style.display = 'none');
    
    // Menampilkan elemen yang dipilih
    const divToShow = document.getElementById(divId);
    if (divToShow) {
        divToShow.style.display = 'block';
    }

    // Menghapus kelas 'active' dari semua tombol
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.classList.remove('active'));

    // Menambahkan kelas 'active' pada tombol yang diklik
    const activeButton = document.getElementById(buttonId);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function hidePantai(divId) {
    // Menyembunyikan elemen yang dipilih
    const divToHide = document.getElementById(divId);
    if (divToHide) {
        divToHide.style.display = 'none';
    }

    // Menghapus kelas 'active' dari semua tombol
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.classList.remove('active'));
}


function showMakam(divId,  buttonId) {
    // Menyembunyikan semua elemen dengan class 'content-makam'
    const makamDivs = document.querySelectorAll('.content-makam');
    makamDivs.forEach(div => div.style.display = 'none');
    
    // Menampilkan elemen yang dipilih
    const divToShow = document.getElementById(divId);
    if (divToShow) {
        divToShow.style.display = 'block';
    }

     // Menghapus kelas 'active' dari semua tombol
     const buttons = document.querySelectorAll('.button');
     buttons.forEach(button => button.classList.remove('active'));
 
     // Menambahkan kelas 'active' pada tombol yang diklik
     const activeButton = document.getElementById(buttonId);
     if (activeButton) {
         activeButton.classList.add('active');
     }
}

function hideMakam(divId) {
    // Menyembunyikan elemen yang dipilih
    const divToHide = document.getElementById(divId);
    if (divToHide) {
        divToHide.style.display = 'none';
    }

      // Menghapus kelas 'active' dari semua tombol
      const buttons = document.querySelectorAll('.button');
      buttons.forEach(button => button.classList.remove('active'));
}





// Gallery


const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

// Fungsi yang dijalankan saat halaman dimuat
window.onload = () => {
    // Event listener untuk klik pada item filter
    filterItem.addEventListener("click", (selectedItem) => {
        if (selectedItem.target.classList.contains("item")) {
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach(image => {
                let filterImages = image.getAttribute("data-name");
                if (filterImages === filterName || filterName === "all") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    });

    // Menambahkan event listener untuk setiap gambar
    filterImg.forEach(img => {
        img.addEventListener("click", () => preview(img));
    });
}

// Elemen preview
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const categoryName = previewBox.querySelector(".title p");
const closeIcon = previewBox.querySelector(".icon");

// Fungsi untuk menampilkan preview gambar
function preview(element){
    let selectedPrevimg = element.querySelector("img").src;
    let selectedImgCategory = element.getAttribute("data-name");
    categoryName.textContent = selectedImgCategory;
    previewImg.src = selectedPrevimg;
    previewBox.classList.add("show");
}

// Event listener untuk menutup preview box
closeIcon.addEventListener("click", () => {
    previewBox.classList.remove("show");
});


document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');
    const images = Array.from(gallery.children);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(images);

    images.forEach(image => gallery.appendChild(image));
});
