export const createCard = (cardData, deleteCard, likeCard, zoomImage) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardElement.querySelector(".card__delete-button").addEventListener("click", deleteCard);
  cardElement.querySelector(".card__like-button").addEventListener("click", likeCard);
  cardImage.addEventListener("click", () => zoomImage(cardData));
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
