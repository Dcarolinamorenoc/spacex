import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";
import { 
    nameRockets 
} from "./title.js";
import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket
} from "./information.js";
import { 
    tableRocketColum1, 
    tableRocketColum2
} from "./tables.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum
} from "./inform.js";
import { 
    imageRockets 
} from "./card.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "../modulesComponents/progressBar.js";



const getRocketsId = async(e)=>{
    e.preventDefault();
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";

    let Rocket = await getAllRocketsId(e.target.id);
    console.log(Rocket);

    await informationRockets(Rocket.country, Rocket.description)
    await nameRockets(Rocket.name)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
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
export const paginationRockets = async () => {
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    rockets.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = id + 1;
        a.addEventListener("click", getRocketsId);
        a.addEventListener("click", function() {
            // Remover todas las clases de color de fondo del cuerpo
            document.body.classList.remove("background-color1", "background-color2", "background-color3", "background-color4");
            // Agregar la clase correspondiente al color de fondo según el índice
            if (id === 0) {
                document.body.classList.add("background-color1");
            } else if (id === 1) {
                document.body.classList.add("background-color2");
            } else if (id === 2) {
                document.body.classList.add("background-color3");
            } else if (id === 3) {
                document.body.classList.add("background-color4");
            }
        });
        div.appendChild(a);
    });

    let [a1, a2, a3, a4] = div.children;
    a1.click(); // Hacer clic en el tercer enlace por defecto

    return div;
}

// export const paginationRockets = async () => {
//     let rockets = await getAllRockets();
//     let div = document.createElement("div");
//     div.classList.add("button__pagination");

//     rockets.forEach((val, id) => {
//         let a = document.createElement("a");
//         a.setAttribute("href", "#");
//         a.id = val.id;
//         a.textContent = id + 1;
//         a.addEventListener("click", getRocketsId);
//         a.addEventListener("click", function() {
//             // Remover todas las clases de gradiente del cuerpo
//             document.body.classList.remove("gradient1", "gradient2", "gradient3", "gradient4");
//             // Agregar la clase correspondiente al gradiente según el índice
//             if (id === 0) {
//                 document.body.classList.add("gradient1");
//             } else if (id === 1) {
//                 document.body.classList.add("gradient2");
//             } else if (id === 2) {
//                 document.body.classList.add("gradient3");
//             } else if (id === 3) {
//                 document.body.classList.add("gradient4");
//             }
//         });
//         div.appendChild(a);
//     });

//     let [a1, a2, a3, a4] = div.children;
//     a3.click(); // Hacer clic en el tercer enlace por defecto

//     return div;
// }