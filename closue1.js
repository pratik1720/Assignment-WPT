function makeAdd(x){
    return function(y)  
    {return x+y;}
    
    
}
const add5=makeAdd(5);
const add7=makeAdd(7);
const add10=makeAdd(10);
console.log(add5(2))
console.log(add7(3))
console.log(add10(5))