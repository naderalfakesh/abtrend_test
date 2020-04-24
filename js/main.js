document.addEventListener("DOMContentLoaded", slider);

function slider(){
    // attach a click event listner on slides list
    const slides = document.querySelector(".productInfo__list");
    slides.addEventListener('click',replaceTargetSlide);

}

function replaceTargetSlide(event){
    const targetSlide =  document.querySelector("img.targetSlide");
    event.preventDefault();
    const imgsrc = event.target.src;
    targetSlide.src = imgsrc;

}
