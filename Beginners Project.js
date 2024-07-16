// NAVBAR PART (DROP DOWN MENU)

const body = document.querySelector("body");
const navbar = document.querySelector("#navbar");
const list = document.querySelector(".nav-bar-list");
const hambudger = document.querySelector(".hambudger-btn");
const cancelBtn = document.querySelector(".cancel-btn");

hambudger.onclick = ()=> {
    list.classList.add("active");
    hambudger.classList.add("hide");
    cancelBtn.classList.add("show");
    body.classList.add("disabledScroll");
}

cancelBtn.onclick = ()=> {
    list.classList.remove("active");
    hambudger.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");
}

window.onscroll = ()=> {
    this.scrollY > 500 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// CAROUSEL (SECTION FOUR) ON TESTIMONIALS PAGE (PAGINATION INDECATOR ONCLICK)

// let currentIndex = 0;

// function showSlide(index) {
//     const carouselInner = document.querySelector('.carousel-inner');
//     const totalSlides = document.querySelectorAll('.carousel-item').length;

//     if (index >= totalSlides) {
//         currentIndex = 0;
//     } else if (index < 0) {
//         currentIndex = totalSlides - 1;
//     } else {
//         currentIndex = index;
//     }

//     const offset = -currentIndex * 100;
//     carouselInner.style.transform = `translateX(${offset}%)`;

//     document.querySelectorAll('.indicator').forEach((indicator, i) => {
//         indicator.classList.toggle('active', i === currentIndex);
//     });
// }

// function currentSlide(index) {
//     showSlide(index);
// }

// document.querySelectorAll('.indicator').forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//         currentSlide(index);
//     });
// });

// showSlide(currentIndex);



// PAGINATION INDECATOR ON CLICK (METHOD TWO)

let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const itemsPerView = 3;
    const totalSlides = Math.ceil(totalItems / itemsPerView);

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;

    document.querySelectorAll('.indicator').forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentIndex);
    });
}

function currentSlide(index) {
    showSlide(index);
}

document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide(index);
    });
});

showSlide(currentIndex);


// CONTACT US BUTTON (FORM)
const contactButton = document.getElementById("contactButton");
const contactFormContainer = document.getElementById("contactFormContainer");

contactButton.addEventListener("click", function() {
  if (contactFormContainer.style.display === "none") {
    contactFormContainer.style.display = "block";
  } else {
    contactFormContainer.style.display = "none";
  }
});


// FOOTER PAGE (COPYRIGHT YEAR UPDATE)
document.getElementById('copyright-year').textContent = new Date().getFullYear();


// SECTION TWO PART(TO ADD TRANSITION WHEN PAGE IS RELOADED)
// window.addEventListener('load', function() {
//     this.document.querySelector('.section-two-title').classList.add('visible');
//     document.querySelector('.section-two-img').classList.add('visible');
// });

// SECTION TWO PART(TO ADD TRANSITION WHEN PAGE IS RELOADED)
// window.addEventListener('load', function() {
//     this.document.querySelector('.section-three-title').classList.add('visible');
//     document.querySelector('.section-three-img').classList.add('visible');
// });