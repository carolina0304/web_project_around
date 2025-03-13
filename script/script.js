const popup = document.querySelector("#popup1");
const button1 = document.querySelector(".profile__name_editbutton");

button1.addEventListener("click", () => {
  console.log("Hola Mundo");
  popup.classList.toggle("popup_invisible");
});

const buttonclose = document.querySelector(".popup__close");

buttonclose.addEventListener("click", () => {
  popup.classList.toggle("popup_invisible");
});

const formElement = document.querySelector(".popup__button");
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector(".popup__input");
  let jobInput = document.querySelector("profile__name_names");
}
formElement.addEventListener("submit", handleProfileFormSubmit);
