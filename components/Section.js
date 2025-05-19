//la clase section recibe todas sus instrucciones sobre como interactua con
// otras clases de index.js
//para renderizar los elementos de la pagina
export default class Section {
  constructor({ item, renderer }, sectionSelector) {
    this._rendererItems = item;
    this._renderer = renderer;
    this._container = document.querySelector(sectionSelector);
  }
  renderer() {
    this._rendererItems.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(elemento) {
    this._container.prepend(elemento);
  }
}
