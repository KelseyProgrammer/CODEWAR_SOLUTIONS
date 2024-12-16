// 116: Multiplication table - lvl 6
// Description:
// Your task, is to create N×N multiplication table, of size provided in parameter.
// 
// For example, when given size is 3:
// 
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
// 
// [[1,2,3],[2,4,6],[3,6,9]]
multiplicationTable = function(size) {
let table = [];
  for (let r = 1; r <= size; r++){
    let row = [];
  for (let c = 1; c <= size; c++){
    row.push(r * c); 
  }
    table.push(row);
}
  return table;
};
// 115: String cleaning - lvl 8
// Description:
// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// 
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
function stringClean(s){
  return s.replace(/\d/g, '');
 }
// 114: Welcome! - lvl 8
// Description:
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
// 
// The Task
// Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// Please modify this as appropriate for your language.
// 
// [ ("english", "Welcome")
// , ("czech", "Vitejte")
// , ("danish", "Velkomst")
// , ("dutch", "Welkom")
// , ("estonian", "Tere tulemast")
// , ("finnish", "Tervetuloa")
// , ("flemish", "Welgekomen")
// , ("french", "Bienvenue")
// , ("german", "Willkommen")
// , ("irish", "Failte")
// , ("italian", "Benvenuto")
// , ("latvian", "Gaidits")
// , ("lithuanian", "Laukiamas")
// , ("polish", "Witamy")
// , ("spanish", "Bienvenido")
// , ("swedish", "Valkommen")
// , ("welsh", "Croeso")
// ]
unction greet(language) {
	let database = {
english: "Welcome",
czech : "Vitejte",
danish : "Velkomst",
dutch : "Welkom",
estonian: "Tere tulemast",
finnish:"Tervetuloa",
flemish: "Welgekomen",
french: "Bienvenue",
german: "Willkommen",
irish : "Failte",
italian: "Benvenuto",
latvian: "Gaidits",
lithuanian: "Laukiamas",
polish: "Witamy",
spanish: "Bienvenido",
swedish: "Valkommen",
welsh: "Croeso",
}
  if (database[language]){
    return database[language]
  }else {
    return database.english;
  }
  }
// 113: Sum without highest and lowest number - lvl 8
// Description:
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// 
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// 
// Mind the input validation.
// 
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
function sumArray(array) {
  if(!Array.isArray(array) || array.length <= 2){
    return 0
  }
    let ordered = array.sort((a,b)=> a - b)
      ordered.pop()
      ordered.shift()
      return ordered.reduce((acc,curr)=> acc + curr, 0);
  }
// 112: Tribonacci Sequence - lvl 6
// Description:
// Well met with Fibonacci bigger brother, AKA Tribonacci.
// 
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// 
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// 
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// 
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
// 
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
// 
// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata
// 
// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]
function tribonacci(signature,n){
  for (let i = 0; i < n - 3; i++){
    signature.push(signature[i] + signature[i+1] + signature[i+2])
    } return signature.slice(0, n);
  }
// 111: Odd or Even? - lvl 7
// Description:
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// 
// Give your answer as a string matching "odd" or "even".
// 
// If the input array is empty consider it as: [0] (array with a zero).
// 
// Examples:
// Input: [0]
// Output: "even"
// 
// Input: [0, 1, 4]
// Output: "odd"
// 
// Input: [0, -1, -5]
// Output: "even"
// Have fun!
function oddOrEven(array) {
  const sum = array.reduce((acc, curr)=> acc +curr, 0);
   return sum % 2 === 0 ? "even" : "odd";
    };
// 110: Training JS #5: Basic data types--Object - lvl 8
// Description:
// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}
// 
// You can define the object attributes during initialization, like this:
// 
// var animal={name:"dog"}
// you can also set/get some properties after the object definition, like this:
// 
// var animal={}
// animal.name="dog"  (or animal["name"]="dog")
// Task
// Give you a function animal, accept 1 parameter:obj like this:
// 
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// 
// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// 
// In the end, click "Submit" to submit your code pass this k
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
// 109: Training JS #3: Basic data types--String - lvl 8
// Description:
// In javascript, String is one of basic data types. Use "" or '' to declare a string variable. It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..
// 
// String can use operators +, Connect two or more strings together.
// 
// Task
// misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).
// 
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// 
// misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3
// 
// If everything is right, click "Submit" again to submit your code pass this kata.


