const hamburger = document.querySelector(".hamburger");
const phoneLinks = document.querySelector(".phone-links");

hamburger.addEventListener("click" , ()=>{
    hamburger.classList.toggle("active");
    phoneLinks.classList.toggle("phone-links-active");
})