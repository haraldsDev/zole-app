let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3= document.getElementById('button3');
let numOfPlayers = 3;
let totalPointsOfPlayers = [ 1, -2, 1];

button1.addEventListener("click", player1Lielais);
button2.addEventListener("click", player2Lielais);
button3.addEventListener("click", player3Lielais);

button1.addEventListener("click", addEmptyRow);
button2.addEventListener("click", addEmptyRow);
button3.addEventListener("click", addEmptyRow);

let pointsOfLielais = 0;
let lielaisWins = true;
let lielaiLoses = false;

function calculateResultsOfRound() {
	pointsOfLielais = Number(prompt('input Lielais points!'));
	pointsOfMazais = pointsOfLielais / (numOfPlayers - 1) * -1;
	
	checkIfLielaisWinsOrLoses();
	checkPuleExists();
	doPulePlusOrMinus();

}
	

	

let checkIfLielaisWinsOrLoses = () => {
		if (
			pointsOfLielais === 2 || 
			pointsOfLielais === 4 || 
			pointsOfLielais === 6
			) {
				console.log('lielaisWins:', );
				lielaisWins = true;
				console.log('numberOfPules:', numberOfPules);
		} if (
			pointsOfLielais === -4 || 
			pointsOfLielais === -6 || 
			pointsOfLielais === -8
			) {
				console.log('lielaisLoses:', pointsOfLielais);
				lielaisLoses = true;
				
				console.log('numberOfPules:', numberOfPules);
		}
}

let checkPuleExists = () => {
	return pulesArray.length > 0 ? doPulePlusOrMinus() : console.log('no pules at all');
}

let doPulePlusOrMinus = () => {
		return lielaisLoses ? pulesArray.push("pl1Pules") : lielaisWins ? removingCorrectPule() : null;
}


function player1Lielais() {
	calculateResultsOfRound();

	totalPointsOfPlayers[0] += pointsOfLielais;
	totalPointsOfPlayers[1] += pointsOfMazais;
	totalPointsOfPlayers[2] += pointsOfMazais;
}

function player2Lielais() {
	calculateResultsOfRound();

	totalPointsOfPlayers[0] += pointsOfMazais;
	totalPointsOfPlayers[1] += pointsOfLielais;
	totalPointsOfPlayers[2] += pointsOfMazais;
}

function player3Lielais() {
	calculateResultsOfRound();

	totalPointsOfPlayers[0] += pointsOfMazais;
	totalPointsOfPlayers[1] += pointsOfMazais;
	totalPointsOfPlayers[2] += pointsOfLielais;
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

// calculatePules(); 

// checkIfPuleExists();
