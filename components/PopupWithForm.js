import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.form = this._popupElement.querySelector(".popup__form");
    this.submitButton = this.form.querySelector(".form__submit");
  }

  _getInputValues() {}

  setEventListener(submitHandler) {
    super.setEventListener();
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      submitHandler(this._getInputValues());
      this.close();
      this._form.reset();
      this.clickHandler();
    });
  }

  open() {}
}
