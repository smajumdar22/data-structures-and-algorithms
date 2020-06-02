# Code Challenge: Class 04

## Array Binary Search

### Author: Shubham Majumdar

### Links and Resources

* [submission PR](https://github.com/smajumdar22/data-structures-and-algorithms/pull/50)


# Challenge Summary
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Challenge Description
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
Used 2 variables insider and outsider where the element to be added is first initialized in outside variable.Iteration is started from the middle of array and as we iterate we replace outsider element to the right side of the middle array and replacing it with the previous outsider element.After iteration is over push the last element.

## Solution
![UML Diagram](whiteboard.jpg)

#### How to initialize/run your server app (where applicable)
* `npm start`
  
#### Tests
* How do you run tests?
npm test

