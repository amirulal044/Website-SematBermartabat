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




function showEdukasi(divId,  buttonId) {
    // Menyembunyikan semua elemen dengan class 'content-edukasi'
    const edukasiDivs = document.querySelectorAll('.content-edukasi');
    edukasiDivs.forEach(div => div.style.display = 'none');
    
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

function hideEdukasi(divId) {
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





/*AKTIVITAS*/
document.addEventListener('DOMContentLoaded', () => {
    const activitiessemat = {
        berenang: {
            image: 'pantai-semat/akt1.jpeg',
            title: 'Berenang',
            description: 'Nikmati Kegembiraan Berenang: Pantai Semat menawarkan air laut yang jernih dan menyegarkan, sempurna untuk berenang dan bermain air bersama keluarga dan teman-teman. Rasakan ketenangan dan kebahagiaan saat Anda berenang di ombak yang tenang dan bersih.'
        },
        ayunan: {
            image: 'pantai-semat/akt2.jpeg',
            title: 'Ayunan',
            description: 'Ayunan di Tepi Pantai: Pantai Semat menawarkan pengalaman unik bermain ayunan dengan pemandangan laut yang memukau. Nikmati hembusan angin laut yang menyegarkan sambil berayun-ayun di bawah pohon kelapa yang rindang. Ini adalah cara sempurna untuk bersantai dan menikmati alam.'
        },
        santai: {
            image: 'pantai-semat/akt3.jpeg',
            title: 'Bersantai',
            description: 'Bersantai di Tepi Pantai: Pantai Semat menawarkan pengalaman yang tenang dan menyegarkan dengan berjalan kaki di sepanjang garis pantai. Nikmati pasir putih yang lembut di bawah kaki Anda dan deburan ombak yang menenangkan. Jalan santai di pantai adalah cara yang ideal untuk merelaksasikan pikiran dan tubuh Anda.'
        },
        sepeda: {
            image: 'pantai-semat/akt4.jpeg',
            title: 'Sepeda',
            description: 'Jalan Santai di Tepi Pantai: Pantai Semat menawarkan pengalaman yang tenang dan menyegarkan dengan berjalan kaki di sepanjang garis pantai. Nikmati pasir putih yang lembut di bawah kaki Anda dan deburan ombak yang menenangkan. Jalan santai di pantai adalah cara yang ideal untuk merelaksasikan pikiran dan tubuh Anda.'
        },
        mancing: {
            image: 'pantai-semat/akt5.jpeg',
            title: 'Mancing',
            description: ' Spot Memancing Terbaik: Pantai Semat menawarkan spot-spot memancing yang strategis dan kaya ikan. Dari bibir pantai yang landai hingga area perairan yang lebih dalam, Anda akan menemukan berbagai jenis ikan yang siap menyambut umpan Anda. Nikmati kesempatan untuk menangkap ikan-ikan lokal yang lezat dan berharga sebagai hasil dari usaha Anda.'
        },
        spotfoto: {
            image: 'pantai-semat/akt6.jpeg',
            title: 'Spot Foto',
            description: 'Pemandangan Laut yang Menakjubkan: Pantai Semat menawarkan pemandangan laut yang spektakuler, ideal untuk foto-foto yang memukau. Dari cakrawala yang membentang luas hingga warna-warni matahari terbenam, setiap sudut pantai ini memberikan latar belakang yang sempurna untuk foto-foto indah. Ambil gambar saat matahari terbenam atau matahari terbit untuk hasil yang menakjubkan dan penuh warna.'
        }
    };

    const icons = document.querySelectorAll('.icon');
    const activityImage = document.getElementById('activity-image-pantaisemat');
    const activityTitle = document.getElementById('activity-title-pantaisemat');
    const activityDescription = document.getElementById('activity-description-pantaisemat');
    let activeIcon = null;

    function updateActivity(activity) {
        activityImage.src = activitiessemat[activity].image;
        activityTitle.textContent = activitiessemat[activity].title;
        activityDescription.textContent = activitiessemat[activity].description;

        icons.forEach(i => {
            i.classList.remove('active-pantaisemat');
        });
        activeIcon = document.querySelector(`[data-activity-pantaisemat="${activity}"]`);
        activeIcon.classList.add('active-pantaisemat');
    }

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const activity = icon.getAttribute('data-activity-pantaisemat');  
            updateActivity(activity);
        });
    });

    // Set default activity
    const defaultActivity = 'berenang';
    updateActivity(defaultActivity);
});



