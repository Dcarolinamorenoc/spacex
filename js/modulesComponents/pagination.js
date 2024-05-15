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
    nameCrew,
    nameLaunches,
    nameCores,
    nameLanpads,
    nameShips,
    nameCompany,
    nameDragons,
    nameLaunchpads,
    namePayloads
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
    crewWikipedia,
    launchesIdPage,
    launchesCorePage,
    launchesRocketPage,
    launchesFirePage,
    LaunchesWikipedia,
    LaunchesWebcast,
    LaunchesArticle,
    LaunchesPresskit,
    CoreIdPage,
    coresLaunches,
    CoreStatusPage,
    coresreuse_count,
    coresrtls_attempts,
    coresrtls_landingss,
    coresasds_attempts,
    coresasds_landings,
    LandpadsIdPage,
    LandpadsFullPage,
    LandpadsTypePage,
    landpadsLaunches,
    LandpadsWikipedia,
    LanpadsLatitude,
    Lanpadslongitude,
    Lanpadslanding_attempts,
    Lanpadslanding_successes,
    shipsIdPage,
    shipsLaunches,
    shipslegacy_idPage,
    shipshome_portPage,
    shipsRoles,
    shipLink,
    shipsModel,
    shipsUpdate,
    shipsyear_built,
    companyIdPage,
    companyFounderPage,
    companyFoundedPage,
    companyemployeesPage,
    companyvehiclesPage,
    companyvaluationPage,
    SpaceXLinks,
    dragonsIdPage,
    dragonsTypePage,
    SpaceData,
    dragonsFlightPage,
    launchIdPage,
    launchLaunches,
    launchRockets,
    launchfull_name,
    launchStatus,
    launchTimezone,
    idHistory,
    event_date_utcHistory,
    event_date_unixHistory,
    historyLinks,
    idPay,
    payLaunches,
    typePay,
    orbitPay,
    payreused,
    payreference_system,
    payregime,
    paycustomers,
    payNacionality,
    payManufactures
} from "./information.js";

import { 
    tableRocketColum1, 
    tableRocketColum2,
    tableCapsulesColum1,
    tableCapsulesColum2,
    tableCrewColum1,
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
    imageCrew,
    imageLaunches,
    LandpadsImages,
    imageShips,
    imageDragons,
    LaunchpadsImages
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


import { 
    getAllLaunches,
    getAllLaunchesId
} from "../modules/launches.js";

import {
    getAllCores,
    getCoreById
} from "../modules/cores.js"

import {
    getAllLandpads,
    getLandpadsById
} from "../modules/landpads.js"

import {
    getAllShips,
    getShipsById
} from "../modules/ships.js"


import {
    getAllCompany,
    getCompanyById
} from "../modules/company.js"


import {
    getAllDragons,
    getDragonsById
} from "../modules/dragons.js"


import {
    getAllLaunchpads,
    getLaunchpadsById
} from "../modules/launchpads.js"



import {
    getAllHistory,
    getHistoryById
} from "../modules/history.js"


import {
    getAllPayloads,
    getPayloadsById
} from "../modules/payloads.js"


// --------------------------------------------------------------------------------


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

    let sectionImage = document.querySelector("#section__information__1");
    sectionImage.innerHTML = "";
    
    // Crea la nueva imagen y agrégala a sectionImage
    let img = document.createElement("img");
    img.setAttribute("src", "storage/img/icons/capsul.gif");
    img.classList.add("imagen-paginacion-capsula");
    
    // Agrega estilos para posición absoluta
    img.style.position = "absolute";
    img.style.top = "100px"; // Ajusta la posición vertical
    img.style.left = "-20px"; // Ajusta la posición horizontal
    img.style.width = "400px";
    img.style.height = "400px";
    img.style.marginTop = "120px";
    img.style.marginLeft = "285px";
    
    sectionImage.appendChild(img);
  
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

    // Ahora, agregamos crewWikipedia a un contenedor diferente
    let crewWikipediaElement = await crewWikipedia(Crew.wikipedia);
    let information__2 = document.getElementById('information__2'); // Este es el nuevo contenedor
    information__2.innerHTML = ""; // Limpia el contenido actual si es necesario
    information__2.appendChild(crewWikipediaElement); // Adjunta el elemento generado por crewWikipedia a information__2


    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Information crew"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__2");
    
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Agency"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Crew.agency}`
    div1.append(span1, strong1)

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Status"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Crew.status}`
    div2.append(span2, strong2)

    div.append(div1, div2)
    information__table__2.append(div)
    
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

