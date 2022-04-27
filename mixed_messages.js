const house_colour = ["blue", "green", "grey", "yellow", "red", "purple", "black", "white", "rainbow"];
const house_type = ["villa", "modern", "brick", "hay", "mansion", "apartment", "penthouse", "boat", "car"];
const family = ["cat", "dog", "kid", "hamster", "alligator"];
const car = ["ferrari", "toyota", "motorbike", "bike", "bus card", "legs"];


const houseColourNum =  Math.floor(Math.random() * 9);
const houseTypeNum = Math.floor(Math.random() * 9);
const familyNum = Math.floor(Math.random() * 5);
const carNum = Math.floor(Math.random() * 6);

console.log("Today I will predict your future...");
console.log("Through looking into your eyes I am able to predict four aspects of your future");
console.log("The first is that you will live in a " + house_colour[houseColourNum] + " " + house_type[houseTypeNum] + ".");
console.log("I predict a fammily with " + Math.floor(Math.random() * 10) + " " + family[familyNum] + "'s.");
console.log("To get you around town you will use your " + car[carNum]);
