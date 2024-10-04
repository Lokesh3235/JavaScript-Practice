const arr=["lokesh","Jhon"];
let txt=arr[1];
console.log(txt);
document.getElementById("1").innerHTML=txt;

arr[1]="micheal";
let txt1=arr[1];
console.log(txt1);

console.log(arr);

const cars=new Array("Toyato","MG","TT");
console.log(cars);
// changing array element
cars[1]="jhon";
console.log(cars);

// length

let size=cars.length;
console.log(size);

// joins
let ex=cars.join(" * ");
console.log(ex);

let ex2=arr.join(" $ ");
console.log(ex2);

// push() & pop() methods

cars.pop();  // removes the last element
console.log(cars);

cars.pop([0]);// prints only 0 index element
console.log(cars);

cars.push("Mobil80","Pentagon_space");
console.log(cars);

cars.shift();//removes 1st element or 0 index element
console.log(cars);

cars.unshift("Mango");// adds element at the 1st index value
console.log(cars);

cars[3]="Lokesh";// adding elements at desired index value
console.log(cars);

delete cars[3];  // deletes the element at index 3 and leaves the empty white_spaces
console.log(cars);

// concat() method used to combine 2 arrays and returns new array
const conarr=arr.concat(cars);
console.log(conarr);

const  fruits=["mango","apple","goa"];
const conarr2=conarr.concat(fruits);
console.log(conarr2);

//flat() method
//  its creates new array by merging all the sub_arrays into single array

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

console.log(myArr);
console.log(newArr);

// splice()

conarr2.splice(0,2 ,"Vijay","Naveen");
console.log(conarr2);



