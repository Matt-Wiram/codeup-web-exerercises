alert("Welcome to my website");
prompt("What is your favorite color?")

//You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're
// going to like it). If price for a movie per day is $3, how much will you have to pay?
let littleM = parseInt(prompt("How many days would you like the movie?"))
let brotherB = parseInt(prompt("How many days would you like the movie?"))
let hercules = parseInt(prompt("How many days would you like the movie?"))
let price = 3;
let total = littleM * price;
total += brotherB * price;
total += hercules * price;
alert("The total cost of the purchase is $ " + total)


// Suppose you're working as a contractor for 3 companies: Google, Amazon and
// Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380,
// and Facebook $350. How much will you receive in payment for this week? You worked
// 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let faceHour = parseInt(prompt("How many hours did you work for Facebook?"));
let googleHour = parseInt(prompt("How many hours did you work for Google?"));
let amazonHour = parseInt(prompt("How many hours did you work for Amazon?"));
let total2 = (faceHour * 350) + (googleHour * 400) + (amazonHour * 380);
alert("You've earned $" + total2);

//A student can be enrolled in a class only if the class is not full
// and the class schedule does not conflict with her current schedule.
let classFull = confirm('Is class not full? Click ok for yes and Cancel for no');
let schedule = confirm("Is your schedule open? Click ok for yes and Cancel for no");
let ok = (classFull && schedule);
alert("It is " + ok + " that you can enroll in this class")
//A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a specific amount
// of products.
let member = confirm('Are you a member? Click ok for yes and Cancel for no');
let items = parseInt(prompt("How many items are you buying today?"));
let offer = confirm("is the offer not expired? Click ok for yes and Cancel for no ");
let result = (offer && (member || items > 2))
alert("It is " + result + " that you can get the offer")