//document.write("Easy Questions")//
/**1)*Number of Squares in a n * n Grid** */
function numberSquares(n) {
	return n * (n+1) * (2 * n + 1) / 6;
}

/**2)*SameNum ** */
function isSameNum(num1, num2) {
	if(num1===num2)
		return true;
	else
	return false;
}

/**3)*Return the Sum of Two Numbers** */
function addition(a, b) {
	return (a+b);
}
/**4)*Bitwise operator** */
function bitwiseAND(n1, n2) {
	return n1&n2;
}

function bitwiseOR(n1, n2) {
	return n1 | n2;
}

function bitwiseXOR(n1, n2) {
	return n1^n2;
}

//5)**MatchStick House** */

function matchHouses(step) {

	if (step) {
		return (step * 5) + 1;
	}
	
	return 0;

}

//6)**Profitable Gamble** */

function profitableGamble(prob, prize, pay) {
	return (prob * prize - pay) > 0
}
//7)**Correct the Mistakes** */
function squared(b) {
	return Math.pow(b,2);
}
//8)**Frawork per minutes** */
function frames(minutes, fps) {
	return (minutes*60*fps);
}
//9)**Find the Perimeter of a Rectangle** */
function findPerimeter(height, width) {
	return 2*(height+width);
}
//10)*cover hours and minutes into sec** */
function convert(hours, minutes) {
	return ((hours*60) + minutes) * 60
}


 //* end of easy questions* */



document.write("medium Questions");

//*1)*convert array into object***** */

function toArray(obj) {
	return Object.entries(obj);
}
//*2)**Convert Key, Values in an Object to Array**** */

function objectToArray(obj) {
	const myArray = Object.entries(obj);
	return myArray;
}

//*3)**check equality*** */

function checkEquality(a, b) {
    if(a===b)
          return true;
      else 
          return false;
  }

  //*4)**Return the Time Saved by Speeding*** */
  function timeSaved(lim, avg, d) {
    return +((d / lim - d / avg) * 60).toFixed(1);
  }
//*5)**isMiniSudoku game*** */

    function isMiniSudoku(square) {
        var a = square.join();
        for (var i = 1; i <= 9; i++) {
            if (a.indexOf(i) == -1) return false;
        }
        return true;
    }
    //*6)**Clone a List* */
    function clone(arr) {
        arr.push(arr.slice(0))
        return arr
    }

     //*7)**Compare Strings by Count of Characters* */
     function comp(str1, str2) {
        if(str1.length == str2.length) {
            return true;
        }
        return false;
    }

    

     //*8)**Compare Strings by Count of Characters* */
     function getBudgets(arr) {
        const budgets = arr.reduce((total, person) => total + person.budget, 0);
        return budgets;
    }
     //*9)**divisblity num* */
     function divisible(num) {
        return !(num % 100)
    }

    //*10)*Fix the Error: Flattening an Array
    function flatten(arr) {
        arr2 = [];
        for (let i = 0; i < arr.length; i++) {
          arr2 = arr2.concat(arr[i]);
        }
        return arr2; 
      }