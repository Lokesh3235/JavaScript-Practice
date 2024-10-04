
function t0_check_palindrom(input){
    const input_palindrome = String(window.prompt("Enter the input number"));

    const rev_input = input_palindrome.split('').reverse().join('');
    if(input_palindrome === rev_input){
        console.log("its a palindrome number :" + input_palindrome);
    }else{
        console.log("Its not a palindrome number:" + input_palindrome);
    }

    console.log("SPLITTTINg number :" + input_palindrome.split());

    console.log("split and Reverse :"+ input_palindrome.split('').reverse());

    console.log("check :"+ rev_input);

}
t0_check_palindrom();


function check_number(){
    let number_check = String(window.prompt("Enter the input :"));

    let new_string = number_check.split('').reverse().join('');

    if(number_check ===  new_string){
        console.log("its a palindrome number :" + new_string);

    }else{
        console.log("its not a palindorme number:"+ new_string);
    }
}

check_number();

function generate_prime_numbers(){
    const isPrime = new Array(limit+ 1).fill(true);

    isPrime[0]=false;
    isPrime[1]=false;

    for(let i = 2; i<=Math.sqrt(limit);i++){
        if(isPrime[i]){
            for(let j = i; j <=limit; j+=1){
                isPrime[j]=false;
            }
        }
    }
const primes=[];
for(let i = 2; i <=  limit; i++){
    if(isPrime){
        primes.push(i);
    }
}
return primes;

}


const limit = 50;
const primeNumbers = generate_prime_numbers(limit);
console.log(`Prime numbers up to ${limit}:`, primeNumbers);