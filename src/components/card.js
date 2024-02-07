export const createCard = (cardData, deleteCard, likeCard, zoomImage) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const buttonDelete = cardElement.querySelector(".card__delete-button");
  const buttonLike = cardElement.querySelector(".card__like-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardElement.querySelector(".card__title").textContent = cardData.name;

  buttonDelete.addEventListener("click", () => deleteCard(cardElement));
  buttonLike.addEventListener("click", () => likeCard(buttonLike));
  cardImage.addEventListener("click", () => zoomImage(cardData));

  return cardElement;
};

export const deleteCard = (cardToDelete) => {
  cardToDelete.remove();
};

export const likeCard = (cardLikeButton) => {
  cardLikeButton.classList.toggle("card__like-button_is-active");
};
