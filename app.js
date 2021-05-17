// Create Dino Constructor
function Dino(species, weight, height, facts) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.facts = facts;
    this.image = "images/" + species.toLowerCase() + ".png";
}
Dino.prototype.addFact = function (fact) {
    this.facts.push(fact);
};

    // Create Dino Objects
//let dino = new Dino();

    // Create Human Object

// Use IIFE to get human data from form
function getHuman() {
    return (function () {
        let name = getInputValue("name");
        let heightFeet = parseFloat(getInputValue("feet"));
        let heightInches = parseFloat(getInputValue("inches"));
        let weight = parseFloat(getInputValue("weight"));
        // 12 inch = 1 feet
        return new Dino('human', weight, heightFeet * 12 + heightInches);
    })();
}

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", function(){
    const human = getHuman();
    console.log(human);
});
function getInputValue(elementId) {
    return document.getElementById(elementId).value;
}