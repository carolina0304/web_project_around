import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    console.log("hola2", this._popup);
    this._imageElement = this._popup.querySelector(".popup__enlace");
    this._imageTitle = this._popup.querySelector(".popup__text");
  }

  open({ name, link }) {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._imageTitle.textContent = name;
    super.open();
  }
}
