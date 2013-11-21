// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


function fortune(title, locale, partner, kids) {
	alert( "You will be " + title + " on" + location + " and probably not married to" + partner + ", so you'll have" + kids + " kids.");
};
fortune("employed", "earth", "a full grown bear", 0);
fortune("jazzmaster", "some sort of jazz yacht", "said yacht", "to play jazz for");
fortune("shot", "sight", "a doctor", "to say goodbye to your");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear, currentYear) { 
	alert("You are either " + (currentYear - birthYear -1) + " or " + (currentYear - birthYear) + "." );
};

calculateAge(1983, 2013);
calculateAge(1987, 2013);
calculateAge(1992, 2013);
// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSuply(age, ammountPerDay) {
	var maxAge = 75
	alert("You will need " + ((maxAge - age) * ammountPerDay) + " tacos to last you until you die at the age of " + maxAge + ".");	
};

calculateSuply(29, 4)
calculateSuply(26, 5)
calculateSuply(21, 2)

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(radius) {
	alert("The circumference is " + ( (radius * 2) * 3.14 ) + ".");
};

calcCircumfrence(7)
calcCircumfrence(5)
calcCircumfrence(4)

function calcArea(radius) { 
	alert("The area is " + (3.14 * Math.pow(radius, 2)) + ".");
};

calcArea(7)
calcArea(9)
calcArea(12)

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFarenheit() {
	var celsiusTemp = 100
	alert( celsiusTemp + "° celsius is equal to " + (celsiusTemp * (9 / 5) +32) + "° fahrenheit.");
};

function farenheitToCelsius() {
	var fahrenheitTemp = 32
	alert( fahrenheitTemp + "° fahrenheit is equal to " + (fahrenheitTemp - 32) * 5/9 + "° celsius.");
}
	


