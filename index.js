let services = [
    { name: "Wash",
    price: 10
    },
    { name: "Lawn",
    price: 20
    },
    { name: "Weed",
    price: 30
    },
]

const middleContainerBtn = document.getElementById("middle-container")
const washBtn = document.getElementById("wash-btn");
const lawnBtn = document.getElementById("lawn-btn")
const weedsBtn = document.getElementById("weeds-btn")
const bottomContainer = document.getElementById("bottom-container")
const renderTask = document.getElementById("display-bill")
const lawnDisplay = document.getElementById("display-billlawn")
const weedDisplay = document.getElementById("display-weedbill")
const bottomPage = document.getElementById("bottom-page")
const displayTotal = document.getElementById("display-total")
const sendInvoiceBtn = document.getElementById("sendinvoice-btn")

let calTotal = 0;
function washCar(){
    let resultI = document.createElement("p");
    let resultInvoice = document.createElement("p");
    resultI.innerHTML = services[0].name;
    resultInvoice.innerHTML = services[0].price;
    renderTask.appendChild(resultI);
    renderTask.appendChild(resultInvoice);
    this.disabled = true;
    calculateSum(services[0].price);
}

function lawnCar(){

    let resultL = document.createElement("p");
    let resultLawn = document.createElement("p");
    resultL.innerHTML = services[1].name;
    resultLawn.innerHTML = services[1].price;
    lawnDisplay.appendChild(resultL);
    lawnDisplay.appendChild(resultLawn);
    this.disabled = true;
    calculateSum(services[1].price);
}
function weedsCar(){

    let resultW = document.createElement("p");
    let resultWeed = document.createElement("p");
    resultW.innerHTML = services[2].name;
    resultWeed.innerHTML = services[2].price;
   /* weedsBtn.appendChild(resultW)
    weedsBtn.appendChild(resultWeed);
    */
    weedDisplay.appendChild(resultW);
    weedDisplay.appendChild(resultWeed);
    this.disabled = true;
    calculateSum(services[2].price);
}
function calculateSum(a){
    calTotal+= a;
    displayTotal.innerHTML = calTotal;
}
 function sendInvoice(){
    renderTask.innerHTML=""
    lawnDisplay.innerHTML=""
    weedDisplay.innerHTML=""
    lawnBtn.disabled = false;
    weedsBtn.disabled = false;
    washBtn.disabled = false;
    displayTotal.innerHTML ="";
    calTotal = 0;
    
}