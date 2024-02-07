// В файле index.js должны остаться:
// объявления и инициализация глобальных констант и переменных с DOM-элементами страницы,
// обработчики событий (при открытии и закрытии попапов; при отправке форм; обработчик, открывающий попап при клике по изображению карточки);
// вызовы других функций, подключённых из созданных модулей, которым нужно будет передавать объявленные здесь переменные и обработчики.

import "./styles/index.css"; // добавьте импорт главного файла стилей
import initialCards from "./components/cards";
import { createCard, deleteCard, likeCard } from "./components/card";
import { showModal, closeModal } from "./components/modal";

const placesList = document.querySelector(".places__list");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const buttonOpenPopupAddPlace = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupZoomImage = document.querySelector(".popup_type_image");
const popupZoomImgElement = document.querySelector(".popup__image");
const profileForm = document.querySelector("[name='edit-profile']");
const newPlaceForm = document.querySelector("[name='new-place']");
const modalPlaceName = document.querySelector(".popup__input_type_card-name");
const modalPlaceUrl = document.querySelector(".popup__input_type_url");
const popupCaption = document.querySelector(".popup__caption");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalProfileTitle = document.querySelector(".popup__input_type_name");
const modalProfileDescription = document.querySelector(".popup__input_type_description");

const handleOpenPopupImage = (cardData) => {
  popupZoomImgElement.src = cardData.link;
  popupZoomImgElement.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  showModal(popupZoomImage);
};

const profileFormSubmit = (evt) => {
  evt.preventDefault();
  profileDescription.textContent = modalProfileDescription.value;
  profileTitle.textContent = modalProfileTitle.value;
  closeModal(popupEdit);
};

const handlerClosePopup = (evt) => {
  if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup")) {
    closeModal(evt.currentTarget);
  }
};

window.addEventListener("load", () => {
  initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard, likeCard, handleOpenPopupImage);
    placesList.append(cardElement);
  });
});

buttonOpenPopupProfile.addEventListener("click", () => {
  modalProfileTitle.value = profileTitle.textContent;
  modalProfileDescription.value = profileDescription.textContent;
  showModal(popupEdit);
});

buttonOpenPopupAddPlace.addEventListener("click", () => showModal(popupNewCard));
popupEdit.addEventListener("click", handlerClosePopup);
popupNewCard.addEventListener("click", handlerClosePopup);
popupZoomImage.addEventListener("click", handlerClosePopup);
profileForm.addEventListener("submit", profileFormSubmit);

newPlaceForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = createCard(
    { name: modalPlaceName.value, link: modalPlaceUrl.value },
    deleteCard,
    likeCard,
    handleOpenPopupImage
  );
  placesList.prepend(newCard);
  modalPlaceName.value = "";
  modalPlaceUrl.value = "";
  closeModal(popupNewCard);
});
