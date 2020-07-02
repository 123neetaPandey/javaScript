console.log("*********************");
console.log("Question 1");
console.log([true,false,true,false,true].filter(v => v).length);

console.log("*********************");
console.log("Question 2");
function lessThanZero(a)
{
    if(a<=0)
    return true
    else 
    return false;
}
console.log(lessThanZero(0));
console.log(lessThanZero(2));


console.log("*********************");
console.log("Question 3");

function numberEqual(a,b) {
    if(a===b)
    return true;
    else 
     return false;
}
console.log(numberEqual(4,5));
console.log(numberEqual(5,5));
console.log(numberEqual(4,"5"));

console.log("*********************");
console.log("Question 4");
function sqr(a){
    return a*a;
}
console.log(sqr(5));
console.log(sqr(9));

console.log("*********************");
console.log("Question 5");
function lessThan100(a, b) {
	return a+b<100;
}
console.log(lessThan100(22,15));
console.log(lessThan100(83,34));

console.log("*********************");
console.log("Question 6");
function toArray(obj) {
	return Object.entries(obj);
}
console.log(toArray(1));

console.log("*********************");
console.log("Question 7");
const factors = number => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)

 console.log(factors(36));  


 console.log("*********************");
 console.log("Question 8");
 function concat(...args) {
	return  console.log(con+ ' '+con1);
    
    
}
var con=[3,5]
var con1=[6,7]
console.log(concat());

console.log("*********************");
console.log("Question 9");
function getDay(day) {
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var date = new Date(day);
	return days[date.getDay()];
}
 console.log(getDay("12/07/2016"));
 

 console.log("*********************");
 console.log("Question 10");
 function animals(chickens, cows, pigs) {
	return (chickens*2+cows*4+pigs*4)
}

console.log(animals(2,3,5));


console.log("*********************");
console.log("Question 11");
function addition(a, b) {
	return a+b;
}
console.log(addition(3,2));
console.log(addition(-3,-6));

console.log("*********************");
console.log("Question 12");
var scoreJohn=(89+120+130)
var scoreMike=(116+76+90)
console.log(scoreJohn,scoreMike);
if(scoreJohn>scoreMike){
    console.log('Mikes teams wins with ' + ' points');
 
}
else
{
    console.log('Johns teams wins with ' + ' points'); 
}

console.log("*********************");
console.log("Question 13");
function changeEnough(change, amountDue) {
	let sum = change[0]*0.25 + change[1]*0.1 + change[2]*0.05 + change[3]*0.01;
	return sum >= amountDue;
}
console.log(changeEnough([2,100,0,0],14.11));
console.log(
    changeEnough([0, 0, 20, 5], 0.75));

    console.log("*********************");
console.log("Question 14");
    function redundant(str) {
        return str;
    }

    console.log(redundant("apple"));
    console.log(redundant("preas"));
    
    console.log("*********************");
    console.log("Question 15");
    
    function testJackpot(result) {
        return new Set(result).size === 1
    }

    console.log(testJackpot("abc","abc"));
    
    console.log("*********************");
    console.log("Question 16");
    function rps(p1, p2) {
        let w = {
          Rock: "Scissors",
          Scissors: "Paper",
          Paper: "Rock"
        }
        if (p1 === p2) return "It's a draw"
          return `The winner is ${w[p1] === p2 ? 'p1' : 'p2'}` 
      }
      console.log(rps("Rock","Paper"));
      console.log(rps("Scissors","Paper"));
      
      console.log("*********************");
    console.log("Question 17");
    function diceGame(arr) {
        return arr.every(e => e[0] != e[1]) ? arr.flat().reduce((a,b) => a+b,0) : 0;
    }
    console.log(diceGame([[1, 2], [3, 4], [5, 6]])) ;
   
    console.log("*********************");
    console.log("Question 18");
    function simonSays(arr1, arr2) {
        for (var i = 1; i < arr2.length; i++) {
            if (arr1[i-1] != arr2[i]) return false;
        }
        return true;
    }
    console.log(simonSays[1, 2], [5, 1]);
    console.log(simonSays([1, 2], [5, 5]) );
    
    console.log("*********************");
    console.log("Question 19");   
    function pingPong(arr, win) {
        var final = arr.map(e => [e, "Pong!"]).flat()
        return win ? final : final.slice(0,final.length-1);
    } 
    console.log(pingPong(["Ping!"], true)) ;

     console.log("*********************");
    console.log("Question 20");
    function count(deck) {
        return deck.reduce((a, c) => a + (c <= 6 ? 1 : c <= 9 ? 0 : -1), 0);
    }
    console.log(count([5, 9, 10, 3, "J", "A", 4, 8, 5]) );
    