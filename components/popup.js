export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.closePopupButton = this._popup.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup__open");
    document.addEventListener("keydown", this._handleEscClose);
    console.log("super");
  }

  close() {
    this._popup.classList.remove("popup__open");
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

  setEventListeners() {
    this.closePopupButton.addEventListener("click", () => {
      this.close();
    });

    this._popup.addEventListener("click", (evt) => {
      if (this.handleClickOut(evt)) {
        this.close();
      }
    });
  }
}
