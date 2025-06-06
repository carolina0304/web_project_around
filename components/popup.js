export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closePopupButton = this._popup.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupContainer = document.querySelector(".popup__container");
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

  //Metodo para agregar los event listener para cerrar
  setEventListeners() {
    //click de cerrar
    this._closePopupButton.addEventListener("click", () => {
      this.close();
    });
    // cerrar popup en area sombreada
    this._popup.addEventListener("click", (event) => {
      if (event.target === this._popupContainer) {
        this.close();
      }
      console.log("click");
    });
  }
}
