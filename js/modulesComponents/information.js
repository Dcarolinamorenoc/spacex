export const informationRockets = async( description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/description.svg")

     // Establecer el tamaño de la imagen usando atributos width y height
     img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    // h3.textContent = country
    h3.textContent = "Description: "
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}

export const idofrocket = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")

     // Establecer el tamaño de la imagen usando atributos width y height
     img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID: "
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

}


export const countryofrocket = async(country)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/country.svg")

     // Establecer el tamaño de la imagen usando atributos width y height
     img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rocket country: "
    let small = document.createElement('small');
    small.textContent = country
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

}



export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/money.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/first.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}


export const theheightofrocket = async (height) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/altura.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.append(img);

    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rocket height: ";

    let small = document.createElement('small');
    // Aquí accedemos a las propiedades meters y feet del objeto height
    small.textContent = `Meters: ${height.meters}, Feet: ${height.feet}`;
    divLast.append(h3, small);

    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item");
    description__item.append(div);
}


export const diameterofrocket = async (diameter) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/diametro.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.append(img);

    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rocket diameter: ";

    let small = document.createElement('small');
    // Aquí accedemos a las propiedades meters y feet del objeto height
    small.textContent = `Meters: ${diameter.meters}, Feet: ${diameter.feet}`;
    divLast.append(h3, small);

    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item");
    description__item.append(div);
}


export const massofrocket = async (mass) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/masa.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.append(img);

    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rocket mass: ";

    let small = document.createElement('small');
    // Aquí accedemos a las propiedades kg y lb del objeto mass
    small.textContent = `Kilograms: ${mass.kg}, Pounds: ${mass.lb}`;
    divLast.append(h3, small);

    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item");
    description__item.append(div);
}







export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/lupa.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about this Rocket"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}




export const lastUpdate  = async(last_update)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/first.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Last update of the capsule"
    let small = document.createElement('small');
    small.textContent = last_update
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

export const capsulesIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

export const capsulesLaunches = async (launches) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/launches.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launches:";
    divLast.appendChild(h3);

    // Verificamos si hay más de una launch
    if (Array.isArray(launches) && launches.length > 0) {
        let ul = document.createElement('ul');
        launches.forEach((launchId) => {
            let li = document.createElement('li');
            let small = document.createElement('small');
            small.textContent = launchId;
            li.appendChild(small);
            ul.appendChild(li);
        });
        divLast.appendChild(ul);
    } else {
        // Si solo hay una launch
        let small = document.createElement('small');
        small.textContent = launches;
        divLast.appendChild(small);
    }

    div.appendChild(divFirst);
    div.appendChild(divLast);

    return div;
};


export const capsulesType = async (type) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    


// codigos del lado izquierdo


    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; // Agregar espacio inferior
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/type.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Type:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = type;
    small.style.color = "white"; 
    small.style.marginLeft = "20px";// Establecer el color del texto en blanco
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const capsulesStatus = async (status) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/star.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Status:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = status;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


// crew information


export const crewIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

export const crewLaunches = async (launches) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/launches.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launches:";
    divLast.appendChild(h3);

    // Verificamos si hay más de una launch
    if (Array.isArray(launches) && launches.length > 0) {
        let ul = document.createElement('ul');
        launches.forEach((launchId) => {
            let li = document.createElement('li');
            let small = document.createElement('small');
            small.textContent = launchId;
            li.appendChild(small);
            ul.appendChild(li);
        });
        divLast.appendChild(ul);
    } else {
        // Si solo hay una launch
        let small = document.createElement('small');
        small.textContent = launches;
        divLast.appendChild(small);
    }

    div.appendChild(divFirst);
    div.appendChild(divLast);

    return div;
};




// codigo lado izquierdo

