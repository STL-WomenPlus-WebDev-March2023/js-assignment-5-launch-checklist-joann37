// Write your JavaScript code here!  

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");
    
window.addEventListener("load", function() {
    let form = document.querySelector("form");
        
    form.addEventListener("submit", function(event) {
        
            let pilotName = document.querySelector("input[name=pilotName]").value;
            let copilotName = document.querySelector("input[name=copilotName]").value;
            let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
            let cargoMass = document.querySelector("input[name=cargoMass]").value;
            let list = document.getElementById("faultyItems");
            formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
            event.preventDefault();
        })
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log (result);
    

   }).then(function () {
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   let favPlanet = pickPlanet(listedPlanets);

   addDestinationInfo(document, favPlanet.name, favPlanet.diameter, favPlanet.star, favPlanet.distance, favPlanet.moons, favPlanet.image);
    })