const getLaunchesId = async (e) => {
    e.preventDefault();
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationLaunches(Number(e.target.dataset.page)));
    }

    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let Launch = await getAllLaunchesId(e.target.id);
    console.log(Launch);

    await nameLaunches(Launch.name);
    await imageLaunches([Launch]);

    let launchesIdPageElement = await launchesIdPage(Launch.id);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(launchesIdPageElement);

    let launchesCorePageElement = await launchesCorePage(Launch.launchpad);
    descriptionItem.append(launchesCorePageElement);

    let launchesRocketPageElement = await launchesRocketPage(Launch.rocket);
    descriptionItem.append(launchesRocketPageElement);

    let launchesFirePageElement = await launchesFirePage(Launch.static_fire_date_utc);
    descriptionItem.append(launchesFirePageElement);

    let LaunchesWikipediaElement = await LaunchesWikipedia(Launch.links.wikipedia);
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(LaunchesWikipediaElement);

    let LaunchesWebcastElement = await LaunchesWebcast(Launch.links.webcast);
    information__2.appendChild(LaunchesWebcastElement);

    let LaunchesArticleElement = await LaunchesArticle(Launch.links.article);
    information__2.appendChild(LaunchesArticleElement);

    let LaunchesPresskitElement = await LaunchesPresskit(Launch.links.presskit);
    information__2.appendChild(LaunchesPresskitElement);

    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3Details = document.createElement("h3");
    h3Details.textContent = "Launch Details";
    let hrDetails = document.createElement("hr");
    information__table__2.append(h3Details, hrDetails);

    let divDetails = document.createElement("div");
    divDetails.classList.add("table__container__2");

    let div1Details = document.createElement("div");
    let span1Details = document.createElement("span");
    span1Details.textContent = "Details";
    let strong1Details = document.createElement("strong");

    if (Launch.details === null) {
        strong1Details.textContent = "No details available for this launch.";
    } else {
        strong1Details.textContent = `${Launch.details}`;
    }

    div1Details.append(span1Details, strong1Details);
    divDetails.append(div1Details);
    information__table__2.append(divDetails);

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3LaunchData = document.createElement("h3");
    h3LaunchData.textContent = "Launch Data";
    let hrLaunchData = document.createElement("hr");
    information__table__1.append(h3LaunchData, hrLaunchData);

    let divLaunchData = document.createElement("div");
    divLaunchData.classList.add("table__container__1");

    let div1Data = document.createElement("div");
    let span1Data = document.createElement("span");
    span1Data.textContent = "Static Fire Date (Unix)";
    let strong1Data = document.createElement("strong");
    strong1Data.textContent = `${Launch.static_fire_date_unix}`;
    div1Data.append(span1Data, strong1Data);

    let div2Data = document.createElement("div");
    let span2Data = document.createElement("span");
    span2Data.textContent = "Window";
    let strong2Data = document.createElement("strong");
    strong2Data.textContent = `${Launch.window}`;
    div2Data.append(span2Data, strong2Data);

    let div3Data = document.createElement("div");
    let span3Data = document.createElement("span");
    span3Data.textContent = "Success";
    let strong3Data = document.createElement("strong");
    strong3Data.textContent = `${Launch.success}`;
    div3Data.append(span3Data, strong3Data);

    divLaunchData.append(div1Data, div2Data, div3Data);
    information__table__1.append(divLaunchData);
};



export const paginationLaunches = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunches(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLaunchesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLaunchesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLaunchesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}


const getAllCoreById = async (e) => {
    e.preventDefault();
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationCores(Number(e.target.dataset.page)));
    }

    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let core = await getCoreById(e.target.id);
    console.log(core);

    await nameCores(core.serial);

    let CoreIdPageElement = await CoreIdPage(core.id);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(CoreIdPageElement);

    let coresLaunchesElement = await coresLaunches(core.launches);
    descriptionItem.append(coresLaunchesElement);

    let CoreStatusPageElement = await CoreStatusPage(core.status);
    descriptionItem.append(CoreStatusPageElement);


    let sectionImage = document.querySelector("#section__information__1");
    sectionImage.innerHTML = "";
    
    // Crea la nueva imagen y agrégala a sectionImage
    let img = document.createElement("img");
    img.setAttribute("src", "storage/img/icons/cores.gif");
    img.classList.add("imagen-paginacion-cores");
    
    // Agrega estilos para posición absoluta
    img.style.position = "absolute";
    img.style.top = "100px"; // Ajusta la posición vertical
    img.style.left = "19px"; // Ajusta la posición horizontal
    img.style.width = "300px";
    img.style.height = "250px";
    img.style.marginTop = "210px";
    img.style.marginLeft = "285px";
    
    sectionImage.appendChild(img);

    let coresreuse_countElement = await coresreuse_count(core.reuse_count);
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(coresreuse_countElement);

    let coresrtls_attemptsElement = await coresrtls_attempts(core.rtls_attempts);
    information__2.appendChild(coresrtls_attemptsElement);

    let coresasds_attemptsElement = await coresasds_attempts(core.rtls_landings);
    information__2.appendChild(coresasds_attemptsElement);

    let coresasds_landingsElement = await coresasds_landings(core.asds_landings);
    information__2.appendChild(coresasds_landingsElement);

    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3Details = document.createElement("h3");
    h3Details.textContent = "Cores Details";
    let hrDetails = document.createElement("hr");
    information__table__2.append(h3Details, hrDetails);

    let divDetails = document.createElement("div");
    divDetails.classList.add("table__container__2");

    let div1Details = document.createElement("div");
    let span1Details = document.createElement("span");
    span1Details.textContent = "Last Update";
    let strong1Details = document.createElement("strong");
    strong1Details.textContent = `${core.last_update}`;
    div1Details.append(span1Details, strong1Details);
    divDetails.append(div1Details);
    information__table__2.append(divDetails);

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3LaunchData = document.createElement("h3");
    h3LaunchData.textContent = "Cores Data";
    let hrLaunchData = document.createElement("hr");
    information__table__1.append(h3LaunchData, hrLaunchData);

    let divLaunchData = document.createElement("div");
    divLaunchData.classList.add("table__container__1");

    let div1Data = document.createElement("div");
    let span1Data = document.createElement("span");
    span1Data.textContent = "Block";
    let strong1Data = document.createElement("strong");
    strong1Data.textContent = `${core.block}`;
    div1Data.append(span1Data, strong1Data);

    let div2Data = document.createElement("div");
    let span2Data = document.createElement("span");
    span2Data.textContent = "Reuse Count";
    let strong2Data = document.createElement("strong");
    strong2Data.textContent = `${core.reuse_count}`;
    div2Data.append(span2Data, strong2Data);

    divLaunchData.append(div1Data, div2Data);
    information__table__1.append(divLaunchData);
};