export const crewWikipedia = async (wikipedia) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/wiki.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Wikipedia:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Crear un enlace (<a>) para el texto de Wikipedia
    let wikipediaLink = document.createElement('a');
    wikipediaLink.textContent = wikipedia;
    wikipediaLink.style.color = "white"; // Establecer el color del texto en blanco
    wikipediaLink.style.marginLeft = "20px";
    wikipediaLink.style.textDecoration = "underline"; // Subrayar el enlace
    wikipediaLink.href = wikipedia; // Establecer el atributo href con el enlace de Wikipedia
    wikipediaLink.style.fontSize = "9px";
    // Abrir el enlace en una nueva pestaña
    wikipediaLink.target = "_blank";

    // Agregar el enlace al contenedor
    divLast.appendChild(wikipediaLink);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


// iformacion de Launches

export const launchesIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const launchesCorePage  = async(launchpad)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/laun.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launchpad:"
    let small = document.createElement('small');
    small.textContent = launchpad
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

export const launchesRocketPage  = async(rocket)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/rocke.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rocket:"
    let small = document.createElement('small');
    small.textContent = rocket
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

export const launchesFirePage  = async(static_fire_date_utc)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/fire.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Static fire date utc:"
    let small = document.createElement('small');
    small.textContent = static_fire_date_utc
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


// lado izquierdo

export const LaunchesWikipedia = async (wikipedia) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/wiki.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Wikipedia:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Crear un enlace (<a>) para el texto de Wikipedia
    let wikipediaLink = document.createElement('a');
    wikipediaLink.textContent = "Read on Wikipedia";
    wikipediaLink.style.color = "white"; // Establecer el color del texto en blanco
    wikipediaLink.style.marginLeft = "20px";
    wikipediaLink.style.textDecoration = "underline"; // Subrayar el enlace
    wikipediaLink.href = wikipedia; // Establecer el atributo href con el enlace de Wikipedia
    wikipediaLink.style.fontSize = "9px";
    // Abrir el enlace en una nueva pestaña
    wikipediaLink.target = "_blank";

    // Agregar el enlace al contenedor
    divLast.appendChild(wikipediaLink);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const LaunchesWebcast = async (webcast) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/youtube.svg"); // Cambiar el ícono por el de YouTube
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Webcast:"; // Cambiar el texto a "Webcast"
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Crear un enlace (<a>) para el webcast
    let webcastLink = document.createElement('a');
    webcastLink.textContent = "Watch on YouTube"; // Texto del enlace
    webcastLink.style.color = "white"; // Establecer el color del texto en blanco
    webcastLink.style.marginLeft = "20px";
    webcastLink.style.textDecoration = "underline"; // Subrayar el enlace
    webcastLink.href = webcast; // Establecer el atributo href con el enlace del webcast
    webcastLink.style.fontSize = "9px";
    // Abrir el enlace en una nueva pestaña
    webcastLink.target = "_blank";

    // Agregar el enlace al contenedor
    divLast.appendChild(webcastLink);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}

export const LaunchesArticle = async (article) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/article.svg"); // Cambiar el ícono por el de un artículo
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Article:"; // Cambiar el texto a "Article"
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Crear un enlace (<a>) para el artículo
    let articleLink = document.createElement('a');
    articleLink.textContent = "Read on Space.com"; // Texto del enlace
    articleLink.style.color = "white"; // Establecer el color del texto en blanco
    articleLink.style.marginLeft = "20px";
    articleLink.style.textDecoration = "underline"; // Subrayar el enlace
    articleLink.href = article; // Establecer el atributo href con el enlace del artículo
    articleLink.style.fontSize = "9px";
    // Abrir el enlace en una nueva pestaña
    articleLink.target = "_blank";

    // Agregar el enlace al contenedor
    divLast.appendChild(articleLink);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const LaunchesPresskit = async (presskit) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/press.svg"); // Cambiar el ícono por el de un presskit
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Press Kit:"; // Cambiar el texto a "Press Kit"
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    if (presskit === null) {
        let p = document.createElement('p');
        p.textContent = "No press kit document available for this launch.";
        p.style.color = "white"; // Establecer el color del texto en blanco
        p.style.marginLeft = "20px";
        divLast.appendChild(p);
    } else {
        // Crear un enlace (<a>) para el presskit
        let presskitLink = document.createElement('a');
        presskitLink.textContent = "View Press Kit"; // Texto del enlace
        presskitLink.style.color = "white"; // Establecer el color del texto en blanco
        presskitLink.style.marginLeft = "20px";
        presskitLink.style.textDecoration = "underline"; // Subrayar el enlace
        presskitLink.href = presskit; // Establecer el atributo href con el enlace del presskit
        presskitLink.style.fontSize = "9px";
        // Abrir el enlace en una nueva pestaña
        presskitLink.target = "_blank";

        // Agregar el enlace al contenedor
        divLast.appendChild(presskitLink);
    }

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}

