export default class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
    this.closePopupButton = this.popup.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popup.classList.add("popup__open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this.popup.classList.remove("popup__open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  handleClickOut(evt) {
    return evt.target.classList.contains("popup__open");
  }

  setEventListener() {
    this.closePopupButton.addEventListener("click", () => {
      this.close();
    });

    this.popup.addEventListener("click", (evt) => {
      if (this.handleClickOut(evt)) {
        this.close();
      }
    });
  }
}
