//Работа модальных окон (openModal, closeModal)

const escHandler = (evt) => {
  if (evt.key === "Escape") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
};

export const showModal = (modal) => {
  modal.classList.add("popup_is-opened");
  window.addEventListener("keydown", escHandler);
};

export const closeModal = (modal) => {
  window.removeEventListener("keydown", escHandler);
  modal.classList.remove("popup_is-opened");
};