// informacion de cores

export const CoreIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const coresLaunches = async (launches) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/launches.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launches:";
    divLast.appendChild(h3);

    // Verificamos si hay más de una launch
    if (Array.isArray(launches) && launches.length > 0) {
        let ul = document.createElement('ul');
        launches.forEach((launchId) => {
            let li = document.createElement('li');
            let small = document.createElement('small');
            small.textContent = launchId;
            li.appendChild(small);
            ul.appendChild(li);
        });
        divLast.appendChild(ul);
    } else {
        // Si solo hay una launch
        let small = document.createElement('small');
        small.textContent = launches;
        divLast.appendChild(small);
    }

    div.appendChild(divFirst);
    div.appendChild(divLast);

    return div;
};


export const CoreStatusPage  = async(status)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/status.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status:"
    let small = document.createElement('small');
    small.textContent = status
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

// informacion lado izquierdo

export const coresreuse_count = async (reuse_count) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/Reuse.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Reuse:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = reuse_count;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const coresrtls_attempts = async (rtls_attempts) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/Rtls.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Rtls Attempts:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = rtls_attempts;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const coresrtls_landingss = async (rtls_landings) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/Rtls.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Rtls Attempts:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = rtls_landings;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}



export const coresasds_attempts = async (asds_attempts) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/maritime.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Asds Attempts:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = asds_attempts;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const coresasds_landings = async (asds_landings) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/maritime.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Asds Landings:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = asds_landings;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


// informacion de launches

export const LandpadsIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}



export const LandpadsFullPage  = async(full_name)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/name.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Full Name:"
    let small = document.createElement('small');
    small.textContent = full_name
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const LandpadsTypePage  = async(type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/metereo.svg")

    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type:"
    let small = document.createElement('small');
    small.textContent = type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const landpadsLaunches = async (launches) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/launches.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launches:";
    divLast.appendChild(h3);

    // Verificamos si hay más de una launch
    if (Array.isArray(launches) && launches.length > 0) {
        let ul = document.createElement('ul');
        launches.forEach((launchId) => {
            let li = document.createElement('li');
            let small = document.createElement('small');
            small.textContent = launchId;
            li.appendChild(small);
            ul.appendChild(li);
        });
        divLast.appendChild(ul);
    } else {
        // Si solo hay una launch
        let small = document.createElement('small');
        small.textContent = launches;
        divLast.appendChild(small);
    }

    div.appendChild(divFirst);
    div.appendChild(divLast);

    return div;
};


// lado izquierdo

export const LandpadsWikipedia = (wikipedia) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; 
    divWrapper.style.alignItems = "center"; 
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/wiki.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Wikipedia:";
    h3.style.color = "white"; 
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let wikipediaLink = document.createElement('a');
    wikipediaLink.textContent = "Read on Wikipedia";
    wikipediaLink.style.color = "white"; 
    wikipediaLink.style.marginLeft = "20px";
    wikipediaLink.style.textDecoration = "underline"; 
    wikipediaLink.href = wikipedia; 
    wikipediaLink.style.fontSize = "9px";
    wikipediaLink.target = "_blank";

    divLast.appendChild(wikipediaLink);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div; // Devuelve el elemento div directamente
}



