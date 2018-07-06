let pulesHeader = document.getElementById("pules-header");
pulesHeader.addEventListener("click", addPule);

let numberOfPules = 0;

// to do
function addPule() {
	console.log('Pule button was clicked!');
	numberOfPules++;
	console.log(numberOfPules);
	// addRowForPule();
}

// to do
// function displayPules {

// }

pulesHeader.addEventListener("click", addRowForPule);

function addRowForPule() {
	
	let newTr1 = document.createElement("tr");
	
	let newTd1 = document.createElement("td");
	let newTd2 = document.createElement("td");
		
	let countOfPules = document.createTextNode(numberOfPules);
	
	newTd1.appendChild(countOfPules);
	
	newTr1.appendChild(newTd1);
	newTr1.appendChild(newTd2);

	pulesHeader.appendChild(newTr1);
}

let pulesOfPlayers = {
	kopejasPules: 0,
	pl1Pules: 0,
	pl2Pules: 0,
	pl3Pules: 0,
}

let { kopejasPules, pl1Pules, pl2Pules, pl3Pules } = pulesOfPlayers;

// to do
function checkIfPuleExists() {
	// check if any pule exist
	if ( (kopejasPules + pl1Pules + pl2Pules + pl3Pules) >= 1) {
		if // (LielaisLoses) { add personiga pule to this player }
			  // if (Lielais Wins)
			  (pl1Pules >= 1) {
			  	pl1Pules -= pl1Pules;
			  } else if (pl1Pules < 1) {
			  		if (kopejasPules >= 1) {
			  			kopejasPules -= kopejasPules;
			  			// TODO + run funcction 'Lielais Wins parasti'
			  		} if (kopejasPules < 1) {
			  			// TODO take first Personiga pule, and take +3 points (=numOfPlayers) from the Personiga pule owner

			  		}
			  }

	}
}

function lielaisWins() {
	// check if Lielais wins Parasti || Janjos || Bezstikii
	if (3 > 2) {
	return true;
	} else {
	return false;
	}
}
	

	// if any pule exist check if this player personal pule exist

	// 	if this player personal pule doesnot exist
	// 		check if kopejasPules exist

	// 			if kopejasPules exist
	// 				DOACTION on kopejasPules

	// 			else DOACTION on first of personigas pules