// 108: Welcome to the City - lvl 8
// Description:
// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
// 
// Example:
// 
// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
function sayHello(name, city, state) {
  const fullName = name.join(' ').replace(/,/g, '');
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
  }
// 107: Exclamation marks series #1: Remove an exclamation mark from the end of string - lvl 8
// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples
// "Hi!"     ---> "Hi"
// 
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"
function remove (string){
  if (string.endsWith('!')) {
    return string.slice(0, -1);
  }else {
    return string;
  }
 
}
//  106: How good are you really? - lvl 8
// Description:
// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((acc, curr) => acc + curr, 0); 
  let average = sum /classPoints.length
 return yourPoints > average;
 }
// 105: What's the real floor? - lvl 8
// Description:
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// 
// Write a function that given a floor in the american system returns the floor in the european system.
// 
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
// 
// Basements (negatives) stay the same as the universal level.
// 
// More information here
// 
// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3
function getRealFloor(n) {
  if (n <= 0){
    return n;
  }else if (n < 13){
    return n - 1;
  }else {
    return n - 2;
  }
}


// 104: Training JS #4: Basic data types--Array - lvl 8 
// Description:
// In javascript, Array is one of basic data types. To define an empty array, you can use var arr=new Array() or var arr=[]
// 
// Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.
// 
// Each element in the array has an index, use arr[index] to get the value of element.
// 
// index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].
// 
// If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:
// 
// var arr=[1,2,3];     //define an array arr contains elements 1 2 3
// arr.push(4);         //add element 4 to arr
// console.log(arr)     //[1,2,3,4]
// arr.pop();           //remove the last element from arr
// console.log(arr)     //[1,2,3]
// Task
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.
// 
    // 1. getLength(arr)    should return length of arr
    // 2. getFirst(arr)     should return the first element of arr
    // 3. getLast(arr)      should return the last element of arr
    // 4. pushElement(arr)  should push an element to arr, and then return arr
    // 5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// 
// In the end, click "Submit" to submit your code pass this kata.
function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr){
  var el=1;
  arr.push(el);
  
  return arr;
}
function popElement(arr){
  arr.pop();
  return arr;
}
// 103 : Break camelCase - lvl 6
// Description:
// Complete the solution so that the function will break up camel casing, using a space between words.
// 
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
  let fixed = "";
  for (let i = 0; i < string.length; i++){
    if (string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase()){
     fixed += " " + string[i];
    }else {
      fixed += string[i];
    }
  }
    return fixed;

}
// 102: Multiplication table for number - lvl 8
// Description:
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
// 
// For example, a multiplication table (string) for number == 5 looks like below:
// 
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.
// 
// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
function multiTable(num) {
  let total = '';
  for (let i = 1; i <= 10; i++) {
    total += `${i} * ${num} = ${i * num}`;
    if( i < 10){
    total += '\n'
    }
  } return total;
  
}
// 101: Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence - lvl 8
// Description:
// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// 
// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"
function replace(s){
 return s.replace(/[aeiouAEIOU]/g, "!");
}
// 100: Detect Pangram - lvl 6
// Description:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// 
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(word){
  let alpha = "abcdefghijklmnopqrstuvwxyz"
  let fixed = word.toLowerCase()
 return [...alpha].every(letter => fixed.includes(letter));
  }
// 99: A wolf in sheep's clothing: lvl 8
// Description:
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// 
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// 
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
  //  7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// 
// Note: there will always be exactly one wolf in the array.
// 
// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// 
// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
function warnTheSheep(queue) {
  queue = queue.reverse();
    for (let i = 0; i < queue.length; i++){
     if (queue[i] === "wolf"){
        if (i === 0){
         return "Pls go away and stop eating my sheep"
       }else {
         return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
       };
     }
    }
    }
// 98: Is this a triangle? - lvl 7
// Description:
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// 
// (In this case, all triangles must have surface greater than 0 to be accepted).
// 
// Examples:
// 
// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 
function isTriangle(a,b,c){
  if (a + b > c && a + c > b && b + c > a){
   return true;
}else {
   return false;
  }
}
// 97: Growth of a Population - lvl 7
// Description:
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
// 
// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// 
// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
// 
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
// 
// It will need 3 entire years.
// More generally given parameters:
// 
// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
// 
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// 
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
// 
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
// 
// There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.
function nbYear(p0, percent, aug, p) {
let years = 0;
  percent = percent / 100;
  while (p0 < p){
    p0 += Math.floor(p0 * percent + aug);
    years++
  };
  return (years);
  }
