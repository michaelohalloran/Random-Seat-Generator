
//USE TOGGLECLASS TO add delete UL/delete seat functionality (clicking trash icon toggles class for that name?)
//or call generator function inside delete button 


var names = [];
var backupNames = [];
var sample = ["Bob", "Joe", "Steve", "Bill", "Jack", "Tony", "Sam", "Dave", "Jim"];
var seats = document.querySelectorAll(".seat");

//REPOPULATE names array with ul list, or push lis into one array which used for repopulate button, have another one which receives names 
//but which is used for regenerate/start over button and which is cleared each time
//$(button).on("click", function() {
	//loop through ul, push each li into names array
	// ul.forEach(function() {
	// var reuseName = $("li")
	// names.push()
	// })
	// return names;
//});

//RESET button clears and deletes all seats, WORKS!
$('#reset').on("click", function() {
	// $('container').remove();
	$('.seat').remove();
});

//PUSH newly added names to empty names array, WORKS!

$('input[type="text"]').on("keypress", function(event) {
	//if the user presses enter
	if (event.which === 13) {
		//save text they just entered to variable newName
		var newName = $(this).val();
		//push the text they just entered into the names array
		names.push(newName);
		backupNames.push(newName);
		//then clear the text input box
		$(this).val("");

		//DISPLAY names being pushed into array in a list on the side
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newName + "</li>");
	}
});


//DELETE wrongly entered name, trash icon, WORKS!

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		//trying to get text content of clicked on ul name
		// var text = $(this).val();
		// console.log(text);
		//remove clicked on name from the ul
		$(this).remove();

		//and splice it out of names array
		var removed = names.splice(names.indexOf(this), 1);
		//and remove seat generated from it (this removes all instead of just one clicked)

		var deletedName = this.textContent;
		// var clickedName = names.indexOf(this);
		// var clickedName = $(this).val();
		if ($("div.seat").textContent = deletedName) {
			$("div.seat").remove();
		}

		//%%%%%%%%%%if div.seat = this.textContent, remove that div.seat

		// $(".seat").remove(names[clickedName]);
		//$(".seat").remove();
	});
	event.stopPropagation();
});



//RANDOM NAME generator from array; this successfully returns random name from given array, WORKS!

function randomName () {
	//pick random index number from names array
	var randomIndex = Math.floor(Math.random() * names.length)
	//return random item from names array
	return names[randomIndex];
}

//SEAT GENERATOR BUTTON
$("#generate").on("click", function() {
	//loop through names array, find name, make seat for it, splice that name from array
	//loops through names array
	for (var i = 0; i < names.length; i++) {
		//if names array has names in it
		if (names[i]) {
			//take random name from array, assign it to variable addName
			var addName = randomName();
			//make a div inside container div which shows name pulled randomly from array
			$("#container").append("<div class='seat'>" + addName + "</div>")

			// .css({
			// 	"font-weight": "bold",
			// 	"text-align": "center",
			// 	"color": "blue"
			// });
			//remove name just selected from names array, so it's not reused
			names.splice(names.indexOf(addName), 1);
			console.log(names);
			//this causes names to be added one at a time, after each click
			//break;
			//change background gradient
			$("body").toggleClass("king");
			$("h1").toggleClass("h1change");
		}
	}
});


//RESET BUTTON
//when clicked, deletes all seat content and ul names
// $().on("click", function() {

// });
