let txt="lokesh kumar";
let len=txt.length;
console.log("The length of the String is : "+len);

let input=window.prompt("please enter your Name:");
let lt=input.length;
console.log("user name length is :"+ lt);

let part=txt.slice(0,6);
console.log("Part of 1st String is :" + part);

let txt2="I am working in Mobil80 . welcome to Mobil80";
let txt3=txt2.replace("Mobil80","Tcl");
console.log(txt2);
console.log("Replaced String is :"+ txt3);

let txt4=txt2.replace(/Mobil80/g, "HCL");//to replace all matched strings /string/g
console.log(txt4);

let txt5=txt2.replace(/mobil80/i, "HCL"); //to avoid case sensitive /string/i
console.log(txt5);

let txt6=txt2.replaceAll("Mobil80","Pentagon");
console.log(txt6);

let txt7=txt2.toUpperCase();
console.log(txt7);

let txt8=txt7.toLowerCase();
console.log(txt8);

let txt9="         Lokesh kumar         ";
console.log(txt9);
let len1=txt9.length;
console.log("the original length is :"+ len1);
let txt10=txt9.trim();
console.log(txt10);
let len2=txt10.length;
console.log("length after trim : "+len2);

let txt11=txt9.trimEnd();
let len3=txt11.length;
console.log("EndTrim Length is :"+ len3);

let x="9";
let y=x.padStart(4,"0");
console.log("Start padding : "+y);

let z=x.padEnd(4,"0");
console.log("End padding is :"+ z);

// extracting a string  charAt(position)
//charCodeAt(position)
//Property access [ ]

let ext1="Pentagon_space is located in Vijaynagar";
let eg1=ext1.charAt(0);
console.log(eg1);

let eg2=ext1.charCodeAt(5);
console.log(eg2);

// convert string to array using split

let eg3=ext1.split(" ");
let eg4=eg3[2];
console.log(eg4);

