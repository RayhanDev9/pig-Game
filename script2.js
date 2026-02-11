// player
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');

//btn
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// creent score
const cureentScore1 = document.querySelector('#cureent-score-1');
const cureentScore2 = document.querySelector('#cureent-score-2');

// score
const scorePlayer1 = document.querySelector('#score-player-1');
const scorePlayer2 = document.querySelector('#score-player-2');

// dadu
const dadu = document.querySelector('.dice');

console.log(player1, player2);

const settingActivePlayer = activePlayer => {
  return activePlayer === 1 ? 2 : 1;
};

// Mutasi data,active player
let activePlayer;

btnRoll.addEventListener('click', function () {
  // setting dadu
  const noDadu = Math.floor(Math.random() * 6) + 1;
  console.info(noDadu);

  dadu.src = `img/dice-${noDadu}.png`;
  dadu.classList.add('show');

  activePlayer = activePlayer === undefined ? 1 : activePlayer;
  console.info(activePlayer);

  //Player 1
  if (activePlayer === 1) {
    if (noDadu === 1) {
      cureentScore1.textContent = 0;
      activePlayer = settingActivePlayer(activePlayer);

      player1.classList.toggle('active');
      player2.classList.toggle('active');
    } else {
      cureentScore1.textContent = noDadu + Number(cureentScore1.textContent);
    }
  } else {
    if (noDadu === 1) {
      cureentScore2.textContent = 0;
      activePlayer = settingActivePlayer(activePlayer);

      player1.classList.toggle('active');
      player2.classList.toggle('active');
    } else {
      cureentScore2.textContent = noDadu + Number(cureentScore2.textContent);
    }
  }
});

btnHold.addEventListener('click', function () {
  if (activePlayer === 1) {
    scorePlayer1.textContent =
      Number(scorePlayer1.textContent) + Number(cureentScore1.textContent);
    cureentScore1.textContent = 0;

    if (Number(scorePlayer1.textContent) >= 50) {
      player1.classList.add('win');
      player2.classList.add('lose');

      btnHold.disabled = true;
      btnRoll.disabled = true;
    } else {
      player1.classList.toggle('active');
      player2.classList.toggle('active');

      activePlayer = settingActivePlayer(activePlayer);
    }
  } else {
    scorePlayer2.textContent =
      Number(scorePlayer2.textContent) + Number(cureentScore2.textContent);
    cureentScore2.textContent = 0;

    if (Number(scorePlayer2.textContent) >= 10) {
      player1.classList.add('lose');
      player2.classList.add('win');

      btnHold.disabled = true;
      btnRoll.disabled = true;
    } else {
      player1.classList.toggle('active');
      player2.classList.toggle('active');
      activePlayer = settingActivePlayer(activePlayer);
    }
  }
});

btnNew.addEventListener('click', function () {
  activePlayer = 1;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;

  player1.classList.remove('lose');
  player2.classList.remove('win');

  player1.classList.remove('win');
  player2.classList.remove('lose');

  if (!player1.classList.contains('active')) {
    player1.classList.toggle('active');
    player2.classList.remove('active');
  }

  btnHold.disabled = false;
  btnRoll.disabled = false;
});
