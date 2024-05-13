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

export const LaunchesIdPage  = async(id)=>{
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