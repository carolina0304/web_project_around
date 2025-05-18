class Section {
  constructor({ renderer }, sectionSelector) {
    this._element = document.querySelector(sectionSelector);
    this._renderer = renderer;
  }
  renderItems(items) {
    items.forEach((item) => {
      renderer;
    });
  }
  addItems8(element) {
    this._element.append(card.createCard());
  }
}
