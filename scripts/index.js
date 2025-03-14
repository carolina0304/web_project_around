const popupButton = document.querySelector(".popup__button");
const button1 = document.querySelector(".profile__nameeditbutton");
const popup = document.querySelector("#popup1");
const inputname = document.querySelector("#name2");
const inputlastname = document.querySelector("#name3");

const profilename = document.querySelector(".profile__namenames");
const profilesubname = document.querySelector(".profile__namesubname");

const popupclose = document.querySelector(".popup__close");

button1.addEventListener("click", () => {
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
