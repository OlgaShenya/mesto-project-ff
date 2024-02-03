// В файле index.js должны остаться:
// объявления и инициализация глобальных констант и переменных с DOM-элементами страницы,
// обработчики событий (при открытии и закрытии попапов; при отправке форм; обработчик, открывающий попап при клике по изображению карточки);
// вызовы других функций, подключённых из созданных модулей, которым нужно будет передавать объявленные здесь переменные и обработчики.

import "./styles/index.css"; // добавьте импорт главного файла стилей
import initialCards from "./components/cards";
import { createCard, deleteCard, likeCard, zoomImage } from "./components/card";
import { showModal, closeModal, renderProfileModal, handleFormSubmit, addNewPlace } from "./components/modal";

const placesList = document.querySelector(".places__list");
const editProfileButton = document.querySelector(".profile__edit-button");
const addPlaceButton = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const formElement = document.querySelector("[name='edit-profile']");
const newPlaceForm = document.querySelector("[name='new-place']");

window.addEventListener("load", () => {
  initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard, likeCard, zoomImage);
    placesList.append(cardElement);
  });
});

editProfileButton.addEventListener("click", () => {
  showModal(popupEdit);
  renderProfileModal();
});

addPlaceButton.addEventListener("click", () => {
  showModal(popupNewCard);
});

placesList.addEventListener("click", ({ target }) => {
  if (target.classList.contains("card__image")) showModal(popupImage);
});

window.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup")) {
    closeModal();
  }
});

formElement.addEventListener("submit", handleFormSubmit);
newPlaceForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addNewPlace(placesList);
});