export const paginationCores = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCores(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllCoreById)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllCoreById)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllCoreById)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}



const getAllLandpadsById = async (e) => {
    e.preventDefault();
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationLandpads(Number(e.target.dataset.page)));
    }

    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let landpads = await getLandpadsById(e.target.id);
    console.log(landpads);

    await nameLanpads(landpads.name);

    await LandpadsImages([landpads]);

    let LandpadsIdPageElement = await LandpadsIdPage(landpads.id);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(LandpadsIdPageElement);

    let LandpadsFullPageElement = await LandpadsFullPage(landpads.full_name);
    descriptionItem.append(LandpadsFullPageElement);

    let LandpadsTypePageElement = await LandpadsTypePage(landpads.type);
    descriptionItem.append(LandpadsTypePageElement);

    let landpadsLaunchesElement = await landpadsLaunches(landpads.launches);
    descriptionItem.append(landpadsLaunchesElement);

    let LandpadsWikipediaElement = LandpadsWikipedia(landpads.wikipedia);
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(LandpadsWikipediaElement); 

    let LanpadsLatitudeElement = await LanpadsLatitude(landpads.latitude);
    information__2.appendChild(LanpadsLatitudeElement);

    let LanpadslongitudeElement = await Lanpadslongitude(landpads.longitude);
    information__2.appendChild(LanpadslongitudeElement);

    let Lanpadslanding_attemptsElement = await Lanpadslanding_attempts(landpads.landing_attempts);
    information__2.appendChild(Lanpadslanding_attemptsElement);

    let Lanpadslanding_successesElement = await Lanpadslanding_successes(landpads.landing_successes);
    information__2.appendChild(Lanpadslanding_successesElement);



    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3LaunchData = document.createElement("h3");
    h3LaunchData.textContent = "Landpads Data";
    let hrLaunchData = document.createElement("hr");
    information__table__1.append(h3LaunchData, hrLaunchData);

    let divLaunchData = document.createElement("div");
    divLaunchData.classList.add("table__container__1");

    let div1Data = document.createElement("div");
    let span1Data = document.createElement("span");
    span1Data.textContent = "Status";
    let strong1Data = document.createElement("strong");
    strong1Data.textContent = `${landpads.status}`;
    div1Data.append(span1Data, strong1Data);

    let div2Data = document.createElement("div");
    let span2Data = document.createElement("span");
    span2Data.textContent = "Locality";
    let strong2Data = document.createElement("strong");
    strong2Data.textContent = `${landpads.locality}`;
    div2Data.append(span2Data, strong2Data);

    let div3Data = document.createElement("div");
    let span3Data = document.createElement("span");
    span3Data.textContent = "Region";
    let strong3Data = document.createElement("strong");
    strong3Data.textContent = `${landpads.region}`;
    div3Data.append(span3Data, strong3Data);

    divLaunchData.append(div1Data, div2Data, div3Data);
    information__table__1.append(divLaunchData);

    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3Details = document.createElement("h3");
    h3Details.textContent = "Landpads Details";
    let hrDetails = document.createElement("hr");
    information__table__2.append(h3Details, hrDetails);

    let divDetails = document.createElement("div");
    divDetails.classList.add("table__container__2");

    let div1Details = document.createElement("div");
    let span1Details = document.createElement("span");
    span1Details.textContent = "Details";
    let strong1Details = document.createElement("strong");
    strong1Details.textContent = `${landpads.details}`;
    div1Details.append(span1Details, strong1Details);
    divDetails.append(div1Details);
    information__table__2.append(divDetails);
};



export const paginationLandpads = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLandpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllLandpadsById)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllLandpadsById)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllLandpadsById)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}



