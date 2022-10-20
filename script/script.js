const mySwiper = new Swiper(
   '.swiper', {
   direction: 'horizontal',
   initialSlide: 0,
   grabCursor: true,
   navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
   },
});

//=====scroll=====

function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('element-show');
      }
   });
}

let options = {
   threshold: [0.3]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
   observer.observe(elm);
}

//=====burger====
const burgerMenu = document.querySelector('.top__burger');
const checkbox = document.querySelector('.burger__checkbox');
const menuList = document.querySelector('.menu__list');
checkbox.addEventListener('click', function () {
   if (checkbox.checked == true) {
      burgerMenu.classList.add('active');
      menuList.classList.add('active');
      document.body.classList.add('lock');
   }
   else {
      burgerMenu.classList.remove('active');
      menuList.classList.remove('active');
      document.body.classList.remove('lock');
   }
});