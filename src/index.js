// В файле index.js должны остаться:
// объявления и инициализация глобальных констант и переменных с DOM-элементами страницы,
// обработчики событий (при открытии и закрытии попапов; при отправке форм; обработчик, открывающий попап при клике по изображению карточки);
// вызовы других функций, подключённых из созданных модулей, которым нужно будет передавать объявленные здесь переменные и обработчики.

import "./styles/index.css"; // добавьте импорт главного файла стилей
import { createCard, deleteCardElement, isLiked, setLikesCounter, toggleLikeButton } from "./components/card";
import { showModal, closeModal } from "./components/modal";
import { clearValidation, enableValidation } from "./components/validation";
import { validationConfig } from "./components/const";
import {
  requestAvatarUpdate,
  requestDeleteCard,
  requestInitialCards,
  requestLikeCard,
  requestPlaceAdd,
  requestProfileUpdate,
  requestUser,
} from "./components/api";
import { resetButtonText, showSaving } from "./components/utils";

const placesList = document.querySelector(".places__list");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const buttonOpenPopupAddPlace = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupZoomImage = document.querySelector(".popup_type_image");
const popupZoomImgElement = document.querySelector(".popup__image");
const formProfile = document.querySelector("[name='edit-profile']");
const formNewPlace = document.querySelector("[name='new-place']");
const modalPlaceName = document.querySelector(".popup__input_type_card-name");
const modalPlaceUrl = document.querySelector(".popup__input_type_url");
const popupCaption = document.querySelector(".popup__caption");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");
const modalProfileTitle = document.querySelector(".popup__input_type_name");
const modalProfileDescription = document.querySelector(".popup__input_type_description");
const popupAvatarEdit = document.querySelector(".popup_type_profile-image");
const buttonOpenPopupAvatar = document.querySelector(".profile__image-overlay");
const inputAvatarURL = document.querySelector(".popup__input_type_avatar_url");
const formAvatar = document.querySelector("[name='avatar']");

const logError = (err) => console.log(err);

window.addEventListener("load", () => {
  const promiseUser = requestUser();
  const promiseCards = requestInitialCards();

  Promise.all([promiseCards, promiseUser])
    .then(([cards, user]) => {
      cards.forEach((card) => {
        const cardElement = createCard(card, user._id, deleteCard, likeCard, handleOpenPopupImage);
        if (card.likes.find((item) => item._id === user._id)) {
          toggleLikeButton(cardElement);
        }
        placesList.append(cardElement);
      });
      profileTitle.textContent = user.name;
      profileDescription.textContent = user.about;
      profileImage.style.backgroundImage = `url(${user.avatar})`;
    })
    .catch(logError);
});

const deleteCard = (card) => {
  requestDeleteCard(card.id)
    .then(() => deleteCardElement(card))
    .catch(logError);
};

const likeCard = (card) => {
  requestLikeCard(card.id, isLiked(card))
    .then((data) => {
      setLikesCounter(card, data.likes.length);
      toggleLikeButton(card);
    })
    .catch(logError);
};

const handleOpenPopupImage = (cardData) => {
  popupZoomImgElement.src = cardData.link;
  popupZoomImgElement.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  showModal(popupZoomImage);
};

const submitFormProfile = (evt) => {
  evt.preventDefault();
  showSaving(evt.submitter);
  requestProfileUpdate({
    name: modalProfileTitle.value,
    about: modalProfileDescription.value,
  })
    .then((data) => {
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about;
      closeModal(popupEdit);
    })
    .catch(logError)
    .finally(() => {
      resetButtonText(evt.submitter);
    });
};

const submitFormAvatar = (evt) => {
  evt.preventDefault();
  showSaving(evt.submitter);

  requestAvatarUpdate({
    avatar: inputAvatarURL.value,
  })
    .then((data) => {
      profileImage.style.backgroundImage = `url(${data.avatar})`;
      closeModal(popupAvatarEdit);
    })
    .catch(logError)
    .finally(() => {
      resetButtonText(evt.submitter);
    });
};

const submitFormNewPlace = (evt) => {
  evt.preventDefault();
  showSaving(evt.submitter);
  requestPlaceAdd({
    name: modalPlaceName.value,
    link: modalPlaceUrl.value,
  })
    .then((data) => {
      const newCard = createCard(data, data.owner._id, deleteCard, likeCard, handleOpenPopupImage);
      placesList.prepend(newCard);
      closeModal(popupNewCard);
    })
    .catch(logError)
    .finally(() => {
      resetButtonText(evt.submitter, "Создать");
    });
};

const closePopupHandler = (evt) => {
  if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup")) {
    closeModal(evt.currentTarget);
  }
};

buttonOpenPopupProfile.addEventListener("click", () => {
  modalProfileTitle.value = profileTitle.textContent;
  modalProfileDescription.value = profileDescription.textContent;
  clearValidation(formProfile, validationConfig);
  showModal(popupEdit);
});

buttonOpenPopupAddPlace.addEventListener("click", () => {
  formNewPlace.reset();
  clearValidation(formNewPlace, validationConfig);
  showModal(popupNewCard);
});
// ----------------------------------------------------------------------------------------
buttonOpenPopupAvatar.addEventListener("click", () => {
  clearValidation(formAvatar, validationConfig);
  formAvatar.reset();
  showModal(popupAvatarEdit);
});
popupEdit.addEventListener("click", closePopupHandler);
popupNewCard.addEventListener("click", closePopupHandler);
popupZoomImage.addEventListener("click", closePopupHandler);
popupAvatarEdit.addEventListener("click", closePopupHandler);
formProfile.addEventListener("submit", submitFormProfile);
formAvatar.addEventListener("submit", submitFormAvatar);
formNewPlace.addEventListener("submit", submitFormNewPlace);

enableValidation(validationConfig);
