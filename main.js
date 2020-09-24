/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function isItLong(sentence) {
  if (sentence.length > 20) {
    return "That's a long string!";
  }
}

function isItMedium(str) {
  if (str.slice(10, 20)) {
    return "That's a regular sized string!";
  }
}
// if (str.length >= 10 && str.length <= 20) 

function isItShort(str) {
  if (str.length < 10) {
    return "That's a small string!";
  }
  else if (str.length > 10) 
}
//else return "that's not a small string" instead of else if(str length > 10)


function howLongIsMyString(sentence) {
  if (sentence.length > 20) {
    return "That's a long string!";
  } else if (sentence.slice(10, 20)) { //should have been sentence.length,>=10
    return "That's a regular sized string!";
  } else if (sentence.length < 10) { //else YOU ALREADY COVERED OTHER PARAMETERS
    return "That's a small string!";
  }
}

function instructorHeight(name) {
  if (name === 'Colin') {
    return 62;
  } else if (name === 'Mesuara') {
    return 67;
  } else {
    return `I don't know that instructor`;
  }
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