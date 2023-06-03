/*
"Guess the number" - where you need to guess the number conceived
 by the program from 1 to 10 and the program at the end will display
  how many attempts we succeeded in.
*/

// what we need:
//communicate with user
const readline = require("readline");

// saving to file
// const fs = require("fs"); // fs in default is with callback
const fs = require("fs").promises; // for then/catch

// upgrade - need to install through command line
const { program } = require("commander");

// import colors to color text in the console
require("colors");

// determine options
program.option("-f, --file [type]", "filename to save the file", "base.txt");

// access to arguments
program.parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0; // which time did the user guess the number?
const logFile = program.opts().file;
const mind = Math.floor(Math.random() * 10 + 1);
console.log("🚀 ~ mind:", mind);

// check the number
const isValid = (value) => {
  if (isNaN(value)) {
    console.log("Enter a number!".red);
    return false;
  }
  if (value < 1 || value > 10) {
    console.log("Number must be between 1 and 10".red);
    return false;
  }
  return true;
};

// save info to databse (a file at this point)
const log = async (data) => {
  try {
    await fs.appendFile(logFile, `${data}\n`);
    console.log(`Succeeded in saving the result to file ${logFile}`.green);
  } catch (err) {
    console.log(`Failed to save file ${logFile}`.red);
  }
};
// the game itself
// function game() calls itself recursively until we guess the intended number
const game = () => {
  rl.question("Enter a number from 1 to 10: ".yellow, (value) => {
    const number = Number.parseInt(value, 10);
    if (!isValid(number)) {
      game();
      return;
    }
    count += 1;
    if (number === mind) {
      console.log(
        `Congrats, you guessed the number in ${count} step(s).`.green
      );
      log(
        `${new Date().toLocaleDateString()}: Congratulations, you guessed the number in ${count} step(s)`
      );
      rl.close();
      return;
    }
    console.log("Wrong, try again".red);
    game();
  });
};

game();