const getAllShipsById = async (e) => {
    e.preventDefault();
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationShips(Number(e.target.dataset.page)));
    }

    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let ships = await getShipsById(e.target.id);
    console.log(ships);

    await nameShips(ships.name);

    await imageShips(ships);

    let shipsIdPageElement = await shipsIdPage(ships.id);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(shipsIdPageElement);

    let shipsLaunchesElement = await shipsLaunches(ships.launches);
    descriptionItem.append(shipsLaunchesElement);

    let shipslegacy_idPageElement = await shipslegacy_idPage(ships.legacy_id);
    descriptionItem.append(shipslegacy_idPageElement);

    let shipshome_portPageElement = await shipshome_portPage(ships.home_port);
    descriptionItem.append(shipshome_portPageElement);

    let shipsRolesElement = await shipsRoles(ships.roles);
    descriptionItem.append(shipsRolesElement);

    let shipLinkElement = await shipLink(ships.link);
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(shipLinkElement);

    let shipsModelElement = await shipsModel(ships.model);
    information__2.appendChild(shipsModelElement);

    let shipsUpdateElement = await shipsUpdate(ships.last_ais_update);
    information__2.appendChild(shipsUpdateElement);

    let year_builtElement = await shipsyear_built(ships.year_built);
    information__2.appendChild(year_builtElement);

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Ship information";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);

    let divLaunchData = document.createElement("div");
    divLaunchData.classList.add("table__container__1");

    let div1Data = document.createElement("div");
    let span1Data = document.createElement("span");
    span1Data.textContent = "Latitude";
    let strong1Data = document.createElement("strong");
    strong1Data.textContent = `${ships.latitude !== null ? ships.latitude : "Data is null"}`;
    div1Data.append(span1Data, strong1Data);

    let div2Data = document.createElement("div");
    let span2Data = document.createElement("span");
    span2Data.textContent = "Longitude";
    let strong2Data = document.createElement("strong");
    strong2Data.textContent = `${ships.longitude !== null ? ships.longitude : "Data is null"}`;
    div2Data.append(span2Data, strong2Data);

    let div3Data = document.createElement("div");
    let span3Data = document.createElement("span");
    span3Data.textContent = "IMO";
    let strong3Data = document.createElement("strong");
    strong3Data.textContent = `${ships.imo !== null ? ships.imo : "Data is null"}`;
    div3Data.append(span3Data, strong3Data);

    let div4Data = document.createElement("div");
    let span4Data = document.createElement("span");
    span4Data.textContent = "MMSI";
    let strong4Data = document.createElement("strong");
    strong4Data.textContent = `${ships.mmsi !== null ? ships.mmsi : "Data is null"}`;
    div4Data.append(span4Data, strong4Data);

    divLaunchData.append(div1Data, div2Data, div3Data, div4Data);
    information__table__1.append(divLaunchData);

    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3Details = document.createElement("h3");
    h3Details.textContent = "Ship Landings Information";
    let hrDetails = document.createElement("hr");
    information__table__2.append(h3Details, hrDetails);

    let divDetails = document.createElement("div");
    divDetails.classList.add("table__container__2");

    let div1Details = document.createElement("div");
    let span1Details = document.createElement("span");
    span1Details.textContent = "ABS";
    let strong1Details = document.createElement("strong");
    strong1Details.textContent = `${ships.abs !== null ? ships.abs : "Data is null"}`;
    div1Details.append(span1Details, strong1Details);

    let div2Details = document.createElement("div");
    let span2Details = document.createElement("span");
    span2Details.textContent = "Class";
    let strong2Details = document.createElement("strong");
    strong2Details.textContent = `${ships.class !== null ? ships.class : "Data is null"}`;
    div2Details.append(span2Details, strong2Details);

    let div3Details = document.createElement("div");
    let span3Details = document.createElement("span");
    span3Details.textContent = "Mass (kg)";
    let strong3Details = document.createElement("strong");
    strong3Details.textContent = `${ships.mass_kg !== null ? ships.mass_kg : "Data is null"}`;
    div3Details.append(span3Details, strong3Details);

    let div4Details = document.createElement("div");
    let span4Details = document.createElement("span");
    span4Details.textContent = "Mass (lbs)";
    let strong4Details = document.createElement("strong");
    strong4Details.textContent = `${ships.mass_lbs !== null ? ships.mass_lbs : "Data is null"}`;
    div4Details.append(span4Details, strong4Details);

    divDetails.append(div1Details, div2Details, div3Details, div4Details);
    information__table__2.append(divDetails);
};



export const paginationShips = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllShips(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllShipsById)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllShipsById)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllShipsById)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}






