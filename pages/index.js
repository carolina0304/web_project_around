//acomodar
/*Const Nuevo lugar*/
const popuplugar = document.querySelector("#popuplugar");
/** */
//const popupformadd = document.querySelector(".popup__lugar-form");
const inputtitle = document.querySelector("#name-titulo");
const inputenlace = document.querySelector("#subname-enlace");
const popupGuardar = document.querySelector("#popup_guardar");
const closeplace = document.querySelector("#popupclose_lugar");

/*Const imagen grande*/
const popupimagebig = document.querySelector("#popupimagebig");
const imagebigclose = document.querySelector("#popupclose_imagebig");

/*Const Editar perfil*/
const popup = document.querySelector(".popup");

const popupclose = document.querySelector(".popup__close");
const popupform = document.querySelector("#popup__formedit");
const inputname = document.querySelector("#name");
const inputlastname = document.querySelector("#subname");

const buttoneditperfil = document.querySelector(".profile__editavatar");
/*const buttonpopupeditperfil = document.querySelector("#popup-editperfil");*/

const avatarImage = document.querySelector(".profile__infoavatar");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";

import Section from "../components/Section.js";

import PopupWithImage from "../components/PopupWithImage.js";

import UserInfo from "../components/UserInfo.js";

import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

import Api from "../components/Api.js";

import { renderLoading } from "../components/Utils.js";

//Hacer solicitud
const api = new Api({
  baseurl: "https://around-api.es.tripleten-services.com/v1/",
  headers: {
    "content-type": "application/json; charset=UTF-8",
    authorization: "ac2a5b08-54d4-4f90-9a16-02090561c004",
  },
});

//Para confirmar eliminar la carta
const deleteCard = new PopupWithConfirmation("#popup-deletecard");
deleteCard.setEventListeners();

const popupWithImage = new PopupWithImage("#popupimagebig");
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__namenames",
  jobSelector: ".profile__namesubname",
  avatarSelector: ".profile__info",
});

/*let userId;

api.getUserInfo().then(function (user) {
  userId = user._id;
  userInfo.setUserInfo({ name: user.name, about: user.about });
  userInfo.setUserAvatar(user.avatar);

  return api.getInitialCards();
});*/

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__button_disabled",
  inputErrorClass: "popup__input-error",
};
//Modificar el nombre del perfil//
const formEdit = new PopupWithForm(".popup", ".popup__form", (formData) => {
  const saveButton = formEdit._popup.querySelector(config.submitButtonSelector);
  renderLoading(true, saveButton);
  userInfo.setUserInfo({
    name: formData.name,
    job: formData.job,
  });
  /* const saveButton = formEdit._popup.querySelector(config.submitButtonSelector);*/
  renderLoading(true.saveButton);

  api
    .updateUserInfo({ name: formData.first, about: formData.second })
    .then((res) => {
      nameSelector.textContent = res.name;
      jobSelector.textContent = res.about;
      formEdit.close();
    })
    .catch((err) => console.log(err))
    .finally(() => renderLoading(false, saveButton));

  /*userInfo.setUserInfo({
    name: formData.name,
    job: formData.job,
  });
  formEdit.close();*/
});

formEdit.setEventListeners();

const button = document.querySelector(".profile__nameeditbutton");
button.addEventListener("click", () => {
  inputname.value = userInfo.getUserInfo().name;
  inputlastname.value = userInfo.getUserInfo().job;
  formEdit.open();
});

//agregar una carta url
const FormAdd = new PopupWithForm("#popuplugar", ".popup__form", (formData) => {
  const newCard = createCard(formData.title, formData.url);
  cardsList.renderItem(newCard);
  FormAdd.close();
});

FormAdd.setEventListeners();

const buttonadd = document.querySelector(".profile__infoaddbutton");
buttonadd.addEventListener("click", () => {
  inputtitle.value = "";
  inputenlace.value = "";
  FormAdd.open();
});

