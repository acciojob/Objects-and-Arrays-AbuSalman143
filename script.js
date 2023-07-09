const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

// Create a reference variable team to the players array
let team = players;

// Create a copy variable team1 of players array
let team1 = players.slice();

// Create a copy variable cap1 of person object
let cap1 = Object.assign({}, person);

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
