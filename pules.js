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