export const LanpadsLatitude = async (latitude) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/latitude.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Latitude:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = latitude;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const Lanpadslongitude = async (longitude) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/longitude.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Longitude:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = longitude;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const Lanpadslanding_attempts = async (landing_attempts) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/Landing.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Landing Attempts:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = landing_attempts;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const Lanpadslanding_successes = async (landing_successes) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/Landing.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Landing Successes:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = landing_successes;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}

// datos de ships

export const shipsIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const shipsLaunches = async (launches) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/launches.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launches:";
    divLast.appendChild(h3);

    // Verificamos si hay más de una launch
    if (Array.isArray(launches) && launches.length > 0) {
        let ul = document.createElement('ul');
        launches.forEach((launchId) => {
            let li = document.createElement('li');
            let small = document.createElement('small');
            small.textContent = launchId;
            li.appendChild(small);
            ul.appendChild(li);
        });
        divLast.appendChild(ul);
    } else {
        // Si solo hay una launch
        let small = document.createElement('small');
        small.textContent = launches;
        divLast.appendChild(small);
    }

    div.appendChild(divFirst);
    div.appendChild(divLast);

    return div;
};



export const shipslegacy_idPage  = async(legacy_id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/legacy.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Legacy Id:"
    let small = document.createElement('small');
    small.textContent = legacy_id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const shipshome_portPage  = async(home_port)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/home.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Home port:"
    let small = document.createElement('small');
    small.textContent = home_port
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const shipsRoles = async (roles) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/roles.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Roles:";
    divLast.appendChild(h3);

    if (Array.isArray(roles) && roles.length > 0) {
        let ul = document.createElement('ul');
        roles.forEach((role) => {
            let li = document.createElement('li');
            let small = document.createElement('small');
            small.textContent = role;
            li.appendChild(small);
            ul.appendChild(li);
        });
        divLast.appendChild(ul);
    } else {
        let small = document.createElement('small');
        small.textContent = roles;
        divLast.appendChild(small);
    }

    div.appendChild(divFirst);
    div.appendChild(divLast);

    return div;
};


// informacion lado izquierdo


export const shipLink = async (link) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex";
    divWrapper.style.alignItems = "center";
    divWrapper.style.marginBottom = "20px";
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/link.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Link:";
    h3.style.color = "white";
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Crear un enlace (<a>) para redirigir al usuario al enlace proporcionado
    let linkElement = document.createElement('a');
    linkElement.textContent = "Read more about this here";
    linkElement.style.color = "white";
    linkElement.style.marginLeft = "20px";
    linkElement.style.textDecoration = "underline";
    linkElement.href = link;
    linkElement.style.fontSize = "9px";
    linkElement.target = "_blank";

    divLast.appendChild(linkElement);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const shipsModel = async (model) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex";
    divWrapper.style.alignItems = "center";
    divWrapper.style.marginBottom = "20px";
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/model.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Model:";
    h3.style.color = "white";
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Verificar si model es null
    if (model === null) {
        let small = document.createElement('small');
        small.textContent = "Result is null";
        small.style.color = "white";
        small.style.marginLeft = "20px";
        divLast.appendChild(small);
    } else {
        let small = document.createElement('small');
        small.textContent = model;
        small.style.color = "white";
        small.style.marginLeft = "20px";
        divLast.appendChild(small);
    }

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}

export const shipsUpdate = async (last_ais_update) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex";
    divWrapper.style.alignItems = "center";
    divWrapper.style.marginBottom = "20px";
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/update.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Last Ais Update:";
    h3.style.color = "white";
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Verificar si model es null
    if (last_ais_update === null) {
        let small = document.createElement('small');
        small.textContent = "Result is null";
        small.style.color = "white";
        small.style.marginLeft = "20px";
        divLast.appendChild(small);
    } else {
        let small = document.createElement('small');
        small.textContent = last_ais_update;
        small.style.color = "white";
        small.style.marginLeft = "20px";
        divLast.appendChild(small);
    }

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const shipsyear_built = async (year_built) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/year.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Year Built:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = year_built;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


