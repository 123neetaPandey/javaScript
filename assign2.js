console.log("-------name function----------");

var l=2;
var b=9;
var p=l*b;
function printarea(l,b){
    
    console.log(p,"printarea");
    
}
console.log("-------function expression-----------");

var firstName='john'
var age=28;
console.log(firstName+''+age);
console.log("=====arrow fumction=========");

var sum = (a, b) => a + b;
console.log(sum(1,2));



console.log("------------IIFE------------");


(function() { 
    console.log("Welcome to my world!"); })(); 
    const materials = [
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium'
      ];
      
      console.log(materials.map(material => material.length));
      console.log("--------------------");
      
var name='saint'
age=34
      var job ,isMarried;
      job='devlper'
      isMarried=false;
      console.log(name+'is a '+age+'year old ' +job+'is he married?'+isMarried);
      