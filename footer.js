import data from './data.js';
import logo from './logo.js';
import icons from './social.js';

//footer
const { src, alt, icon } = logo;
const { facebook, tweeter, googlPlus, copyright } = icons;
const footer = document.querySelector('.footer');
footer.innerHTML = /*html*/ `<div class="footer-content">
  <img class="logo" src=${src} alt=${alt} />
  <div class="social-icons">
    ${facebook}${tweeter}${googlPlus}
  </div>
  <p>${copyright}</p>
</div>`;
