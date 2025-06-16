// 250: Alphabet symmetry - lvl 7
// Description:
// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
// 
// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
// 
// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.
// 
// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
// 
// Good luck!
function solve(arr){  
  var alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
};
// 249: ASCII Total - lvl 8
// Description:
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
function uniTotal(str) {
  return str.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
}
// 248: The Office I - Outed - lvl 7
// Description:
// Your colleagues have been looking over your shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.
// 
// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
// 
// Given an object ( meet ) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
// 
// Happiness rating will be total score / number of people in the room.
// 
// Note that your boss is in the room ( boss ). Their score is worth double its face value (but they are still just one person!).
function outed(meet, boss) {
  let total = 0;
  let count = 0;

  for (let person in meet) {
    count++;
    if (person === boss) {
      total += meet[person] * 2;
    } else {
      total += meet[person];
    }
  }

  const average = total / count;
  return average <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
// 247: pick a set of first elements - lvl 8
// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
// 
// If n == 0 return an empty sequence []
function first(arr, n) {
  if (n === undefined) {
    return [arr[0]]; 
  }
  return arr.slice(0, n); 
}
// 246: Training JS #18: Methods of String object--concat() split() and its good friend join() - lvl 8
function splitAndMerge(str, sp) {
  return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}
// 245: Find out whether the shape is a cube - lvl 8
// Description:
// To find the volume (centimeters cubed) of a cuboid you use the formula:
// 
// volume = Length * Width * Height
// 
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
// 
// It's up to you to find out whether the cuboid could have equal sides (could be a cube).
// 
// Return true if the cuboid could have equal sides, return false otherwise.
// 
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
// 
// Note: side will be an integer
function cubeChecker(volume, side) {
  if (volume <= 0 || side <= 0) return false;
  return side ** 3 === volume;
}
// 244: ES6 string addition - lvl 8
// It is easy to join two strings together like this string1 + string2.
// 
// Another way to get the desired result would be with string1.concat(string2)
// 
// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
// 
// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!If one of the arguments is a number your code must coerce it into being a string.
// 
function joinStrings(string1, string2){
  return `${string1} ${string2}`;
 }
// 243: Ordered Count of Characters - lvl 7
// Description:
// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
// 
// Consult the solution set-up for the exact data structure implementation depending on your language.
// 
// Example:
// 
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
function orderedCount(text) {
  const counts = {};
  const result = [];

  for (const char of text) {
    if (counts.hasOwnProperty(char)) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
      result.push([char, 0]); 
    }
  }


  for (let pair of result) {
    pair[1] = counts[pair[0]];
  }

  return result;
}

// 242: Parse float - lvl 8
function parseF(input) {
  const result = parseFloat(input);
  return isNaN(result) ? null : result;
}
// 241: Array Helpers - lvl 6
// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
// 
// Explanation:
// 
// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!
Array.prototype.square = function() {
  return this.map(num => num ** 2);
};

Array.prototype.cube = function() {
  return this.map(num => num ** 3);
};

Array.prototype.sum = function() {
  return this.reduce((acc, num) => acc + num, 0);
};

Array.prototype.average = function() {
  return this.length === 0 ? NaN : this.sum() / this.length;
};

Array.prototype.even = function() {
  return this.filter(num => num % 2 === 0);
};

Array.prototype.odd = function() {
  return this.filter(num => num % 2 !== 0);
};
// 240: Sum of Odd Cubed Numbers - lvl 7
// Description:
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
const cubeOdd = arr => {
  if (!arr.every(el => typeof el === 'number')) {
    return undefined;
  }

  return arr
    .filter(n => n % 2 !== 0)
    .map(n => n ** 3)
    .reduce((a, b) => a + b, 0);
};
// 239: Filter the number - lvl 7
// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
// 
// Task
// Your task is to return a number from a string.
// 
// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
function filterString(value) {
  return parseInt(value.replace(/\D/g, ""), 10);
}
// 238: Find the Integral - lvl 8
// Create a function that finds the integral of the expression passed.
// 
// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.
// 
// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).
// 
// Notes:
// 
// The output should be a string.
// The coefficient and exponent is always a positive integer.
function integrate(coefficient, exponent) {
  let power = (exponent + 1);
  let integral = coefficient / power;
  return `${integral}x^${power}`;
}
// 237 Enumerable Magic #1 - True for All?- lvl 8
// Description:
// Task
// Create a method all which takes two params:
// 
// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
// 
// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True
// Help
// Here's a (Ruby) resource if you get stuck:
function all( arr, fun ){
  return arr.every(fun)
}
// 236: Smallest value of an array - lvl 7
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
// 
// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
// 
// Some examples:
function min(arr, toReturn){
  let minVal = arr[0];
  let minIndex = 0;

  for(let i = 0; i < arr.length; i++){
    if (arr[i] < minVal){
      minVal = arr[i];
      minIndex = i;
    }
  }
  return toReturn === 'value' ? minVal : minIndex;
}
// 235: Exclusive "or" (xor) Logical Operator - lvl 8
// Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:
// 
// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
function xor(a, b) {
  return (a && !b || b && !a);
    }
// 234: Playing with digits - lvl 6
// Description:
// Some numbers have funny properties. For example:
// 
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :(ap+bp+1+cp+2+dp+3+...)=n∗k(a p +b p+1 +c p+2 +d p+3 +...)=n∗kIf it is the case we will return k, if not return -1.Note: n and p will always be strictly positive integers
function digPow(n, p) {
  const digits = String(n).split('').map(Number);
  let sum = 0;
  
  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], p + i);
  }
  
  const k = sum / n;
  
  return k % 1 === 0 && k > 0 ? k : -1;
}
// 233: Tidy Number (Special Numbers Series #9) - lvl 7
// Definition
// A Tidy Number is a number whose digits are in non-decreasing order.
// 
// Task
// Given a number, determine if it is tidy or not.
// 
// Notes
// The number passed will always be positive.
// Return the result as a boolean.
function tidyNumber(n){
  let digits = String(n).split('').map(Number);
  
   for (let i = 0; i < digits.length - 1; i++){
    if (digits[i] > digits[i + 1]){
      return false;
    }
  }
  return true;
}
// 232: Build a square = lvl 7
// Description:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// 
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
// 
// +++
// +++
// +++
function generateShape(integer) {
  let shape = [];
  let row = '+'.repeat(integer);
  for (let i = 0; i < integer; i++) {
    shape.push(row);
  }
  return shape.join('\n');
}
// 231: Training JS #10: loop statement --for - lvl 8
// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.
// 
// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.
// 
// If you forgot how to push an element to an array, please refer to lesson 4.
unction pickIt(arr){
  let odd = [], even = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      even.push(arr[i]);
    }else {
      odd.push(arr[i]);
    }
  }
  return [odd,even];
}
// 230: Configure an express server : lvl 7
// our Task
// Inside the solution function you have to require express and start a server.
// 
// The PORT and HOST are going to be pre-loaded in the process.env object (in a node application process.env stores the environment configuration).
// 
// process.env = {
  // PORT: 3000,
  // HOST: '0.0.0.0',
