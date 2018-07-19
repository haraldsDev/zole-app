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



// TODO + run funcction 'Lielais Wins parasti'
			  		
// TODO take first Personiga pule, and take +3 points (=numOfPlayers) from the Personiga pule owner
			  				 

let lielaisWins = true;
let lielaiLoses = false;

let pulesArray = [ 'kopejaPule', 'pl1Pules', 'pl3Pules', 'kopejaPule'];

let indexOfPuleToIzpirkt = null;

let findingIndexOfPuleToIzpirkt = () => {
	indexOfPuleToIzpirkt = pulesArray.includes('pl1Pules') ? pulesArray.indexOf('pl1Pules') : pulesArray.includes('kopejaPule') ? pulesArray.indexOf('kopejaPule') : null;
	return indexOfPuleToIzpirkt;
}

let removingCorrectPule = () => {
	findingIndexOfPuleToIzpirkt();

	
	let puleStringToRemove =  isNaN(indexOfPuleToIzpirkt) ? pulesArray.shift() : pulesArray.splice(indexOfPuleToIzpirkt, 1);

	 return (puleStringToRemove === 'kopejaPule') ? additionalPointsForKopejaPule() : additionalPointsForPersonigaPule();
	 
}

let additionalPointsForKopejaPule = () => {
	pointsOfLielais += (numOfPlayers - 1);
	pointsOfMazais += -1;
}

let additionalPointsForPersonigaPule = () => {
	pointsOfLielais += numOfPlayers * 1;
	pointsOfMazais */ kura pule tā bija!! */ += numOfPlayers * -1;
}
https://sdras.github.io/array-explorer/ 


