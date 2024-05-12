import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";

import{
    getAllCapsulesId,
    getCapsules
} from "../modules/capsules.js"

import { 
    nameRockets,
    nameCapsules,
    nameCrew 
} from "./title.js";
import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket,
    idofrocket,
    theheightofrocket,
    countryofrocket,
    massofrocket,
    diameterofrocket,
    lastUpdate,
    capsulesIdPage,
    capsulesLaunches,
    capsulesType,
    capsulesStatus,
    crewIdPage,
    crewLaunches,
    crewWikipedia
} from "./information.js";
import { 
    tableRocketColum1, 
    tableRocketColum2,
    tableCapsulesColum1,
    tableCapsulesColum2
} from "./tables.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum,
    // aca va uno
    // informRocketData,
    // displayRocketData
} from "./inform.js";
import { 
    imageRockets,
    imageCrew
} from "./card.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "../modulesComponents/progressBar.js";
///
import { 
    getAllCapsules 
} from "../modules/capsules.js";

import {
    getAllCrew,
    getAllCrewId
} from "../modules/crew.js";

export const load = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = `
        <div class="load"></div>
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;

    // aca va uno
    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = `
        <div class="load" style="height: 150px;"></div>
    `;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = `
        <div class="load" style="height: 350px"></div>
    `;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;


//     let section__information__q = document.querySelector("#section__information__q");
//     section__information__q.innerHTML = `
//     <div class="load" style="height: 150px;"></div>
// `;
    
//     let section__information__s = document.querySelector("#section__information__s");
//     section__information__s.innerHTML = `
//     <div class="load" style="height: 150px;"></div>
// `;
    
//     let section__information__w = document.querySelector("#section__information__w");
//     section__information__w.innerHTML = `
//     <div class="load" style="height: 150px;"></div>
// `;
    
//     let section__information__d = document.querySelector("#section__information__d");
//     section__information__d.innerHTML = `
//     <div class="load" style="height: 150px;"></div>
// `;
}


export const clear = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = ``;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = ``;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ``;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = ``;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = ``;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = ``;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

}

const getRocketsId = async(e)=>{
    e.preventDefault();
    // console.log(e.target);
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let Rocket = await getAllRocketsId(e.target.id);
    await clear();
    
    await informationRockets(Rocket.description)
    await idofrocket(Rocket.id)
    await countryofrocket(Rocket.country)
    await nameRockets(Rocket.name)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await theheightofrocket (Rocket.height)
    await massofrocket (Rocket.mass)
    await diameterofrocket (Rocket.diameter)
    await informationWebRocket(Rocket.wikipedia)


    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    // aca va uno
    // await informRocketData();
    // await displayRocketData();
    await imageRockets(Rocket.flickr_images);

    await tableRocketColum1(Rocket)
    await tableRocketColum2(Rocket)

    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)
}
// export const paginationRockets = async () => {
//     let rockets = await getAllRockets();
//     let div = document.createElement("div");
//     div.classList.add("buttom__paginacion");

//     rockets.forEach((val, id) => {
//         let a = document.createElement("a");
//         a.setAttribute("href", "#");
//         a.id = val.id;
//         a.textContent = id + 1;
//         a.addEventListener("click", getRocketsId);
//         a.addEventListener("click", function() {
//             // Remover todas las clases de color de fondo del cuerpo
//             document.body.classList.remove("background-color1", "background-color2", "background-color3", "background-color4");
//             // Agregar la clase correspondiente al color de fondo según el índice
//             if (id === 0) {
//                 document.body.classList.add("background-color1");
//             } else if (id === 1) {
//                 document.body.classList.add("background-color2");
//             } else if (id === 2) {
//                 document.body.classList.add("background-color3");
//             } else if (id === 3) {
//                 document.body.classList.add("background-color4");
//             }
//         });
//         div.appendChild(a);
//     });

//     let [a1, a2, a3, a4] = div.children;
//     a1.click(); // Hacer clic en el tercer enlace por defecto

//     return div;

    
// }

// const getCapsulesId = async(e)=>{
//     e.preventDefault();
//     if(e.target.dataset.page){
//         let paginacion = document.querySelector("#paginacion");
//         paginacion.innerHTML = ""
//         paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
//     }
//     let a = e.target.parentElement.children;
//     for(let val of a){
//         val.classList.remove('activo');
//     }
//     e.target.classList.add('activo');
    

//     // let Rocket = await getAllRocketsId(e.target.id);
//     // console.log(Rocket);

//     // await informationRockets(Rocket.country, Rocket.description)
    
// }

// export const paginationCapsules = async(page=1, limit=4)=>{  
     
//     let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

//     let div = document.createElement("div");
//     div.classList.add("buttom__paginacion")

    
//     let start = document.createElement("a");
//     start.setAttribute("href","#");
//     start.innerHTML = "&laquo";
//     start.setAttribute("data-page", (page==1) ? totalPages : page-1)
//     start.addEventListener("click", getCapsulesId)
//     div.appendChild(start);

//     docs.forEach((val,id) => {
//         let a = document.createElement("a");
//         a.setAttribute("href","#");
//         a.id = val.id;
//         a.textContent = pagingCounter;
//         a.addEventListener("click", getCapsulesId)
//         div.appendChild(a);
//         pagingCounter++
//     });
    
