class House{
    static type="Furnish..."
    constructor(loc){
    this.loc=loc
    }
    present(){
        return "My House is in "+" "+this.loc
    }

}
class Room extends House{
    constructor(loc,no){
        super(loc)
        this.no=no
    }
    show(){
        return this.present()+" It have  "+this.no
    }
}
let r=new Room("Gokhle Nagar",4);
console.log(r.show())