//Clase API
export default class Api {
  constructor({ baseurl, headers }) {
    this._baseurl = baseurl;
    this._headers = headers;
  }
  //Metodos
  //Metodo para manejar respuestas de la api
  _ApiVerification(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  //Obtener todas las cartas
  getInitialCards() {}
  //Agregar una card

  //Quitar una card

  //Obtener la info del usuario
  getUserInfo(data) {
    return fetch(`${this._baseurl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._ApiVerification(res));
  }
  //Colocar una foto de perfil

  //Actualizar el estado del like
}
