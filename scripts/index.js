const placesList = document.querySelector(".places__list");

const createCard = (cardData, deleteCard) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);

  cardElement.querySelector(".card__image").src = cardData.link;
  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardElement.querySelector(".card__delete-button").addEventListener("click", deleteCard);
  return cardElement;
};

const deleteCard = (event) => {
  const cardToDelete = event.target.parentNode;
  placesList.removeChild(cardToDelete);
};

window.addEventListener("load", () => {
  initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard);
    placesList.append(cardElement);
  });
});

// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
