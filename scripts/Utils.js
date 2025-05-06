/*export function openPopupProfile() {
  handlePopupOpen();
  inputname.value = profilename.textContent;
  inputlastname.value = profilesubname.textContent;
}

/*abrir popup*/
export function handlePopupOpen() {
  popup.classList.add("popup__open");
}

/*cerrar popup*/
export function handlePopupClose() {
  popup.classList.remove("popup__open");
}

/*Abrir popup Nuevo lugar*/
export function openPopupAddOpen() {
  popuplugar.classList.add("popup__add_open");
}

/*Cerrar popup Nuevo lugar*/
export function openPopupAddClose() {
  popuplugar.classList.remove("popup__add_open");
}

export function handlePopupImageOpen(name, link) {
  const popupImg = popupimagebig.querySelector(".popup__imagebig-enlace");
  const popupText = popupimagebig.querySelector(".popup__imagebig-text");
  popupImg.src = link;
  popupImg.alt = name;
  popupText.textContent = name;
  popupimagebig.classList.add("popup__image_opened");
}

export const handlePopupImageClose = () => {
  popupimagebig.classList.remove("popup__image_opened");
};
