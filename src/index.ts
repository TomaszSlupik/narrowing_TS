// Type of

// 1 przykład  
const numberOrString = (el: string | number) => {
    if (typeof el === "string") {
        console.log('To jest string')
    }
    if (typeof el === "number") {
        console.log('To jest number')
    }
}

numberOrString(10)

// 2 przykład 
const stringOrNull = (el: string | null) => {
    if (!el) {
        console.log('To jest null');
    } 
    else {
        for (let x of el) {
            console.log(x)
        }
    }  
};

stringOrNull(null)

// 3 przykład 
function someDemo (x: string | number, y: string | boolean) {
    if (x === y) {
        console.log( x.toUpperCase())
        console.log(y.toUpperCase())
    }
}

someDemo('trzy', 'trzy')

// Operator IN - "The in Operator"
interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodDuration: number
}

function getRunTime (movie: Movie | TVShow) {
    if ("numEpisodes" in movie) {
        console.log(movie.numEpisodes * movie.episodDuration) 
    }
        console.log(movie)
}

getRunTime({title: 'Shrek', duration: 120})
getRunTime({title: 'Harry Potter', numEpisodes: 80, episodDuration: 60})

// funckja - Instance of
function printAllDate (date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString()) 
    }
    else {
        console.log('To jest String')
    }
}

printAllDate(new Date())


// class - Instance of
class User {
    constructor(public username: string){}
}

class Admin {
    constructor(public name: string) {}
}

function printName (entity: User | Admin) {
    if (entity instanceof User) {
        console.log(entity)
    }
    else {
        console.log(entity)
    }
}

printName({name: 'Filip'})


// Type predicates
interface Cat {
    name: string, 
    age: number
}

interface Dog {
    fast: boolean,
    big: boolean
}

function isCat (ageCat: Cat | Dog): ageCat is Cat {
    return (ageCat as Cat).age !== undefined 
}

function choiceAnimals (animal: Cat | Dog) {
    if (isCat(animal)) {
        console.log(animal) 
    }
    else {
        console.log(animal)
    }
}

choiceAnimals({fast: true, big: true})

// Unions 
interface Rooster {
    name: string,
    age: number, 
    weight: number, 
    kind: "rooster"
}

interface Cow {
    name: string,
    age: number,
    weight: number, 
    kind: "cow"
}

interface Pig {
    name: string,
    age: number,
    weight: number, 
    kind: "pig"
}

type FarAnimal = Rooster | Cow | Pig

function choiceFarAnimals (animal: FarAnimal) {
    switch (animal.kind){
        case ("rooster"):
            console.log('kogut')
        case ("cow"):
            console.log('krowa')
        case ("pig"):
            console.log("świnia")
        default:
            console.log('Zwierzęta')
    }
}

const cowAnimal: FarAnimal = {
    name: 'Krowa',
    age: 2,
    weight: 50,
    kind: "cow"
}

choiceAnimals(cowAnimal)

// 2 przykład - Unions
interface Giantbike {
    name_bike: string,
    age_bike: number, 
    kind_bike: "giant"
}

interface Trekbike {
    name_bike: string,
    age_bike: string,
    kind_bike: "trek"
}

type Bike = Giantbike | Trekbike

function bikeChoice (bike: Bike) {
    switch(bike.kind_bike) {
        case ("trek"):
            console.log('Wybrałeś rower trek')
        case ("giant"):
            console.log("Wybrałeś Gianta")
        default:
            return 'Rower'
    }
}

bikeChoice({
    name_bike: "giant",
    age_bike: 2,
    kind_bike: "giant"
})

// 3 przykład - Unions
interface Weathergood {
    weather: string,
    long: boolean, 
    inscription: "pogoda_Ok"   
}

interface Weatherbad {
    weather: string, 
    long: boolean, 
    inscription: "pogoda_nie"
}

type Weather = Weathergood | Weatherbad 

function weatherChoice (weatherArguments: Weather) {
    switch(weatherArguments.inscription) {
        case "pogoda_Ok":
            console.log("Pogoda jest super")
        case "pogoda_nie":
            console.log("Pogoda jest zła")
        default:
            return '----'
    }
}

weatherChoice({weather: "Słonecznie",
long: true,
inscription: "pogoda_Ok"})