// 96: Round up to the next multiple of 5 - lvl 7
// Description:
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
// 
// Examples:
// 
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).
// 
// You can assume that all inputs are valid integers.
function roundToNext5(n){
  return Math.ceil(n/5)*5;
}
// 95: Fix String Case - lvl 7
// Description:
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// 
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// 
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!
// 
// Please also try:
// 
// Simple time difference
// 
// Simple remove duplicates
function solve(s) {
  let upperCount = 0;
  let lowerCount = 0;
   
   for(let i = 0; i < s.length; i++){
     if (s[i] === s[i].toUpperCase()){
       upperCount ++
     } else if(s[i] === s[i].toLowerCase()){
       lowerCount ++
     }
   }
   return lowerCount >= upperCount ? s.toLowerCase() : s.toUpperCase();
 }
 

// 94: Find the position - lvl 8
// Description:
// When provided with a letter, return its position in the alphabet.
// 
// Input :: "a"
// 
// Output :: "Position of alphabet: 1"
// 
// Note: Only lowercased English letters are tested
function position(letter){
  let alphabet = "0abcdefghijklmnopqrstuvwxyz"
    return `Position of alphabet: ${alphabet.indexOf(letter)}`;
    }
// 93: Grasshopper - Grade Book - lvl 8
// Description:
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// 
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3; 
  
  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}
// 92: Friend or Foe - lvl 7
// Description:
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// 
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// 
// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]
// 
// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Input strings will only contain letters. Note: keep the original order of the names in the output.
function friend(friends){
  return friends.filter((friends)=> friends.length === 4);
}
// 91: Grasshopper - Messi Goals - lvl 8
// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions
// 
// Information
// Messi goal scoring statistics:
// 
// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.
const laLigaGoals = 43
const championsLeagueGoals = 10
const copaDelReyGoals = 5
let totalGoals = 43 + 10 + 5
// 90: Disemvowel Trolls - lvl 7
// Description:
// Trolls are attacking your comment section!
// 
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// 
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// 
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// 
// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g,"");
}

// 89: Simple Fun #176: Reverse Letter - lvl 7
// Description:
// Task
// Given a string str, reverse it and omit all non-alphabetic characters.
// 
// Example
// For str = "krishan", the output should be "nahsirk".
// 
// For str = "ultr53o?n", the output should be "nortlu".
// 
// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.
// 
// [output] a string
function reverseLetter(orig){
  return orig
  .replace(/[^a-zA-Z]/g, '')
  .split('')
  .reverse()
  .join('');
}
// 88: Hex to Decimal - lvl 8
// Description:
// Complete the function which converts hex number (given as a string) to a decimal number.
function hexToDec(hexString){
  return  parseInt(hexString, 16);
 }
// 87: Square every digit - lvl 7
// Description:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// 
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// 
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// 
// Note: The function accepts an integer and returns an integer.
// 
// Happy Coding!
function squareDigits(num){
  return Number(
    String(num)
    .split('')
    .map(digit => digit ** 2)
    .join('')
  );
}


// 86: Your order please - lvl 6
// Description:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// 
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// 
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// 
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
function order(words) {
  const wordsArray = words.split(" ");

  const sortedArray = wordsArray.sort((a, b) => {
    const numA = a.match(/\d/); 
    const numB = b.match(/\d/);
    return numA - numB;       
  });

  return sortedArray.join(" ");
}
// 85: Anagram Detection - lvl 7
// Description:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// 
// Note: anagrams are case insensitive
// 
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
function isAnagram(test, original) {
  const normalize = (str)=> str.toLowerCase().replace(/\s+/g,'').split('').sort().join('');
   return normalize(test) === normalize(original);
   };
// 84: Number of People in the Bus - lvl 7
// Description:
// There is a bus moving in the city which takes and drops some people at each bus stop.
// 
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// 
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
// 
// Take a look on the test cases.
// 
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// 
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
var number = function(busStops){
  let total = 0
   
  for (let i = 0; i < busStops.length; i++){
   total += busStops[i][0]
   total -= busStops[i][1] 
 }
    return total
   }

