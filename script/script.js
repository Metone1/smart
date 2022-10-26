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

//=====rating=====

class Rating {
   constructor(dom) {
      dom.innerHTML = '<svg width="110" height="20"></svg>';
      this.svg = dom.querySelector('svg');
      for (let i = 0; i < 5; i++)
         this.svg.innerHTML += `<polygon data-value="${i + 1}"
            transform="translate(${i * 22},0)" 
            points="10,1 4,19.8 19,7.8 1,7.8 16,19.8">`;
      this.svg.onclick = e => this.change(e);
      this.render();
   }

   change(e) {
      let value = e.target.dataset.value;
      value && (this.svg.parentNode.dataset.value = value);
      this.render();
   }

   render() {
      this.svg.querySelectorAll('polygon').forEach(star => {
         let on = +this.svg.parentNode.dataset.value >= +star.dataset.value;
         star.classList.toggle('active', on);
      });
   }
}

document.querySelectorAll('.comment__rating').forEach(dom => new Rating(dom));