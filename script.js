let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let numOfPlayers = 3;
let totalPointsOfPlayers = [ 1, -2, 1];

button1.addEventListener("click", player1Lielais);
button2.addEventListener("click", player2Lielais);
button3.addEventListener("click", player3Lielais);

button1.addEventListener("click", addEmptyRow);
button2.addEventListener("click", addEmptyRow);
button3.addEventListener("click", addEmptyRow);

let gamePointsOfLielais = 0;
let gamePointsOfMazais = 0;
let pulesPointsForLielais = null;
let pulesPointsOfMazais = null;
let lielaisWins = null;
let lielaisLoses = null;
let lielaisPlayerId = 9;


function player1Lielais() {
	playersArray[0].isMazais = false;
	lielaisPlayerId = 1;

	calculateResultsOfRound();
	addRoundResultsForPl1Lielais();
	
	lielaisWins = null;
	lielaisLoses = null;
}

let addRoundResultsForPl1Lielais = () => {
	totalPointsOfPlayers[0] = totalPointsOfPlayers[0] + gamePointsOfLielais + pulesPointsForLielais;
	totalPointsOfPlayers[1] = totalPointsOfPlayers[1] + gamePointsOfMazais + pulesPointsOfMazais;
	totalPointsOfPlayers[2] = totalPointsOfPlayers[2] + gamePointsOfMazais + pulesPointsOfMazais;
	console.log('totalPointsOfPlayers[2]: ', totalPointsOfPlayers[2], 'gamePointsOfMazais: ', gamePointsOfMazais, 'pulesPointsOfMazais: ',pulesPointsOfMazais);
}

function player2Lielais() {
	playersArray[1].isMazais = false;
	lielaisPlayerId = 2;

	calculateResultsOfRound();

	totalPointsOfPlayers[0] = totalPointsOfPlayers[0] + gamePointsOfMazais + pulesPointsOfMazais;
	totalPointsOfPlayers[1] = totalPointsOfPlayers[1] + gamePointsOfLielais + pulesPointsForLielais;
	totalPointsOfPlayers[2] = totalPointsOfPlayers[2] + gamePointsOfMazais + pulesPointsOfMazais;
	console.log('totalPointsOfPlayers: ', totalPointsOfPlayers);
	console.log('pulesPointsOfMazais: ', pulesPointsOfMazais);
	console.log('pulesPointsForLielais: ', pulesPointsForLielais);

	lielaisWins = null;
	lielaisLoses = null;
}

function player3Lielais() {
	playersArray[2].isMazais = false;
	lielaisPlayerId = 3;

	calculateResultsOfRound();

	totalPointsOfPlayers[0] = totalPointsOfPlayers[0] + gamePointsOfMazais + pulesPointsOfMazais;
	totalPointsOfPlayers[1] = totalPointsOfPlayers[1] + gamePointsOfMazais + pulesPointsOfMazais;
	totalPointsOfPlayers[2] = totalPointsOfPlayers[2] + gamePointsOfLielais + pulesPointsForLielais;

	lielaisWins = null;
	lielaisLoses = null;
}	


let calculateResultsOfRound = () => {
	gamePointsOfLielais = Number(prompt('input Lielais points!'));
	gamePointsOfMazais = gamePointsOfLielais / (numOfPlayers - 1) * -1;
	
	checkIfLielaisWinsOrLoses();
	checkPuleExists();
	console.log(pulesArray);
}

	let checkIfLielaisWinsOrLoses = () => {
			if (
				gamePointsOfLielais === 2 || 
				gamePointsOfLielais === 4 || 
				gamePointsOfLielais === 6
				) {
					lielaisWins = true;
			} if (
				gamePointsOfLielais === -4 || 
				gamePointsOfLielais === -6 || 
				gamePointsOfLielais === -8
				) {
					lielaisLoses = true;
			}
	}

	let checkPuleExists = () => {
		return pulesArray.length > 0 ? doPulePlusOrMinus() : console.log('no pules at all');
	}

	let doPulePlusOrMinus = () => {
			return lielaisLoses ? pulesArray.push(`pl${lielaisPlayerId}Pules`) : lielaisWins ? removingCorrectPule() : null;
	}


	

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


