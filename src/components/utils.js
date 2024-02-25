export const showSaving = (buttonSave) => {
  buttonSave.textContent = "Сохранение...";
};

export const resetButtonText = (buttonSave, text = "Сохранить") => {
  buttonSave.textContent = text;
};