// 83: Sum the Strings - lvl 8
// Description:
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// 
// Example: (Input1, Input2 -->Output)
// 
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
function sumStr(a,b) {
  if (a === ""){
    a = "0";
  }if(b === ""){
    b = "0";
  }
  let total = parseInt(a) + parseInt(b);
  return total.toString();
  }
// 82: Reversing Words in a String
// Description:
// You need to write a function that reverses the words in a given string. Words are always separated by a single space.
// 
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
// 
// Example (Input --> Output)
// 
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
function reverse(string){
  return string.split(' ').reverse().join(' ')
 }
// 81: Count of positives / sum of negatives - lvl 8
// Description:
// Given an array of integers.
// 
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// 
// If the input is an empty array or is null, return an empty array.
// 
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];
  
  var positive = 0;
  var negative = 0;
  
  for (var i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ positive;
    else
      negative += input[i];
  }
  
  return [positive, negative];
}
// 80: Binary Solution - lvl 7
// Description:
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// 
// The binary number returned should be a string.
// 
// Examples:(Input1, Input2 --> Output (explanation)))
// 
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
function addBinary(a,b) {
  let total = a + b
  return total.toString(2)
}
// 79: Cat years, Dog years - lvl 8
// Kata Task
// I have a cat and a dog.
// 
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// 
// Return their respective ages now as [humanYears,catYears,dogYears]
// 
// NOTES:
// 
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;
  
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears,catYears,dogYears];
}
// 78: Keep Hydrated! - lvl 8
// Description:
// Nathan loves cycling.
// 
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// 
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// 
// For example:
// 
// time = 3 ----> litres = 1
// 
// time = 6.7---> litres = 3
// 
// time = 11.8--> litres = 5
function litres(time) {
  let total = time * .5;
  return Math.floor(total);
}

// 77: Calculate BMI - lvl 8
// Description:
// Write function bmi that calculates body mass index (bmi = weight / height2).
// 
// if bmi <= 18.5 return "Underweight"
// 
// if bmi <= 25.0 return "Normal"
// 
// if bmi <= 30.0 return "Overweight"
// 
// if bmi > 30 return "Obese"
function bmi(weight, height) {
  let bodyMass = weight / (height ** 2);
if(bodyMass <= 18.5 ){
  return "Underweight";
}else if (bodyMass <= 25 ){
   return "Normal";
  }else if (bodyMass <= 30) {
return "Overweight";
    }else {
return "Obese";
      }
}
// 76: Bouncing Balls - lvl 6
// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
// 
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// 
// His mother looks out of a window 1.5 meters from the ground.
// 
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
// 
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// 
// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
// 
// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3
// 
// - h = 3, bounce = 1, window = 1.5, result is -1 
// 
// (Condition 2) not fulfilled).
// PuzzlesAlgorithmsMathematics
// Suggest kata description edits
function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let count = 1;
    h = h * bounce;
    while (h > window) {
      count += 2;
      h *= bounce;
    }
    return count; 
  } else {
    return -1;
  }
}
// 75: Is he gonna survive? - lvl 8
// Description:
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// 
// Return true if yes, false otherwise :)
function hero(bullets, dragons){
  return bullets / dragons >= 2 ? true : false
  }


// 74: Grasshopper - Terminal game combat function - lvl 8
// Description:
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
function combat(health, damage) {
  let newHealth = health - damage
 if(newHealth > 0){
   return newHealth
 }else {
   return 0
 }
 }
// 73: Total amount of points - lvl 8
// Description:
// Our football team has finished the championship.
// 
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// 
// For example: ["3:1", "2:2", "0:1", ...]
// 
// Points are awarded for each match as follows:
// 
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// 
// Notes:
// 
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
function points(games) {
  let total = 0;
  games.forEach(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}
// 72: Grasshopper - Terminal game move function - lvl 8
// Description:
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// 
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// 
// Example:
// move(3, 6) should equal 15
function move (position, roll) {
  let newPosition = roll + roll + position
  return newPosition
}

// 71: Take a 10 minute walk - lvl 6
// Description:
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// 
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
function isValidWalk(walk) {
  // Check if the walk takes exactly 10 minutes
  if (walk.length !== 10) {
    return false;
  }

  // Initialize counters for north-south and east-west directions
  let northSouth = 0;
  let eastWest = 0;

  // Iterate over the walk directions
  for (let direction of walk) {
    if (direction === 'n') northSouth += 1;
    if (direction === 's') northSouth -= 1;
    if (direction === 'e') eastWest += 1;
    if (direction === 'w') eastWest -= 1;
  }

  // Check if both northSouth and eastWest are 0 (back to the starting point)
  return northSouth === 0 && eastWest === 0;
}

// 70: Is it a palindrome? - lvl 8
// Description:
// Write a function that checks if a given string (case insensitive) is a palindrome.
// 
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the
//  same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
  let lowerCaseStr = x.toLowerCase()
  return lowerCaseStr === x.toLowerCase().split('').reverse().join('')
  }

