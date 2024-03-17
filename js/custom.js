

function Hamburger(TypeOfBun, Vegetables, Sauces, Patty,NumberOfPatties,Addons) {
    typeofbun = TypeOfBun;
    vegetables = Vegetables;
    sauces = Sauces;
    patty = Patty;
    numberofpatties = NumberOfPatties;
    addon = Addons;
    this.order = function () {
        return " Order is "+ typeofbun +"bun with " + " Vegies are " + vegetables + " sauces are " + sauces + " patties " + patty + numberofpatties + "addons " + addon ; 
    };
}

let hamburgerobject = new Hamburger("white",["lettuece","onions","tomatoes"],"Garlic","Veggie","2","feta cheese");

console.log(hamburgerobject.order());