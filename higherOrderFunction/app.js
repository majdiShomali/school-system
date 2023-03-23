
// 5- Write a function that, takes an array of integers as input, iterates over the array, and returns a new array.
// The returned array should contain the result of raising 2 to the power of the original input element.
// For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
// Use for and forEach and then map to solve this question to see the difference between the three ways 

let arrQ5=[1,2,3]


let ArrQ5For=[];
for(let i=0;i<arrQ5.length;i++){
  ArrQ5For[i]=2**arrQ5[i];
}
document.write("Q5 For = "+ArrQ5For +"<br>");


let ArrQ5ForEach=[1,2,3];

ArrQ5ForEach.forEach((value, index, ArrQ5ForEach)=> {
  ArrQ5ForEach[index] = 2**value;
});

document.write("Q5 ForEach = "+ArrQ5ForEach +"<br>");

Map
let ArrQ5Map = arrQ5.map(value=>{
  return 2**value;
})
document.write("Q5 Map = "+ArrQ5Map +"<br>");
document.write("<br>");

//6- Write a function that, takes an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
//If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
//For example:([1,2,3,"israa"]) returns ['odd','even','odd','N/A'].

ArrQ6=[1,2,3,"israa"];

 let ArrQ6Map = ArrQ6.map((value)=>{

  if(isNaN(value)){
    return "N/A";
  }else if(value%2==0){
    return "even";
  }else{return "odd";}
 })
 document.write("Q6 Map = "+ArrQ6Map +"<br>");
 document.write("<br>");
 // 7- Write a function named fizzbuzz that takes in an array of numbers.
//Iterate over the array using forEach or map to determine the output based on several rules:
//- If a number is divisible by 3, add the word "Fizz" to the output array.
//- If the number is divisible by 5, add the word "Buzz" to the output array.
//- If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//- Otherwise, add the number to the output array.
//Return the resulting output array.

let ArrQ7=[1,2,3,4,5,6,7,8,9,10,15];
function fizzbuzz(ArrQ7){
 let ArrQ7Map = ArrQ7.map(value => {
  if(value%3==0 && value%5==0){
return "Fizz Buzz";
  }
   else if(value%3==0){
return "Fizz";
  }else if(value%5==0){
    return "Buzz";
  }else{
    return value;
  }

 })
 return ArrQ7Map
}
document.write("Q7 Map = "+fizzbuzz(ArrQ7) +"<br>");
document.write("<br>");