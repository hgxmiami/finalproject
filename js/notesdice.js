<script>
//Summing up Arrays
Given an array of numbers, add up all the elements

var a = [5, 6,7 234,3,45,34354,,435];
var sum = 0;
for (var i = 0; i < a.length; i++){
    //*do something a[i]
    sum = sum + a[i];                         
}


                             var sum = 0;
a.forEach(function(elem, idx){sum+=elem;})

                             
a.reduce(function(prev, cur){
return prev+cur;
});
                             
//4 Write a function which drwas a star triangle based on an input number
function starz(x){

var str = "";   
while (x > 0){
       for (var i = 0; i <= x; i++)
           str += "*";
}
console.log(str);
x--;
str = "";
}
}

TIME COMPLEXITY
(lower number is better)
Constant time/one operation = O(1)
Loops/n operations: O(n)(n is input size)
Nested Loops: O(n)
Input shrinks by 2 each time: O(log2(n))
                             
LOOPs n Operations: O(n)

arr = [23,43,434,24,2343,4,53]
for (var i = 0; i < arr.length; i++){

}

//*write a function has1337s which takes an array and returns true if the array
//*contains the number 1337
function has1337s(arr){
    var has1337 = true;
    for(var i = 0; i < arr.length; i++){
    if (arr[i] === 1337) return true;

}
    return false;
}

    
//*write a function that receives an array and a string parameter.
//It will return true if one of the elements of the array is equal to the string
//It should return false otherwise*/
function countainsStr(arr, theStr) {
    for(var i = 0; i < arr.length; i++){
    if (arr[i] === theStr) return true;
}
    return false;
}

//write a function that receives an array and another parameter. It will return
//true if NONE of the elements of the array is equal to the other param. It 
//should return false otherwise */
function doesntContain(arr, theThing){
    for(var i = 0; i < arr.length; i++){
    if (arr[i] != theThing) return true;
}
    return false;
}
    
function !doesntContain(arr, theThing)

fizzArray-2

function fizzArray(n){
    var ret = [];
    for(var i = 0; i < n; i++) ret.push(i);
    return ret;
}

//*Write a function that receives an array of numbers and returns the average
//*of those number 

function getAvg(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    }
    return sum / arr.length;
}
    
function getNumbers(start, end){
    var nuts = [];
    for (var i = start; i < end; i++) nuts.push(i); 
    return nuts;
}
    
    
</script>