// datos de company

export const companyIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const companyFounderPage  = async(founder)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/founder.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Founder:"
    let small = document.createElement('small');
    small.textContent = founder
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}



export const companyFoundedPage  = async(founded)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/founded.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Founded:"
    let small = document.createElement('small');
    small.textContent = founded
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}



export const companyemployeesPage  = async(employees)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/emplo.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Employees:"
    let small = document.createElement('small');
    small.textContent = employees
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}



export const companyvehiclesPage  = async(vehicles)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Vehicles:"
    let small = document.createElement('small');
    small.textContent = vehicles
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const companyvaluationPage  = async(valuation)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/valu.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Valuation:"
    let small = document.createElement('small');
    small.textContent = valuation
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


// datos de la derecha
export const SpaceXLinks = (links) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/linkcito.svg"); // Ruta a la imagen de SpaceX
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "SpaceX Links";
    divLast.appendChild(h3);

    let ul = document.createElement('ul');
    ul.style.listStyleType = "none";
    ul.style.padding = "0";

    let keys = ['website', 'flickr', 'twitter', 'elon_twitter'];

    keys.forEach(key => {
        if (links[key]) {
            let li = document.createElement('li');
            let link = document.createElement('a');
            link.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize the key
            link.style.color = "white"; // Cambia el color del texto a blanco
            link.style.textDecoration = "underline";
            link.href = links[key];
            link.target = "_blank";
            li.appendChild(link);
            ul.appendChild(li);
        }
    });

    divLast.appendChild(ul);

    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div con los enlaces de SpaceX
}



export const dragonsIdPage = async (id) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:";
    let small = document.createElement('small');
    small.textContent = id;
    divLast.append(h3, small);

    div.append(divFirst, divLast);

    return div;
};


export const dragonsTypePage = async (type) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ti.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type:";
    let small = document.createElement('small');
    small.textContent = type;
    divLast.append(h3, small);

    div.append(divFirst, divLast);

    return div;
};


export const SpaceData = (dragonData) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/name.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "50");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "SpaceX Data";
    h3.style.color = "white"; // Cambia el color del título a blanco
    divLast.appendChild(h3);

    let ul = document.createElement('ul');
    ul.style.listStyleType = "none";
    ul.style.padding = "0";

    let dragonDetails = {
        "heat_shield": dragonData.heat_shield,
        "launch_payload_mass": dragonData.launch_payload_mass,
        "launch_payload_vol": dragonData.launch_payload_vol,
        "return_payload_mass": dragonData.return_payload_mass,
        "return_payload_vol": dragonData.return_payload_vol,
        "diameter": dragonData.diameter
    };

    Object.keys(dragonDetails).forEach(key => {
        let li = document.createElement('li');
        let detailContainer = document.createElement('div');
        detailContainer.style.display = "flex";
        detailContainer.style.alignItems = "center";

        let detailImg = document.createElement('img');
        detailImg.setAttribute("src", "storage/img/icons/star.svg");
        detailImg.setAttribute("width", "20");
        detailImg.setAttribute("height", "20");
        detailImg.style.marginRight = "10px";

        let detail = document.createElement('span');
        detail.style.color = "white"; // Cambia el color del texto a blanco

        if (typeof dragonDetails[key] === 'object') {
            detail.textContent = `${key}:`;
            let subUl = document.createElement('ul');
            subUl.style.listStyleType = "none";
            subUl.style.padding = "0";

            Object.keys(dragonDetails[key]).forEach(subKey => {
                let subLi = document.createElement('li');
                subLi.textContent = `${subKey}: ${JSON.stringify(dragonDetails[key][subKey])}`;
                subLi.style.color = "white"; // Cambia el color del texto a blanco
                subUl.appendChild(subLi);
            });

            detailContainer.appendChild(detailImg);
            detailContainer.appendChild(detail);
            li.appendChild(detailContainer);
            li.appendChild(subUl);
        } else {
            detail.textContent = `${key}: ${JSON.stringify(dragonDetails[key])}`;
            detailContainer.appendChild(detailImg);
            detailContainer.appendChild(detail);
            li.appendChild(detailContainer);
        }

        ul.appendChild(li);
    });

    divLast.appendChild(ul);

    div.append(divFirst, divLast);

    return div;
};


