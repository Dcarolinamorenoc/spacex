import {
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal
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
        color = 'blue';
    } else {
        color = 'green';
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

