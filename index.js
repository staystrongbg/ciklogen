import data from './data.js';
import slike from './photos.js';
import istok from './lazin.js';
console.log(istok);
// console.log(slike);
const loading = data.find(
  (item) => item.url === window.location.pathname.slice(1)
);
const { css_class, heading, text, intro, autor, datum } = loading;
const headerContent = document.querySelector('.header-content');
const introSection = document.querySelector('.intro');
const author = document.querySelector('.author');
const date = document.querySelector('.date');
//conditional header with background image for each y
// if (loading.class !== undefined) {
headerContent.innerHTML = /*html*/ `
  <div class="header ${css_class}">
  <div class="content">
    <h1 class="naslov">${heading}</h1>
    <p class="podnaslov">${text}</p>
  </div>
</div>`;

// each story page share share elements
//SUVISNO JE CINI MI SE OVO AUTOR I INTROS
introSection.innerHTML = `<p>${intro}</p>`;
author.innerHTML = `<p>${autor}</p>`;
date.innerHTML = `<i class="fas fa-calendar"></i> <span>${datum} </span>`;
// } else
//   document.body.innerHTML = `<div class='load-fail'><h1>work in progress...</h1></div>`

//modal and slider
const imgs = document.querySelectorAll('.gridImg');
const closeModalBtn = document.querySelector('.close-modal');
// const closeModalBtn = document.querySelector('.close-modal') izvoz varijable za koriscenjeu u drugim modulima
const modalOverlay = document.querySelector('.modal-overlay');
const modalImg = document.querySelector('.modal-img');
const btns = document.querySelectorAll('.btn');

let index = null;
imgs.forEach((img, i) => {
  img.addEventListener('click', (e) => {
    modalOverlay.classList.add('open-modal');
    modalImg.src = e.currentTarget.src;
    // console.log(e.currentTarget)
    index = i;
    document.body.classList.add('overflow');
    goUp.classList.add('hide');
  });
});

const closeModal = () => {
  modalOverlay.classList.remove('open-modal');
  document.body.classList.remove('overflow');
  goUp.classList.remove('hide');
};
closeModalBtn.addEventListener('click', closeModal);
//modal end

//slide imgs
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('left')) {
      index--;
      if (index < 0) index = imgs.length - 1;
    }
    if (btn.classList.contains('right')) {
      index++;
      if (index > imgs.length - 1) index = 0;
    }
    modalImg.src = imgs[index].src;
  });
});
//keybord events for slider
document.body.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowRight') {
    index++;
    if (index > imgs.length - 1) index = 0;
  }
  if (e.code === 'ArrowLeft') {
    index--;
    if (index < 0) index = imgs.length - 1;
  }
  if (e.code === 'Escape') {
    modalOverlay.classList.remove('open-modal');
    document.body.classList.remove('overflow');
    goUp.classList.remove('hide');
  }
  modalImg.src = imgs[index].src;
});
//slide imgs end

//back to top functionality
const goUp = document.querySelector('.go-up');

window.addEventListener('scroll', () => {
  const scrollh = pageYOffset;
  scrollh > 800 ? goUp.classList.add('show') : goUp.classList.remove('show');
});
