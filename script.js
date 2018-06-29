
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let all3buttons = document.querySelectorAll(".button");
let numOfPlayers = 3;

button1.addEventListener("click", player1Lielais);
// button2.addEventListener("click", player2Lielais);
// button3.addEventListener("click", player3Lielais);

for (i = 0; i < all3buttons.length; i++) {
		all3buttons[i].addEventListener("click", addEmptyRow);
}


// button1.addEventListener("click", addEmptyRow);
// button2.addEventListener("click", );
// button3.addEventListener("click", );

function addEmptyRow() {
	
	let newTr1 = document.createElement("tr");
	
	let newTd1 = document.createElement("td");
	let newTd2 = document.createElement("td");
	let newTd3 = document.createElement("td");
	
	let newNumber1 = document.createTextNode(totalPointsOfPlayers[0]);
	let newNumber2 = document.createTextNode(totalPointsOfPlayers[1]);
	let newNumber3 = document.createTextNode(totalPointsOfPlayers[2] );

	newTd1.appendChild(newNumber1);
	newTd2.appendChild(newNumber2);
	newTd3.appendChild(newNumber3);

	newTr1.appendChild(newTd1);
	newTr1.appendChild(newTd2);
	newTr1.appendChild(newTd3);

	table.appendChild(newTr1);
}

let totalPointsOfPlayers = [
	 1,
	 -2,
	 1
]
console.log('totalPointsOfPlayers', totalPointsOfPlayers);



function player1Lielais() 
		{
			let pointsOfLielais = Number(
				prompt('input Lielais points!')
				);
			// offer 'dropdown' options to choose +2, +4, +6, +10, +12, +14. -4, -6, -8.
			let pl1Points = pointsOfLielais;
			let pl2Points = pointsOfLielais / (numOfPlayers - 1) * -1;
			let pl3Points = pointsOfLielais / (numOfPlayers - 1) * -1;
			console.log('pointsOfLielais', pl1Points);
			console.log('pointsOfMazais2', pl2Points);
			console.log('pointsOfMazais3', pl3Points);

			totalPointsOfPlayers[0] += pl1Points;
			totalPointsOfPlayers[1] += pl2Points;
			totalPointsOfPlayers[2] += pl3Points;
			console.log('totalPl1Points', totalPointsOfPlayers[0]);
			console.log('totalPl2Points', totalPointsOfPlayers[1]);
			console.log('totalPl3Points', totalPointsOfPlayers[2]);

			// console.log('totalPl2Points', totalPl2Points);
			
		}



// function player2Lielais() 
// 		{
// 			pointsOfLielais = prompt('input Lielais points!');
// 			pl1Points = pointsOfLielais / (numOfPlayers - 1) * -1;
// 			pl3Points = pointsOfLielais / (numOfPlayers - 1) * -1;
// 			console.log('pointsOfLielais', pointsOfLielais);
// 			console.log('pointsOfMazais', pl1Points);
// 			console.log('pointsOfMazais', pl3Points);
// 		}

// function player3Lielais()
// 		{
// 			pointsOfLielais = prompt('input Lielais points!');
// 			pl1Points = pointsOfLielais / (numOfPlayers - 1) * -1;
// 			pl2Points = pointsOfLielais / (numOfPlayers - 1) * -1;
// 			console.log('pointsOfLielais', pointsOfLielais);
// 			console.log('pointsOfMazais', pl2Points);
// 			console.log('pointsOfMazais', pl1Points);
// 		}



// function calculateResultsOfRound()  {

// } 

// function addRoundResultsToTotal() {

// }

// function populateRowWithTotalResults() {
// 	// switch statement
// 	// populate() new Row with this games points of pl1, pl2, pl3;
// }

// function ResultChange(value) {
// 	let pointsOfLielais = 4;
// 	// switch (value) {
// 	// 		case 'Lielais loses Zole in Bezstikis':
// 	// 		pointsOfLielais = -16;
// 	// 		break;
// 	// 		case '-14':
// 	// 		pointsOfLielais = -14;
// 	// 		break;
// 	// 		case '-12':
// 	// 		pointsOfLielais = -12;
// 	// 		break;
// 	// 		case '-8':
// 	// 		pointsOfLielais = -8;
// 	// 		break;
// 	// 		case '-6':
// 	// 		pointsOfLielais = -6;
// 	// 		break;
// 	// 		case '-4':
// 	// 		pointsOfLielais = -4;
// 	// 		break;
// 	// 		case 'Lielais wins parasti':
// 	// 		pointsOfLielais = 2;
// 	// 		break;
// 	// 		case '4':
// 	// 		pointsOfLielais = 4;
// 	// 		break;
// 	// 		case '6':
// 	// 		pointsOfLielais = 6;
// 	// 		break;
// 	// 		// 8 - bezstikis + pule.... padomāt, ka puli skaitīt
// 	// 		case '10':
// 	// 		pointsOfLielais = 10;
// 	// 		break;
// 	// 		case '12':
// 	// 		pointsOfLielais = 12;
// 	// 		break;
// 	// 		case '14':
// 	// 		pointsOfLielais = 14;
// 	// 		break;
// 	// 		default:
// 	// 		pointsOfLielais = 2;
// 	// }
// 	// console.log('pointsOfLielais', pointsOfLielais);
// 	return pointsOfLielais;

// } 



