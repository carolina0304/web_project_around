export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup__add_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup__add_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListener() {
    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popupimagebig__buttonclose") ||
        evt.target.classList.contains("#popupclose") ||
        evt.target.classList.contains("#popupclose_lugar") ||
        evt.target === this._popup
      ) {
        this.close();
      }
    });
  }
}
