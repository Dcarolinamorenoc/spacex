export const nameRockets = async(name)=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = name;
    // cambio de letra se hace con:
    // header__title.style.fontFamily = "Brush Script MT";
}