function whileLoop() {

    let i = 0
    let j = 2
    while (i < 16) {
        console.log(j)
        i++
        j *= 2
    }
}
whileLoop();

function iceCream() {
   var allCones = Math.floor(Math.random() * 100) + 50;
   console.log("I have " + allCones + " cones")
    var i = 0;
   do {
       let someCones = Math.floor(Math.random() * 5) + 1;



       if (someCones > (allCones - i)) {
           console.log("You asked for " + someCones + " i have only " + (allCones - i) + " left")

       }
       else {
           console.log("Here are your " + someCones + " cones")
           i += someCones;
       }
   } while (allCones > i)

console.log("I've sold " + i + " cones")
}
iceCream();