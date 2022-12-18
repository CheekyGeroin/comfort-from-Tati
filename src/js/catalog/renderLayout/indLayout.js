const indLayout = () => {
  return `<div class="catalog-title__container"> 
    <h1 class="title">Індивідуальне замовлення</h1>
    </div>
    <form class="idv__form">
    <ul class="idv__list">
        <li class="idv__item">
        <label class="idv__label"> 
        Ім'я
        <input class="idv__input" name="name" type="text" placeholder="Ім'я" />
        </label>
        </li>
        <li class="idv__item">
        <label class="idv__label">
        Номер телефону
        <input class="idv__input" name="number" type="tel" placeholder="Номер телефону" />
        </label>
        </li>
        <li class="idv__item">
        <label class="idv__label">
        Електронна пошта
        <input class="idv__input" name="email" type="email" placeholder="Електронна пошта" />
        </label>
        </li>
        <li class="idv__item">
        <label class="idv__label">
        Побажання
        <textarea class="idv__input" name="comment" rows="6" placeholder="Ваші побажання"></textarea>
        </label>
        </li>
    </ul>
    <button class="idv__btn" type="submit">Відправити</button>
    </form>
    `;
};

export default indLayout;
