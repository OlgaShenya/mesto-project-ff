// В файле index.js должны остаться:
// объявления и инициализация глобальных констант и переменных с DOM-элементами страницы,
// обработчики событий (при открытии и закрытии попапов; при отправке форм; обработчик, открывающий попап при клике по изображению карточки);
// вызовы других функций, подключённых из созданных модулей, которым нужно будет передавать объявленные здесь переменные и обработчики.

import "./styles/index.css"; // добавьте импорт главного файла стилей
import initialCards from "./components/cards";
import { createCard, deleteCard, likeCard, zoomImage } from "./components/card";
import { showModal, closeModal, renderProfileModal, handleFormSubmit, addNewPlace } from "./components/modal";

const placesList = document.querySelector(".places__list");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const buttonOpenPopupAddPlace = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const profileForm = document.querySelector("[name='edit-profile']");
const newPlaceForm = document.querySelector("[name='new-place']");
const modalPlaceName = document.querySelector(".popup__input_type_card-name");
const modalPlaceUrl = document.querySelector(".popup__input_type_url");
const popupCaption = document.querySelector(".popup__caption");

window.addEventListener("load", () => {
  initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard, likeCard, zoomImage);
    placesList.append(cardElement);
  });
});

buttonOpenPopupProfile.addEventListener("click", () => {
  showModal(popupEdit);
  renderProfileModal();
});

buttonOpenPopupAddPlace.addEventListener("click", () => {
  showModal(popupNewCard);
});

placesList.addEventListener("click", ({ target }) => {
  if (target.classList.contains("card__image")) {
    popupCaption.textContent = target.closest(".places__item").querySelector(".card__title").textContent;
    showModal(popupImage);
  }
});

window.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup")) {
    closeModal();
  }
});

profileForm.addEventListener("submit", handleFormSubmit);
newPlaceForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addNewPlace(placesList, { name: modalPlaceName.value, link: modalPlaceUrl.value });
  modalPlaceName.value = "";
  modalPlaceUrl.value = "";
});
