let first_array = ["orange", "apple"];
let second_array = first_array;
second_array[1] = 'banana';
console.log(first_array);
console.log(second_array);

let a = 1;
let b = a;
b = 5;
console.log(a);
console.log(b);

// shallow copy

const xarray=[1,2,3,4,5];
console.log(xarray);
const yarray=xarray;
console.log("inside y array:",yarray);
const zarray=[...xarray,6];
console.log(zarray);
//console.log(xarray);
console.log(xarray===yarray);
console.log(xarray===zarray);
console.log(yarray===zarray);

//nested array

const narray=[...xarray,[10,20,30,40]];
console.log(narray);
xarray[0]=100;
xarray.push("lokesh");
console.log(xarray);