const getAllCompanyById = async (e) => {
    e.preventDefault();
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationCompany(Number(e.target.dataset.page)));
    }

    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let company = await getCompanyById(e.target.id);
    console.log(company);

    await nameCompany(company.name);

    let companyIdPageElement = await companyIdPage(company.id);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(companyIdPageElement);

    let sectionImage = document.querySelector("#section__information__1");
    let img = document.createElement("img");
    img.setAttribute("src", "storage/img/icons/elon.webp");
    img.classList.add("imagen-paginacion-capsula");
    
    // Agrega estilos para posición absoluta
    img.style.position = "absolute";
    img.style.top = "100px"; // Ajusta la posición vertical
    img.style.left = "50px"; // Ajusta la posición horizontal
    img.style.width = "250px";
    img.style.marginTop = "200px";
    img.style.marginLeft = "285px";
    
    sectionImage.appendChild(img);

    let companyFounderPageElement = await companyFounderPage(company.founder);
    descriptionItem.append(companyFounderPageElement);

    let companyFoundedPagePageElement = await companyFoundedPage(company.founded);
    descriptionItem.append(companyFoundedPagePageElement);

    let companyemployeesPageElement = await companyemployeesPage(company.employees);
    descriptionItem.append(companyemployeesPageElement);

    let companyvehiclesPageElement = await companyvehiclesPage(company.vehicles);
    descriptionItem.append(companyvehiclesPageElement);

    let companyvaluationPageElement = await companyvaluationPage(company.valuation);
    descriptionItem.append(companyvaluationPageElement);

    // Mostrar los enlaces específicos (website, flickr, twitter, elon_twitter)
    let specificLinks = {
        website: company.links.website,
        flickr: company.links.flickr,
        twitter: company.links.twitter,
        elon_twitter: company.links.elon_twitter
    };

    let SpaceXLinksElement = SpaceXLinks(specificLinks);
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(SpaceXLinksElement); 

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3_1 = document.createElement("h3");
    h3_1.textContent = "Company information";
    let hr_1 = document.createElement("hr");
    information__table__1.append(h3_1, hr_1);

    let div_1 = document.createElement("div");
    div_1.classList.add("table__container__1");

    let div1_1 = document.createElement("div");
    let span1_1 = document.createElement("span");
    span1_1.textContent = "CEO";
    let strong1_1 = document.createElement("strong");
    strong1_1.textContent = `${company.ceo}`;
    div1_1.append(span1_1, strong1_1);

    let div2_1 = document.createElement("div");
    let span2_1 = document.createElement("span");
    span2_1.textContent = "CTO";
    let strong2_1 = document.createElement("strong");
    strong2_1.textContent = `${company.cto}`;
    div2_1.append(span2_1, strong2_1);

    let div3_1 = document.createElement("div");
    let span3_1 = document.createElement("span");
    span3_1.textContent = "COO";
    let strong3_1 = document.createElement("strong");
    strong3_1.textContent = `${company.coo}`;
    div3_1.append(span3_1, strong3_1);

    let div4_1 = document.createElement("div");
    let span4_1 = document.createElement("span");
    span4_1.textContent = "CTO Propulsion";
    let strong4_1 = document.createElement("strong");
    strong4_1.textContent = `${company.cto_propulsion}`;
    div4_1.append(span4_1, strong4_1);

    div_1.append(div1_1, div2_1, div3_1, div4_1);
    information__table__1.append(div_1);

    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3_2 = document.createElement("h3");
    h3_2.textContent = "Company Information";
    let hr_2 = document.createElement("hr");
    information__table__2.append(h3_2, hr_2);

    let div_2 = document.createElement("div");
    div_2.classList.add("table__container__1");

    let div1_2 = document.createElement("div");
    let span1_2 = document.createElement("span");
    span1_2.textContent = "Launch Sites";
    let strong1_2 = document.createElement("strong");
    strong1_2.textContent = `${company.launch_sites}`;
    div1_2.append(span1_2, strong1_2);

    let div2_2 = document.createElement("div");
    let span2_2 = document.createElement("span");
    span2_2.textContent = "Test Sites";
    let strong2_2 = document.createElement("strong");
    strong2_2.textContent = `${company.test_sites}`;
    div2_2.append(span2_2, strong2_2);

    let div3_2 = document.createElement("div");
    let span3_2 = document.createElement("span");
    span3_2.textContent = "Summary";
    let strong3_2 = document.createElement("strong");
    strong3_2.textContent = `${company.summary}`;
    div3_2.append(span3_2, strong3_2);

    div_2.append(div1_2, div2_2, div3_2);
    information__table__2.append(div_2);
}



export const paginationCompany = async (page = 1, limit = 1) => {
    let response = await fetch('https://api.spacexdata.com/v4/company');
    let data = await response.json();
    let name = data.name; // Suponiendo que el nombre de la compañía está en el campo 'name' en la respuesta JSON

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", page > 1 ? page - 1 : 1);
    start.addEventListener("click", getAllCompanyById);
    div.appendChild(start);

    for (let i = 1; i <= data.totalPages; i++) {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = i;
        a.textContent = i;
        a.addEventListener("click", getAllCompanyById);
        div.appendChild(a);
    }

    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", data.nextPage ? data.nextPage : 1);
    end.addEventListener("click", getAllCompanyById);
    div.appendChild(end);

    await nameCompany(name); // Llamar a la función para mostrar el nombre en el título

    return div;
};




