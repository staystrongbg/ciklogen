import data from './data.js';
import logo from './logo.js';
// import { goUp } from './index.js' uvoz varijabli iz drugih modula
// sidebar navigation
export const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const linkContainer = document.querySelector('.links');
const sidebarHeader = document.querySelector('.sidebar-header');
const { url, src, alt } = logo;
// header with logo
sidebarHeader.innerHTML = /*html*/ `<a href=${url}>
    <img class="logo" src=${src} alt=${alt}
  /></a>
  <button class="close-btn">
    <i class="fas fa-times"></i>
  </button>`;

const closeSidebarBtn = document.querySelector('.close-btn');
//header with logo end
//sindebar navigation
const showSidebar = () => {
  sidebar.classList.add('show-sidebar');
  sidebarToggle.style.display = 'none';
  document.body.classList.add('overflow');
};
sidebarToggle.addEventListener('click', showSidebar);
const closeSidebar = () => {
  sidebar.classList.remove('show-sidebar');
  sidebarToggle.style.display = 'block';
  document.body.classList.remove('overflow');
};
closeSidebarBtn.addEventListener('click', closeSidebar);
linkContainer.innerHTML = data
  .map((link) => {
    const { url, name } = link;
    return /*html*/ `<a class='link' href="${url}">${name}</a>`;
  })
  .join('');

// sidebar navigation end