export const dragonsFlightPage = async (first_flight) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/first.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "First Flight:";
    let small = document.createElement('small');
    small.textContent = first_flight;
    divLast.append(h3, small);

    div.append(divFirst, divLast);

    return div;
};


// informacion de launchpads

export const launchIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const launchLaunches = async (launches) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/launches.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launches:";
    divLast.appendChild(h3);

    // Verificamos si hay más de una launch
    if (Array.isArray(launches) && launches.length > 0) {
        let ul = document.createElement('ul');
        launches.forEach((launchId) => {
            let li = document.createElement('li');
            let small = document.createElement('small');
            small.textContent = launchId;
            li.appendChild(small);
            ul.appendChild(li);
        });
        divLast.appendChild(ul);
    } else {
        // Si no hay lanzamientos, mostrar mensaje en inglés
        let small = document.createElement('small');
        small.textContent = "No launches registered";
        divLast.appendChild(small);
    }

    div.appendChild(divFirst);
    div.appendChild(divLast);

    return div;
};



export const launchRockets = async (rockets) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/persona.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rockets:";
    divLast.appendChild(h3);

    // Verificamos si hay más de una launch
    if (Array.isArray(rockets) && rockets.length > 0) {
        let ul = document.createElement('ul');
        rockets.forEach((launchId) => {
            let li = document.createElement('li');
            let small = document.createElement('small');
            small.textContent = launchId;
            li.appendChild(small);
            ul.appendChild(li);
        });
        divLast.appendChild(ul);
    } else {
        // Si no hay lanzamientos, mostrar mensaje en inglés
        let small = document.createElement('small');
        small.textContent = "No rockets registered";
        divLast.appendChild(small);
    }

    div.appendChild(divFirst);
    div.appendChild(divLast);

    return div;
};


export const launchfull_name  = async(full_name)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/namee.svg")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Full Name:"
    let small = document.createElement('small');
    small.textContent = full_name
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}



export const launchStatus = async (status) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/star.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Status:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = status;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const launchTimezone = async (timezone) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ubicacion.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Timezone:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = timezone;
    small.style.color = "white"; // Establecer el color del texto en blanco
    small.style.marginLeft = "20px";
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


// informacion de History

export const idHistory = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID: "
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const event_date_utcHistory = async(event_date_utc)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/eve.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Event Date Utc: "
    let small = document.createElement('small');
    small.textContent = event_date_utc
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const event_date_unixHistory = async(event_date_unix)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/eve.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Event Date Unix: "
    let small = document.createElement('small');
    small.textContent = event_date_unix
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}



export const historyLinks = async (links) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; 
    divWrapper.style.alignItems = "center"; 
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/article.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Article:";
    h3.style.color = "white"; 
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Extraer el enlace del objeto "links"
    let articleLink = links.article;

    // Crear un enlace (<a>) para el artículo
    let articleAnchor = document.createElement('a');
    articleAnchor.textContent = articleLink;
    articleAnchor.style.color = "white"; 
    articleAnchor.style.marginLeft = "20px";
    articleAnchor.style.textDecoration = "underline"; 
    articleAnchor.href = articleLink; 
    articleAnchor.style.fontSize = "9px";
    articleAnchor.target = "_blank";

    divLast.appendChild(articleAnchor);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