let pulesHeader = document.getElementById("pules-header");
pulesHeader.addEventListener("click", addPule);

function addPule() {
	console.log('Pule button was clicked!');
	pulesArray.push('kopejaPule');
	console.log(pulesArray);
}

pulesHeader.addEventListener("click", addRowForPule);

function addRowForPule() {
	
	let newTr1 = document.createElement("tr");
	
	let newTd1 = document.createElement("td");
	let newTd2 = document.createElement("td");
		
	let countOfPules = document.createTextNode(pulesArray.length);
	
	newTd1.appendChild(countOfPules);
	
	newTr1.appendChild(newTd1);
	newTr1.appendChild(newTd2);

	pulesHeader.appendChild(newTr1);
}
 

let pulesArray = [ 'kopejaPule', 'pl1Pules', 'pl3Pules', 'kopejaPule'];
let indexOfPuleToIzpirkt = null;
let puleStringToRemove = '';

let removingCorrectPule = () => {
	findingIndexOfPuleToIzpirkt();
	
	puleStringToRemove =  isNaN(indexOfPuleToIzpirkt) ? pulesArray.shift() : pulesArray.splice(indexOfPuleToIzpirkt, 1);

	addingPointsForPule();	 
}

let addingPointsForPule = () => {
	return (puleStringToRemove === 'kopejaPule') ? additionalPointsForKopejaPule() : additionalPointsForPersonigaPule();
}

let findingIndexOfPuleToIzpirkt = () => {
	indexOfPuleToIzpirkt = pulesArray.includes(`pl${lielaisPlayerId}Pules`) ? pulesArray.indexOf(`pl${lielaisPlayerId}Pules`) : pulesArray.includes('kopejaPule') ? pulesArray.indexOf('kopejaPule') : null;
	// return indexOfPuleToIzpirkt;
}



let additionalPointsForKopejaPule = () => {
	pulesPointsForLielais = (numOfPlayers - 1);
	pulesPointsOfMazais = -1;
	console.log('pulesPointsOfMazais: ', pulesPointsOfMazais);
	console.log('pulesPointsForLielais: ', pulesPointsForLielais);
}

let additionalPointsForPersonigaPule = () => {
	

	switch (true) {
		case puleStringToRemove.includes('1'):
			pulesPointsForLielais += 3;
			totalPointsOfPlayers[0] += -3;
			console.log('pulesPointsOfMazais: ', pulesPointsOfMazais);
			console.log('pulesPointsForLielais: ', pulesPointsForLielais);
			break;
		case puleStringToRemove.includes('2'):
			pulesPointsForLielais += 3;
			totalPointsOfPlayers[1] += -3;
			console.log('pulesPointsOfMazais: ', pulesPointsOfMazais);
			console.log('pulesPointsForLielais: ', pulesPointsForLielais);
			break;
		case puleStringToRemove.includes('3'):
			pulesPointsForLielais += 3;
			totalPointsOfPlayers[2] += -3;
			break;
		case puleStringToRemove.includes('4'):
			pulesPointsForLielais += 3;
			totalPointsOfPlayers[3] += -3;
			break;
	}
}

let playersArray = [
	{			
		playerName: 'player1',
		playerId: 1,
		totalPoints: 0,
		personigasPules: 0,
		isMazais: true
	},
	{ 
		playerName: 'player2',
		playerId: 2,
		totalPoints: 0,
		personigasPules: 0,
		isMazais: true	
	},
	{ 
		playerName: 'player3',
		playerId: 3,
		totalPoints: 0,
		personigasPules: 0,
		isMazais: true
	}
];
