import Popup from "./popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(".popupimagebig__enlace");
    this._imageTitle = this._popup.querySelector(".popupimagebig__text");
  }

  open({ name, link }) {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._imageTitle.textContent = name;
    super.open();
  }
}
