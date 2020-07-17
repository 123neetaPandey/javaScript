console.log("***************");
console.log("Question 1");

function addUp(num){
    return (num * (num+1))/2;
}
console.log(addUp(4));

console.log("***************");
console.log("Question 2");
var getFirstValue= new Array(1,2,3)
{
    console.log(getFirstValue[0]);
}
console.log("***************");
console.log("Question 3");

function addition(num){
    return ++num;
}
console.log(addition(2));

console.log("***************");
console.log("Question 4");

 function operator(a,b){
     if(a>b && a>b)
     return true;
     else 
     return false;
 }
 console.log(operator(6,3));

 console.log("***************");
 console.log("Question 5");
 function areaTriangle(b,h)
{
    return (b*h)/2;
} 
 console.log(areaTriangle(3,2));

 console.log("***************");
 console.log("Question 6");

 function convertMin(a){
     return a*60;
 }
 console.log(convertMin(5));

 console.log("***************");
 console.log("Question 7");

 function remainder(x, y) {
	return x % y;
}
console.log(remainder(3,4));

 console.log("***************");
 console.log("Question 8");
 function howManySeconds(hours) {
	return hours * 3600;
}
console.log(howManySeconds(2))
 
console.log("***************");
console.log("Question 9");
 function footBallPoints(wins,draws,losses){
     return wins*3+draws*1+losses*0;
 }
 console.log(footBallPoints(3,4,2));
 

console.log("***************");
console.log("Question 10");
function nextEdge(side1,side2){
    return (side1 + side2) -1
}
console.log("(nextEdge(8,10)->",nextEdge(8,10) );
