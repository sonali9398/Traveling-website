const nextbtn = document.querySelector('.nextbtn');
const prevbtn = document.querySelector('.prevbtn');
const slides = document.querySelectorAll('.slide');
const numberOFSlide = slides.length;
let slideNum = 0;

//next btn
nextbtn.onclick = () => {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slideNum++;

    if (slideNum > (numberOFSlide - 1)){
        slideNum = 0;
    }

    slides[slideNum].classList.add('active');
}


//prev btn
prevbtn.onclick = () => {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slideNum--;

    if (slideNum < 0){
        slideNum = numberOFSlide - 1 ;
    }

    slides[slideNum].classList.add('active');
}
