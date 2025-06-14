/*abrir popup*/

export const popup = document.querySelector(".popup");
export const button = document.querySelector(".profile__nameeditbutton");
export const popupclose = document.querySelector(".popup__close");

export function handlePopupOpen() {
  popup.classList.add("popup__open");
}

/*cerrar popup*/
export function handlePopupClose() {
  popup.classList.remove("popup__open");
}

export const popupGuardar = document.querySelector("#popup_guardar");
export const closeplace = document.querySelector("#popupclose_lugar");
export const buttonadd = document.querySelector(".profile__infoaddbutton");
/*Abrir popup Nuevo lugar*/
export function openPopupAddOpen() {
  popuplugar.classList.add("popup__open");
}

/*Cerrar popup Nuevo lugar*/
export function openPopupAddClose() {
  popuplugar.classList.remove("popup__open");
}

//AYUDARTE A ORGANIZAR TO CODIGO

export function renderLoading(
  isLoading,
  buttonElement,
  defaultText = "Guardar"
) {
  if (isLoading) {
    buttonElement.textContent = "Guardando...";
    buttonElement.disabled = true;
  } else {
    buttonElement = defaultText;
    buttonElement = false;
  }
}
