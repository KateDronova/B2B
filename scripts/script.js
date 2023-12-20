function createElementWithClass(parentElem, tag, className, content) {
  const elem = document.createElement(tag);
  if (className) {
    elem.classList.add(className);
  }
  if (content) {
    elem.append(content);
  }
  parentElem.append(elem);
  return elem;
}

fetch('../cardsInfo.json')
  .then((response) => response.json())
  .then((data) =>
    data.map((item) => {
      const catalog = document.querySelector('.catalog__list');
      const card = createElementWithClass(
        catalog,
        'div',
        'catalog__item'
      );
      card.classList.add('wow','fadeInUp');

      const slider = createElementWithClass(card, 'div', 'catalog__itemSlider');
      const image = createElementWithClass(slider, 'img', 'catalog__MainImg');
      image.setAttribute('src', item.imgSrcs[0]);
      createElementWithClass(slider, 'div', 'catalog__itemSliderOptions');


      const content = createElementWithClass(card, 'div', 'catalog__content');
      createElementWithClass(content, 'h3', 'catalog__itemTitle', item.title);
      createElementWithClass(content, 'p', 'catalog__itemDescription', item.description);

      const priceTable = createElementWithClass(content, 'table', 'catalog__priceTable');
      const tableRow1 = createElementWithClass(priceTable, 'tr');
      createElementWithClass(tableRow1, 'th', '', 'Эконом');
      createElementWithClass(tableRow1, 'th', '', 'Стандарт');
      createElementWithClass(tableRow1, 'th', '', 'Премиум');
      const tableRow2 = createElementWithClass(priceTable, 'tr');
      createElementWithClass(tableRow2, 'td', '', item.priceEconomy);
      createElementWithClass(tableRow2, 'td', '', item.priceStandard);
      createElementWithClass(tableRow2, 'td', '', item.pricePremium);


      const length = createElementWithClass(content, 'p', 'catalog__itemLength');
      createElementWithClass(length, 'strong', 'catalog__itemLength', 'Длина кухни: ');
      createElementWithClass(length, 'span', 'catalog__itemLength', item.length);

      const buttons = createElementWithClass(content, 'div', 'catalog__buttons');
      createElementWithClass(buttons, 'button', 'catalog__readMoreButton', 'Подробнее');
      createElementWithClass(buttons, 'button', 'catalog__countButton', 'Расчет стоимости');
    })
  );
