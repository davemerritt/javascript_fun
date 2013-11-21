// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2) { 
	if (num1 > num2) 
		return num1
	else
		return num2
	{
		alert( "The greatest number is " + greaterNum + "!");
	};
};
greaterNum(3, 5)
greaterNum(46, 2)
// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(langCode) {
  if (langCode == "es") {
    return "Hola, mundo";
  }else if (langCode == "de") {
    return "Hallo, Welt";
  }else if (langCode == "fr") {
    return "Bonjour, monde";
  }else {
    return "Hello, world";
  }
}
helloWorld("es")
helloWorld("de")
helloWorld("en")
// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(numScore) {
	if ( numScore >= 80 )
		return "A"
	else if ( numScore >= 70 )
		return "B"
	else if ( numScore >= 60 )
		return "C"
	else if ( numScore >= 50 )
		return "D"
	else
		return "F"
}

assignGrade(88)
assignGrade(30)
assignGrade(65)

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number) {
  if (noun == "Sheep") {
    return " " number + noun;
  }else if ( number == 1 ) {
    return " " + number + noun;
  }else {
    return " " + number + noun + "s";
  };
};
pluralize("Wookie", 12)
pluralize("Sheep", 3)
