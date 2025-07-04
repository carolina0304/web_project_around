class Card {
  constructor(
    cardSelector,
    { name, link, ownerId, _id, isLiked },
    api,
    handleDeleteclick,
    handlePopupImageOpen
  ) {
    this._cardSelector = cardSelector;
    this._image = link;
    this._description = name;
    this._ownerId = ownerId;
    this._cardId = _id;
    this._isLiked = isLiked;
    this._api = api;

    this._handleDeleteClick = handleDeleteclick;
    this._handlePopupImageOpen = handlePopupImageOpen;
  }

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

    //validar el like
    if (this._isLiked) {
      this._cardlike.classList.add(".element__contentlike-active");
    }

    this._cardImage.src = this._image;
    this._cardImage.alt = this._description;
    this._cardName.textContent = this._description;

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    //Evento de eliminar carta
    this._cardDelete.addEventListener("click", () => {
      //La apertura del popup de confirmacion
      this._handleDeleteClick(this._cardId, this._element);
    });
    //Evento de like
    this._cardlike.addEventListener("click", () => {
      const isLiked = this._cardlike.classList.contains(
        "element__contentlike-active"
      );
      if (isLiked) {
        this._api
          .removeLike(this._cardId)
          .then(() => {
            this._isLiked = false;
            this._updateLikeState();
          })
          .catch((err) => console.log(err));
      } else {
        this._api
          .addLike(this._cardId)
          .then(() => {
            this._isLiked = true;
            this._updateLikeState();
          })
          .catch((err) => console.log(err));
      }
    });
    //Evento de click en la imagen
    this._cardImage.addEventListener("click", () => {
      this._handlePopupImageOpen(this._description, this._image);
    });
  }

  //Metodo que actualiza el estado del like
  _updateLikeState() {
    this._cardlike.classList.toggle(
      "element__contentlike-active",
      this._isLiked
    );
  }

  getHtmlCard() {
    return this.createCard();
  }

  //Metodo para obtener id
  getId() {
    return this._cardId;
  }
}
export default Card;
