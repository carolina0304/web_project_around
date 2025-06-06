fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });

fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
  method: "GET",
});


//Clase API

//Metodos

//Metodo para manejar respuestas de la api

//Obtener todas las cartas

getCards() {
  return fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
    headers: {
       authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
    }
  })
  .then(this._handleServerResponse).catch((err) => {
    console.error("Error fetching cards:", err);
  });
}

getInitialCards() {
    return fetch("https://around-api.es.tripleten-services.com/v1/cards", {
    headers: {
      authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6"
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    });
}

//Agregar una card

//Quitar una card

//Obtener la info del usuario

//Colocar una foto de perfil

//Actualizar el estado del like
