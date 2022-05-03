let sliderImages = document.querySelectorAll('.slide');
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');
let currentSlide = 0;

//reset images
function imageReset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

//initialize images
function startSlider() {
    imageReset();
    sliderImages[0].style.display = 'flex';
}

//show previous image
function slideLeft() {
    imageReset();
    sliderImages[currentSlide - 1].style.display = 'flex';
    currentSlide--;
}
//show next image 
function slideRight() {
    imageReset();
    sliderImages[currentSlide + 1].style.display = 'flex';
    currentSlide++;
}

//click left to slide
leftArrow.addEventListener('click', function(){
    if(currentSlide === 0){
        currentSlide = sliderImages.length;
    }
    slideLeft();
});

//click right to slide
rightArrow.addEventListener('click', function(){
    if(currentSlide === sliderImages.length -1){
        currentSlide = -1;
    }
    slideRight();
})


startSlider();
