// Define the hands and possible values for winning hands
const hands = ['rock', 'paper', 'scissors'];
const values = {
  rock: { beats: 'scissors' },
  paper: { beats: 'rock' },
  scissors: { beats: 'paper' },
};

// Define the playGame function to play until a player wins playUntil hands
function playGame(player1, player2, playUntil = 3) {
  let p1Wins = 0, p2Wins = 0;
  while (p1Wins < playUntil && p2Wins < playUntil) {
    const winner = playRound(player1, player2);
    if (winner === player1) {
      p1Wins++;
    } else if (winner === player2) {
      p2Wins++;
    }
  }
  return (p1Wins >= playUntil) ? player1 : player2;
}

// Define the playTournament function to play a tournament between 4 players
function playTournament(player1, player2, player3, player4, playUntil = 3) {
  const round1winner1 = playGame(player1, player2, playUntil);
  const round1winner2 = playGame(player3, player4, playUntil);
  const tournamentWinner = playGame(round1winner1, round1winner2, playUntil);
  console.log(`${tournamentWinner.name} is the world champion!`);
  return tournamentWinner;
}
