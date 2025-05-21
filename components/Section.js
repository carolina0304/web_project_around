//la clase section recibe todas sus instrucciones sobre como interactua con
// otras clases de index.js
//para renderizar los elementos de la pagina
export default class Section {
  constructor({ items, renderer }, sectionSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = sectionSelector;
  }
  renderItem() {
    this._items.forEach((item) => {
      const elemento = this._renderer(item);
      this.addItem(elemento);
    });
  }
  addItem(elemento) {
    console.log(elemento);
    this._container.prepend(elemento);
  }
}