//Instancia de Popup para editar perfil
const formeditAvatar = new PopupWithForm(
  "#popup-editperfil",
  ".popup__form",
  (formData) => {
    console.log(formData);
    const saveButton = formeditAvatar._popup.querySelector(
      config.submitButtonSelector
    );
    renderLoading(true, saveButton);

    api

      .AvatarUpdate(formData.url)
      .then((res) => {
        console.log(res);
        avatarImage.src = res.avatar;
        formeditAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => renderLoading(false, saveButton));
  }
);
formeditAvatar.setEventListeners();

//Config de validacion para editar perfil
const cardForm = document.querySelector("#popup__formedit");
const cardFormValidator = new FormValidator(config, cardForm);
cardFormValidator.enableValidation();

// Config de validacion para agregar card
const ProfileForm = document.querySelector("#popup__lugar-form");
const ProfileFormValidator = new FormValidator(config, ProfileForm);
ProfileFormValidator.enableValidation();

//Config de validacion para editar perfil
const ChangeAvatar = document.querySelector("#popup__editperfil-form");
const ChangeAvatarValidator = new FormValidator(config, ChangeAvatar);
ChangeAvatarValidator.enableValidation();

import {
  handlePopupOpen,
  handlePopupClose,
  openPopupAddOpen,
  openPopupAddClose,
} from "../components/Utils.js";

const element = document.querySelector(".element");
//crea la carta de nuevo lugar
const handleCardFormSubmit = () => {
  const card = { link: inputenlace.value, name: inputtitle.value };
  const cardElement = new Card(
    "#template",
    card,
    api,
    () => deleteCard.open(),
    (name, link) => {
      popupWithImage.open({ name, link });
    }
  );
  const cards = document.querySelector(".element");
  cards.prepend(cardElement.createCard());
  FormAdd.close();
};

// CLASE SECTION
const container = document.querySelector(".element");

/*const cardsList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      cardsList.addItem(
        new Card("#template", data, api, "1", deleteCard.open, (name, link) => {
          popupWithImage.open({ name, link });
        }).createCard()
      );
    },
  },
  container
);

cardsList.renderItem();*/

//popup editar
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  popup.classList.remove("popup__open");
};

const handlePopupImageClose = () => {
  popupimagebig.classList.remove("popup__image_opened");
};

popupform.addEventListener("submit", handleProfileFormSubmit);

button.addEventListener("click", handlePopupOpen);
popupclose.addEventListener("click", handlePopupClose);

buttonadd.addEventListener("click", openPopupAddOpen);
closeplace.addEventListener("click", openPopupAddClose);

buttoneditperfil.addEventListener("click", () => {
  formeditAvatar.open();
});

popupGuardar.addEventListener("click", (evt) => {
  evt.preventDefault();
  handleCardFormSubmit();
  openPopupAddClose();
});
imagebigclose.addEventListener("click", handlePopupImageClose);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    handlePopupClose();
    openPopupAddClose();
    handlePopupImageClose();
  }
});

document.addEventListener("click", (event) => {
  if (popup === event.target) {
    handlePopupClose();
  }
  if (popuplugar === event.target) {
    openPopupAddClose();
  }
  if (popupimagebig === event.target) {
    handlePopupImageClose();
  }
});

api
  .getInitialCards()
  .then((result) => {
    // procesa el resultado
    console.log(result);
    const cardsList = new Section(
      {
        items: result,
        renderer: (data) => {
          cardsList.addItem(
            new Card(
              "#template",
              data,
              api,
              () => deleteCard.open(),
              (name, link) => {
                popupWithImage.open({ name, link });
              }
            ).createCard()
          );
        },
      },
      container
    );

    cardsList.renderItem();
  })
  .catch((err) => {
    console.log(err); // registra el error en la consola
  });

/*api
  .getInitialCards()
  .then((result) => {
    // procesa el resultado
  })
  .catch((err) => {
    console.log(err); // registra el error en la consola
  });*-

/*fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
  method: "GET",
});

// a continuación hay una solicitud GET, aunque no lo indiquemos explícitamente en el método fetch()

fetch("https://around-api.es.tripleten-services.com/v1/users/me")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.user.name); // si se ejecuta este bloque then(), los datos son un objeto
  })
  .catch((err) => {
    console.log("Error. La solicitud ha fallado: ", err);
  });*/
