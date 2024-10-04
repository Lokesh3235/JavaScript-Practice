alert("----hi-----");
alert("ur welcome")


let userfName=window.prompt("please enter your first name:");
console.log('UserName is :'+userfName);
document.getElementById("l").innerHTML="First Name is:"+ userfName;
//document.getElementById("n").innerHTML="the sum of above variables is:"+ a +".";

let userlName=window.prompt("please enter your last name:");
console.log("Last name is:"+ userlName);
document.getElementById("n").innerHTML="Last name :" + userlName;

let age=window.prompt("please enter your age:");
console.log("Age:"+ age);
document.getElementById("k").innerHTML="Age :" + age;

let clgName;
document.getElementById("clg").onclick = function(){
    clgName =document.getElementById("lok").value;
    console.log("college name :" + clgName);
}

console.log("To find area of rectangle is: L*b ")
let length=window.prompt("enter length of the rectangle: "); //taking input from user
length=Number(length);  // type conversion from string to number
console.log("length is :" + length);
let breath=window.prompt("enter width of the rectangle: ");
breath=Number(breath);   // type conversion from string to number
console.log("breath is:" + breath);
let area =length * breath;
console.log("Total area :" + area);