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
