"use strict";
// Type of
// 1 przykład  
const numberOrString = (el) => {
    if (typeof el === "string") {
        console.log('To jest string');
    }
    if (typeof el === "number") {
        console.log('To jest number');
    }
};
numberOrString(10);
// 2 przykład 
const stringOrNull = (el) => {
    if (!el) {
        console.log('To jest null');
    }
    else {
        for (let x of el) {
            console.log(x);
        }
    }
};
stringOrNull(null);
// 3 przykład 
function someDemo(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    }
}
someDemo('trzy', 'trzy');
function getRunTime(movie) {
    if ("numEpisodes" in movie) {
        console.log(movie.numEpisodes * movie.episodDuration);
    }
    console.log(movie);
}
getRunTime({ title: 'Shrek', duration: 120 });
getRunTime({ title: 'Harry Potter', numEpisodes: 80, episodDuration: 60 });
// funckja - Instance of
function printAllDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log('To jest String');
    }
}
printAllDate(new Date());
// class - Instance of
class User {
    constructor(username) {
        this.username = username;
    }
}
class Admin {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        console.log(entity);
    }
    else {
        console.log(entity);
    }
}
printName({ name: 'Filip' });
function isCat(ageCat) {
    return ageCat.age !== undefined;
}
function choiceAnimals(animal) {
    if (isCat(animal)) {
        console.log(animal);
    }
    else {
        console.log(animal);
    }
}
choiceAnimals({ fast: true, big: true });
function choiceFarAnimals(animal) {
    switch (animal.kind) {
        case ("rooster"):
            console.log('kogut');
        case ("cow"):
            console.log('krowa');
        case ("pig"):
            console.log("świnia");
        default:
            console.log('Zwierzęta');
    }
}
const cowAnimal = {
    name: 'Krowa',
    age: 2,
    weight: 50,
    kind: "cow"
};
choiceAnimals(cowAnimal);
function bikeChoice(bike) {
    switch (bike.kind_bike) {
        case ("trek"):
            console.log('Wybrałeś rower trek');
        case ("giant"):
            console.log("Wybrałeś Gianta");
        default:
            return 'Rower';
    }
}
bikeChoice({
    name_bike: "giant",
    age_bike: 2,
    kind_bike: "giant"
});
function weatherChoice(weatherArguments) {
    switch (weatherArguments.inscription) {
        case "pogoda_Ok":
            console.log("Pogoda jest super");
        case "pogoda_nie":
            console.log("Pogoda jest zła");
        default:
            return '----';
    }
}
weatherChoice({ weather: "Słonecznie",
    long: true,
    inscription: "pogoda_Ok" });
