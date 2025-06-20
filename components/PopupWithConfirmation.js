import Popup from "./popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector("#popup__deletecard-form");
    this._handleFormSubmit = null;
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
    /*this._handleFormSubmit();*/
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}