// };
const solution = () => {
  var express = require('express');
  var app = express();
  app.listen(process.env.PORT, process.env.HOST, () => {

  });
  
  };
// 229: Simple beads count - lvl 7
// 
// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
// 
// @ @@ @ @@ @ @@ @ @@ @ @@ @
// 
// Implement a function returning the number of red beads.
// If there are less than 2 blue beads return 0.
const countRedBeads = n => {
  return n < 2 ? 0 : n * 2 - 2;
}
// 228: Factorial - lvl 7
// Description:
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
// 
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
// 
// More details about factorial can be found here.
const factorial = n => {
  if (n < 0 || n > 12) {
    throw new RangeError("Input must be between 0 and 12");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
};
// 227: simple calculator - lvl 8
// Description:
// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// arguments: 1, 2, "+"
// should return 3

// arguments: 1, 2, "&"
// should return "unknown value"

// arguments: 1, "k", "*"
// should return "unknown value"
function calculator(a,b,sign){
	if ((typeof a === "number") && (typeof b === "number")) {
    switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    }
  }
  return "unknown value";
}
// 226 Find the nth Digit of a Number - lvl 7
// Description:
// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
function findDigit(num, nth) {
  if (nth <= 0) return -1;
  const numStr = Math.abs(num).toString();
  return numStr[numStr.length - nth] || 0;
}
// 225: Parts of a list - lvl 7
// Description:Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
function partlist(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let firstPart = arr.slice(0, i).join(' ');
        let secondPart = arr.slice(i).join(' ');
        result.push([firstPart, secondPart]);
    }
    return result;
}
// 224: Template Strings - lvl 8
// Description:
// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```
// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
const templateStrings = function(noun, adjective) {
  return `${noun} are ${adjective}`;
}
// 223: For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
// This is a beginner friendly kata especially for UFC/MMA fans.
// 
// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!
// 
// If the winner is George Saint Pierre he will obviously say:
// 
// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:
// 
// "I'd like to take this chance to apologize.. To absolutely NOBODY!"
// Good Luck!
function quote(fighter) {
  return fighter === "Conor McGregor" ? "I'd like to take this chance to apologize.. To absolutely NOBODY!" : "I am not impressed by your performance.";
}
// 222: Powers of 2 - lvl 8
// Description:
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
// 
// n = 0  --> [1]        # [2^0]
// n = 1  --> [1, 2]     # [2^0, 2^1]
// n = 2  --> [1, 2, 4]  # [2^0, 2^1, 2^2]
function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}
// 221: A Strange Trip to the Market - lvl 8
// Description:
// Description:
// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."
function isLochNessMonster(s) {
  return /(tree fiddy|3\.50|three fifty)/.test(s);
}
// 220: get ascii value of character - lvl 8
// Get ASCII value of a character.
// 
// For the ASCII table you can refer to http://www.asciitable.com/
function getASCII(c){
  return c.charCodeAt(0);
}
// 219: Sum of numbers from 0 to N - lvl 7
// Description:
// We want to generate a function that computes the series starting from 0 and ending until the given number.
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count < 0) {
      return count + "<0";
    } else if (count === 0) {
      return "0=0";
    } else {
      let sequence = "";
      let sum = 0;
      for (let i = 0; i <= count; i++) {
        sequence += i;
        sum += i;
        if (i < count) {
          sequence += "+";
        }
      }
      return sequence + " = " + sum;
    }
  };

  return SequenceSum;
})();
// 218: Power of Two - lvl 7
// Description:
// Given a positive integer n, return either true if n is a power of 2, or false if it is not.
// 
// Remember, a number is a power of 2 if it's 1 * itself some number of times.
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
// 217: Regexp Basics - is it a digit? - lvl 8
// Description:
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a single digit (0-9), false otherwise.
String.prototype.digit = function () {
  return this.length === 1 && this >= '0' && this <= '9';
};
// 216: Kata Example Twist - lvl 8
// Description:
// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
// 
// Add the value "codewars" to the array websites 1,000 times.
var websites = []
for (i=0; i<1000; i++)
{
  websites.push("codewars");
}
// 215: Grasshopper - Array Mean - lvl 8
// Find Mean
// Find the mean (average) of a list of numbers in an array.
// 
// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
// 
// For an example list of 1, 3, 5, 7
// 
// 1. Add all of the numbers
// 
// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
// 
// 16/4 = 4
// 3. The mean (or average) of this list is 4
// 
// ArraysListsFundamentals
// Suggest kata description edits
function findAverage(nums) {
  return nums.reduce((acc, curr)=> acc + curr) / nums.length;
 }
