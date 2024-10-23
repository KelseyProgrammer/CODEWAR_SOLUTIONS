// 67 Check the exam - lvl 7
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