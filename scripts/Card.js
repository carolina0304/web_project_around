class Card {
  constructor(
    image,
    description,
    cardSelector,
    handlePopupImageOpen,
    handleCardFormSubmit
  ) {
    console.log(image);
    this._image = image;
    this._description = description;
    this._cardSelector = cardSelector;
    this._handlePopupImageOpen = handlePopupImageOpen;
    this._handleCardFormSubmit = handleCardFormSubmit;
  }

  //const x = new Card({image, description, cardselector, handle})

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element__card")
      .cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._element = document.querySelector(this._cardSelector).content;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__cardimage");
    this._cardName = this._element.querySelector(".element__contentparagraph");
    this._cardlike = this._element.querySelector(".element__contentlike");
    this._cardDelete = this._element.querySelector(".element__delete");

    this._cardImage.src = this._image;
    this._cardImage.alt = this._description;
    this._cardName.textContent = this._description;

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._cardDelete.addEventListener("click", () => {
      this._element.remove();
    });

    this._cardlike.addEventListener("click", () => {
      this._cardlike.classList.toggle("element__contentlike-active");
    });

    this._cardImage.addEventListener("click", () => {
      this._handlePopupImageOpen(this._description, this._image);
    });
  }
}
export default Card;
