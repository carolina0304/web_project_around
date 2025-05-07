import Card from "./Card.js";

import FormValidator from "./FormValidator.js";

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__button_disabled",
  inputErrorClass: "popup__input-error",
};

const cardForm = document.querySelector("#popup__formedit");
const cardFormValidator = new FormValidator(config, cardForm);
cardFormValidator.enableValidation();

const ProfileForm = document.querySelector("#popup__lugar-form");
const ProfileFormValidator = new FormValidator(config, ProfileForm);
ProfileFormValidator.enableValidation();

import {
  handlePopupOpen,
  handlePopupClose,
  openPopupAddOpen,
  openPopupAddClose,
} from "./Utils.js";

/*Const Editar perfil*/
const popup = document.querySelector(".popup");
const button = document.querySelector(".profile__nameeditbutton");
const popupclose = document.querySelector(".popup__close");
const popupform = document.querySelector("#popup__formedit");
const inputname = document.querySelector("#name");
const inputlastname = document.querySelector("#subname");
const profilename = document.querySelector(".profile__namenames");
const profilesubname = document.querySelector(".profile__namesubname");
const popupButton = document.querySelector("#popup_guardaredit");

/*Const Nuevo lugar*/
const popuplugar = document.querySelector("#popuplugar");
/** */
//const popupformadd = document.querySelector(".popup__lugar-form");
const inputtitle = document.querySelector("#name_titulo");
const inputenlace = document.querySelector("#subname_enlace");
const popupGuardar = document.querySelector("#popup_guardar");
const closeplace = document.querySelector("#popupclose_lugar");

/*Const imagen grande*/
const popupimagebig = document.querySelector(".popup__image-big");
const imagebigclose = document.querySelector(".popup__image-big-buttonclose");

const buttonadd = document.querySelector(".profile__infoaddbutton");

const element = document.querySelector(".element");
const template = document.querySelector("#template");
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

function openPopupProfile() {
  handlePopupOpen();
  inputname.value = profilename.textContent;
  inputlastname.value = profilesubname.textContent;
}

/*//abrir popup//
function handlePopupOpen() {
  popup.classList.add("popup__open");
}

//cerrar popup//
function handlePopupClose() {
  popup.classList.remove("popup__open");
}

//Abrir popup Nuevo lugar//
function openPopupAddOpen() {
  popuplugar.classList.add("popup__add_open");
}

//Cerrar popup Nuevo lugar//
function openPopupAddClose() {
  popuplugar.classList.remove("popup__add_open");
}

/*Crear las cartas
function addCards() {
  initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, "#template");
    element.append(card.createCard);
  });
}*/

//crea la carta de nuevo lugar
const handleCardFormSubmit = () => {
  const card = { link: inputenlace.value, name: inputtitle.value };
  const cardElement = new Card(
    card.link,
    card.name,
    "#template",
    handlePopupImageOpen,
    handleCardFormSubmit
  );
  const cards = document.querySelector(".element");
  cards.prepend(cardElement.createCard());
};

//Inicia las cartas posicionadas
initialCards.forEach(function (item) {
  const card = new Card(
    item.link,
    item.name,
    "#template",
    handlePopupImageOpen,
    handleCardFormSubmit
  );
  element.append(card.createCard());
});

/*popup editar */
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profilename.textContent = inputname.value;
  profilesubname.textContent = inputlastname.value;
  popup.classList.remove("popup__open");
};

function handlePopupImageOpen(name, link) {
  const popupImg = popupimagebig.querySelector(".popup__image-big-enlace");
  const popupText = popupimagebig.querySelector(".popup__image-big-text");
  popupImg.src = link;
  popupImg.alt = name;
  popupText.textContent = name;
  popupimagebig.classList.add("popup__image_opened");
}

const handlePopupImageClose = () => {
  popupimagebig.classList.remove("popup__image_opened");
};

popupform.addEventListener("submit", handleProfileFormSubmit);
button.addEventListener("click", handlePopupOpen);
popupclose.addEventListener("click", handlePopupClose);

buttonadd.addEventListener("click", openPopupAddOpen);
closeplace.addEventListener("click", openPopupAddClose);

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
