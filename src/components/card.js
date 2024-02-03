//Функции для работы с карточками
// createCard + Функции,
//обрабатывающие события лайка и удаления карточки, также должны находиться в этом файле и экспортироваться из него.

export const createCard = (cardData, deleteCard, likeCard, zoomImage) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = cardData.link;
  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardElement.querySelector(".card__delete-button").addEventListener("click", deleteCard);
  cardElement.querySelector(".card__like-button").addEventListener("click", likeCard);
  cardImage.addEventListener("click", zoomImage);
  return cardElement;
};

export const deleteCard = (event) => {
  const cardToDelete = event.target.parentNode;
  cardToDelete.remove();
};

export const likeCard = (event) => {
  const cardLikeButton = event.target;
  cardLikeButton.classList.toggle("card__like-button_is-active");
};

export const zoomImage = ({ target }) => {
  document.querySelector(".popup__image").src = target.src;
};
//  if (target.classList.contains("card__image")) {
//  document.querySelector(".popup__image").src = target.src;
