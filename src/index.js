// В файле index.js должны остаться:
// объявления и инициализация глобальных констант и переменных с DOM-элементами страницы,
// обработчики событий (при открытии и закрытии попапов; при отправке форм; обработчик, открывающий попап при клике по изображению карточки);
// вызовы других функций, подключённых из созданных модулей, которым нужно будет передавать объявленные здесь переменные и обработчики.

import "./styles/index.css"; // добавьте импорт главного файла стилей
import initialCards from "./components/cards";
import { createCard, deleteCard } from "./components/card";
const placesList = document.querySelector(".places__list");

window.addEventListener("load", () => {
  initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard);
    placesList.append(cardElement);
  });
});
