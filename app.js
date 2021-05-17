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
Dino.prototype.compareNameAndAddFact = function (name) {
    let fact = "Our names are on equal position.";
    if (this.name > name) {
        fact = "My name comes first in dictionary.";
    } else if (this.name < name) {
        fact = "Your name comes first.";
    }
    this.addFact(fact);
};

Dino.prototype.compareWeightAndAddFact = function (weight) {
    let fact = "Our weights are same.";
    if (this.weight > weight) {
        fact = "Yay! i weight more :P.";
    } else if (this.weight < weight) {
        fact = "You are Fat :P.";
    }
    this.addFact(fact);
};

Dino.prototype.compareHeightAndAddFact = function (height) {
    let fact = "Our heights are equal.";
    if (this.height > height) {
        fact = "My hight is greater then yours.";
    } else if (this.height < height) {
        fact = "You are really tall bro.";
    }
    this.addFact(fact);
};

Dino.prototype.getRandomFact = function () {
    let index = Math.floor(Math.random() * 10) % this.facts.length;
    return this.facts[index];
};

let dinos = [];
fetch("dino.json")
    .then(response => response.json())
    .then(data => dinos = data.Dinos.map(dino => new Dino(dino.species, dino.weight, dino.height, [dino.fact, `My species is ${dino.species}.`, `I belong to ${dino.where}.`, `My when value is ${dino.when}.`])))

// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", function(){
    const human = getHuman();
    dinos.forEach(dino => {
        dino.compareHeightAndAddFact(human.height);
        dino.compareNameAndAddFact(human.name);
        dino.compareWeightAndAddFact(human.weight);
    });

    document.getElementById("dino-compare").style.display = "none";
});
function getInputValue(elementId) {
    return document.getElementById(elementId).value;
}