// 214: Classy Classes - lvl 8
// Description:
// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
// 
// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}
// 213: esreveR - lvl 7
// Description:
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
// 
// (the dedicated builtin(s) functionalities are deactivated)
const reverse = arr => {
  let revList = [];
  for (let i = 0; i < arr.length - 1; i--){
    revList.push(arr[i]);
  }
  return revList; 
}
// 212: Descending Order - lvl 7
// Description:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// 
// Examples:
// Input: 42145 Output: 54421
// 
// Input: 145263 Output: 654321
// 
// Input: 123456789 Output: 987654321
function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}
// 211: Sum of Triangular Numbers - lvl 7
// Description:
// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
// Triangular Numbers cannot be negative so return 0 if a negative number is given.
function sumTriangularNumbers(n) {
  let sum = 0
  
  for (let i = 1; i <= n; i++){
    sum += (i *(i + 1)) / 2;
  }
  return sum;
}
// 210: Name on billboard - lvl 8
// Description:
// You are given a string of letters and a billboard. You need to calculate the cost of the billboard. The cost is the number of letters multiplied by 30.
// Examples
// "John" --> 4 * 30 = 120
// "Alex" --> 4 * 30 = 120
// "Jacob" --> 6 * 30 = 180 
function billboard(name, price = 30){
  return name.length * price;
}
// 209: Highest Rank Number in an Array - lvl 6
// Description:
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
// 
// Note: no empty arrays will be given.
// 
// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
function highestRank(arr) {
  const countMap = {};
  let maxCount = 0;
  let highest = arr[0];

  
  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;

    if (
      countMap[num] > maxCount ||
      (countMap[num] === maxCount && num > highest)
    ) {
      maxCount = countMap[num];
      highest = num;
    }
  }

  return highest;
}
// 208: Speed Control - lvl 7
// Description:
// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:
// 
// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:
// 
// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:
// 
// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.
// 
// Example:
// With the above data your function gps(s, x) should return 74
// 
// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:
// 
//  (3600 * delta_distance) / s.
function gps(s, x) {
  //   edge cases 1st
    if(x.length < 1){
      return 0;
    }
    let maxSpeed = 0;
    
    for (let i = 0; i < x.length - 1; i++){
      const deltaDistance = x[i+1] - x[i];
      const speed = (3600 * deltaDistance) / s;
      if (speed > maxSpeed){
        maxSpeed = speed;
      }
    }
    return Math.floor(maxSpeed);
  }
// 207: Basic subclasses - Adam and Eve - lvl 8
// Description:
// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.
// 
// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.
class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name = "Adam") {
    super(name);
  }
}

class Woman extends Human {
  constructor(name = "Eve") {
    super(name);
  }
}

class God {
  static create() {
    return [new Man(), new Woman()];
  }
}
// 206: Find the Remainder - lvl 8
// Description:
// Write a function that accepts two numbers and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN.
// 
// Examples:
// remainder(17, 5)  returns 2
// remainder(13, 72) returns 7
function remainder(n, m) {
  return n > m ? n % m : m % n;
}
// 205: Grasshopper - Summation -lvl 8
// Description:
// Summation
// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
// 
// For example (Input -> Output):
// 
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
function summation(num) {
  return num * (num + 1) / 2;
}
// 204: Who likes it - lvl 6
// Description:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// 
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// 
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
// 203 : Multiply the number - lvl 8
// Description:
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
// 
  // 3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
  // 0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)
