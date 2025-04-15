/* CLASE PROFE
const resetValidation = () => {
  console.log("Aqui iniciamos nuestro codigo");
  const popupForms = document.querySelectorAll(".popup__form");
  popupForms.forEach((popupForm) => {
    console.log(popupForm);
    const labels = popupForm.querySelectorAll(".popup__input");
    const popupError = labels.querySelector(".popup__input-error");
    Input.addEventListener("input", () => {
      let minLength = input.minLegth;
      let maxLength = input.maxLength;
      if (input.value.length <= minLength) {
        console.log("error");
      }
    });
  });
};

const validationConfig = () => {
  console.log("Este no lo usamos aun");
};

export { resetValidation, validationConfig };*/

/*validar editar perfil*/
/*const popupform = document.querySelector(".popup__container");
const formInput = popupform.querySelector(".popup__input");
const formErrorPerfil = popupform.querySelector(`.${formInput.id}-error`);

const showInputError = (popupform, formInput, errorMessage) => {
  const formErrorPerfil = popupform.querySelector(`.${formInput.id}-error`);
  formInput.classList.add("popup__input_type_error");
  formErrorPerfil.textContent = errorMessage;
  formErrorPerfil.classList.add("popup__input-error_active");
};

const hideInputError = (popupform, formInput) => {
  const formErrorPerfil = popupform.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove("popup__input_type_error");
  formErrorPerfil.classList.remove("popup__input-error_active");
  formErrorPerfil.textContent = "";
};

const isValid = (popupform, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(popupform, formInput, formInput.validationMessage);
  } else {
    hideInputError(popupform, formInput);
  }
};

popupform.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

formInput.addEventListener("Input", function () {
  isValid();
});

const setEventListener = (popupform) => {
  const inputList = Array.from(popupform.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");
  inputList.forEach((formInput) => {
    formInput.addEventListener("input", () => {
      isValid(popupform, popupform);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll("popup__container"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListener(formElement);
  });
};
enableValidation();

const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__submit_inactive");
  } else {
    buttonElement.classList.remove("popup__submit_inactive");
  }
};*/
