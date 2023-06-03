// INSTALL
/*
npm i commander - moduł do opracowywania wszelkiego rodzaju kombinacji 
                parametrów i ich formatów
npm i readline - modul do wprowadzania danych w konsoli przez uzytkownika

*/
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin, // wprowadzenie ze standardowego strumienia
  //   input: fs.createReadStream('./readme.txt'),
  output: process.stdout, // wyprowadzenie do standardowego strumienia
});

// reagowanie na wprowadzenia w konsoli wartości przez uzytkownika
// i potwierdzenie enterem
rl.on("line", (cmd) => {
  console.log(`You just wrote: ${cmd}`);
});

// odpowiadanie na pytania
rl.question("Whats you name?", (answer) => {
  rl.pause();

  const a = "http";
  const b = "://";
  const c = "www...";
  const table = [a, b, c];
  table.join(); // 'http://www...

  console.log(`Hello ${answer}, I want you to play a game...`);
  rl.close();
});
