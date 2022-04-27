

let playerName= window.prompt("What is your robot's name? ")  // This is how we store user input for the program
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;


// Alert players that they are starting the round
let fight =function(){
    window.alert("Welcome to Robot Gladiators!")
}

fight();

let promptFight = window.prompt (" Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");


window.alert(playerName);  // Added an alert that will contain the robot's name after it's entered.

if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } 
        else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  

    //If zero or below, we'll receive an alert that our robot has died
    //If it's above zero, then we'll receive an alert about how much health our robot has left.
    // check player's health

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } 
        else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }


    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");
        // confirm player wants to skip
    let confrimSkip = window.confirm ("Are You sure you'd like to quit? ");


    // if yes (true), leave fight - MEANING IF PLAYER WOULD LIKE TO SKIP FIGHT !
    if (confrimSkip){
        window.alert(playerName + " Has decided to skip this fight. Goodbye! ");

    // subtract money from playerMoney for skipping
        playerMoney= playerMoney -2 ;

    }

    // if no (false), ask question again by running fight() FUNTION again

    else {
        fight();
}


    } 
        else {
    window.alert("You need to choose a valid option. Try again!");
  }















// // "Tony the Robot is ready for battle!"
// console.log(playerName + " is ready for battle!");   // Example of string concatenation 

// // "Your robot, Tony the Robot, has won!
// console.log("Your robot, " + playerName + ", has won!");      // Example of string concatenation 