// 69: String Repeat - lvl 8
// Description:
// Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
  return s.repeat(n);
}
// 68: Equal Sides of An Array - lvl 6
// Description:
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
// 
// If there is no index that would make this happen, return -1.
// 
// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
// 
// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
// 
// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.
// 
// Note: Please remember that in most languages the index of an array starts at 0.
// 
// Input
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
// 
// Output
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
// 
// Note
// If you are given an array with multiple answers, return the lowest correct index.
function findEvenIndex(arr) {
  let left = 0, right = arr.reduce((curr, acc) => curr + acc, 0);
  
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1];
    right -= arr[i];
    
    if (left === right) return i;
  }
  
  return -1;
}

// 67: Check the exam - lvl 7
// Description:
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

//     Correct answer    |    Student's answer   |   Result         
//  ---------------------|-----------------------|-----------
//  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") {
      continue; 
    } else if (array1[i] === array2[i]) {
      score += 4;
      } else {
        score -= 1; 
    }
  }
  return score < 0 ? 0 : score; 
}

// 66: Merge two sorted arrays into one - lvl 8
// Description:
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// 
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// 
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
// 
// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
function mergeArrays(arr1, arr2) {
  let solveArr = [...arr1,...arr2]
  solveArr = solveArr.sort((a,b)=> a-b).filter((num, index, arr) => {
    return arr.indexOf(num) === index;
  });
    return solveArr;
    }
// 65: DRINK ABOUT - lvl 8
// Description:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
// 
// Rules:
// 
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)
// 
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"
  function peopleWithAgeDrink(old) {
      if(old < 14 ){
        return "drink toddy"
      }else if(old >= 14 && old < 18){
        return "drink coke" 
      }else if(old >= 18 && old < 21){
        return "drink beer"
      }else if(old >= 21){
        return "drink whisky"
      }
  };
// 64: Sum of odd numbers - lvl 7
// 351566283% of 14,01349,075 of 162,788hhelwich
// JavaScript
// Train AgainNext Kata
// Details
// Solutions
// Forks (24)
// Discourse (729)
// Translations
// Fork|Collect|
// Description:
// Given the triangle of consecutive odd numbers:
// 
          //  1
      //   3     5
  //    7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 
// 1 -->  1
// 2 --> 3 + 5 = 8
function rowSumOddNumbers(n) {
  return n**3
   }

//   63: Sort numbers - lvl 7
//    Description:
//   Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

//   For example:

//   solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//   solution(null); // should return []   
   
function solution(nums) {
      if (!Array.isArray(nums) || nums === null) {
        return [];
      }
      
      return nums.slice().sort((a, b) => a - b);
    }
// 62: Square(n) Sum - lvl 8
// Complete the square sum function so that it squares each 
// number passed into it and then sums the results together.
function squareSum(addEm) {
  return addEm.reduce((sum, num) => sum + num ** 2, 0);
}

//   61: Vowel remover - lvl 8
// Description:
//   Create a function called shortcut to remove the lowercase
//    vowels (a, e, i, o, u ) in a given string.
function shortcut (string) {
  return string.replace(/[aeiou]/g, '');
}

// 60: Plural - lvl 8
// Description:
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
// 
// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
// 
// All values will be positive integers or floats, or zero.
function plural(n) {
  return n != 1 ? true : false
}

// 59: Will there be enough space? - lvl 8
// Description:
// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// 
// Task Overview:
// You have to write a function that accepts three parameters:
// 
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
function enough(cap, on, wait) {
  let availableSpace = cap - on 
  if(availableSpace >= wait){
    return 0;
  }else{
    return wait - availableSpace
  }
    }
