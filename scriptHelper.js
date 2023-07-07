// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageURL) {
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
                <img src="${imageURL} ">
         `;
         document.getElementById("missionTarget").innerHTML = mTarget;
} 


window.addEventListener("load", function() {
    let form = document.querySelector("form");
        
    form.addEventListener("submit", function(event) {
        
            let pilotName = document.querySelector("input[name=pilotName]").value;
            let copilotName = document.querySelector("input[name=copilotName]").value;
            let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
            let cargoMass = document.querySelector("input[name=cargoMass]").value;

            event.preventDefault();
    formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);

        })
    });

function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (testInput === ""){
        return "Empty";

    } else if (isNaN(testInput)) {
        return "Is not a number";

    } else if (!isNaN(testInput )) {
        return "Is a number";
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
   if (pilotV === "Is a number") {
        alert("Pilot must be a name!");
        return;
   }
   if (copilotV === "Is a number") {
        alert("Co-Pilot must be a name!");
        return;
    }
   if (fuelLevelV === "Is not a number") {
        alert("Fuel Level must be a number!");
        return;
    }
   if (cargoMassV === "Is not a number") {
        alert("Cargo Mass must be a number!");
        return;
    }


document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is now ready for shuttle launch`;
document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot} is now ready for shuttle launch`;

if (fuelLevel < 10000) {
    document.getElementById("fuelStatus").innerHTML = "Fuel level is too low for shuttle launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle NOT ready for launch";
    document.getElementById("launchStatus").innerHTML.style.color = "red";
    list.style.visibility = "visible";

} else {
    document.getElementById("fuelStatus").innerHTML = "Fuel level is suffient for shuttle launch";

 }
if (cargoMass > 10000) {
    document.getElementById("cargoStatus").innerHTML = "Too much mass for shuttle launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle NOT ready for launch";
    document.getElementById("launchStatus").innerHTML.style.color = "red";
    list.style.visibility = "visible";


} else {
    document.getElementById("cargoStatus").innerHTML = "Cargo Mass is suffient for launch";

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
    let index = Math.floor(Math.random()* planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
