console.log("connected");

// Write a function that prints even numbers up to a given parameter ie: printEven(50)
function printEven(value) {
    for (let i = 0; i < value; i +=2) {
        console.log(i);
    }
}
printEven(7)

// Write a function that prints the fibonacci sequence to a given length
function fibonacci(value) {
    let i = 0;
    let fibonacci_current = 1;
    let fibonacci_prev = 0;
    while (i < value) {
        console.log(fibonacci_current);
        let temp = fibonacci_current;
        fibonacci_current = fibonacci_current + fibonacci_prev;
        fibonacci_prev = temp;
        i += 1;
    }
}
fibonacci(7)

// Write a function that prints the average of an array
function average(myArray) {
    let tot = 0;
    for (let i = 0; i < myArray.length; i ++) {
        tot += myArray[i];
    }

    console.log(tot/myArray.length);
}
average([1, 2, 3, 4, 4, 6, 1]) // answer should be 3

// Write a function that prints the maximum number of an array
function myMax(myArray) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < myArray.length; i ++) {
        if (myArray[i] > maxNum) {
            maxNum = myArray[i]
        }
    }
    console.log(maxNum);
}
myMax([1, 7, 4, 5, 9, 1, 13, 5, 10, 8])
myMax([-1, -3, -8, -6, -4])

// Write a function that prints the minimum number of an array
function myMin(myArray) {
    let minNum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < myArray.length; i ++) {
        if (myArray[i] < minNum) {
            minNum = myArray[i]
        }
    }
    console.log(minNum);
    return minNum;
}
myMin([3, 7, 4, 5, 9, 2, 13, 5, 10, 8])
myMin([-1, -3, -8, -6, -4])

// Write a function that returns the number of vowels in a string
// town.charAT(index)
function numVowels(myString) {
    let tot = 0;
    for (let i = 0; i < myString.length; i ++) {
        let letter = myString.charAt(i).toUpperCase();
        if (letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U') {
            tot ++;
        }
    }
    console.log("tot is: " + tot);
}
numVowels("AEIOU");
numVowels("I love chocolate") // 7

// Write a function to add 2 numbers
function addTwoNums(num1, num2) {
    console.log(num1 + num2);
}

// Write a function to multiply 2 numbers
function multiplyTwoNums(num1, num2) {
    console.log(num1*num2);
}
multiplyTwoNums(2, 3);


// Write a function that takes in a city name and returns the city postal code 
// not sure about that one since I don't know how to access a list of cities and postal
// codes (but could theoretically use a switch statement and enter some entries manually)


// Given an array of strings, write a function to sort them alphabetically
function mySort(myArray) {
    console.log(myArray.sort()); // already a javascript function
}

mySort(["A","Q","Z","E","B","D","C"])

// Given an array of numbers, write a function to sort them in either ASC or DESC order
// there's probably already a funcion for this as well but going to try and write it myself
function ascendingOrder(myArray) {
    let newArray = [];
    while (myArray.length > 0) {
        let minNum = myMin(myArray);
        newArray.push(minNum);
        console.log(minNum);

        let index = myArray.indexOf(minNum);
        myArray.splice(index, 1); // remove one item only
    }
    console.log(newArray);
}
ascendingOrder([4,2,9,3,0,8,2]);

// Write a function that reverses a number, ie: takes in 1234, returns 4321
function reverseNumber(num) {
    // this function only works for 4 digit numbers -- I wasn't sure how to get it to be more flexible
    let newFirstNum = (num%10)*1000;
    let newSecondNum = Math.floor((num%100)/10)*100;
    let newThirdNum = Math.floor((num%1000)/100)*10;
    let newLastNum = Math.floor((num%10000)/1000);
    
    let newNum = newFirstNum + newSecondNum + newThirdNum + newLastNum;
    console.log("newNum: " + newNum);
}
reverseNumber(4321);

// Write a function that capitalises each word in a string
function capitalizeEachWord(myString) {
    myString = myString[0].toUpperCase() + myString.slice(1);
    for (let i = 1; i < myString.length; i++) {
        if (myString[i] == " ") {
            myString = myString.slice(0, i+1) + myString[i+1].toUpperCase() + myString.slice(i+2);
        }
    }
    console.log("mystring: " + myString);
}
capitalizeEachWord("hey there girly pop");


// Write a function that returns the number of occurrences of a letter in a string, ie: returnOccurances(‘because’ , ‘e’) returns 2
function returnOccurances(word, letter) {
    let tot = 0;
    let index = word.indexOf(letter);
    while (index != -1) {
        tot += 1;
        word = word.slice(0, index) + word.slice(index + 1);
        index = word.indexOf(letter);
    }
    console.log("tot: " + tot);
    return tot;
}
returnOccurances("because", "e");

// Given an array of strings, filter that array for a given string
function stringFilter(myArray, myString) {
    let newArray = myArray.filter((x) => x === myString);

    console.log(newArray);
}
stringFilter(["hello", "hi", "bye"], "bye");


// Given an array of numbers, filter that array for a given number
function numFilter(myArray, num) {
    let newArray = myArray.filter((x) => x === num);

    console.log(newArray);
}
stringFilter([3, 4, 2, 1], 1);

// Given an array of objects, filter that array by an objects id value
function objectFilter(myArray, objectID) {
    let newRandomArray = myArray.filter((x) => x.id === objectID);
    
      console.log(newRandomArray);
}

let myArray = [
    {
      name: 'Cam',
      id: 'slay'
    },
    {
      name: 'Michelle',
      id: 'slay more'
    },
    {
      name: 'John',
      id: 'slay too hard'
    },
  ];

objectFilter(myArray, 'slay more');


// Given an array of objects, write a function that returns an object by id
function objectFilter(myArray, objectID) {
    let objectFound = myArray.find((x) => x.id === objectID);

    console.log(objectFound);

    return objectFound;
}

objectFilter(myArray, 'slay too hard')

// Write a function that prints todays date 
function todaysDate() {
    let todaysDate = new Date();

    let day = todaysDate.getDate();

    let month = todaysDate.getMonth() + 1;

    let year = todaysDate.getFullYear();

    console.log(`${month}/${day}/${year}`);
}
todaysDate();

// Given an array of objects, Write a function that checks if an object contains a value that is higher then 10, return a new array with all the objects that pass the test
function greaterThanTen(myArray) {
    let newArray = myArray.filter((x) => x.goalsScored > 10);

    console.log(newArray);

    return newArray;
}

let randomObjectArray = [
    {
      name: 'Cam',
      surname: 'Kirkpatrick',
      goalsScored: 5,
    },
    {
      name: 'Michelle',
      surname: 'Visser',
      goalsScored: 11,
    },
    {
      name: 'John',
      surname: 'Doe',
      goalsScored: 25,
    },
  ];

  let greaterArray = greaterThanTen(randomObjectArray);