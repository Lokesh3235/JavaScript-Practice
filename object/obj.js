//obj : mutliple values can be assigned to obj

//created object
const Human={name:"Lokesh",lName:"Kumar", Age:23 ,Gender:"male"};

document.getElementById("demo").innerHTML="First Element in Obj is :"+ Human.name;
console.log(Human.name);

Human.city="bnglr";
Human.pin=560057;
//to access the elements of obj and print on console
//          syntacx: obj_name.variable_name

console.log("Full Name:"+ Human.name + " "+Human.lName);
console.log(Human);// to print entire obj on the console.

//>>>>>>>>>> To print entire object on web_page <<<<<<<<<<<<<<<<<<<<<

let output=JSON.stringify(Human);// to covert obj to string and store in variable "output"
document.getElementById("ob").innerHTML="Created object is:" + " "+ output;

// 2 ways of accessing the properties of object

console.log("o/p using dot function :"+ Human.name);
console.log(Human["name"]);

//>>>>>>    obj can contain functions  <<<<<<<<

const Lokesh={name:"Ramu",age:45,gender:"Male",details:function(){
    return this.name + " is"+" "+ this.age+" " + "years old men."
}};
console.log(Lokesh.details());
console.log(Lokesh);
document.getElementById("lok").onclick=function(){
    document.getElementById("bobj").innerHTML=Lokesh.details();
};

//>>>>>>>writting constructor<<<<<<<<<<
function Laptop(Name,Ram,Storage,processor){
    this.Name=Name;
    this.Ram=Ram;
    this.Storage=Storage;
    this.processor=processor;
    this.work=function(){
        console.log("These are the specifications of Laptops");
    }
}

let lap1=new Laptop("Dell","16Gb","556Gb","i5");
console.log(lap1);

let lap2=new Laptop("Dell","18Gb","1Tb","i7");
console.log(lap2);
//Laptop.work="its working perfectly."

let output1=JSON.stringify(lap1);
document.getElementById("of").innerHTML=output1;
console.log(lap1.work());