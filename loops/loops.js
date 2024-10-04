let i=0;
while(i<10){
    console.log("the number is :"+ i);
    i++;
}

//do while
console.log("=========== From the do_while loop ==========")
let x=0;
do{
    console.log("from do while : welcome to Mobil80" );
    x++;
}while(x<5);

// for....of.....//provides the values in array
console.log("=========== From the for..of loop ==========")
const std=[2,3,4,5,6];
for(let x of std){
    console.log(x);
}
// for ..in ....// provides the index values
console.log("=========== From the for...in loop ==========")
const std1=[2,3,4,5,6];
for(let x in std1){
    console.log(x);
}
console.log("=========== Using arrow functions ==========")
let lok= () => {
    return "hello world";
}
console.log(lok());

let lok1=()=>"Hello word.....!";
console.log(lok1());
