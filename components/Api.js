//Clase API
export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  //Metodos
  //Metodo para manejar respuestas de la api+++++++++

  _ApiVerification(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Error: ${res.status}`);
  }


  //Obtener todas las cartas++++++++++
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._ApiVerification);
  }

  //Agregar una card++++++++++
  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this.__ApiVerification);
  }
  //Quitar una card+++++++++
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this.__ApiVerification);
  }

  //Obtener la info del usuario++++++++++
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._ApiVerification);
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
    }).then(this._ApiVerification);
  }

  //Colocar una foto de perfil+++++++
  AvatarUpdate(avatarUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatarUrl }),
    }).then(this._ApiVerification);
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
