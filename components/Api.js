//Clase API
export default class Api {
  constructor({ baseurl, headers }) {
    this._baseurl = baseurl;
    this._headers = headers;
  }
  //Metodos
  //Metodo para manejar respuestas de la api+++++++++
  _ApiVerification(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  //Obtener todas las cartas++++++++++
  getInitialCards() {
    return fetch(`${this._baseurl}/cards`, {
      methor: "GET",
      headers: this._headers,
    }).then((res) => this._ApiVerification(res));
  }

  //Agregar una card++++++++++
  addCard(data) {
    return fetch(`${this._baseurl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._ApiVerification(res));
  }
  //Quitar una card+++++++++
  deleteCard(cardId) {
    return fetch(`${this._baseurl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._ApiVerification(res));
  }

  //Obtener la info del usuario++++++++++
  getUserInfo() {
    return fetch(`${this._baseurl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._ApiVerification(res));
  }

  // Método para actualizar la información del usuario++++
  updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._ApiVerification(res));
  }

  //Colocar una foto de perfil+++++++
  AvatarUpdate(avatarUrl) {
    return fetch(`${this._baseurl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatarUrl }),
    }).then((res) => this._ApiVerification(res));
  }

  //Actualizar el estado del like+++++++
  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._ApiVerification);
  }

  //Metodo para eliminar like++++++++++++
  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._ApiVerification);
  }
}
