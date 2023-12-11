function set(s){
    let cnt=s;
     function inc(){
       return ++cnt;
    }
    return inc;
}
let count1=set(5);

console.log(count1(),count1(),count1())
cnt=1000;
let count99=set(99);
console.log(count99(),count99(),count99())