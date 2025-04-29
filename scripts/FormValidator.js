class FormValidator {
  constructor(formSelector) {
    this.popupForms = document.querySelectorAll(formSelector);
    const popupForms = document.querySelectorAll(".popup__form");
  }

  hello() {
    console.log("este es metodo publico");
    _helloprivado();
  }
  _helloprivado() {
    console.log("este es metodo privado");
  }
}

export default FormValidator;
