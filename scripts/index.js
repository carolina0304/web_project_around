const popupButton = document.querySelector(".popup__button");
const button = document.querySelector(".profile__nameeditbutton");
const popup = document.querySelector("#popup");
const inputname = document.querySelector("#name");
const inputlastname = document.querySelector("#subname");

const profilename = document.querySelector(".profile__namenames");
const profilesubname = document.querySelector(".profile__namesubname");

const popupclose = document.querySelector(".popup__close");

button.addEventListener("click", () => {
  console.log("Hola Mundo");
  popup.classList.toggle("popup_invisible");
});

popupButton.addEventListener("click", (e) => {
  e.preventDefault();
  profilename.textContent = inputname.value;
  profilesubname.textContent = inputlastname.value;
  popup.classList.toggle("popup_invisible");
});

popupclose.addEventListener("click", () => {
  popup.classList.add("popup_invisible");
});

const popuplugar = document.querySelector("#popuplugar");
const buttonadd = document.querySelector(".profile__infoaddbutton");
const popupguardar = document.querySelector("#popup_guardar");
const profiletitle = document.querySelector(".element__contentparagraph");
const profileenlace = document.querySelector(".element__cardimage");
const inputtitle = document.querySelector("#name_titulo");
const inputenlace = document.querySelector("#subname_enlace");
const closeplace = document.querySelector("#popupclose_lugar");

buttonadd.addEventListener("click", () => {
  popuplugar.classList.toggle("popup_invisiblelugar");
});

popupguardar.addEventListener("click", (e) => {
  e.preventDefault();
  profiletitle.textContent = inputtitle.value;
  profileenlace.textContent = inputenlace.linkvalue;
  popuplugar.classList.toggle("popup_invisiblelugar");
});

closeplace.addEventListener("click", () => {
  popuplugar.classList.add("popup_invisiblelugar");
});

const cards = document.querySelector(".element__card");
const template = document.querySelector("template");
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

initialCards.forEach((card) => {
  const clon = template.content.cloneNode(true);
  const image = clon.querySelector(".element__cardimage");
  const buttondelete = clon.querySelector("#popupdelete");
  const title = clon.querySelector(".element__contentparagraph");
  const buttonlike = clon.querySelector(".element__contentlike");

  image.src = card.link;
  buttondelete.textContent = card.button;
  title.textContent = card.name;
  buttonlike.click = card.style;
});

buttondelete.addEventListener("click", function () {
  cards.forEach((card) => {
    cards.remove();
  });
});