// datos de Payloads

export const idPay = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID: "
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}

// export const payLaunches = async (launch) => {
//     let div = document.createElement('div');
//     div.classList.add('description__container');

//     let divFirst = document.createElement('div');
//     let img = document.createElement('img');
//     img.setAttribute("src", "storage/img/icons/launches.png");
//     img.setAttribute("width", "50"); 
//     img.setAttribute("height", "40");
//     divFirst.append(img);
    
//     let divLast = document.createElement('div');
//     let h3 = document.createElement('h3');
//     h3.textContent = "Launch:";
//     divLast.appendChild(h3);

//     // Verificamos si hay más de una launch
//     if (Array.isArray(launch) && launch.length > 0) {
//         let ul = document.createElement('ul');
//         launch.forEach((launchId) => {
//             let li = document.createElement('li');
//             let small = document.createElement('small');
//             small.textContent = launchId;
//             li.appendChild(small);
//             ul.appendChild(li);
//         });
//         divLast.appendChild(ul);
//     } else {
//         let p = document.createElement('p');
//         p.textContent = "No launch data available";
//         divLast.appendChild(p);
//     }

//     div.appendChild(divFirst);
//     div.appendChild(divLast);

//     return div;
// };


export const typePay = async(type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/laun.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type: "
    let small = document.createElement('small');
    small.textContent = type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const orbitPay = async(orbit)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/orbit.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Orbit: "
    let small = document.createElement('small');
    small.textContent = orbit
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const payLaunches = async(launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/launches.png")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch: "
    let small = document.createElement('small');
    small.textContent = launch
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const payreused = async(reused)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/prop.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Reused: "
    let small = document.createElement('small');
    small.textContent = reused
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const payreference_system = async(reference_system)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/spacee.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Reference System: "
    let small = document.createElement('small');
    small.textContent = reference_system
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const payregime = async(regime)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/spacee.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Regime: "
    let small = document.createElement('small');
    small.textContent = regime
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const paycustomers = async(customers)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/emplo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Customers: "
    let small = document.createElement('small');
    small.textContent = customers
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const payNacionality = async(nationalities)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/flag.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Nationalities: "
    let small = document.createElement('small');
    small.textContent = nationalities
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const payManufactures = async(manufacturers)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/spacee.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Manufacturers: "
    let small = document.createElement('small');
    small.textContent = manufacturers
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const idroad = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID: "
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const launch_date_utcroad = async(launch_date_utc)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/launches.png")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch Date Utc: "
    let small = document.createElement('small');
    small.textContent = launch_date_utc
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const launch_date_unixroad = async(launch_date_unix)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/launches.png")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch Date Unix: "
    let small = document.createElement('small');
    small.textContent = launch_date_unix
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const orbit_typeroad = async(orbit_type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/launches.png")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Orbit Type: "
    let small = document.createElement('small');
    small.textContent = orbit_type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const launch_mass_kgroad = async(launch_mass_kg)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/masa.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch Mass Kg: "
    let small = document.createElement('small');
    small.textContent = launch_mass_kg
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}



export const launch_mass_lbsroad = async(launch_mass_lbs)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/masa.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch Mass Lbs: "
    let small = document.createElement('small');
    small.textContent = launch_mass_lbs
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const roadWikipedia = (wikipedia) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; 
    divWrapper.style.alignItems = "center"; 
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/wiki.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Wikipedia:";
    h3.style.color = "white"; 
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let wikipediaLink = document.createElement('a');
    wikipediaLink.textContent = "Read on Wikipedia";
    wikipediaLink.style.color = "white"; 
    wikipediaLink.style.marginLeft = "20px";
    wikipediaLink.style.textDecoration = "underline"; 
    wikipediaLink.href = wikipedia; 
    wikipediaLink.style.fontSize = "9px";
    wikipediaLink.target = "_blank";

    divLast.appendChild(wikipediaLink);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div; // Devuelve el elemento div directamente
}


export const roadVideo = async (video) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; 
    divWrapper.style.alignItems = "center"; 
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/youtube.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Video:";
    h3.style.color = "white"; 
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let videoLink = document.createElement('a');
    videoLink.textContent = "Watch on YouTube";
    videoLink.style.color = "white"; 
    videoLink.style.marginLeft = "20px";
    videoLink.style.textDecoration = "underline"; 
    videoLink.href = video; 
    videoLink.style.fontSize = "9px";
    videoLink.target = "_blank";

    divLast.appendChild(videoLink);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}



