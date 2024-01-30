//Работа модальных окон (openModal, closeModal)

function escHandler(evt) {
  if (evt.key === "Escape") {
    closeModal();
  }
}

export function showModal(modal) {
  modal.classList.add("popup_is-opened");
  window.addEventListener("keydown", escHandler);
}

export function closeModal() {
  const modal = document.querySelector(".popup_is-opened");
  modal.classList.add("popup_is-animated");
  modal.classList.remove("popup_is-opened");
  window.removeEventListener("keydown", escHandler);
}