const getAllDragonsById = async (e) => {
    e.preventDefault();
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationDragons(Number(e.target.dataset.page)));
    }

    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let dragons = await getDragonsById(e.target.id);
    console.log(dragons); // Agrega este console.log para verificar los datos

    await nameDragons(dragons.name);
    await imageDragons(dragons.flickr_images);

    let dragonsIdPageElement = await dragonsIdPage(dragons.id);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(dragonsIdPageElement);

    let dragonsTypePageElement = await dragonsTypePage(dragons.type);
    descriptionItem.append(dragonsTypePageElement);

    let dragonsFlightPageElement = await dragonsFlightPage(dragons.first_flight);
    descriptionItem.append(dragonsFlightPageElement);

    let SpaceDataElement = await SpaceData(dragons);
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(SpaceDataElement); 

    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3_table2 = document.createElement("h3");
    h3_table2.textContent = "Dragon Information";
    let hr_table2 = document.createElement("hr");
    information__table__2.append(h3_table2, hr_table2);

    let div_table2 = document.createElement("div");
    div_table2.classList.add("table__container__1");

    let description = dragons.description;
    let wikipedia = dragons.wikipedia;

    let div1_table2 = document.createElement("div");
    let span1_table2 = document.createElement("span");
    span1_table2.textContent = "Description";
    let pDescription_table2 = document.createElement("p");
    pDescription_table2.textContent = description;
    pDescription_table2.style.color = "white"; // Set description color to white
    div1_table2.append(span1_table2, pDescription_table2);

    let div2_table2 = document.createElement("div");
    let span2_table2 = document.createElement("span");
    span2_table2.textContent = "Wikipedia";
    let aWikipedia_table2 = document.createElement("a");
    aWikipedia_table2.textContent = "Read more here";
    aWikipedia_table2.href = wikipedia;
    aWikipedia_table2.target = "_blank"; // Open link in a new tab
    div2_table2.append(span2_table2, aWikipedia_table2);

    div_table2.append(div1_table2, div2_table2);
    information__table__2.append(div_table2);

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3_table1 = document.createElement("h3");
    h3_table1.textContent = "Dragon Information";
    let hr_table1 = document.createElement("hr");
    information__table__1.append(h3_table1, hr_table1);

    let div_table1 = document.createElement("div");
    div_table1.classList.add("table__container__1");

    let div1_table1 = document.createElement("div");
    let span1_table1 = document.createElement("span");
    span1_table1.textContent = "Active";
    let strong1_table1 = document.createElement("strong");
    strong1_table1.textContent = `${dragons.active}`;
    div1_table1.append(span1_table1, strong1_table1);

    let div2_table1 = document.createElement("div");
    let span2_table1 = document.createElement("span");
    span2_table1.textContent = "Crew Capacity";
    let strong2_table1 = document.createElement("strong");
    strong2_table1.textContent = `${dragons.crew_capacity}`;
    div2_table1.append(span2_table1, strong2_table1);

    let div3_table1 = document.createElement("div");
    let span3_table1 = document.createElement("span");
    span3_table1.textContent = "Sidewall Angle (deg)";
    let strong3_table1 = document.createElement("strong");
    strong3_table1.textContent = `${dragons.sidewall_angle_deg}`;
    div3_table1.append(span3_table1, strong3_table1);

    let div4_table1 = document.createElement("div");
    let span4_table1 = document.createElement("span");
    span4_table1.textContent = "Orbit Duration (years)";
    let strong4_table1 = document.createElement("strong");
    strong4_table1.textContent = `${dragons.orbit_duration_yr}`;
    div4_table1.append(span4_table1, strong4_table1);

    let div5_table1 = document.createElement("div");
    let span5_table1 = document.createElement("span");
    span5_table1.textContent = "Dry Mass (kg)";
    let strong5_table1 = document.createElement("strong");
    strong5_table1.textContent = `${dragons.dry_mass_kg}`;
    div5_table1.append(span5_table1, strong5_table1);

    let div6_table1 = document.createElement("div");
    let span6_table1 = document.createElement("span");
    span6_table1.textContent = "Dry Mass (lb)";
    let strong6_table1 = document.createElement("strong");
    strong6_table1.textContent = `${dragons.dry_mass_lb}`;
    div6_table1.append(span6_table1, strong6_table1);

    div_table1.append(div1_table1, div2_table1, div3_table1, div4_table1, div5_table1, div6_table1);
    information__table__1.append(div_table1);
};



export const paginationDragons = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllDragons(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllDragonsById)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllDragonsById)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllDragonsById)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}




