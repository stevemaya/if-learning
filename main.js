/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function isItLon(sentence){
  if(sentence.length < 20) {
  console.log('hi');} 
  else if(sentence.length === 20) { 
  console.log(`I'm 20 chars long...`);}
  else(sentence.length > 20); {
  console.log("`Boy HOWDY am I a long string, huh. Go me!`)).toBe(`That's a long string!`");}
}

function isItLong(str){
  return str > 20;
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