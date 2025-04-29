class Card {
  constructor(image, description) {
    this._image = image;
    this._description = description;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#template")
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }
}