// 58: Beginner - Reduce but Grow - lvl 8 
function grow(x){
  return x.reduce((acc,cur) => acc*cur, 1);
  }
// 57: Beginner - Reduce but Grow - lvl 8
// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// 
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
  return x.reduce((acc,cur) => acc*cur, 1);
  }
// 56: Beginner Series #4 Cockroach - lvl 8
// Description:
// The cockroach is one of the fastest insects. Write a function 
// which takes its speed in km per hour and returns 
// it in cm per second, rounded down to the integer (= floored).
function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600); 
  }
// 55:Grasshopper - Basic Function Fixer - lvl 8
// Description:
// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
// 
// Can you help me fix the function?
function addFive(num) {
  var total = num += 5
  return num
}
// 54: Find Multiples of a Number - lvl 8
// Description:
// In this simple exercise, you will build a program that takes a value, 
// integer , and returns a list of its multiples up to another value, limit . 
// If limit is a multiple of integer, it should be included as well. There will only ever 
// be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
// 
// For example, if the parameters passed are (2, 6), the function 
// should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
function findMultiples(int, limit) {
  let result = []
  for(let i = int; i <= limit; i+= int)
    result.push(i)
  
  return result
}

// 53: Reverse Order List - lvl 8
// Description:
// In this kata you will create a function that takes in a 
// list and returns a list with the reverse order.
function reverseList(list) {
  return list.reverse()
 }

// 52: Transportation on vacation - lvl 8
// Description:
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// 
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// 
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// 
// Write a code that gives out the total amount for different days(d).
function rentalCarCost(d){
  if(d >= 3 && d < 7){
   return  40 * d - 20 
 }else if(d >= 7){
   return 40 * d - 50
 }else if(d > 1 && d < 3 ){
   return 40 * d 
 }else{
   return 40
 }
   };

// 51: The highest profit wins! - lvl 7
// Description:
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// 
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// 
// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// 
function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)];
}
// 50: Third Angle of a Triangle - lvl 8
// Description:
// You are given two interior angles (in degrees) of a triangle.
// 
// Write a function to return the 3rd.
// 
// Note: only positive integers will be tested.
// 
// https://en.wikipedia.org/wiki/Triangle
function otherAngle(a, b) {
  let c = 180 - (a + b);
  return c
}
// 49: Remove String Spaces - lvl 8
// Description:
// Write a function that removes the spaces from the string, then return the resultant string.
function noSpace(x){
  return x.replace(/\s+/g, '');
}
// 48: Convert a string to an array - lvl 8
// Description:
// Write a function to split a string and convert it into
//  an array of words.
function stringToArray(string){
  return string.split(' ');
  }
// 47: Is it even? - lvl 8
// Description:
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
  return n % 2 === 0 ? true : false;
   }

// 46: Sort and Star - lvl 8

// Description:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.
function twoSort(s) {
  s.sort()
  let firstString = s[0];
  let fixedString = firstString.split('').join('***');
  return fixedString
}

// 45: Opposites Attract - lvl 8
// Description:
// Timmy & Sarah think they are in love, but around where they live, they will 
// only know once they pick a flower each. If one of the flowers has an even number of 
// petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower
// and return true if they are in love and false if they aren't.
// 
function lovefunc(flower1, flower2){
  return (flower1 % 2 !== flower2 % 2)
  }

// 44: Count by X - lvl 8
// Description:
// Create a function with two arguments that will return an array of the first n multiples of x.
// 
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// 
// Return the results as an array or list ( depending on language ).
function countBy(x, n) {
  let z = [];
  for(i = 1; i <= n; i++){
    z.push(x * i);
  }
   return z;
}
// 43: You Can't Code Under Pressure #1 - lvl 8
// Code as fast as you can!
//  You need to double the integer and return it.
function doubleInteger(i) {
  return i*2
}

// 42: List Filtering - lvl 7
// Description:
// In this kata you will create a function that takes a list of non-negative 
// integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter(item => typeof item === 'number');
    }

// 41: Mumbling - lvl 7
// Description:
// This time no story, no theory. The examples below show you how
//  to write function accum:

