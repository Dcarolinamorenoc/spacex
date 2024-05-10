export const nameRockets = async (name) => {
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = name;

    // Detener el intervalo anterior si existe
    if (header__title.rainbowInterval) {
        clearInterval(header__title.rainbowInterval);
    }

    // Colores del arcoíris
    const rainbowColors = ['#152432', '#251532', '#231023', '#162137', '#10102A', '#200D27'];

    // Función para generar el efecto arcoíris
    function applyRainbowEffect(element) {
        let index = 0;
        element.rainbowInterval = setInterval(() => {
            element.style.color = rainbowColors[index];
            index = (index + 1) % rainbowColors.length;
        }, 200); // Cambia el color cada 200 milisegundos
    }

    // Aplicar efecto arcoíris al título
    applyRainbowEffect(header__title);

    // Hacer el tipo de letra más grueso
    header__title.style.fontWeight = 'bold';
}
