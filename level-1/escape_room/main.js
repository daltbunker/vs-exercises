var readline = require("readline-sync");


var play = true;
var escaped = false;

while (play) {
    var user_choice = readline.question("Options: (1)Put hand in hole, (2)Find the key, (3)Open the door, (4)Quit.\n");
    if (user_choice == 1) {
        console.log("You're Dead, Try Again!");
    } else if (user_choice == 2) {
        console.log("Great Choice! You're only 1 step away.")
        var second_choice = readline.question("Options: (1)Put hand in hole, (2)Open the door, (3)Quit.\n");
        if (second_choice == 1) {
            console.log("You're Dead, Try Again!")
        } else if (second_choice == 2) {
            escaped = true;
            play = false;
        } else {
            play = false;
        }
    } else if (user_choice == 3) {
        console.log("Really the door? Yeah it's locked.");
    } else {
        play = false;
    }
}

if (escaped) {
    console.log("Congragulations!! You've escaped.")
} else {
    console.log("You're Trapped for Eternity!")
}


