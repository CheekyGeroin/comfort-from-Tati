const renderPlaidLayout = data => {
  return data.map(
    ({
      src,
      smallImage,
      smallImage2x,
      mediumImage,
      mediumImage2x,
      largeImage,
      largeImage2x,
      title,
      alt,
    }) => `<li class ='catalog-layout__item'>
    <a class='catalog-layout__link' href='#'>
    <img src=${src}  alt=${alt} />
    <div class='title__container'>
        <p class='item__title'>${title}</p>
    </div></a>
  </li>`
  );
};
export default renderPlaidLayout;
