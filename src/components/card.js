const cardTemplate = document.querySelector("#card-template").content;

const getCardTemplate = () => {
  return cardTemplate.querySelector(".places__item").cloneNode(true);
};

export const createCard = (cardData, userId, deleteCard, likeCard, zoomImage) => {
  const cardElement = getCardTemplate();
  const cardImage = cardElement.querySelector(".card__image");
  const buttonDelete = cardElement.querySelector(".card__delete-button");
  const buttonLike = cardElement.querySelector(".card__like-button");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardElement.id = cardData._id;
  cardTitle.textContent = cardData.name;
  setLikesCounter(cardElement, cardData.likes.length);

  if (cardData.owner._id === userId) {
    buttonDelete.addEventListener("click", () => deleteCard(cardElement));
  } else {
    buttonDelete.remove();
  }
  buttonLike.addEventListener("click", () => likeCard(cardElement));
  cardImage.addEventListener("click", () => zoomImage(cardData));

  return cardElement;
};

export const deleteCardElement = (cardToDelete) => {
  cardToDelete.remove();
};

export const toggleLikeButton = (cardElement) => {
  const buttonLike = cardElement.querySelector(".card__like-button");
  buttonLike.classList.toggle("card__like-button_is-active");
};

export const isLiked = (cardElement) => {
  return Boolean(cardElement.querySelector(".card__like-button_is-active"));
};

export const setLikesCounter = (cardElement, value) => {
  const likeCounter = cardElement.querySelector(".card__like-counter");
  likeCounter.textContent = value;
};
