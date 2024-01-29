//Функции для работы с карточками
// createCard + Функции,
//обрабатывающие события лайка и удаления карточки, также должны находиться в этом файле и экспортироваться из него.

export const createCard = (cardData, deleteCard) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);

  cardElement.querySelector(".card__image").src = cardData.link;
  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardElement.querySelector(".card__delete-button").addEventListener("click", deleteCard);
  return cardElement;
};

export const deleteCard = (event) => {
  const cardToDelete = event.target.parentNode;
  cardToDelete.remove();
};
