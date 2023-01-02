//E - Task

console.log('train task ishga tushdi! ');

let calculator = {};

calculator.kopaytirish = (a, b) => {
return a * b ;
};
calculator.bolish = (a, b) => {
    return a / b ;
};
calculator.qoshish = (a, b) => {
    return a + b ;
};
calculator.ayirish = (a, b) => {
    return a - b ;
};
calculator.default = (a, b) =>{
    
    if (a===0 & b===0){
        console.log("not valid to operate");
    }
};



const result = calculator.kopaytirish(12,2);
console.log("result:", result);

const result2 = calculator.bolish(12,2);
console.log("result2:", result2);

const result3 = calculator.qoshish(12,2);
console.log("result3:", result3 );

const result4 = calculator.ayirish(12,2);
console.log("result4:", result4);

const result5 = calculator.default(1,0);
console.log("result5", result5);