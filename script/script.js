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
