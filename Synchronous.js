let arr=[12,15,76,99]
arr.forEach((ele,ind,a)=>{console.log(ele)
console.log(ind)
console.log(a)
});

let odd=arr.map(function(ele){if(ele%2!=0){return ele} else{return 0}})
console.log(odd)
let even=arr.filter(function even(ele){
    if(ele%2==0){
        return true;
    }
    return false;
})
console.log(even)