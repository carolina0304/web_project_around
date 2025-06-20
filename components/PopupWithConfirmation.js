import Popup from "./popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector("#popup__deletecard-form");
    this._handleFormSubmit = null;
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    this._form.addEventListener("click", (evt) => {
      evt.preventDefault();

      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}
