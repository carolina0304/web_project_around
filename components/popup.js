export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closePopupButton = this._popup.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //Metodo para abrir el popup
  open() {
    this._popup.classList.add("popup__open");
    document.addEventListener("keydown", this._handleEscClose);
    console.log("super");
  }

  //Metodo para cerra el popup
  close() {
    this._popup.classList.remove("popup__open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  //Metodo para cerrar el popup cuando presiona la tecla Esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  /*handleClickOut(evt) {
    return evt.target.classList.contains("popup__open");
  }*/

  setEventListeners() {
    this._closePopupButton.addEventListener("click", () => {
      this.close();
    });

    this._popup.addEventListener("click", (event) => {
      if (event.target === this._popup) {
        this.close();
      }
      console.log("click");
    });
  }
}
