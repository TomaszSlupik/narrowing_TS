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