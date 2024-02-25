export const createCard = (cardData, deleteCard, likeCard, zoomImage) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const buttonDelete = cardElement.querySelector(".card__delete-button");
  const buttonLike = cardElement.querySelector(".card__like-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardElement.id = cardData._id;
  cardElement.querySelector(".card__title").textContent = cardData.name;
  setCounter(cardElement, cardData.likes.length);

  if (deleteCard) {
    buttonDelete.addEventListener("click", () => deleteCard(cardElement));
  } else {
    buttonDelete.remove();
  }
  buttonLike.addEventListener("click", () => likeCard(cardElement));
  cardImage.addEventListener("click", () => zoomImage(cardData));

  return cardElement;
};

export const deleteCardFront = (cardToDelete) => {
  cardToDelete.remove();
};

export const likeCard = (cardElement) => {
  const buttonLike = cardElement.querySelector(".card__like-button");
  buttonLike.classList.toggle("card__like-button_is-active");
};

export const isLiked = (cardElement) => {
  return Boolean(cardElement.querySelector(".card__like-button_is-active"));
};

export const setCounter = (cardElement, value) => {
  const likeCounter = cardElement.querySelector(".card__like-counter");
  likeCounter.textContent = value;
};
