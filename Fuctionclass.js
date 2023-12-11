function Emp(n,c){
  this.name=n;
  this.cat=c;
  this.show =function(){
    console.log(this.name +this.cat)
  }
}
let e=new Emp("pratik","Developer")
console.log(e.show())