const getAllLaunchpadsById = async (e) => {
    e.preventDefault();
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationLaunchpads(Number(e.target.dataset.page)));
    }

    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let launchpad = await getLaunchpadsById(e.target.id);
    console.log(launchpad); // Verifica los datos en la consola

    await nameLaunchpads(launchpad.name);

    await LaunchpadsImages ([launchpad]);

    let launchIdPageElement = await launchIdPage(launchpad.id);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(launchIdPageElement);

    let launchfull_nameElement = await launchfull_name(launchpad.full_name);
    descriptionItem.append(launchfull_nameElement);

    let launchLaunchesElement = await launchLaunches(launchpad.launches);
    descriptionItem.append(launchLaunchesElement);

    let launchRocketsElement = await launchRockets(launchpad.rockets);
    descriptionItem.append(launchRocketsElement);

    let launchStatusElement = await launchStatus(launchpad.status);
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(launchStatusElement);

    let launchTimezoneElement = await launchTimezone(launchpad.timezone);
    information__2.appendChild(launchTimezoneElement);

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3_1 = document.createElement("h3");
    h3_1.textContent = "Launchpad information";
    let hr_1 = document.createElement("hr");
    information__table__1.append(h3_1, hr_1);

    // Mostrar información de la lanzadera actual
    let div = document.createElement("div");
    div.classList.add("table__container__1");

    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Latitude";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${launchpad.latitude}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Longitude";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${launchpad.longitude}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Launch Attempts";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${launchpad.launch_attempts}`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Launch Successes";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${launchpad.launch_successes}`;
    div4.append(span4, strong4);

    div.append(div1, div2, div3, div4);
    information__table__1.append(div);

    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3_2 = document.createElement("h3");
    h3_2.textContent = "Launchpad Location Information";
    let hr_2 = document.createElement("hr");
    information__table__2.append(h3_2, hr_2);

    // Mostrar información de localización de la lanzadera actual
    let divLoc = document.createElement("div");
    divLoc.classList.add("table__container__1");

    let div1Loc = document.createElement("div");
    let span1Loc = document.createElement("span");
    span1Loc.textContent = "Locality";
    let strong1Loc = document.createElement("strong");
    strong1Loc.textContent = launchpad.locality;
    div1Loc.append(span1Loc, strong1Loc);

    let div2Loc = document.createElement("div");
    let span2Loc = document.createElement("span");
    span2Loc.textContent = "Region";
    let strong2Loc = document.createElement("strong");
    strong2Loc.textContent = launchpad.region;
    div2Loc.append(span2Loc, strong2Loc);

    let div3Loc = document.createElement("div");
    let span3Loc = document.createElement("span");
    span3Loc.textContent = "Details";
    let strong3Loc = document.createElement("strong");
    strong3Loc.textContent = launchpad.details;
    div3Loc.append(span3Loc, strong3Loc);

    divLoc.append(div1Loc, div2Loc, div3Loc);
    information__table__2.append(divLoc);
};




export const paginationLaunchpads = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunchpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllLaunchpadsById)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllLaunchpadsById)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllLaunchpadsById)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}



const getAllHistoryById = async (e) => {
    e.preventDefault();
    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationHistory(Number(e.target.dataset.page)));
    }

    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let history = await getHistoryById(e.target.id);
    console.log(history); // Verifica los datos en la consola

    await nameLaunchpads(history.title);

    let idHistoryElement = await idHistory(history.id);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(idHistoryElement);


    let event_date_utcHistoryElement = await event_date_utcHistory(history.event_date_utc);
    descriptionItem.append(event_date_utcHistoryElement);

    let event_date_unixHistoryElement = await event_date_unixHistory(history.event_date_unix);
    descriptionItem.append(event_date_unixHistoryElement);


    let historyLinksElement = await historyLinks(history.links);
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(historyLinksElement);


    


    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "History Details";
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr);
  
    let div = document.createElement("div");
    div.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Details";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(history.details) ? history.details : "N/A"}`;
    div1.append(span1, strong1);
  
    div.append(div1);
    information__table__2.append(div);
  
    return div;


};




export const paginationHistory = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllHistory(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllHistoryById)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllHistoryById)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllHistoryById)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}





