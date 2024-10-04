const num=[10,50,80,100,99,18,8];
console.log(num.sort());

console.log(" Sorted in ascending order: "+ num.sort(function(a,b){
    return a-b;
}));

/* <script>
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>"; */


num.forEach(myfun);

function myfun(lok){
    console.log("element :" + lok);
}

num.forEach(nofun);

function nofun(value,index){
    console.log("index is: " + index + "  element is :"+value);
}

/*const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);*/

console.log(num.flatMap((x)=>x*2));

console.log(num.map(fun));

function fun(value){
    return value*2;
}

console.log(num.filter(fun2));

function fun2(value,index){
    return value >20;
}
console.log(num);

const student=Array.from("lokesh");  // create a array from string
console.log(student);

let keys=student.keys(); // creates an array Iterator
console.log(keys);
for(let x of keys){
    console.log(x);
}

let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log(day);

///switch_case

  let x=0;
  let txt;
  switch(x){
    case 0:
        txt="The Light is in OFF condition";
        break;
    case 1:
    txt="The Light is ON condition";
    break;
    default:
        txt="no action is found";
  }
  console.log(txt);
