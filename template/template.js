let user="Lokesh";
let age=23;

console.log(`Your name is: ${user} and  your ${age} old`);

let txt=`Your name is: ${user} and  your ${age} old`;

console.log(txt);

// adding breaks 

let txt1=`Your name is: ${user} <br> And  your : ${age} old.`;

document.getElementById("1").innerHTML=txt1;

let num=123456;
//num=num.toLocaleString("en-US");
console.log(num.toLocaleString("en-US"));


// promises

const promise=new Promise((a,b)=>{
    let file=false;
    if(file){
        a(`file is saved`);
    }else{
        b(`filed is deleted`);
    }
});
promise.then(value=>console.log(value)).catch(error=>console.log(error));


const Lokesh=new Promise(()=>{
    let age1=23;
    let height=4.6;
    return age1>18 && height >5 ? console.log("your_allowed"):console.log("not_allowed")});
Lokesh.then(value=>console.log(value)).catch(error=>console.log(error));

let p1=window.prompt("enter the your name:");
let p2=window.prompt("enter the your age:");
//fun1();
function fun1(){
    p2>18 && p1!=" " ? console.log("The user is adult"):console.log("The user is too young")
}

const jhon=new Promise(fun1);

   // p2>18 && p1!=" " ? console.log("The user is adult"):console.log("The user is too young")

//});
jhon.then(value=>console.log(value)).catch(error=>console.log(error));


console.log(" =====using async &  await========");
console.log(">>>>  async: makes the function to behave as promise ");
console.log("await : consuming promise without then()& catch().")
async function Sandy(){
    let non=true;
    if(non){
        return "Sandy is on the way"
    }else{
        throw "Lokesh is on the way"
    }
    }
    async function s1(){
        try{
        let message=await Sandy(); /// await has to be used inside async function only
        console.log(message);
        }
        catch(error){
            console.log(error);
        }
    }
    s1();
   // Sandy().then(value=>console.log(value)) .catch(error=>console.log(error));



const promise1=new Promise((resolve,reject)=>{
    let a=20;
    if(a>18){
        resolve("He is good to go")}
        else{
            reject("cant go")
        }
    });

    promise1
        .then(value=>console.log("the Result is :" ,value))
        .catch(error=>console.log("the error is:",error));


        /*{"emply":[
            {"fname":"Lokesh","Lname":"Kumar"},
        {"fname":"Jhon","Lname":"micheal"},
        {"fname":"Sandy","Lname":"Mumineni"},
        {"fname":"Anjali","Lname":"Kanagala"}]}
