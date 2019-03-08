var modal = document.querySelector(".modal");
var button = document.querySelectorAll(".button");
var backdrop = document.querySelector(".backdrop");
var noChoice = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");



toggleButton.addEventListener("click", () => {
    mobileNav.classList.add("mobile-nav-start");
    backdrop.classList.add("open");

})


backdrop.addEventListener("click", () => {
    backdrop.classList.remove("open");
    if(modal){
    modal.classList.remove("open");
    }
    mobileNav.classList.remove("mobile-nav-start");
})

function showPop(){
    modal.classList.add("open");
    backdrop.classList.add("open");
}

for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click', showPop);
}

if(noChoice){
    noChoice.addEventListener("click", function(){
        backdrop.classList.remove("open");
        modal.classList.remove("open");
       
        })
    }

console.dir(backdrop);