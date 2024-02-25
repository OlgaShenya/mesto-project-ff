//Работа модальных окон (openModal, closeModal)

const closeByEscHandler = (evt) => {
  if (evt.key === "Escape") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
};

export const showModal = (modal) => {
  modal.classList.add("popup_is-opened");
  window.addEventListener("keydown", closeByEscHandler);
};

export const closeModal = (modal) => {
  window.removeEventListener("keydown", closeByEscHandler);
  modal.classList.remove("popup_is-opened");
};
