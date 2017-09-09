//prints numbers between a range.
var count = 0;
while (count < 100){
    console.log("count is: " + count);
    count++;
}

// loop for printing every char of a string.
var str = prompt("Enter a word");
var count = 0;

while ( count < str.length){
    console.log(str[count]);
    count++;
}

// Exercise 1 - printing out every 2 numbers.
var num = 1;

while(num <= 10){
    console.log(num);
    num += 2;
    // prints out odd numbers ie 1, 3, 5, 7 and 9.
}

// Exercise 2 - prints out numbers divisible by 4 with no remainder
var num = 1;

while ( num <= 20){
    if(num % 4 === 0 ){
        console.log(num);
    }
    num++;
    // starting with 1, if number is divisible by 4 with 0 remainder - checks for multiples of 4.
}

// Exercise 3
var num = 100;

while ( num < 150){
    console.log(num + 1);
    num--;
    // as long as num is less than 150, it will print the num+1, and then take away (--).
    // only 100 will print - repeatedly for an infinite loop.
}
