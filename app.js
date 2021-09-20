import data from './data.js';

// indexpage
const container = document.querySelector('.container');

container.innerHTML = data
  .map(({ heading, css_class, text, url }) => {
    return /*html*/ `
    <div class="bg-image ${css_class}">
      <div class="bg-text">
        <h3 class="heading">${heading}</h3>
        <p class="desc">${text}</p>
      </div>
      <div>
        <a href="${url}">
          <button class="read-more">Read more</button>
        </a>
      </div>
    </div>`;
  })
  .join('');
// indexpage end
