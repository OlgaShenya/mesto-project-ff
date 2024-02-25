const isValid = (formElement, inputElement, formConfig) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, formConfig);
  } else {
    hideInputError(formElement, inputElement, formConfig);
  }
};

const showInputError = (formElement, inputElement, formConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formConfig.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(formConfig.errorClass);
};

const hideInputError = (formElement, inputElement, formConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formConfig.inputErrorClass);
  errorElement.classList.remove(formConfig.errorClass);
  errorElement.textContent = "";
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, formConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(formConfig.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(formConfig.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, formConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(formConfig.inputSelector));
  const buttonElement = formElement.querySelector(formConfig.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, formConfig);
      toggleButtonState(inputList, buttonElement, formConfig);
    });
  });
};

export const enableValidation = (validationConfig) => {
  const { formSelector, ...formConfig } = validationConfig;
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, formConfig);
  });
};

export const clearValidation = (formElement, formConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(formConfig.inputSelector));
  const buttonElement = formElement.querySelector(formConfig.submitButtonSelector);
  inputList.forEach((intputElement) => {
    hideInputError(formElement, intputElement, formConfig);
    toggleButtonState(inputList, buttonElement, formConfig);
  });
};