// informacion de starlink

export const idStarlink = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID: "
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const COMMENTStarlink = async(COMMENT)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "COMMENT: "
    let small = document.createElement('small');
    small.textContent = COMMENT
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}

export const launchStarlink = async(launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/laun.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch: "
    let small = document.createElement('small');
    small.textContent = launch
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const versionStarlink = async(version)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/MdiCircleDouble.png")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Version: "
    let small = document.createElement('small');
    small.textContent = version
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const height_kmStarlink = async(height_km) => {
    let div = document.createElement('div');
    div.classList.add('description__container');
    
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/altura.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Height Km: ";
    let small = document.createElement('small');

    // Verificar si height_km es null y asignar "no data" si es así
    if (height_km === null) {
        small.textContent = "No data recorded";
    } else {
        small.textContent = height_km;
    }

    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div 
};



export const CCSDS_OMM_VERSStarlink = async(CCSDS_OMM_VERS)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "CCSDS_OMM_VERS: "
    let small = document.createElement('small');
    small.textContent = CCSDS_OMM_VERS
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const CREATION_DATEStarlink = async(CREATION_DATE)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "CREATION_DATE: "
    let small = document.createElement('small');
    small.textContent = CREATION_DATE
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const ORIGINATORtarlink = async(ORIGINATOR)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ORIGINATOR: "
    let small = document.createElement('small');
    small.textContent = ORIGINATOR
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const OBJECT_IDtarlink = async(OBJECT_ID)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "OBJECT_ID: "
    let small = document.createElement('small');
    small.textContent = OBJECT_ID
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const CENTER_NAMEtarlink = async(CENTER_NAME)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "CENTER_NAME: "
    let small = document.createElement('small');
    small.textContent = CENTER_NAME
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const REF_FRAMEtarlink = async(REF_FRAME)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "REF_FRAME: "
    let small = document.createElement('small');
    small.textContent = REF_FRAME
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const TIME_SYSTEMtarlink = async(TIME_SYSTEM)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "TIME_SYSTEM: "
    let small = document.createElement('small');
    small.textContent = TIME_SYSTEM
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const MEAN_ELEMENT_THEORY = async(MEAN_ELEMENT_THEORY)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "MEAN_ELEMENT_THEORY: "
    let small = document.createElement('small');
    small.textContent = MEAN_ELEMENT_THEORY
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const EPOCH = async(EPOCH)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "EPOCH: "
    let small = document.createElement('small');
    small.textContent = EPOCH
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const MEAN_MOTION = async(MEAN_MOTION)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "MEAN_MOTION: "
    let small = document.createElement('small');
    small.textContent = MEAN_MOTION
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}

export const ECCENTRICITY = async(ECCENTRICITY)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ECCENTRICITY: "
    let small = document.createElement('small');
    small.textContent = ECCENTRICITY
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}

export const INCLINATION = async(INCLINATION)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "INCLINATION: "
    let small = document.createElement('small');
    small.textContent = INCLINATION
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}


export const BSTAR = async(BSTAR)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/ufo.svg")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "BSTAR: "
    let small = document.createElement('small');
    small.textContent = BSTAR
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Retorna el elemento div
}