const hands = ['rock', 'paper', 'scissors'];
function getHand() {
    const hands = ['rock', 'paper', 'scissors'];
    const index = parseInt(Math.random() * 10) % 3;
    return hands[index];
  }
console.log(getHand());  
// player 1
const player1 = {
    name: 'Player 1',
    getHand: function() {
      const hands = ['rock', 'paper', 'scissors'];
      const index = parseInt(Math.random() * 10) % 3;
      return hands[index];
    }
  };
// player 2
const player2 = {
    name: 'Player 2',
    getHand: function() {
      const hands = ['rock', 'paper', 'scissors'];
      const index = parseInt(Math.random() * 10) % 3;
      return hands[index];
    }
  };
console.log(player1.name);
console.log(player1.getHand());

console.log(player2.name); 
console.log(player2.getHand());

function playRound(player1, player2) {
    let hand1 = player1.getHand();
    let hand2 = player2.getHand();
    console.log(`${player1.getName()} played ${hand1}.`);
    console.log(`${player2.getName()} played ${hand2}.`);
    if (hand1 === hand2) {
      console.log("It's a tie!");
      return null;
    } else if (hand1 > hand2) {
      console.log(`${player1.getName()} wins!`);
      return player1;
    } else {
      console.log(`${player2.getName()} wins!`);
      return player2;
    }
  }
  