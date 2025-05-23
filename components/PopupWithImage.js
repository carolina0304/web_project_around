import Popup from "./popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector("popupimagebig__enlace");
    this._imageTitle = this._popup.querySelector("popupimagebig__text");
  }
}
