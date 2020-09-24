/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function isItLong(sentence) {
  if (sentence.length > 20)
  {
  return "That's a long string!";
  }
}

function isItMedium(str){
if (str.slice(10,20))
{
  return "That's a regular sized string!";
}
}

function isItShort(str) {
  if (str.length < 10)
  {
  return "That's a small string!";
  }
}

function howLongIsMyString(sentence){
  if (sentence.length > 20)
  {
  return "That's a long string!";
  } else if (sentence.slice(10, 20)) 
  {
  return "That's a regular sized string!";
  } else if(sentence.length < 10)
  {
  return "That's a small string!";
  }
}

function instructorHeight(person1,person2){
  
}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}