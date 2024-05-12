import {
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal,
    // getAllRocketData,
    // fetchRocketData
} from "../modules/rockets.js";


export const informRocketEngineThrustSeaLevel = async (thrust_sea_level) => {
    let { kN: totalKN } = await getAllRocketEngineTotal();
    let percentage = (thrust_sea_level.kN * 100) / totalKN;
    let div = document.createElement('div');
    div.classList.add("carousel__item");
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    let color = '';
    if (percentage < 30) {
        color = 'red';
    } else if (percentage < 70) {
        color = 'yellow';
    } else {
        color = 'purple';
    }
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage}%, transparent 0)`;
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    let strong = document.createElement('strong');
    strong.textContent = "Atmospheric acceleration";
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_sea_level.kN);
    let lbf = new Intl.NumberFormat('cop').format(thrust_sea_level.lbf);
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(div);
};



export const informRocketEngineThrustVacuum = async (thrust_vacuum) => {
    let { kN: totalKN } = await getAllRocketEngineThrustVacuumTotal();
    let percentage = (thrust_vacuum.kN * 100) / totalKN;
    let div = document.createElement('div');
    div.classList.add("carousel__item");
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    let color = '';
    if (percentage < 30) {
        color = 'red';
    } else if (percentage < 70) {
        color = 'blue';
    } else {
        color = 'green';
    }
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage}%, transparent 0)`;
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    let strong = document.createElement('strong');
    strong.textContent = "Speed in space";
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_vacuum.kN);
    let lbf = new Intl.NumberFormat('cop').format(thrust_vacuum.lbf);
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.append(div);
};


// export const informRocketData = async () => {
//     let { totalRockets, activeRockets } = await getAllRocketData();
//     let div = document.createElement('div');
//     div.classList.add("carousel__item");
//     let divFirst = document.createElement('div');
//     divFirst.classList.add("item__progress__bar");
//     let percentage = (totalRockets * 100) / totalRockets;
//     let color = 'blue';
//     divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage}%, transparent 0)`;
//     let divFirstChildren = document.createElement('div');
//     divFirstChildren.classList.add("progress__value");
//     let strong = document.createElement('strong');
//     strong.textContent = "Total Rockets";
//     let smallFirst = document.createElement('small');
//     smallFirst.textContent = `${percentage.toFixed(2)} %`;
//     let smallLast = document.createElement('small');
//     smallLast.innerHTML = `${totalRockets}`;
//     divFirstChildren.append(strong, smallFirst, smallLast);
//     divFirst.append(divFirstChildren);
//     div.append(divFirst);
//     document.getElementById('section__information__q').append(div);
//     div = document.createElement('div');
//     div.classList.add("carousel__item");
//     divFirst = document.createElement('div');
//     divFirst.classList.add("item__progress__bar");
//     percentage = (activeRockets * 100) / totalRockets;
//     color = 'orange';
//     divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage}%, transparent 0)`;
//     divFirstChildren = document.createElement('div');
//     divFirstChildren.classList.add("progress__value");
//     strong = document.createElement('strong');
//     strong.textContent = "Active Rockets";
//     smallFirst = document.createElement('small');
//     smallFirst.textContent = `${percentage.toFixed(2)} %`;
//     smallLast = document.createElement('small');
//     smallLast.innerHTML = `${activeRockets}`;
//     divFirstChildren.append(strong, smallFirst, smallLast);
//     divFirst.append(divFirstChildren);
//     div.append(divFirst);
//     document.getElementById('section__information__w').append(div);
// };


// export const displayRocketData = async () => {
//     let rocketInformation = await fetchRocketData();
    
//     // Función para crear un elemento de progreso
//     const createProgressElement = (title, percentage, total) => {
//         let div = document.createElement('div');
//         div.classList.add("carousel__item");
//         let divFirst = document.createElement('div');
//         divFirst.classList.add("item__progress__bar");
//         let color = percentage > 0 ? 'blue' : 'orange';
//         divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(${color} ${percentage.toFixed(2)}%, transparent 0)`;
//         let divFirstChildren = document.createElement('div');
//         divFirstChildren.classList.add("progress__value");
//         let strong = document.createElement('strong');
//         strong.textContent = title;
//         let smallFirst = document.createElement('small');
//         smallFirst.textContent = `${percentage.toFixed(2)} %`;
//         let smallLast = document.createElement('small');
//         smallLast.innerHTML = `${total}`;
//         divFirstChildren.append(strong, smallFirst, smallLast);
//         divFirst.append(divFirstChildren);
//         div.append(divFirst);
//         return div;
//     };

//     // Calcular información de boosters y stages
//     let boostersTotal = rocketInformation.reduce((acc, rocket) => acc + rocket.boosters, 0);
//     let boostersActive = rocketInformation.filter(rocket => rocket.boosters > 0).length;
//     let percentageBoosters = (boostersActive * 100) / boostersTotal;

//     let stagesTotal = rocketInformation.reduce((acc, rocket) => acc + rocket.stages, 0);
//     let stagesActive = rocketInformation.filter(rocket => rocket.stages > 0).length;
//     let percentageStages = (stagesActive * 100) / stagesTotal;

//     // Crear elementos de progreso para boosters y stages
//     let divBoosters = createProgressElement("Boosters", percentageBoosters, boostersTotal);
//     let divStages = createProgressElement("Stages", percentageStages, stagesTotal);

//     // Agregar elementos al DOM
//     document.getElementById('section__information__s').append(divBoosters);
//     document.getElementById('section__information__d').append(divStages);
// };


