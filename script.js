window.addEventListener("load", function() {
        
    let button = document.getElementById("formSubmit");
        
    button.addEventListener("click", function(event) {
        event.preventDefault();

            let pilotName = document.querySelector("input[name=pilotName]").value;
            let copilotName = document.querySelector("input[name=copilotName]").value;
            let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
            let cargoMass = document.querySelector("input[name=cargoMass]").value;
            let list = document.getElementById("faultyItems");
            //list.style.visibility = "hidden";
            

            formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);

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
            
    });
});