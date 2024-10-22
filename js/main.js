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



  
