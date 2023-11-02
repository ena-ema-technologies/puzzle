const hamburger = document.querySelector(".hamburger");
const phoneLinks = document.querySelector(".phone-links");
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.navigation-dot');
const dotContainer = document.querySelector('.dot-container');

hamburger.addEventListener("click" , ()=>{
    hamburger.classList.toggle("active");
    phoneLinks.classList.toggle("phone-links-active");
})


let currentIndex = 0;

let createDots = ()=> {
  testimonials.forEach((testimonial, index) => {
    const dot = document.createElement('span');
    dot.className = 'navigation-dot';
    dot.addEventListener('click', () => {
      currentIndex = index;
      showTestimonial(currentIndex);
    });
    dotContainer.appendChild(dot);
  });
}

let showTestimonial = (index)=> {
  testimonials.forEach((testimonial) => (testimonial.classList.remove('active-testimonial')));
  const dots = dotContainer.querySelectorAll('.navigation-dot');
  dots.forEach((dot) => dot.classList.remove('active-dot'));

  testimonials[index].classList.add('active-testimonial');
  dots[index].classList.add('active-dot');
}

let nextTestimonial = ()=> {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

createDots();
showTestimonial(currentIndex);
setInterval(nextTestimonial, 5000);





