import { createCard, deleteCard, likeCard, zoomImage } from "./card";

//Работа модальных окон (openModal, closeModal)
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalTitle = document.querySelector(".popup__input_type_name");
const modalDescription = document.querySelector(".popup__input_type_description");

const escHandler = (evt) => {
  if (evt.key === "Escape") {
    closeModal();
  }
};

export const showModal = (modal) => {
  modal.classList.add("popup_is-animated");
  setTimeout(() => modal.classList.add("popup_is-opened"), 0);
  window.addEventListener("keydown", escHandler);
};

export const closeModal = () => {
  window.removeEventListener("keydown", escHandler);
  const modal = document.querySelector(".popup_is-opened");
  modal.classList.remove("popup_is-opened");
  setTimeout(() => modal.classList.remove("popup_is-animated"), 600);
};
/*************edit profile*********************/
export const renderProfileModal = () => {
  modalTitle.value = profileTitle.textContent;
  modalDescription.value = profileDescription.textContent;
};

export const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileDescription.textContent = modalDescription.value;
  profileTitle.textContent = modalTitle.value;
  closeModal();
};

/*****************ad new card***********************/
export const addNewPlace = (placesList, newPlace) => {
  const newCard = createCard(newPlace, deleteCard, likeCard, zoomImage);
  placesList.prepend(newCard);
  closeModal();
};