/*AKTIVITAS*/
document.addEventListener('DOMContentLoaded', () => {
    const activitiesmbahsirah = {
        berenang: {
            image: 'pantai-mbahsirah/akt1.jpeg',
            title: 'Berenang',
            description: 'Nikmati Kegembiraan Berenang: Pantai Mbah Sirah menawarkan air laut yang jernih dan menyegarkan, sempurna untuk berenang dan bermain air bersama keluarga dan teman-teman. Rasakan ketenangan dan kebahagiaan saat Anda berenang di ombak yang tenang dan bersih.'
        },
        santai: {
            image: 'pantai-mbahsirah/akt2.jpeg',
            title: 'Bersantai',
            description: 'Bersantai di Tepi Pantai: Pantai Mbah Sirah menawarkan pengalaman yang tenang dan menyegarkan dengan berjalan kaki di sepanjang garis pantai. Nikmati pasir putih yang lembut di bawah kaki Anda dan deburan ombak yang menenangkan. Jalan santai di pantai adalah cara yang ideal untuk merelaksasikan pikiran dan tubuh Anda.'
        },
        mancing: {
            image: 'pantai-mbahsirah/akt3.jpeg',
            title: 'Mancing',
            description: ' Spot Memancing Terbaik: Pantai Mbah Sirah menawarkan spot-spot memancing yang strategis dan kaya ikan. Dari bibir pantai yang landai hingga area perairan yang lebih dalam, Anda akan menemukan berbagai jenis ikan yang siap menyambut umpan Anda. Nikmati kesempatan untuk menangkap ikan-ikan lokal yang lezat dan berharga sebagai hasil dari usaha Anda.'
        },
        spotfoto: {
            image: 'pantai-mbahsirah/akt4.jpeg',
            title: 'Spot Foto',
            description: 'Pemandangan Laut yang Menakjubkan: Pantai Mbah Sirah menawarkan pemandangan laut yang spektakuler, ideal untuk foto-foto yang memukau. Dari cakrawala yang membentang luas hingga warna-warni matahari terbenam, setiap sudut pantai ini memberikan latar belakang yang sempurna untuk foto-foto indah. Ambil gambar saat matahari terbenam atau matahari terbit untuk hasil yang menakjubkan dan penuh warna.'
        }
    };

    const icons = document.querySelectorAll('.icon');
    const activityImage = document.getElementById('activity-image-pantaimbahsirah');
    const activityTitle = document.getElementById('activity-title-pantaimbahsirah');
    const activityDescription = document.getElementById('activity-description-pantaimbahsirah');
    let activeIcon = null;

    function updateActivity(activity) {
        activityImage.src = activitiesmbahsirah[activity].image;
        activityTitle.textContent = activitiesmbahsirah[activity].title;
        activityDescription.textContent = activitiesmbahsirah[activity].description;

       
        icons.forEach(i => {
            i.classList.remove('active-pantaimbahsirah');
        });
        activeIcon = document.querySelector(`[data-activity-pantaimbahsirah="${activity}"]`);
        activeIcon.classList.add('active-pantaimbahsirah');
    }

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const activity = icon.getAttribute('data-activity-pantaimbahsirah');  
            updateActivity(activity);
        });
    });

    // Set default activity
    const defaultActivity = 'berenang';
    updateActivity(defaultActivity);
});



