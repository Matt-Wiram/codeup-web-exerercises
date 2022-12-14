alert('hey')
/* Which Generation Are You?
 * Try finding your ancestors and offspring with code.
 *
 * Create a function named generation that takes a number x and a character y ("m" for male, "f" for female), and returns the
 * name of an ancestor (m/f) or descendant (m/f).
 *
 * If the number is negative, return the related ancestor.
 * If positive, return the related descendant.
 * You are generation 0. In the case of 0 (male or female), return "me!".
 * Examples
 * >> generation(2, "f") ➞ "granddaughter"
 * >> generation(-3, "m") ➞ "great grandfather"
 * >> generation(1, "f") ➞ "daughter"
 *
 * Generation	Male	Female
 * -3	great grandfather	great grandmother
 * -2	grandfather	grandmother
 * -1	father	mother
 * 0	me!	me!
 * 1	son	daughter
 * 2	grandson	granddaughter
 * 3	great grandson	great granddaughter
 */
function checkGen(x, y) {
    let gen = x + y
    switch (gen) {
        case "-3m":
            console.log("Its a great grandfather")
            break;
        case "-3f":
            console.log("its a great grandmother")
            break;
        case "-2m":
            console.log("its a grandfather")
            break;
        case "-2f":
            console.log("Its a grandmother");
            break;
        case "-1m":
            console.log("Its a father");
            break;
        case "-1f":
            console.log("Its a mother");
            break;
        case "1m":
            console.log("Its a son")
            break;
        case "1f":
            console.log("Its a daughter");
            break;
        case "2m":
            console.log("Its a grandson");
            break;
        case "2f":
            console.log("Its a granddaughter");
            break;
        case "3m":
            console.log("Its a great grandson");
            break;
        case "3f":
            console.log("It a great granddaughter")
            break;
        default:
            console.log("Its you")
    }
}
checkGen(3, "f")

/* Say "Hello" Say "Bye"
 * Write a function named sayHelloBye that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
 *
 * Examples
 * >> sayHelloBye("alon", 1) ➞ "Hello Alon"
 * >> sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
 * >> sayHelloBye("jose", 0) ➞ "Bye Jose"
 *
 * Notes
 * The name you return must be capitalized.
 */
function returnHello(str, x) {
    let strUp = str.split("");

    let first = strUp[0].toUpperCase();
    strUp.shift();
    console.log(strUp)
    strUp.unshift(first)
    strUp = strUp.join("")



    ;
    if (x === 0) {
        return "Hello " + strUp;
    }
    else {
        return "Bye " + strUp
    }
}

console.log(returnHello("matt", 1));
/* Tile Teamwork Tactics
 * In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice.
 * If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
 *
 * Given you and your friend's tile number, create a function named possibleBonus that returns if it's possible
 * to earn a bonus when you roll the dice.
 *
 * Examples
 * >> possibleBonus(3, 7) ➞ true
 * >> possibleBonus(1, 9) ➞ false
 * >> possibleBonus(5, 3) ➞ false
 *
 * Notes
 * You cannot move backward (which is why example #3 doesn't work).
 * If you are already on the same tile, return false, as you would be advancing away.
 * Expect only positive integer inputs.
 */
function bonusCalc(a, b) {
    if (a > b) {
        return false
    }
    else if (b - a >= 1 && b - a <= 6) {
        return true
    }
    else {
        return false
    }
}
console.log(bonusCalc(4, 7))
/* Integer in Range?
 * Create a function named intWithinBounds that validates whether a number n is within the bounds of lower and upper.
 *  Return false if n is not an integer.
 *
 * Examples
 * >> intWithinBounds(3, 1, 9) ➞ true
 * >> intWithinBounds(6, 1, 6) ➞ false
 *
 * >> intWithinBounds(4.5, 3, 8) ➞ false
 *
 * Notes
 * The term "within bounds" means a number is considered equal or greater than a lower bound and
 * lesser (but not equal) to an upper bound, (see example #2).
 * Bounds will be always given as integers.
 */
function intWithinBounds(a, b, c) {
    if (!Number.isInteger(a)) {
        return false
    }
    else if (b < c) {
        return (a > b && a < c)
    }
    else if (b > c) {
        return (a < b && a > c)
    }
    else {
        return false
    }
}
console.log(intWithinBounds(9, 1, 8))

/* Perimeters with a Catch
 * Write a function named perimeter that takes a number and returns the perimeter of either a circle or a square.
 * The input will be in the form (letter l, number num) where the letter will be either "s" for square, or
 * "c" for circle, and the number will be the side of the square or the radius of the circle.
 *
 * Use the following formulas:
 *
 * Perimeter of a square: 4 * side.
 * Perimeter of a circle: 6.28 * radius.
 *
 * The catch is you can only use arithmetic or comparison operators, which means:
 *
 * No if... else statements.
 * No objects.
 * No arrays.
 * No formatting methods, etc.
 * The goal is to write a short, branch-free piece of code.
 *
 * Examples
 * >> perimeter("s", 7) ➞ 28
 * >> perimeter("c", 4) ➞ 25.12
 * >> perimeter("c", 9) ➞ 56.52
 */
function perimeter(l, num) {
    (l === "s")? return 7 * num : return 6.28 * num
}
console.log(perimeter("s", 8))









function reverseWord(str) {
    let words = str.split(" ");
    let result = words.map(x => {
        if (x.length % 2 === 1) {
            return x.split("").reverse().join("")
        }
        else {
            return x
        }
    })
    return result.join(" ")
}

console.log(reverseWord("This is the way"))