function accum(s) {
	let letters = s.split(''), words = [];
  
  for(let i = 0; i < letters.length; i++){
    words.push(letters[i].toUpperCase() + Array ( i + 1).join(letters[i].toLowerCase()));
}

return words.join('-')
}
// 40: Categorize New Member - lvl 7
// Description:
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// 
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// 
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// 
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
function openOrSenior(data){
  return data.map(([age,handicap]) => (age >= 55 && handicap > 7 )? "Senior": "Open");
  
  }
// 39: Ones and Zeroes - lvl 7
// Description:
// Given an array of ones and zeroes, convert the equivalent binary 
// value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);;

// 38: Keep up the hoop - lvl 8 
// Description:
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.
// 
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:
// 
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount (n) {
  return n >= 10 ? "Great, now move on to tricks":"Keep at it until you get it"
 };

// 37: Testing 1-2-3 - lvl 7
// Description:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// 
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// 
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
const number = array => array.map((n, i) => `${i + 1}: ${n}`);

// 36: Sum of two lowest integers - lvl 7
// Description:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
function sumTwoSmallestNumbers(numbers) {  
  let sum = numbers.sort((a,b) => a - b);
   return sum [0] + sum [1]
 }
// 35: Are You Playing Banjo? - lvl  8
// Description:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// 
// The function takes a name as its only argument, and returns one of the following strings:
function areYouPlayingBanjo(name) {
  return name.charAt(0) === "R" || name.charAt(0) === "r" 
    ? `${name} plays banjo`
    : `${name} does not play banjo`; 
}
// 34: Will you make it? - lvl 8
// Description:
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// 
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// 
// Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
  };

  // 33: Five without numbers! - lvl 8
  // Description:
  // Write a function that always returns 5
  // 
  // Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
  // 
  // Good luck :)
  function unusualFive() {
    return 'aaaaa'.length;
 }

// 32: Find the first non-consecutive number - lvl 8
// 
// Description:
// Your task is to find the first element of an array that is not consecutive.
// 
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// 
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// 
// If the whole array is consecutive then return null2.
// 
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// 
// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
// 
// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
// 
// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int) (See options)
// 
function firstNonConsecutive (arr) {
  for(i = 1; i < arr.length; i++){
  if(arr[i] - arr[i - 1] !== 1) return arr [i];
    }
  return null;
  }
// 31: Super Duper Easy - lvl 8
// Description:
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
// 
const problem = x => typeof x === 'string' ? 'Error': x * 50 + 6;

// 30: Filter out the geese - lvl 8
// Description:
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// 
// The geese are any strings in the following array, which is pre-populated in your solution:
// 
  // ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
// 
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// 
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let filteredBirds = birds.filter((b) => !geese.includes(b));
  return filteredBirds;
}   
// 29: Grasshopper - Personalized Message - lvl 8
// Description:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// 
// Use conditionals to return the proper message:
// 
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
function greet (name, owner) {
  return name === owner ? 'Hello boss': 'Hello guest'
 }
// 28: Name Shuffler - lvl 8
// Description:
// Write a function that returns a string in which firstname is swapped with last name.
// 
// Example(Input --> Output)
// 
// "john McClane" --> "McClane john"
function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
 } 
 
//  27: Removing Elements - lvl 8
//  Description:
//  Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//  
//  Example:
//  ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
 
//  None of the arrays will be empty, so you don't have to worry about that! 
function removeEveryOther(arr){
  let newArr = []
  for(i = 0; i < arr.length; i += 2){
    newArr.push(arr[i]);
}
  return newArr
  }

// 26: Find the smallest integer in the array - lvl 8
// Description:
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
function findSmallestInt(arr) {
  arr.sort((a,b) => a-b);
   return arr[0];
 }