/*AKTIVITAS*/
document.addEventListener('DOMContentLoaded', () => {
    const activitieskalibuntung = {
        berenang: {
            image: 'wisata-alam/pantai-1.jpg',
            title: 'Berenang',
            description: 'Nikmati Kegembiraan Berenang: Pantai Kalibuntung menawarkan air laut yang jernih dan menyegarkan, sempurna untuk berenang dan bermain air bersama keluarga dan teman-teman. Rasakan ketenangan dan kebahagiaan saat Anda berenang di ombak yang tenang dan bersih.'
        },
        ayunan: {
            image: 'wisata-alam/pantai-1.jpg',
            title: 'Ayunan',
            description: 'Ayunan di Tepi Pantai: Pantai Kalibuntung menawarkan pengalaman unik bermain ayunan dengan pemandangan laut yang memukau. Nikmati hembusan angin laut yang menyegarkan sambil berayun-ayun di bawah pohon kelapa yang rindang. Ini adalah cara sempurna untuk bersantai dan menikmati alam.'
        },
        jalan: {
            image: 'wisata-alam/pantai-1.jpg',
            title: 'Jalan Santai',
            description: 'Jalan Santai di Tepi Pantai: Pantai Kalibuntung menawarkan pengalaman yang tenang dan menyegarkan dengan berjalan kaki di sepanjang garis pantai. Nikmati pasir putih yang lembut di bawah kaki Anda dan deburan ombak yang menenangkan. Jalan santai di pantai adalah cara yang ideal untuk merelaksasikan pikiran dan tubuh Anda.'
        },
        sepeda: {
            image: 'wisata-alam/pantai-1.jpg',
            title: 'Sepeda',
            description: 'Jalan Santai di Tepi Pantai: Pantai Kalibuntung menawarkan pengalaman yang tenang dan menyegarkan dengan berjalan kaki di sepanjang garis pantai. Nikmati pasir putih yang lembut di bawah kaki Anda dan deburan ombak yang menenangkan. Jalan santai di pantai adalah cara yang ideal untuk merelaksasikan pikiran dan tubuh Anda.'
        },
        mancing: {
            image: 'wisata-alam/pantai-1.jpg',
            title: 'Mancing',
            description: ' Spot Memancing Terbaik: Pantai Kalibuntung menawarkan spot-spot memancing yang strategis dan kaya ikan. Dari bibir pantai yang landai hingga area perairan yang lebih dalam, Anda akan menemukan berbagai jenis ikan yang siap menyambut umpan Anda. Nikmati kesempatan untuk menangkap ikan-ikan lokal yang lezat dan berharga sebagai hasil dari usaha Anda.'
        },
        spotfoto: {
            image: 'wisata-alam/pantai-1.jpg',
            title: 'Spot Foto',
            description: 'Pemandangan Laut yang Menakjubkan: Pantai Kalibuntung menawarkan pemandangan laut yang spektakuler, ideal untuk foto-foto yang memukau. Dari cakrawala yang membentang luas hingga warna-warni matahari terbenam, setiap sudut pantai ini memberikan latar belakang yang sempurna untuk foto-foto indah. Ambil gambar saat matahari terbenam atau matahari terbit untuk hasil yang menakjubkan dan penuh warna.'
        }
    };

    const icons = document.querySelectorAll('.icon');
    const activityImage = document.getElementById('activity-image-pantaikalibuntung');
    const activityTitle = document.getElementById('activity-title-pantaikalibuntung');
    const activityDescription = document.getElementById('activity-description-pantaikalibuntung');
    let activeIcon = null;

    function updateActivity(activity) {
        activityImage.src = activitieskalibuntung[activity].image;
        activityTitle.textContent = activitieskalibuntung[activity].title;
        activityDescription.textContent = activitieskalibuntung[activity].description;

       
        icons.forEach(i => {
            i.classList.remove('active-pantaikalibuntung');
        });
        activeIcon = document.querySelector(`[data-activity-pantaikalibuntung="${activity}"]`);
        activeIcon.classList.add('active-pantaikalibuntung');
    }

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const activity = icon.getAttribute('data-activity-pantaikalibuntung');  
            updateActivity(activity);
        });
    });

    // Set default activity
    const defaultActivity = 'berenang';
    updateActivity(defaultActivity);
});

(function() {
    emailjs.init("uyjrin0mB6HtZX8VG"); // Ganti dengan User ID Anda
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Kirim email
    emailjs.sendForm("service_lehx03g", "template_lm15kst", this)
    .then(function(response) {
        alert("Pesan berhasil dikirim!"); // Tampilkan pesan sukses
        document.getElementById("contactForm").reset(); // Reset form setelah pengiriman
    }, function(error) {
        alert("Ada masalah: " + JSON.stringify(error)); // Tampilkan pesan error
    });
});


