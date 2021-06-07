const prompt = require("prompt-sync")();

//set player position variables
let x = 0;
let y = 0;
let next = true
 
//set prompt for player movement and assign locations to coordinates
while (next){ 

    //location prompts

    //starting point
    if (x == 0 && y == 0) {
        console.log("You find in the middle of Hyrule Field. You must find The Golden Keyboard. Code your destiny! ")
    }
// row -2
    if (x == -2 && y == -2) {
        console.log("You Are now at Hylia")
    } 
    
    if(x == -1 && y == -2) {
        console.log("You find a sign that reads 'Lake Hylia east from here' ")
    }

    if(x == 0 && y == -2) {
        console.log("You are now in The Lost Woods")
    }
    
    if(x == 1 && y == -2) {
        console.log("You are now in Kokiri Forest")
    }

    if(x == 2 && y == -2) {
        console.log("You are now in You found the Great Deku Tree! Nice Moustash!")
    }
//row -1
    if(x == 0 && y == -1) {
        console.log("you've entered Korkiri Forest. ")
    }
    if (x == -2 && y == -1) {
        console.log("You find yourself standing along the Gerudo Valley river.")
    }
    if (x == -1 && y == -1) {
        console.log("You find a gate that reads 'Lake Hylia through here' ")
    }
    if (x == 1 && y == -1) {
        console.log("You're now at Zora's River ")
    }
    if (x == 2 && y == -1) {
        console.log("You've entered Zora's Domain ")
    }
//row 0

    if (x == -2 && y == 0) {
        console.log("You're now near Gerudo River")
    }
    if (x == -1 && y == 0) {
        console.log("You've entered Lon Lon Ranch ")
    }
    
    if (x == 1 && y == 0) {
        console.log("You've entered Kakariko Village ")
    }
    if (x == 2 && y == 0) {
        console.log("You are now in the Kakariko Cemetary ")
    }
    //row 1
    if (x == -2 && y == 1) {
        console.log("You've entered The Gerudo Desert")
    }
    if (x == -1 && y == 1) {
        console.log("You made it to Hyrule Castle Town ")
    }
    if (x == 0 && y == 1) {
        console.log("You are now taveling the Death Mountain Trail ")
    }
   
    if (x == 1 && y == 1) {
        console.log("You've entered Dodongo's Caveren ")
    }

    if (x == 2 && y == 1) {
        console.log("You Found a Great Fairy Fountain! ")
    }
//row 2

    if (x == -2 && y == 2) {
        console.log("You've entered The Gerudo Valley")
    }
    if (x == -1 && y == 2) {
        console.log("You made it to Hyrule Castle! ")
    }
    if (x == 0 && y == 2) {
        next = false
        console.log("You've Found The Golden Keyboard at the Temple of Time! You Win! "
        )
        
    }

    if (x == 1 && y == 2) {
        console.log("You've entered Goron Village ")
    }

    if (x == 2 && y == 2) {
        console.log("You are now at The top of Death Mountain! Just take in that view! ")
    }
    //current position prompt
        console.log(`your current coordinates are (${x},${y}).`)
    const player = (prompt(`would you like to move "up", "down", "left", or "right"?) `))

if (x == -2 && y == -2) {
    player = prompt("Would you like to go 'up' or right? ")
}

//player movement input
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


//Map section

