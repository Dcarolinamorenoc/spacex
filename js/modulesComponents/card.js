export const imageRockets = async(flickr_images)=>{
    let section__image = document.querySelector("#section__image")
    let divs = [];
    flickr_images.forEach(val => {
        let div = document.createElement("div");
        div.classList.add("carousel__item")
        let img = document.createElement("img");
        img.setAttribute("src", val)
        img.setAttribute("referrerpolicy", "no-referrer")
        div.append(img)
        divs.push(div);
    });
    section__image.append(...divs)
    // <div class="carousel__item">
    //     <img src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg" referrerpolicy="no-referrer">
    // </div>
}

export const imageCrew = async (crewData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; // Limpiar el contenedor de imágenes antes de agregar una nueva
    
    crewData.forEach(member => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");
        
        let img = document.createElement("img");
        img.setAttribute("src", member.image);
        img.setAttribute("alt", member.name); // Asociar el nombre como atributo alt para accesibilidad
        img.setAttribute("referrerpolicy", "no-referrer");

        // Establecer el tamaño de la imagen
        img.setAttribute("style", "width: 200px; height: auto;"); // Ejemplo de tamaño (ajusta según lo necesites)
        
        // Centrar la imagen
        img.onload = function() {
            let imgWidth = this.width;
            let imgHeight = this.height;
            let containerWidth = section__image.offsetWidth;
            let containerHeight = section__image.offsetHeight;
            let marginLeft = (containerWidth - imgWidth) / 2;
            let marginTop = (containerHeight - imgHeight) / 2;
            
            this.style.marginLeft = marginLeft + "px";
            this.style.marginTop = marginTop + "px";
        };

        div.append(img);
        section__image.append(div);
    });
};


export const imageLaunches = async (launchData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; // Limpiar el contenedor de imágenes antes de agregar nuevas

    launchData.forEach(launch => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");

        let imageUrl = launch.links.patch.small || "storage/img/icons/land.gif"; // Verificar si hay una imagen, de lo contrario, usar elon.webp

        let img = document.createElement("img");
        img.setAttribute("src", imageUrl);
        img.setAttribute("alt", launch.name); // Establecer el nombre de la misión como atributo alt para accesibilidad
        img.setAttribute("referrerpolicy", "no-referrer");

        // Establecer el tamaño de la imagen
        img.setAttribute("style", "width: 200px; height: auto;"); // Ajustar el tamaño según sea necesario

        // Centrar la imagen
        img.onload = function() {
            let imgWidth = this.width;
            let imgHeight = this.height;
            let containerWidth = section__image.offsetWidth;
            let containerHeight = section__image.offsetHeight;
            let marginLeft = (containerWidth - imgWidth) / 2;
            let marginTop = (containerHeight - imgHeight) / 2;

            this.style.marginLeft = marginLeft + "px";
            this.style.marginTop = marginTop + "px";
        };

        div.append(img);
        section__image.append(div);
    });
}


export const LandpadsImages = async (landpadsData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; // Limpiar el contenedor de imágenes antes de agregar nuevas

    landpadsData.forEach(landpad => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");

        let img = document.createElement("img");
        img.setAttribute("src", landpad.images.large[0]); // Extraer la URL de la imagen grande de los datos del sitio de aterrizaje
        img.setAttribute("alt", landpad.name); // Establecer el nombre del sitio de aterrizaje como atributo alt para accesibilidad
        img.setAttribute("referrerpolicy", "no-referrer");

        // Establecer el tamaño de la imagen
        img.setAttribute("style", "width: 250px; height: 250px;"); // Ajustar el tamaño según sea necesario

        // Centrar la imagen
        img.onload = function() {
            let imgWidth = this.width;
            let imgHeight = this.height;
            let containerWidth = section__image.offsetWidth;
            let containerHeight = section__image.offsetHeight;
            let marginLeft = (containerWidth - imgWidth) / 2;
            let marginTop = (containerHeight - imgHeight) / 2;

            this.style.marginLeft = marginLeft + "px";
            this.style.marginTop = marginTop + "px";
        };

        div.append(img);
        section__image.append(div);
    });
};



