// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for 
// title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
//Ok, fine, I'll stop using alerts, but I still like them. 
var favoriteRecipe = {
	title: "Jiffy Buns",
	servings: 24,
	ingredients: ["Cups of flour: 7.5", "Tsp. of salt: 1", "Tbs. of yeast: 2", "Tbs. of sugar: 1", "Cups of sugar: 1", "Cups of butter: 1/4", "Cups of water: 1.5", "Eggs: 2"
	]};
console.log(favoriteRecipe.title)
console.log("Serves: "+ favoriteRecipe.servings)
console.log("Ingredients: ")
for (var i = 0; i < favoriteRecipe.ingredients.length; i++) {
	console.log(favoriteRecipe.ingredients[i]);
};

//I'll come back to it later, don't think I did this right.

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has 
// properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. 
// If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 
// 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var books = [
	{
		title: "A Memory of Light", 
		author: "Robert Jordan and Brandon Sanderson",
		alreadyRead: true
	},
	{
		title: "Perdido Street Station",
		author: "China Mieville",
		alreadyRead: true
	},
	{
		title: "Iron Sunrise",
		author: "Charles Stross",
		alreadyRead: false
	}];

if (books.alreadyRead == true){
	console.log("You have already read " + books.title + " by " + books.author + ".");
} else {
	console.log("You still need to read " + books.title + " by " + books.author + ".");
};
// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number),
// and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes.
// Stars: Puff, Jackie, Living Sneezes."



