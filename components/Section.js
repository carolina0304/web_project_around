//la clase section recibe todas sus instrucciones sobre como interactua con
// otras clases de index.js
//para renderizar los elementos de la pagina
export default class Section {
  constructor({ items, renderer }, sectionSelector) {
    //items es un array de elementos de datos,
    //renderer es una funcion sera responsable de renderizar los datos.
    this._items = items;
    this._renderer = renderer;
    //container se van agregar los elementos renderizados.
    this._container = sectionSelector;
  }

  //Metodo para renderizar todos los elementos de la lista.
  renderItem() {
    //Se renderiza cada item de la pagina.
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  //Metodo agrega un nuevo elemento al contenedor.
  addItem(elemento) {
    console.log(elemento);
    this._container.prepend(elemento);
  }
}
