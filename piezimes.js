let all3buttons = document.querySelectorAll(".button");
let numOfPlayers = 3;
let totalPointsOfPlayers = [ 1, -2, 1];

console.log('totalPointsOfPlayers BEFORE', totalPointsOfPlayers);

for (i = 0; i < all3buttons.length; i++) {
		all3buttons[i].addEventListener("click", calculateResultsOfRound);


		// all3buttons[i].addEventListener("click", addEmptyRow);
}


function calculateResultsOfRound() {
			let pointsOfLielais = Number(
				prompt('input Lielais points!')
				);
			let pointsOfMazais = pointsOfLielais / (numOfPlayers - 1) * -1;

	// toggle class '.button2' etc, when the button is clicked via EvListener? After this a relay is switched to count Lielais for this player, and Mazais points for other players... ?

		for (k = 0; k < totalPointsOfPlayers.length; k++) {
				if ( k === i) {
					// the problem is that 'i' is triggered, but the 'i' value is not saved. therefore (k === i) never comes true.
					totalPointsOfPlayers[k] += pointsOfLielais;
				} else {
					totalPointsOfPlayers[k] += pointsOfMazais;
				} 
				console.log('totalPointsOfPlayers THREE', totalPointsOfPlayers);
				// return totalPointsOfPlayers;
			}
		

}

console.log('totalPointsOfPlayers FOUR', totalPointsOfPlayers);



function addEmptyRow() {
	
	let newTr1 = document.createElement("tr");
	
	let newTd1 = document.createElement("td");
	let newTd2 = document.createElement("td");
	let newTd3 = document.createElement("td");
	
	let newNumber1 = document.createTextNode(totalPointsOfPlayers[0]);
	let newNumber2 = document.createTextNode(totalPointsOfPlayers[1]);
	let newNumber3 = document.createTextNode(totalPointsOfPlayers[2]);

	newTd1.appendChild(newNumber1);
	newTd2.appendChild(newNumber2);
	newTd3.appendChild(newNumber3);

	newTr1.appendChild(newTd1);
	newTr1.appendChild(newTd2);
	newTr1.appendChild(newTd3);

	table.appendChild(newTr1);
}

for (m = 0; m < all3buttons.length; m++) {
		all3buttons[m].addEventListener("click", addEmptyRow);

}

// let pl1Points = pointsOfLielais;
			// let pl2Points = pointsOfLielais / (numOfPlayers - 1) * -1;
			// let pl3Points = pointsOfLielais / (numOfPlayers - 1) * -1;
			// console.log('pointsOfLielais', pl1Points);
			// console.log('pointsOfMazais2', pl2Points);
			// console.log('pointsOfMazais3', pl3Points);

			// totalPointsOfPlayers[0] += pl1Points;
			// totalPointsOfPlayers[1] += pl2Points;
			// totalPointsOfPlayers[2] += pl3Points;
		

			// console.log('totalPl2Points', totalPl2Points);
			


// 			console.log('totalPl1Points', totalPointsOfPlayers[0]);
// 			console.log('totalPl2Points', totalPointsOfPlayers[1]);
// 			console.log('totalPl3Points', totalPointsOfPlayers[2]);

// console.log('totalPointsOfPlayers THREE', totalPointsOfPlayers);
