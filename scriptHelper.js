// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
        let mTarget = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src= "${imageUrl} ">
         `;
         document.getElementById("missionTarget").innerHTML = mTarget;
}


function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (testInput === "") {
        return "Empty";

    } else if (isNaN(testInput)) {
        return "Not a Number";

    } else {
        return "Is a Number";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
   let pilotV = validateInput(pilot);
   let copilotV = validateInput(copilot);
   let fuelLevelV = validateInput(fuelLevel);
   let cargoMassV = validateInput(cargoMass);

   if (pilotV === "Empty" || copilotV === "Empty" || fuelLevelV === "Empty"|| cargoMassV === "Empty") {
        alert("All fields are required!!");
        return;
   }
   if (pilotV === "Is a Number") {
        alert("Pilot must be a name!");
        return;
   }
   if (copilotV === "Is a Number") {
        alert("Co-Pilot must be a name!");
        return;
    }
   if (fuelLevelV === "Not a Number") {
        alert("Fuel Level must be a number!");
        return;
    }
   if (cargoMassV === "Not a Number") {
        alert("Cargo Mass must be a number!");
        return;
    }


document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is now ready for shuttle launch`;
document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot} is now ready for shuttle launch`;

if (fuelLevel < 10000) {
    document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    document.getElementById("launchStatus").innerHTML.style.color = "red";
    list.style.visibility = "visible";

} else {
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";

 }
if (cargoMass > 10000) {
    document.getElementById("cargoStatus").innerHTML = "Too much mass for shuttle launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    document.getElementById("launchStatus").innerHTML.style.color = "red";
    list.style.visibility = "visible";


} else {
    document.getElementById("cargoStatus").innerHTML = "Cargo Mass low enough for launch";

 }
if (fuelLevel >= 10000) {
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    document.getElementById("launchStatus").innerHTML.style.color = "green";
    list.style.visibility = "hidden";
 }
if (cargoMass <= 10000) {
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    document.getElementById("launchStatus").innerHTML.style.color = "green";
    list.style.visibility = "hidden";
 }   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPick = Math.floor(Math.random()* planets.length);
    return planets[randomPick];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
