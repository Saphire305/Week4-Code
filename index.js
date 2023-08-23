
//          Question 1

console.log(`   -Question 1-
--------------------`);

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages[ages.length - 1] - ages[0]); //Subtracts the first element with the last element of the array.
ages.push(25); //Adds 25 to the end of the array, changing the length of the array.
console.log(ages[ages.length - 1] - ages[0]); //Proves this syntax works with different length arrays.

let allAges = 0;
for(let age of ages){
    allAges += age;
} //Adds all elements from the ages array together.

console.log(allAges / ages.length); //Logs out the averages of all elements in the ages array.

//          Question 2

console.log(`   -Question 2-
--------------------`);

let names = [`Sam`, `Tommy`, `Tim`, `Sally`, `Buck`, `Bob`];

let numOfLetters = [];
for(let name of names){
    numOfLetters.push(name.length);
} //This loop adds the length of each string in the names array to the numOfLetters array.
// console.log(numOfLetters);

let allNumOfLetters = 0;

for(let num of numOfLetters){
    allNumOfLetters += num;
} //This loop adds the length of each string in the names array together.
console.log(allNumOfLetters / names.length); //This logs out the average number of letters in each string from the names array.

let allNames = ``;

for (let name of names){
    allNames += `${name} `;
} //This loop concatinates all names together with a space into a single string.
console.log(allNames);

//          Question 3

console.log(`   -Question 3-
--------------------`);

/* 
Q: How do you access the last element of any array?

A: You can use .length to find the last element of an array. ie: this.length - 1
*/

//          Question 4

console.log(`   -Question 4-
--------------------`);

/*
Q: How do you access the first element of any array?

A: you can access the first element of an array by utilizing 0 index. ie: this[0]
*/

//          Question 5

console.log(`   -Question 5-
--------------------`);

let nameLengths = [];
for(let name of names){
    nameLengths.push(name.length);
} //This loop pushes the length of each name in the names array to the new nameLengths array.
console.log(nameLengths);

//          Question 6

console.log(`   -Question 6-
--------------------`);

let numOfNameLengths = 0;
for(let num of nameLengths){
    numOfNameLengths += num;
} //This loop adds together the length of each name in the names array.
console.log(numOfNameLengths);

//          Question 7

console.log(`   -Question 7-
--------------------`);

const something = (word, n) => {
    let newWord = ``;
    for(let i = 0; i < n; i++){
        newWord += word;    
    } //This loop concatinates the desired word or words the desired number of times.
    return newWord
} //This function uses the loop to concatinate.
console.log(something(`Hello`, 3));

//          Question 8

console.log(`   -Question 8-
--------------------`);

const createFullName = (firstName, lastName) => console.log(`${firstName} ${lastName}`); //This function takes a first and last name and concatinates it with a space.
createFullName(`Billy`, `Bob`)

//          Question 9

console.log(`   -Question 9-
--------------------`);

const isMoreThan100 = arr => {
    let sum = 0;
    for(let x of arr){
        sum += x;
    } //This loop adds all elemnts of an array together.
    if(sum > 100){
        return true;
    } else{
        return false;
    } //This if statement returns true if all elements in an array add up to more than 100.
} //This function checks if all elements in an array equal more than 100.
console.log(isMoreThan100([2, 8, 3, 40]));
console.log(isMoreThan100([25, 30, 22, 48, 30, 100]));

//          Question 10

console.log(`   -Question 10-
--------------------`);

const avgOfArr = arr => {
    let sum = 0;

    for(let num of arr){
        sum += num;
    } //This loop adds all elements of an array together.

    return sum / arr.length;
} //This function returns the average of all elements in an array.

console.log(avgOfArr([10, 72, 45, 42, 3, 91]));

//          Question 11

console.log(`   -Question 11-
--------------------`);

const avgIsMore = (arr1, arr2) => {
    let sum1 = 0;
    let sum2 = 0;

    for(let num of arr1){
        sum1 += num;
    } //This loop adds all elements in the first array.
    for(let num of arr2){
        sum2 += num;
    } //This loop add all elements in the second array.
    sum1 /= arr1.length; //This calculates the average of all elements in array 1.
    sum2 /= arr2.length; //This calculates the average of all elements in array 2.
    if (sum1 > sum2){
        return true;
    }else {
        return false;
    } //This checks if the average of array 1 is greater than the average of array 2.
}

console.log(avgIsMore([5, 8, 10], [10,15,20]));

//          Question 12

console.log(`   -Question 12-
--------------------`);

const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if(isHotOutside === true && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    } //This checks if the "customer" will buy a drink based on if it is hot outside and if they have enough money.
}

console.log(willBuyDrink(true, 1568));

//          Question 13

const addElements = arr => {
    let sum = 0;

    for(let num of arr){
        sum += num;
    }
    return sum;
}

/* 
This function takes all elements of an array and adds them together.

I created this function beceause I noticed that I was retyping the same code in
previous questions. If this function was initialized at the beginning of the project,
I could save myself so many lines of code and it would look a lot cleaner.
*/