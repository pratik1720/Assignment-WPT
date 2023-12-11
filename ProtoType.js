function Employee(i,n,d){
    this.name=n
    this.jobId=i
    this.jobD=d
}
Employee.prototype.getDetails=function (){
    return this.jobD+" "+this.jobId+" "+this.name
}
var s1=new Employee(1,"pratik","Developer")
var s2=new Employee(2,"kunal","Developer")
console.log(s1.getDetails(),Object.getPrototypeOf(s1))
console.log(s2.getDetails(),Object.getPrototypeOf(s2))
if(Object.getPrototypeOf(s1)==Object.getPrototypeOf(s2)){
    console.log("ProtoType are in same location")
}
else{
    console.log("differnt...")
}
console.log(s1)
console.log(s2)

let obj={name:"pratik", age:23}
let pro1={job:"student",charcter:"Aggressive"}
let pro2={hobby:"Reading tech stuuf", ExtraCurricular:"Read manga"}
Object.setPrototypeOf(obj,pro1)
Object.setPrototypeOf(pro1,pro2)
console.log(
    Object.getPrototypeOf(obj),
    Object.getPrototypeOf(pro1),
    Object.getPrototypeOf(pro2)
)
console.log(obj.hobby)