//     let end = document.createElement("a");
//     end.setAttribute("href","#");
//     end.innerHTML = "&raquo;";
//     end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
//     end.addEventListener("click", getCapsulesId)
//     div.appendChild(end);
//     console.log(div);
//     let [back, a1,a2,a3,a4, next] = div.children
//     a1.click();
//     // <div class="buttom__paginacion">
//     //     <a href="#">&laquo;</a> 
//     //     <a href="#" class="activo">1</a>
//     //     <a href="#">2</a>
//     //     <a href="#">3</a>
//     //     <a href="#">4</a>
//     //     <a href="#">&raquo;</a>
//     // </div>
//     return div;
// }


export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    
    let [a1,a2,a3,a4] = div.children
    a3.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    
    return div;
}






const getCapsulesId = async (e) => {
    e.preventDefault();
  
    if (e.target.dataset.page) {
      let paginacion = document.querySelector("#paginacion");
      paginacion.innerHTML = "";
      paginacion.append(await paginationCapsules(Number(e.target.dataset.page)));
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let capsules = await getAllCapsulesId(e.target.id);
    console.log(capsules);
  
    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";
  
    await nameCapsules(capsules.serial);
    let lastUpdateElement = await lastUpdate(capsules.last_update);
    description__item.append(lastUpdateElement);
  
    let capsulesIdPageElement = await capsulesIdPage(capsules.id);
    description__item.append(capsulesIdPageElement);
  
    let capsulesLaunchesElement = await capsulesLaunches(capsules.launches);
    description__item.append(capsulesLaunchesElement);
  
    // Asegurarse de que capsulesTypeElement se agregue al lugar correcto
    let capsulesTypeElement = await capsulesType(capsules.type);
    let information__2 = document.getElementById('information__2'); // Asegúrate de que este sea el contenedor correcto
    information__2.innerHTML = ""; // Limpia el contenido actual si es necesario
    information__2.appendChild(capsulesTypeElement); // Adjunta el elemento generado por capsulesType a information__2
  
    // Asegurarse de que capsulesStatusElement se agregue al lugar correcto
    let capsulesStatusElement = await capsulesStatus(capsules.status);
    information__2.appendChild(capsulesStatusElement); // Adjunta el elemento generado por capsulesStatus a information__2
  
  // Mostrar información de cápsulas en la tabla
  let information__table__1 = document.querySelector("#information__table__1");
  information__table__1.innerHTML = "";
  let h3 = document.createElement("h3");
  h3.textContent = "Capsule information";
  let hr = document.createElement("hr");
  information__table__1.append(h3, hr);

  let div = document.createElement("div");
  div.classList.add("table__container__1");

  let div1 = document.createElement("div");
  let span1 = document.createElement("span");
  span1.textContent = "Type";
  let strong1 = document.createElement("strong");
  strong1.textContent = `${capsules.type}`;
  div1.append(span1, strong1);

  let div2 = document.createElement("div");
  let span2 = document.createElement("span");
  span2.textContent = "Reuse count";
  let strong2 = document.createElement("strong");
  strong2.textContent = `${capsules.reuse_count}`;
  div2.append(span2, strong2);

  div.append(div1, div2);
  information__table__1.append(div);

  // Obtener y mostrar información de water_landings y land_landings
  const { water_landings, land_landings } = await tableCapsulesColum2(capsules);

  let information__table__2 = document.querySelector("#information__table__2");
  information__table__2.innerHTML = "";
  let h3_2 = document.createElement("h3");
  h3_2.textContent = "Capsule Landings Information";
  let hr_2 = document.createElement("hr");
  information__table__2.append(h3_2, hr_2);

  let div_2 = document.createElement("div");
  div_2.classList.add("table__container__1");

  let div1_2 = document.createElement("div");
  let span1_2 = document.createElement("span");
  span1_2.textContent = "Water Landings";
  let strong1_2 = document.createElement("strong");
  strong1_2.textContent = water_landings;
  div1_2.append(span1_2, strong1_2);

  let div2_2 = document.createElement("div");
  let span2_2 = document.createElement("span");
  span2_2.textContent = "Land Landings";
  let strong2_2 = document.createElement("strong");
  strong2_2.textContent = land_landings;
  div2_2.append(span2_2, strong2_2);

  div_2.append(div1_2, div2_2);
  information__table__2.append(div_2);
};







export const paginationCapsules = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}


export const getCrewId = async (e) => {
    e.preventDefault();
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationCrew(Number(e.target.dataset.page)));
    }
    
    let Crew = await getAllCrewId(e.target.id);
    
    await nameCrew(Crew.name);
    await imageCrew([{ name: Crew.name, image: Crew.image }]);

    let crewIdPageElement = await crewIdPage(Crew.id);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(crewIdPageElement);

    // Llamamos a crewLaunches y lo añadimos al mismo contenedor
    let crewLaunchesElement = await crewLaunches(Crew.launches);
    descriptionItem.append(crewLaunchesElement);
}




export const paginationCrew = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCrew(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCrewId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCrewId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCrewId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();

    return div;
}