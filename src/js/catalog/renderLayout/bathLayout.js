const bathLayout = (data, bathTitle) => {
  const { mainTitle } = bathTitle;

  return `<div class='title__container'>
    <h1 class='title'>${mainTitle}</h1>
  </div>
    <ul class='list'>
      ${data.map(
        ({ largeImage, largeImage2x, src, title, alt }) =>
          `<li class="list__item">
          <a href="#" class="list__link">
          <img class="list__img" src=${src} alt=${alt} />
          <div class="text__container">
            <p class="list__text">${title}</p>
          </div>
          </a>
          </li>`
      )}
    </ul>`;
};

export default bathLayout;