export const imageShips = async (ship) => {
    console.log(ship);
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; // Limpiar el contenedor de imágenes antes de agregar una nueva

    let div = document.createElement("div");
    div.classList.add("carousel__item");

    let imageUrl = ship.image || "storage/img/icons/ships.gif"; // Verificar si hay una imagen, de lo contrario, usar elon.webp

    let img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    img.setAttribute("alt", ship.name); // Asociar el nombre como atributo alt para accesibilidad
    img.setAttribute("referrerpolicy", "no-referrer");

    // Establecer el tamaño de la imagen
    img.setAttribute("style", "width: 250px; height: 200px;"); // Ejemplo de tamaño (ajusta según lo necesites)

    // Centrar la imagen
    img.onload = function() {
        let imgWidth = this.width;
        let imgHeight = this.height;
        let containerWidth = section__image.offsetWidth;
        let containerHeight = section__image.offsetHeight;
        let marginLeft = (containerWidth - imgWidth) / 2;
        let marginTop = (containerHeight - imgHeight) / 2;

        this.style.marginLeft = marginLeft + "px";
        this.style.marginTop = marginTop + "px";
    };

    div.append(img);
    section__image.append(div);
};



export const imageDragons = async (flickr_images) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; // Limpiar el contenido existente

    flickr_images.forEach((val) => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");
        let img = document.createElement("img");
        img.setAttribute("src", val);
        img.setAttribute("referrerpolicy", "no-referrer");
        img.style.marginTop = "70px"; // Ajustar el margen superior a 70px
        img.style.width = "300px"; // Establecer el ancho a 300px
        img.style.height = "200px"; // Establecer la altura a 200px
        div.append(img);
        section__image.append(div);
    });

    // Inicializar Slick Slider solo si hay más de una imagen
    if (flickr_images.length > 1) {
        $(document).ready(function() {
            $(section__image).slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            });
        });
    }
};


export const LaunchpadsImages = async (launchpadsData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; // Limpiar el contenedor de imágenes antes de agregar nuevas
  
    launchpadsData.forEach(launchpad => {
      let div = document.createElement("div");
      div.classList.add("carousel__item");
  
      let img = document.createElement("img");
      if (launchpad.images && launchpad.images.large && launchpad.images.large.length > 0) {
        img.setAttribute("src", launchpad.images.large[0]); // Extraer la URL de la imagen grande de los datos del sitio de lanzamiento
      } else {
        img.setAttribute("src", "default_image.jpg"); // Establecer una imagen predeterminada si no hay imagen disponible
      }
      img.setAttribute("alt", launchpad.name); // Establecer el nombre del sitio de lanzamiento como atributo alt para accesibilidad
      img.setAttribute("referrerpolicy", "no-referrer");
  
      // Establecer el tamaño de la imagen
      img.setAttribute("style", "width: 250px; height: 250px;"); // Ajustar el tamaño según sea necesario
  
      // Centrar la imagen
      img.onload = function() {
        let imgWidth = this.width;
        let imgHeight = this.height;
        let containerWidth = section__image.offsetWidth;
        let containerHeight = section__image.offsetHeight;
        let marginLeft = (containerWidth - imgWidth) / 2;
        let marginTop = (containerHeight - imgHeight) / 2;
  
        this.style.marginLeft = marginLeft + "px";
        this.style.marginTop = marginTop + "px";
      };
  
      div.append(img);
      section__image.append(div);
    });
  }



  export const imageRoadster = async (flickr_images) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; // Limpiar el contenido existente

    flickr_images.forEach((val) => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");
        let img = document.createElement("img");
        img.setAttribute("src", val);
        img.setAttribute("referrerpolicy", "no-referrer");
        img.style.marginTop = "70px"; // Ajustar el margen superior a 70px
        img.style.width = "300px"; // Establecer el ancho a 300px
        img.style.height = "200px"; // Establecer la altura a 200px
        div.append(img);
        section__image.append(div);
    });

    // Inicializar Slick Slider solo si hay más de una imagen
    if (flickr_images.length > 1) {
        $(document).ready(function() {
            $(section__image).slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            });
        });
    }
};