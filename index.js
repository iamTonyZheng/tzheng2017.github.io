$(document).ready(function() {

console.log($('p'));
console.log("hehehehehe");

//call back function
	$('button').on('click', 

		function() {
			$('h1').append("Poopy");
			}
	); 

console.log("Test line to see if console.log prints");

}); 