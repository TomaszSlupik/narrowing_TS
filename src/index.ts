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

// Instance of
function printAllDate (date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString()) 
    }
    else {
        console.log('To jest String')
    }
}

printAllDate(new Date())