// 25: Fake Binanry - lvl 8
// Description:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// 
// Note: input will never be an empty string
function fakeBin(x){
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
// 24: Remove First and Last Character - lvl 8
// Description:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
function removeChar(str){
  return str.slice(1, -1);
  };
// 23: Double Char - lvl 8
// Description:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// 
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
const doubleChar = (str) => str.split("").map(c => c + c).join("");
// 22: Function 2 - squaring an argument - lvl 8
// Description:
// Now you have to write a function that takes an argument and returns the square of it.
const square = (n) => n * n;
// 21: What is between - lvl 8
// Description:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// 
// For example:
// 
// a = 1
// b = 4
// --> [1, 2, 3, 4]
function between(a, b) {
  let arr = []

  for(i = a; i <= b; i++){
    arr.push(i)
  }
    return arr
}
// 20: Grasshopper - Debug sayHello - lvl 8
// Description:
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// 
// Example output:
// 
// Hello, Mr. Spock
function sayHello(name) {
  return `Hello, ${name}`;
}
// 19: Grasshopper - Check for factor - lvl 8
// Description:
// This function should test if the factor is a factor of base.
// 
// Return true if it is a factor or false if it is not.
// 
// About factors
// Factors are numbers you can multiply together to get another number.
// 
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// 
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// 
// Note: base is a non-negative number, factor is a positive number.
function checkForFactor (base, factor) {
  return base % factor === 0 ? true : false;
 }
// 18: Function 1 - hello world - lvl 8
// Description:
// Make a simple function called greet that returns the most-famous "hello world!".
// 
// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? 
// What is a "hello world" solution you would want to show your friends?
function greet(){
  return 'hello world!';
}
// 17: Find Maximum and Minimum Values of a List - lvl 8
// Description:
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.
// 
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

var min = function(list){
  list.sort((a , b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a , b) => (b - a));
    return list[0];
}
// 16: Beginner Series #1 School Paperwork - lvl 8
// Description:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// 
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// 
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}
// 15: Parse nice int from char problem - lvl 8
// Description:
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// 
// Write a program that returns the girl's age (0-9) as an integer.
// 
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString){
  return parseInt(inputString);
 }
// 14: Quarter of the year - lvl 8
// Description:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// 
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// 
// Constraint:
// 
// 1 <= month <= 12
const quarterOf = (month) => {
  if(month <= 3){
    return 1
   }
   else if(month <= 6){
     return 2
   }
   else if(month <= 9){
     return 3
   }
   else if(month <= 12){
     return 4
   }
};
// 13: Twice as old - lvl 8
// Description:
// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
// The answer is always greater or equal to 0, no matter if it was
//  in the past or it is in the future.
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
 }
// 12: MakeUpperCase - lvl 8
// Description:
// Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
  return str.toUpperCase();
}
// 11: Return Negative - lvl 8
// Description:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  return -Math.abs(num);
}
// 10: Thinkful - Logic Drills: Traffic light - lvl 8
// Description:
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// 
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// 
// For example, when the input is green, output should be yellow.
function updateLight(current) {
  return current === 'yellow' ? 'red': current === 'green' ? 'yellow': 'green';

}
// 9: Volume of a Cuboid - lvl 8
// Description:
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
  static getVolumeOfCuboid(length, width, height) {
  return length * width * height;
  }
}
// 8: Abbreviate a Two Word Name - lvl 8
// Description:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// 
// The output should be two capital letters with a dot separating them.
// 
// It should look like this:
// 
// Sam Harris => S.H
// 
// patrick feeney => P.F
function abbrevName(name){
 
  var nameArray = name.split(" ");
 
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
// 7: Convert a Boolean to a String - lvl 8
// Description:
// Implement a function which convert the given boolean value into its string representation.
// 
// Note: Only valid inputs will be given.
function booleanToString(b){
  return b.toString();
  }
// 6: Convert boolean values to strings 'Yes' or 'No'. - lvl 8
// Description:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
  return bool ? "Yes": "No";
}
// 5: Simple multiplication - lvl 8
// Description:
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(n) {
  return n % 2 === 0 ? n * 8 : n * 9
 }
// 4: Opposite number - lvl 8
// Description:
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
//  
// Examples:
//  
//  1: -1
//  14: -14
//  -34: 34
function opposite(number) {
  return - number
}
// 3: A Needle in the Haystack - lvl 8
// Description:
// Can you find the needle in the haystack?
// 
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// 
// After your function finds the needle it should return a message (as a string) that says:
// 
// "found the needle at position " plus the index it found the needle, so:
// 
// Example(Input --> Output)
// 
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
// 2: Convert a Number to a String! - lvl 8
// Description:
// We need a function that can transform a number (integer) into a string.
// 
// What ways of achieving this do you know?
// 
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"
function numberToString(num) {
  return num.toString()
}
// 1: Even or Odd - lvl 8
// Description:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  if(number % 2 ===0){
    return "Even"
  }else{
    return "Odd"
  }
    
 }






 







  

