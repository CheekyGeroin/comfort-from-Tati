const indLayout = () => {
  return `<div class="title__container"> 
    <h1 class="title">Індивідуальне замовлення</h1>
    </div>
    <form class="idv__form">
    <ul class="idv__list">
        <li class="idv__item">
        <label class="idv__label">
        <input class="ind__input" name="name" type="text" placeholder="Ім'я" />
        </label>
        </li>
        <li class="idv__item">
        <label class="idv__label">
        <input class="ind__input" name="number" type="tel" placeholder="Номер телефону" />
        </label>
        </li>
        <li class="idv__item">
        <label class="idv__label">
        <input class="ind__input" name="email" type="email" placeholder="Електронна пошта" />
        </label>
        </li>
        <li class="idv__item">
        <label class="idv__label">
        <textarea class="ind__input" name="comment" rows="6" placeholder="Ваші побажання"></textarea>
        </label>
        </li>
    </ul>
    <button class="idv__btn" type="submit">Відправити</button>
    </form>
    `;
};

export default indLayout;
