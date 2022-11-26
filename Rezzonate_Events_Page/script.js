
const slides = document.querySelectorAll(".slide");

slides.forEach(function(oneSlide){
    oneSlide.addEventListener("click", function(){
            deleteActiveClass();
            oneSlide.classList.add("active");
        // active vymaze vsem 
    });


});
function deleteActiveClass() {
     slides.forEach(function (mySlide) {
        mySlide.classList.remove("active");
     }) 
}