const getAllPayloadsById = async (e) => {
    e.preventDefault();
    if (e.target.hasAttribute('data-page')) { // Verificamos si e.target tiene el atributo data-page
      let paginacion = document.querySelector("#paginacion");
      paginacion.innerHTML = "";
      paginacion.append(await paginationPayloads(Number(e.target.dataset.page)));
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let payloads = await getPayloadsById(e.target.id);
    console.log(payloads); // Verifica los datos en la consola
  
    let namePayElement = await namePayloads(payloads.name);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(namePayElement);
  
    let idPayElement = await idPay(payloads.id);
    descriptionItem.append(idPayElement);
  
    let payLaunchesElement = await payLaunches(payloads.launch);
    descriptionItem.append(payLaunchesElement);
  
    let typePayElement = await typePay(payloads.type);
    descriptionItem.append(typePayElement);
  
    let orbitPayElement = await orbitPay(payloads.orbit);
    descriptionItem.append(orbitPayElement);

    let payreusedElement = await payreused(payloads.reused);
    descriptionItem.append(payreusedElement);

    let sectionImage = document.querySelector("#section__information__1");
    sectionImage.innerHTML = "";
    
    // Crea la nueva imagen y agrégala a sectionImage
    let img = document.createElement("img");
    img.setAttribute("src", "storage/img/icons/satelite.webp");
    img.classList.add("imagen-paginacion-capsula");
    
    // Agrega estilos para posición absoluta
    img.style.position = "absolute";
    img.style.top = "100px"; // Ajusta la posición vertical
    img.style.left = "-20px"; // Ajusta la posición horizontal
    img.style.width = "300px";
    img.style.height = "300px";
    img.style.marginTop = "200px";
    img.style.marginLeft = "320px";
    
    sectionImage.appendChild(img);
    let payreference_systemElement = await payreference_system(payloads.reference_system);
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(payreference_systemElement);


    let payregimeElement = await payregime(payloads.regime);
    information__2.appendChild(payregimeElement);


    let paycustomersElement = await paycustomers(payloads.customers);
    information__2.appendChild(paycustomersElement);

    let payNacionalityElement = await payNacionality(payloads.nationalities);
    information__2.appendChild(payNacionalityElement);

    let payManufacturesElement = await payManufactures(payloads.manufacturers);
    information__2.appendChild(payManufacturesElement);

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3_1 = document.createElement("h3");
    h3_1.textContent = "Payloads information";
    let hr_1 = document.createElement("hr");
    information__table__1.append(h3_1, hr_1);

    // Mostrar información de la lanzadera actual
    let div = document.createElement("div");
    div.classList.add("table__container__1");

    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Period Min";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${payloads.period_min}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Inclination Deg";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${payloads.inclination_deg}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Apoapsis Km";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${payloads.apoapsis_km}`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "periapsis Km";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${payloads.periapsis_km}`;
    div4.append(span4, strong4);

    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Eccentricity";
    let strong5 = document.createElement("strong");
    strong5.textContent = `${payloads.eccentricity}`;
    div5.append(span5, strong5);


    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Semi Major Axis Km";
    let strong6 = document.createElement("strong");
    strong6.textContent = `${payloads.semi_major_axis_km}`;
    div6.append(span6, strong6);

    let div7 = document.createElement("div");
    let span7 = document.createElement("span");
    span7.textContent = "Longitude";
    let strong7 = document.createElement("strong");
    strong7.textContent = `${payloads.longitude}`;
    div7.append(span7, strong7);

    div.append(div1, div2, div3, div4, div5, div6, div7);
    information__table__1.append(div);


    async function createLocationTable(payloads) {
        let information__table__2 = document.querySelector("#information__table__2");
        information__table__2.innerHTML = "";
        let h3_2 = document.createElement("h3");
        h3_2.textContent = "Payloads Location ";
        let hr_2 = document.createElement("hr");
        information__table__2.append(h3_2, hr_2);

        let divLoc = document.createElement("div");
        divLoc.classList.add("table__container__1");

        let div1Loc = document.createElement("div");
        let span1Loc = document.createElement("span");
        span1Loc.textContent = "Lifespan Years";
        let strong1Loc = document.createElement("strong");
        strong1Loc.textContent = payloads.lifespan_years !== null ? payloads.lifespan_years : "No data available";
        div1Loc.append(span1Loc, strong1Loc);

        let div2Loc = document.createElement("div");
        let span2Loc = document.createElement("span");
        span2Loc.textContent = "Epoch";
        let strong2Loc = document.createElement("strong");
        strong2Loc.textContent = payloads.epoch !== null ? payloads.epoch : "No data available";
        div2Loc.append(span2Loc, strong2Loc);

        let div3Loc = document.createElement("div");
        let span3Loc = document.createElement("span");
        span3Loc.textContent = "Mean motion";
        let strong3Loc = document.createElement("strong");
        strong3Loc.textContent = payloads.mean_motion !== null ? payloads.mean_motion : "No data available";
        div3Loc.append(span3Loc, strong3Loc);

        let div4Loc = document.createElement("div");
        let span4Loc = document.createElement("span");
        span4Loc.textContent = "Raan";
        let strong4Loc = document.createElement("strong");
        strong4Loc.textContent = payloads.raan !== null ? payloads.raan : "No data available";
        div4Loc.append(span4Loc, strong4Loc);

        let div5Loc = document.createElement("div");
        let span5Loc = document.createElement("span");
        span5Loc.textContent = "Arg of Pericenter";
        let strong5Loc = document.createElement("strong");
        strong5Loc.textContent = payloads.arg_of_pericenter !== null ? payloads.arg_of_pericenter : "No data available";
        div5Loc.append(span5Loc, strong5Loc);

        let div6Loc = document.createElement("div");
        let span6Loc = document.createElement("span");
        span6Loc.textContent = "Mean Anomaly";
        let strong6Loc = document.createElement("strong");
        strong6Loc.textContent = payloads.mean_anomaly !== null ? payloads.mean_anomaly : "No data available";
        div6Loc.append(span6Loc, strong6Loc);

        divLoc.append(div1Loc, div2Loc, div3Loc, div4Loc, div5Loc, div6Loc);
        information__table__2.append(divLoc);
    }

    // Llama a la función para crear la tabla information__table__2
    await createLocationTable(payloads);
};



export const paginationPayloads = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllPayloads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllPayloadsById)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllPayloadsById)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllPayloadsById)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}








