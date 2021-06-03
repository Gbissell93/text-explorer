const prompt = require("prompt-sync")();

//set player position variables
let x = 0;
let y = 0;
 
//set prompt for player movement
while (x !== 3 && y !== -2){ 
    console.log(`your current coordinates are (${x},${y}).`)
const player = (prompt(`would you like to move "up", "down", "left", or "right"?) `))

    if (player == "up") {
        ++y
    }

   else if (player == "down") {
        --y
    }

  else  if (player == "left") {
        --x
    }

  else  if (player == "right") {
        ++x
    }
      
    
}

