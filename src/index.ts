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
    } else if (typeof el === 'string') {
        console.log(el);
    } else if (Array.isArray(el)) {
        el.forEach((element: string) => {
            console.log(element);
        });
    }
};