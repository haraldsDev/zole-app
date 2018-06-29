// Player Registration Page

// default initial page with 3 players Buttons, and Text PlaceHolders where to write in Names of the player. Also greyed Button for adding 4th Player.

// When 3 players names are in - option to add 4th player or Register and Start.




// Other Options:
// Option to add Rate - like 0.25 Euro for a point.
// option to change Order of Players
// option to add another Player

// Onboarding info - how to use this app.




// FOR Counting Results page

// Other Options:
// - wake up after 40 seconds - and then react to the average time used by THIS session players.
// - show the total Results vs Show a list of all Results. List of all Results can be in background, rather greyed out; the 3 Button interface is better for pushing Button.
// - provide several color/interface schemes. (1) "Minimum" - black & white sheet of paper. (2) "Atturīgs" - nice colors.
// - provide option to go back and correct result of some game.
// - option to shorten the names of players to their Initial letter. If first letter is equal, then choose a first letter which is different.
// - option to save results of THIS session and Add to previous session with the same players.
// - option to input just the result of Session, not having to write every single party in phone, if wanted. + tell about this in the onboarding part.
// option to play Galds, Mazaa Zole - and how to calculate it.

// make Pules calculating.
// make a Button to press when new Common Pule is made.
// make possibility to manually add Personal Pule.

// make a table of results Showing

// can make some Player (of 4) inactive for time - while others keep playing in the same Session



// Second player gets + 2 points; all other players get "opposite sign of the same number / divided by count of players"


when playerLielais added some Amount of PointsLielais (+4),


then every other player gets ++ pointsMazais

function pointsMazais () {
	return -1 * (PointsLielais / (numOfPlayers - 1));
}

number of columns (== Players )

let numOfPlayers = 3;


// all players Points Sum = 0


// addRow to table

// populate Row with values

// vizuāli iezīmēt kreisajā pusē dzeltenoranžu un lielais zaudē. labajā pusē iezīmēt ar zaļu un lielais vinnē. Lielākas pogas un tad iet uz leju - un paliek mazākas, kur ir jaņi un bezstiķis. vēl zemāk visi trīs zoles vinnesti.





