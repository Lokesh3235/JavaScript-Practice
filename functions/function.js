//getting increment ,dec and rest buttons on web_page using functions.

let num=0;
document.getElementById("dec").onclick=function(){
    document.getElementById("count").innerHTML=num -=1;
}
document.getElementById("reset").onclick=function(){
    document.getElementById("count").innerHTML=num=0;
}
document.getElementById("inc").onclick=function(){
    document.getElementById("count").innerHTML=num +=1;
}

//let l=20; b=30;
function Area(){
    let l=10;
    let b=10;
    return l*b;
}
let  area=Area();
document.getElementById("a").innerHTML= "area of rectangle is :" + area;
console.log("Area of rectangle is :" + area);
//console.log(l); // can not be printed as l is declared as let and its block variable
//let Len=window.prompt("enter the length");
//Len=Number(Len);
//let wd=window.prompt("enter the width:");
//wd=Number(wd);
//let z=Len*wd;
//console.log("Area is :" + z);


function Sum(a,b){
    return a+b;
}
let add=Sum(10,20);
document.getElementById("s").innerHTML="The sum is: " + add;


// diplayin date using html button & providing function to that button

document.getElementById("date").onclick=function(){
    document.getElementById("d").innerHTML=Date();
}

//providing function to button to get details on web page

document.getElementById("details").onclick=function(){
    document.getElementById("fname").innerHTML="First Name : Lokesh";
    document.getElementById("lname").innerHTML="Last Name : Kumar";
    document.getElementById("age").innerHTML="Age : 22 years";
    document.getElementById("gender").innerHTML="Gender :Male";
}

// getting details from user_end and printing on web_page

document.getElementById("inputdetails").onclick=function(){
    let N=window.prompt("enter Fisrt Name:");
    document.getElementById("infname").innerHTML="First Name :" + N;
    let L=window.prompt("enter Last Name:");
    document.getElementById("inLname").innerHTML="Last  Name :" + L;
    let young =window.prompt("enter Age:");
    document.getElementById("inage").innerHTML="Age is :" + young;
    let Gender=window.prompt("enter your Gender :");
    document.getElementById("inG").innerHTML="Gender :" + Gender;
}