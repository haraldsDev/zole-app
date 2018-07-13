let pulesHeader = document.getElementById("pules-header");
pulesHeader.addEventListener("click", addPule);

let pulesOfPlayers = {
	kopejasPules: 4,
	pl1Pules: 3,
	pl2Pules: 2,
	pl3Pules: 1,
}

let { kopejasPules, pl1Pules, pl2Pules, pl3Pules } = pulesOfPlayers;

let numberOfPules = (kopejasPules + pl1Pules + pl2Pules + pl3Pules);

// to do
function addPule() {
	console.log('Pule button was clicked!');
	numberOfPules++;
	kopejasPules++;
	console.log(numberOfPules);
	console.log(pulesOfPlayers);
	// addRowForPule();
}

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

let lielaisWins = true;
let lielaiLoses = false;
function checkIfPuleExists() {
	// check if any pule exist
	if ( numberOfPules > 0) {
		if (lielaisLoses) { 
			pl1Pules++;
			console.log('pulesOfPlayersXXX', pulesOfPlayers);
		}
		if (lielaisWins) {
		  // if (Lielais Wins)
			  if (pl1Pules > 0) {
			  	pl1Pules--;
			  } else if (pl1Pules < 1) {
			  		if (kopejasPules > 0) {
			  			kopejasPules--;
			  			// TODO + run funcction 'Lielais Wins parasti'
			  		} else if (kopejasPules < 1) 
			  			// TODO take first Personiga pule, and take +3 points (=numOfPlayers) from the Personiga pule owner
			  			return true;
			  }
		}
	}
}


let pulesArray = [ 'kopejaPule', 'pl1Pules', 'pl3Pules', 'kopejaPule']

// to remove first element of an array. Removed element is the returned value.  when first element is removed, the remaining elements are renumerated - starting with index 0.
pulesArray.shift();



function calculatePules() {
	if (pulesArray.length > 0) {
		if (lielaisLoses) {
			pulesArray.push("pl1Pules");
		} if (lielaisWins) {
			// check if 'pl1Pules' exist and return it, if no then check for 'kopejaPule' and return it, if no then return pule which is at 0 index
			return pulesArray.find("pl1Pules") ? pulesArray.splice("pl1Pules") : pulesArray.find("kopejaPule") ? pulesArray.splice("kopejaPule") : pulesArray.shift();
		}
	}
}

https://sdras.github.io/array-explorer/ 

Array.find()
//  Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found. 