function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}
// 202: Deodorant Evaporator - lvl 7  
// Description:
// This program tests the life of an evaporator containing a gas.
// 
// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
// 
// The program reports the nth day (as an integer) on which the evaporator will be out of use.
// evaporator(10, 10, 5) -> 29
// Example:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.
// Note:
function evaporator(content, evap_per_day, threshold) {
  let days = 0;
  let percentage = 100;
  
  threshold = threshold / 100;
  
  while (percentage / 100 > threshold) {
      percentage -= percentage * (evap_per_day / 100);
      days++;
  }
  
  return days;
}
// 201 : Greet Me - lvl 7
// Description:
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
// 
// Example:
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
function greet(name){
  return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}!`;
}
// 200: Maximum Length Difference - lvl 7
// Description:
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
// 
// Find max(abs(length(x) − length(y)))
// 
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// 
// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
      return -1;
  }
  const lenA1 = a1.map(str => str.length);
  const lenA2 = a2.map(str => str.length);
  const maxA1 = Math.max(...lenA1);
  const minA1 = Math.min(...lenA1);
  const maxA2 = Math.max(...lenA2);
  const minA2 = Math.min(...lenA2);
  return Math.max(
      Math.abs(maxA1 - minA2),
      Math.abs(minA1 - maxA2)
  );
}
// 199: Sleigh Authentication - lvl 8
// Description:
// Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.
// 
// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.
// 
// Examples:
// 
// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE
// 
// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!" ? true : false;
};
// 198:Convert an array of strings to array of numbers - lvl 7
// Description:
// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// 
// You need to cast the whole array to the correct type.
// 
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
// 
// ie:["1", "2", "3"] to [1, 2, 3]Note that you can receive floats as well.
function toNumberArray(stringarray){
  return stringarray.map(Number);
}
// 197: Add Length - lvl 8
// Description:
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// 
// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" --> ["you 3", "will 4", "win 3"]
function addLength(str) {
 const words = str.split(' ');
  const result = words.map(word => `${word} ${word.length}`);
  return result;
}
// 196: Sum of Multiples - lvl 8
// Description:
// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
function sumMul(n, m){
  if (n <= 0 || m <= 0) return "INVALID";
  let sum = 0;
  for (let i = n; i < m; i += n){
    sum += i;
  }
  return sum;
// 195: Form The Minimum
// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.
// 
// Examples
// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679

function minValue(values){
  return parseInt([...new Set(values)].sort().join(''));
}
// 194: Row Weights - lvl 7
// Description:
// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// 
// Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.
// 
// Examples
// [13, 27, 49] returns [62, 27] or (62, 27) (depending on your language) because the total weight of team 1 is 
// 13
// +
// 49
// =
// 62
// 13+49=62 and the total weight of team 2 is 
// 27
// 27.
// [50, 60, 70, 80] returns [120, 140] or (120, 140) (depending on your language) because the total weight of team 1 is 
// 50
// +
// 70
// =
// 120
// 50+70=120 and the total weight of team 2 is 
// 60
// +
// 80
// =
// 140
// 60+80=140.
// [80] returns [80, 0] or (80, 0) (depending on your language) because the total weight of team 1 is 
// 80
// 80 and the total weight of team 2 is 
// 0
// 0.
function rowWeights(array){
  let team1 = 0;
  let team2 = 0;
  
  for (let i = 0; i < array.length; i++){
    if (i % 2 === 0){
     team1 += array[i];
  } else { 
     team2 += array[i];
    }
  }
    return [team1, team2];
}   
// 193: Transform To Prime - lvl 6
// Description:
// Task
// Given a list of positive integers, determine the minimum non-negative integer that needs to be inserted so that the sum of all elements becomes a prime number.
// 
// Notes
// The list will always have at least 2 elements.
// All elements will be positive integers (n > 0).
// The list may contain duplicate values.
// The new sum must be the closest prime number that is greater than or equal to the current sum.
// Examples
// [3, 1, 2] ==> Should return 1  
// Explanation: The sum is 6
// The closest prime greater than or equal to 6 is 7
// We need to add 1 to make the sum 7 (a prime)
// 
// [2, 12, 8, 4, 6] ==> Should return 5  
// Explanation: The sum is 32
// The closest prime greater than or equal to 32 is 37
// We need to add 5 to make the sum 37 (a prime)
// 
// [50, 39, 49, 6, 17, 28] ==> Should return 2  
// Explanation: The sum is 189
// The closest prime greater than or equal to 189 is 191
// We need to add 2 to make the sum 191 (a prime)
function minimumNumber(numbers) {
  
  let sum = numbers.reduce((a, b) => a + b, 0);
  
  
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }


  let increment = 0;
  while (!isPrime(sum + increment)) {
    increment++;
  }

  return increment;
}
// 192: Minimum Steps (Array Series #6) - lvl 7
// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
// 
// Notes:
// List size is at least 3.
// 
// All numbers will be positive.
// 
// Numbers could occur more than once , (Duplications may exist).
// 
// Threshold K will always be reachable.
// 
// Input >> Output Examples
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
function minimumSteps(numbers, value){
 numbers.sort((a, b)=> a - b);
  let sum = 0;
  let steps = 0;
  
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  if (sum >= value)return steps;
    steps++;
  }
  
  return steps;
  }
// 191: Maximum Gap (Array Series #4) - LVL 7
// Description:
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
// 
// Notes
// Array/list size is at least 3 .
// 
// Array/list's numbers Will be mixture of positives and negatives also zeros_
// 
// Repetition of numbers in the array/list could occur.
// 
// The Maximum Gap is computed Regardless the sign.
function maxGap (numbers){
  numbers.sort((a, b)=> a - b);
  
  let differences = [];
  
  for (let i = 1; i < numbers.length; i++){
    differences.push(numbers[i] - numbers[i - 1]) 
  }
  return Math.max(...differences);;
}
// 190: Array Leaders (Array Series #3) - lvl 7
// Description:
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.
// 
// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.
// 
// Notes
// Array/list size is at least 3 .
// 
// Array/list's numbers Will be mixture of positives , negatives and zeros
// 
// Repetition of numbers in the array/list could occur.
// 
// Returned Array/list should store the leading numbers in the same order in the original array/list .
// 
// Input >> Output Examples
// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
// Explanation:
// 4 is greater than the sum all the elements to its right side
// 
// Note : The last element 0 is equal to right sum of its elements (abstract zero).
// 
// arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
// Explanation:
// 17 is greater than the sum all the elements to its right side
// 
// 5 is greater than the sum all the elements to its right side
// 
// Note : The last element 2 is greater than the sum of its right elements (abstract zero).
// 
// arrayLeaders ({5, 2, -1}) ==> return {5, 2}
// Explanation:
// 5 is greater than the sum all the elements to its right side
// 
// 2 is greater than the sum all the elements to its right side
// 
// Note : The last element -1 is less than the sum of its right elements (abstract zero).
// 
// arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
// Explanation:
// 0 is greater than the sum all the elements to its right side
// 
// -1 is greater than the sum all the elements to its right side
// 
// 3 is greater than the sum all the elements to its right side
// 
// Note : The last element 2 is greater than the sum of its right elements (abstract zero).
function arrayLeaders(numbers){
  let leaders = [];
   
   for (let i = 0; i < numbers.length; i++){
    let rightSum = numbers.slice(i + 1)
    .reduce((a, b) => a + b, 0);
     if (numbers[i] > rightSum){
      leaders.push(numbers[i]);
     }
   }
   return leaders;
 }
// 189: Product Of Maximums Of Array (Array Series #2) - lvl 7
// Description:
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.
// 
// Notes
// Array/list size is at least 3 .
// 
// Array/list's numbers Will be mixture of positives , negatives and zeros
// 
// Repetition of numbers in the array/list could occur.
// 
// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
// maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .
// maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
// Explanation:
// Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .
// maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
// maxProduct ({10, 3, -1, -27} , 3)  return (-30)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou
function maxProduct(arr, k){
  arr.sort((a, b) => b - a);
   let prod = [];
   for (let i = 0; i < k; i++){
     prod.push(arr[i]);
   }
   return prod.reduce((a, b)=> a * b);   
 }
// 188: Nth Smallest Element (Array Series #4) - lvl 7
// 
// Description:
// Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series
// 
// Task
// Given an array/list of integers, find the Nth smallest element in the array.
// Array/list size is at least 3.
// Notes
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
function nthSmallest(arr, pos){
  arr.sort((a,b)=> a - b)
   return arr[pos - 1];
 }
// 187: Maximum Product - lvl 7
// Description:
// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.
function adjacentElementsProduct(array) {
  let newArray = [];
  for (let i = 0; i < array.length - 1; i++){
    newArray.push(array[i] * array[i + 1])
  }
  return Math.max(...newArray);
}
// 186: Alternate capitalization - lvl 7
// Description:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// 
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// 
// The input will be a lowercase string with no spaces.
// 
// Good luck!
// 
// If you like this Kata, please try:
// 
// Indexed capitalization
// 
// Even-odd disparity
function capitalize(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};
// 185: Bumps in the Road - lvl 7
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
// 
// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
// 
// FundamentalsStrings
// Suggest kata description edits
function bump(x){
  let count = 0;
  for (let i = 0; i < x.length; i++){
    if (x[i] === 'n'){
      count++
    }
  }
  return count <= 15 ? "Woohoo!": "Car Dead"
}
// REFACTOR:
const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!";
// 184: Beginner Series #2 Clock - lvl 8
// Clock shows h hours, m minutes and s seconds after midnight.
// 
// Your task is to write a function which returns the time since midnight in milliseconds.
// 
// Example:
// h = 0
// m = 1
// s = 1
// 
// result = 61000
// Input constraints:
// 
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
// Fundamentals
// Suggest kata description edits
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
// 183: Who ate the cookie? - lvl 8
// Description:
// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
// 
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
// 
// Note: Make sure you return the correct message with correct spaces and punctuation.
// 
// Please leave feedback for this kata. Cheers!
function cookie(x){
  if(typeof x === "string"){
    x = 'Zach';
  }
    else if (typeof x === "number"){
      x = 'Monica';
    }
    else{
      x = 'the dog';
    }
    return `Who ate the last cookie? It was ${x}!`;
    }
    // REFACTOR:
    function cookie(x) {
      var t = typeof x
      var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
      return `Who ate the last cookie? It was ${who}!`
    }
// 182: Largest pair sum in array - lvl 7
// Description:
// Given a sequence of numbers, find the largest pair sum in the sequence.
// 
// For example
// 
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.
function largestPairSum (numbers) {
  numbers.sort((a,b)=> b - a)
  return numbers[0] + numbers[1]; 
}
// 181: Small enough? - Beginner - lvl 7
// Description:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.
function smallEnough(a, limit){
  for (let i = 0; i < a.length; i++){
    if (a[i] > limit){
      return false;
  }
}
     return true;
    }
    // REFACTOR:
    function smallEnough(a, limit){
  return Math.max(...a) <= limit
}
// 180: Regex validate PIN code - lvl 7
// Description:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// 
// If the function is passed a valid PIN string, return true, else return false.
// 
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
// 179: Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right - lvl 8
// 
// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.
// remove("Hi!",1) === "Hi"
// Examples
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi!",100) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
function remove(s,n){
  let count = 0;
   return s
   .split('')
   .map(char => {
     if (char === '!' && count < n){
       count ++;
       return '';
     }
     return char;
   })
   .join('');
 }
// 178: Remove exclamation marks - lvl 8
// Description:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
// 177: Simple validation of a username with regex - lvl 8
// Description:
// Write a simple regex to validate a username. Allowed characters are:
// 
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).
function validateUsr(username) {
  const res =  /^[a-z0-9_]{4,16}$/
  return res.test(username);
}
// 176: Determine offspring sex based on genes XX and XY chromosomes - lvl 8
// 
// Description:
// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
// 
// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
// 
// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
function chromosomeCheck(sperm) {
  return sperm.includes('Y') 
    ? "Congratulations! You're going to have a son." 
    : "Congratulations! You're going to have a daughter.";
}
// 175: The 'if' function - lvl 8
// Description:
// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truthy, func1 should be called, otherwise call the func2.Example:
// Logs 'True' to the console.
// _if(true, function(){console.log("True")}, function(){console.log("false")})
function _if(bool, func1, func2) {
  return bool ? func1() : func2();
  }
// 174: How old will I be in 2099? - lvl 8
// Description:
// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
// 
// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
// 
// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
// 
// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.Good Luck!
function calculateAge(bornYear, countYear) {  
  let answer = countYear - bornYear;
  
  if (answer > 0) {
    return `You are ${answer} ${answer === 1 ? "year" : "years"} old.`;
  }
  
  if (answer === 0) {
    return "You were born this very year!";
  }
  
  if (answer < 0) {
    return `You will be born in ${Math.abs(answer)} ${Math.abs(answer) === 1 ? "year" : "years"}.`;
  }
}
// 173: Formatting decimal places #0 - lvl 8
// Description:
// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
// 
// Example:    
// 5.5589 is rounded 5.56   
// -3.3424 is rounded -3.34
function twoDecimalPlaces(n) {
  return Math.round(n * 100) /100;
}
// 172: Exes and Ohs - lvl 7
// Description:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// 
// Examples input/output:
// 
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
  str = str.toLowerCase();
 
 const countX = (str.match(/x/g) || []).length;
 const countO = (str.match(/o/g) || []).length;
  
 return countX === countO;
}
// 171: Find the Vowels - lvl 7
// 
// Description:
// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// 
// So given a string "super", we should return a list of [2, 4].
// Mmmm  => []
// Some examples:
// Apple => [1,5]
// Super => [2,4]
// NOTES
// YoMama -> [1,2,4,6]
// This is indexed from [1..n] (not zero indexed!)
// Vowels in this context refers to: a e i o u y (including upper case)
function vowelIndices(word) {
  let indexes = [];
  let vowels = "aAeEiIoOuUyY";
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      indexes.push(i + 1); 
    }
  }
  return indexes;
}
// 170: Maximum Product - lvl 7
// Description:
// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.
// 
// Examples
// [1, 2, 3] returns 6 because the maximum product is obtained from multiplying 
//  
// 2
// ∗
// 3
// =
// 6
//  2∗3=6
// [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 
//  
// 5
// ∗
// 10
// =
// 50
//  5∗10=50
// [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying 
//  
// −
// 2
// ∗
// 7
// =
// −
// 14
// −2∗7=−14
function adjacentElementsProduct(array) {
  let result = [];
  
  for(let i = 0; i < array.length - 1; i++){
    result.push(array[i] * array[i + 1]);
  }
  return Math.max(...result);
}
// 169: Write Number in Expanded Form - lvl 6
// Description:
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// 45 --> "40 + 5"
// 12 --> "10 + 2"
// NOTE: All numbers will be whole numbers greater than 0.
// 70304 --> "70000 + 300 + 4"
function expandedForm(num) {
  const numStr = String(num);
  const digits = numStr.split('');
  const result = [];

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== '0') {
      const placeValue = Math.pow(10, digits.length - 1 - i);
      result.push(digits[i] * placeValue);
    }
  }
  return result.join(' + ');
}
// 168: Fundamentals: Return - lvl 8
// Description:
// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
// 
// Please use the following function names:
// 
// addition = add
// 
// multiply = multiply
// 
// division = divide (both integer and float divisions are accepted)
// 
// modulus = mod
// 
// exponential = exponent
// 
// subtraction = subt
// 
// Note: All math operations will be: a (operation) b
function add(a,b){
  return a + b; 
}

function divide(a,b){
  return a / b;
}

function multiply(a,b){
  return a * b;
}

function mod(a,b){
  return a % b;
}
 
function exponent(a,b){
  return a ** b;
}
  
function subt(a,b){
  return a - b; 
}
// 167: Complementary DNA - lvl 7
// Description:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// 
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// 
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// 
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
function dnaStrand(dna) {
  return dna.split('').map(str => {
    if (str === "A") return "T";
    if (str === "T") return "A";
    if (str === "C") return "G";
    if (str === "G") return "C";
  }).join('');
}
// 166: JavaScript Array Filter - lvl 7
// Description:
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// 
// The solution would work like the following:
// 
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]
function getEvenNumbers(numbersArray){
  return numbersArray.filter(num => num % 2 === 0);
}
// 165: Even numbers in an array - lvl 7
// Description:
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
// 
// For example:
// 
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
function evenNumbers(array, number) {
  let fixed = array.filter(num => num % 2 === 0);
  return fixed.slice(-number);
  }
// 164: Printing Array elements with Comma delimiters - lvl 8
// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next levelNote2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕
function printArray(array){
  return array.join(',');
 }
// 163: Convert a string to an array - lvl 8
// Description:
// Write a function to split a string and convert it into an array of words.
// 
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// 
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
function stringToArray(string){
  return string.split(' ');
}
// 162: Stringy Strings - lvl 8
// Description:
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
// 
// the string should start with a 1.
// 
// a string with size 6 should return :'101010'.
// 
// with size 4 should return : '1010'.
// 
// with size 12 should return : '101010101010'.
// 
// The size will always be positive and will only use whole numbers.
function stringy(size){
  let string = '';
  for (let i = 0; i < size; i++){
    string += i % 2 === 0 ? '1' : '0'; 
  }
  return string;
}
// 161: USD => CNY - lvl 8
//  Description:
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// 
// Examples (Input -> Output)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
function usdcny(usd) {
  let yuan = usd * 6.75
  let rounded = yuan.toFixed(2);
  return `${rounded} Chinese Yuan`;
}
// REFACTOR:
const usdcny = usd => `${(usd * 6.75).toFixed(2)} Chinese Yuan` 
// 160: Do you speak "English"? - lvl 8
// Description:
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
// 
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
// 
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
// 
// Return value as boolean values, true for the string to contains "English", false for it does not.
function spEng(sentence){
  return sentence.toLowerCase().includes("english");
 }
// 159: Holiday VIII - Duty Free - lvl 8
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.
// 
// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).
// 
// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.
// 
// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.
// 
// All inputs will be integers. Please return an integer. Round down.
function dutyFree(normPrice, discount, hol){
  let savings = normPrice * (discount/100);
  
  let itemsNeeded = hol / savings;
  
  return Math.floor (itemsNeeded);
}
// 158: Price of Mangoes - lvl 8
// Description:
// Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
// But! Every third mango is free!
// 
// Examples
// # 🥭 : Paid mango
// # 🆓 : Free mango
// 
// Quantity = 2
// Price = 3
// Total cost ==> 6    
// # Paid 2 mangoes for $3 per unit = $6; no mango for free
// # 🥭🥭
// 
// Quantity = 3
// Price = 3
// Total cost ==> 6    
// # Paid 2 mangoes for $3 per unit = $6; +1 mango for free
// # 🥭🥭🆓
// 
// Quantity = 5
// Price = 3
// Total cost ==> 12   
// # Paid 4 mangoes for $3 per unit = $12; +1 mango for free
// # 🥭🥭🆓   🥭🥭
// 
// Quantity = 9
// Price = 5
// Total cost ==> 30   
// # Paid 6 mangoes for $5 per unit = $30; +3 mangoes for free
// # 🥭🥭🆓   🥭🥭🆓   🥭🥭🆓
function mango(quantity, price){
  let freeMangoes = Math.floor(quantity / 3);
  return (quantity - freeMangoes) * price;
}
// 157: Training JS #7: if..else and ternary operator - lvl 8
// 
// Description:
// In JavaScript, if..else is the most basic conditional statement, it consists of three parts:condition, statement1, statement2, like this:if (condition) statementa
// 
// 
// else           statementb
// It means that if the condition is true, then execute the statementa, otherwise execute the statementb. If the statementa or statementb are more than one line, you need to add { and } at the head and tail of statements in JS, to keep the same indentation on Python and to put an end in Ruby where it indeed ends.
// 
// For example, if we want to judge whether a number is odd or even, we can write code like this:function oddEven(n){
// 
  // else            return "even number";
  // if (n % 2 == 1) return "odd number";
  // 
// }
// If there is more than one condition to judge, we can use the compound if...else statement. For example:
// if (age < 16)      return "children"
// function oldYoung(age){
  // else               return "old man"
  // else if (age < 50) return "young man"   //use "else if" if needed
  // 
// }
// This function returns a different value depending on the parameter age.
// 
// Looks very complicated? Well, JS and Ruby also support the ternary operator and Python has something similar too:
// 
// condition ? statementa : statementb
// Condition and statement separated by "?", different statement separated by ":" in both Ruby and JS; in Python you put the condition in the middle of two alternatives. The two examples above can be simplified with ternary operator:
// return n%2 == 1 ? "odd number" : "even number";
// function oddEven(n){
  // function oldYoung(age){
// }
// }
  // return age < 16 ? "children" : age < 50 ? "young man" : "old man";
// 
// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.number of hotdogs	price per unit (cents)
// 
// n >= 5 and n < 10	95
// n < 5	100
// 
// n >= 10	90
// You can use if..else or ternary operator to complete it.
// 
// When you have finished the work, click "Run Tests" to see if your code is working properly.In the end, click "Submit" to submit your code and pass this kata.
function saleHotdogs(n) {
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
}
// 156: How many stairs will Suzuki climb in 20 years? - lvl 8
// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
// 
// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
// 
// 20_year_estimate = one_year_total * 20
// 
// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
// 
// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.
// 
// Each weekday in the stairs array is an array.
// 
// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 
const stairsIn20 = s => s.reduce((acc, curr) => acc + curr.reduce((a,b)=> a + b, 0), 0) * 20;
// 155: Summing a number's digits - lvl 7
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
// 
// For example: (Input --> Output)
// 
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
function sumDigits(number) {
  let sum = 0;
  let numString = Math.abs(number).toString()
  
  for (let digit of numString){
    sum += parseInt(digit, 10);
  }
  return sum;
  }
// 154: If you can't sleep, just count sheep!!- lvl 8
// Description:
// If you can't sleep, just count sheeps!!
// 
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num){
  let result = ''
  let i = 1
  while (i <= num){
    result += `${i} sheep...`
    i++;
  }
  return result;
}
// 153: Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string - lvl 8
// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"
function remove (string) {
  string = string.replace(/!/g, '')
   string += '!';  
   return string;
 }
//  REFACTOR:
const remove = string =>
  string.replace(/!/g, '')+ '!';
// 152: Grasshopper - Combine strings - lvl 8
// Description:
// Combine strings function
// Create a function named combineNames/combine_names/CombineNames that accepts two parameters (first and last name). The function should return the full name.
function combineNames (first, last) {
  return `${first} ${last}`
}
//151: Contamination #1 -String-
// Description:
// An AI has infected a text with a character!!
// 
// This text is now fully mutated to this character.
// 
// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.
// 
// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!
// 
// Note: The character is a string of length 1 or an empty string. 
function contamination(text, char) {
  if (text === "" || char === "") {
    return "";
  }

  let fixed = "";
  for (let i = 0; i < text.length; i++) {
    fixed += char; 
  }

  return fixed;
}
// 150: Counting Duplicates - lvl 6
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// 
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
const duplicateCount = (text) => {
  const lowerText = text.toLowerCase();
  const charCount = {};
  let count = 0;

  for (let char of lowerText) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char in charCount) {
    if (charCount[char] > 1) {
      count++;
    }
  }

  return count;
};
// 149: Regular Ball Super Ball - lvl 8
// Forks (2)
// Discourse (135)
// Translations
// Fork|Collect|
// How satisfied are you with this kata?VerySomewhatNone
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
// 
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
// 
// ball1 = new Ball();
// ball2 = new Ball("super");
// 
// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}


const ball1 = new Ball();
const ball2 = new Ball("super");

console.log(ball1.ballType); 
console.log(ball2.ballType); 
// 148: Century From Year - lvl 8
// Description:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// 
// Task
// Given a year, return the century it is in.
// 
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
function century(year) {
  return Math.ceil(year/100);
 }
// 147: Area or Perimeter - lvl 8
// Description:
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = function(l , w) {
  return l == w ? l*w : 2*(l + w)
};
// 146: Love vs friendship - lvl 7
// Description:
// If　a = 1, b = 2, c = 3 ... z = 26
// 
// Then l + o + v + e = 54
// 
// and f + r + i + e + n + d + s + h + i + p = 108
// 
// So friendship is twice as strong as love :-)
// 
// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
// 
// The input will always be made of only lowercase letters and will never be empty.
function wordsToMarks(string){
  // create variable for strcount
    let strcount = 0;
    //   write a for loop that iterates over each char in str
    for (i = 0; i < string.length; i++){
        strcount += string.charCodeAt(i) - 96
      }
      return strcount;
    
  }
// 145: Fix your code before the garden dies! - lvl 8
// You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.
// 
// Your task is to debug the code before your plants die!
function rainAmount(mm){
  if (mm < 40)
    return "You need to give your plant " + (40 - mm) + "mm of water"
  return "Your plant has had more than enough water for today!" 
}
// 144: Remove First and Last Character Part Two - lvl 8
// Remove First and Last Character Part Two
// 31612188% of 2,62816,861 of 25,551Steadyx
// JavaScript
// Train AgainNext Kata
// Details
// Solutions
// Forks (8)
// Discourse (122)
// Translations
// Fork|Collect|
// Description:
// This is a spin off of my first kata.
// 
// You are given a string containing a sequence of character sequences separated by commas.
// 
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// 
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
const array = string => 
  string.split(',').length <= 2 
    ? null 
    : string
        .split(',')
        .slice(1, -1)
        .join(' ');
// 143 : Hello Name Or World - lvl 8
// Description:
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// 
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
// 
// Examples:
// 
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
  // or `name` = ""        => return "Hello, World!"
// Fundamentals
function hello(name) {
  if (typeof name === "string" && name.trim().length > 0) {
    let fixed = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
    return `Hello, ${fixed}!`;
  } else {
    return "Hello, World!";
  }
}
// REFACTOR:
const hello = name => 
  `Hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : 'World'}!`  
// 142: Surface Area and Volume of a Box - lvl 8
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]
function getSize(width, height, depth) {
  let area = 2 * (depth * width + width * height + height * depth);
  let volume = depth * width * height;
  return [area, volume];
}
// 141: No oddities here - lvl 7
// Description:
// Write a small function that returns the values of an array that are not odd.
// 
// All values in the array will be integers. Return the good values in the order they are given.
function noOdds( values ){
  let even = [];
  for (let i = 0; i <= values.length - 1; i++){
    if (values[i] % 2 === 0){
      even.push(values[i]);
    }
  }
  return even;
}
// 140: Sort array by string length - lvl 7
// Description:
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// 
// For example, if this array were passed as an argument:
// 
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// 
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
function sortByLength(array){
  let sorted = array.sort((a,b)=> a.length - b.length);
  return sorted;
}
// 139: L1: Bartender, drinks! - lvl 8
// Description:
// Complete the function that receives as input a string, and produces outputs according to the following table:
// 
// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
// 
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}
// 138: Vowel Count - lvl 7
// Description:
// Return the number (count) of vowels in the given string.
// 
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// 
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let vowels = "aeiou";
  return [...str].filter(char => vowels.includes(char)).length;
}
// 137: Sum of Sequence - lvl 7
// Description:
// Your task is to write a function which returns the sum of a sequence of integers.
// 
// The sequence is defined by 3 non-negative values: begin, end, step.
// 
// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
// 
// Examples
// 
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0; 
  let sum = 0; 
  for (let i = begin; i <= end; i += step) {
    sum += i; 
  }
  return sum;
  }
// 136: String ends with? - lvl 7
// Description:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending){
  return str.endsWith(ending);
}
// 135: Student's Final Grade- lvl 8
// Description:
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// 
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
// 
// This function should return a number (final grade). There are four types of final grades:
// 
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):
// 
// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100
// 
// 85, 5 --> 90
// 
// 55, 3 --> 75
// 
// 55, 0 --> 0
// 
// 20, 2 --> 0
function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 & projects >= 5) return 90;
  if(exam > 50 & projects >= 2) return 75;
  return 0;
}
// 134: Find the odd int - lvl 6
// Description:
// Given an array of integers, find the one that appears an odd number of times.
// 
// There will always be only one integer that appears an odd number of times.
// 
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
      let count = 0;
      for (let j = 0; j < A.length; j++) {
          if (A[i] === A[j]) {
              count++;
          }
      }
      if (count % 2 !== 0) {
          return A[i]; 
      }
  }
  return null; 
}
// 133: Sentence Smash - lvl 8
// Description:
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash(words) {
  let sentence = "";
  for (let i = 0; i < words.length; i++) {
      sentence += words[i]; 
      if (i < words.length - 1) {
          sentence += " "; 
      }
  }
  return sentence;
}
// REFACTOR:
const smash = words => words.join(' ');
// 132: Training JS #1: create your first JS function and print "Hello World!" - lvl 8
// Description:
// In JavaScript, your code is running in a function, let us step by step complete your first JS function.
function helloWorld(str){
  var str = "Hello World!"
   console.log(str)
 }
// 131: L1: Set Alarm - lvl 8
// Description:
// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// 
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
// 
// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false
function setAlarm(employed, vacation){
  return employed && !vacation;
  }
// 130: Convert to Binary - lvl 8
// Description:
// Task Overview
// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.
// 
// Examples:
// 
// n = 1 should return 1
// n = 5 should return 101
// n = 11 should return 1011 
let toBinary = n => +n.toString(2)
// 129: I love you, a little , a lot, passionately ... not at all - lvl 8
// Description:
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// 
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
// 
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// 
// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
function howMuchILoveYou(nbPetals) {
  const phrases = [
   "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"]
  
 return phrases[(nbPetals - 1) % phrases.length];
  
}
// 128: Enumerable Magic #25 - Take the First N Elements - lvl 8
// Description:
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
// 
// If you need help, here's a reference:
// 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
function take(arr, n) {
  return arr.slice(0, n);
 }
// 127: Coupon Code - lvl 7
// Description:
// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// 
// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// 
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// 
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode){
     return false;
  }   
   
   const current = new Date(currentDate);
     const expiration = new Date(expirationDate);
    
    return current <= expiration;
  }
// 126: Mexican Wave - lvl 6
// Description:
// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.
// 
// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.
// 
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!
// 
// Kata Series
// If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly 
function wave(str){
  let newArr = [];
  for (let i = 0; i < str.length; i++){
    let copy = str.split('');
    if (copy[i] !== ' '){
      copy[i] = copy[i].toUpperCase()
      newArr.push(copy.join(''))
    }
  }
  return newArr;
}
// 125: Lario and Muigi Pipe Problem - lvl 8
// Description:
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// 
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// 
// The pipes are correct when each pipe after the first is 1 more than the previous one.
// 
// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// 
// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
function pipeFix(numbers){
  let first = numbers[0]
  let last = numbers[numbers.length-1]
  let arr = []
 for (let i = first; i <= last; i++){
  arr.push(i);
 }
   return arr ;
 }
// 124: The Wide Mouthed Frog! - lvl 8
// Description:
// The wide-mouth frog is particularly interested in the eating habits of other creatures.
// 
// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
// 
// When he meets the alligator, it then makes a tiny mouth.
// 
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
function mouthSize  (animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
// 123: Money, money, money - lvl 7
// Description:
// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// 
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
// 
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest
// 
// Example:
// 
  // Let P be the Principal = 1000.00      
  // Let I be the Interest Rate = 0.05      
  // Let T be the Tax Rate = 0.18      
  // Let D be the Desired Sum = 1100.00
// 
// 
// After 1st Year -->
  // P = 1041.00
// After 2nd Year -->
  // P = 1083.86
// After 3rd Year -->
  // P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
// 
// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
// 
// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
function calculateYears(principal, interest, tax, desired) {
  let years = 0;
   
   while (principal < desired){
     principal += (principal * interest) * (1 - tax);
     years ++;
   }
   return years;
 } 
// 122: Grasshopper - Messi goals function - lvl 8
// Description:
// Messi goals function
// Messi is a soccer player with goals in three leagues:
// 
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
// 
// Note: the input will always be valid.
// 
// For example:
// 
// 5, 10, 2  -->  17
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
 }
// 121: Grasshopper - Function syntax debugging - lvl 8
// Description:
// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
function main (verb, noun){
  return verb + noun
}
// 120: Are they the "same"? - lvl 6
// Description:
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// 
// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
// 
// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:
// 
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.
// 
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.
// 
// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
function comp (a, b) {
  if (a == null || b == null) return false;
  a.sort((a,b) => a - b); b.sort((a,b) => a - b);
  return a.map(v => v * v).every((v, i) => v == b[i]);
}
// 119: Enumerable Magic - Does My List Include This? - lvl 8
// Description:
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
function include(arr, item){
  return arr.includes(item);
}
// 118: Reversed sequence - lvl 8
// Description:
// Build a function that returns an array of integers from n to 1 where n>0.
// 
// Example : n=5 --> [5,4,3,2,1]
const reverseSeq = n => {
 let result = [];
for (let i = n; i > 0; i--){
  result.push(i)
}
  return result;
}
// 117: Flatten and sort an array - lvl 7
// Description:
// Challenge:
// 
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
// 
// Example:
// 
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
// 
// Addendum:
// 
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
// 
// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
"use strict";

function flattenAndSort(array) {
let flat = array.flat(1);
  flat.sort((a,b)=> a - b)
  return flat;
};
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






 







  

