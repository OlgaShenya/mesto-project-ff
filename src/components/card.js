export const createCard = (cardData, deleteCard, likeCard, zoomImage) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardElement.querySelector(".card__title").textContent = cardData.name;

  cardElement.addEventListener("click", (evt) => {
    switch (true) {
      case evt.target.classList.contains("card__delete-button"):
        deleteCard(evt.currentTarget);
        break;
      case evt.target.classList.contains("card__like-button"):
        likeCard(evt.target);
        break;
      case evt.target.classList.contains("card__image"):
        zoomImage(cardData);
        break;
      default:
    }
  });

  return cardElement;
};
