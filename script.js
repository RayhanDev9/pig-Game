'use strict';

// Player
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
// Score Player
const scorePlayer1 = document.getElementById('score-player-1');
const scorePlayer2 = document.getElementById('score-player-2');
// Crureent Score Player
const cureentScorePlayer1 = document.getElementById('cureent-score-1');
const cureentScorePlayer2 = document.getElementById('cureent-score-2');
//Button
const btnNewGame = document.querySelector('.btn.btn--new');
const btnRoll = document.querySelector('.btn.btn--roll');
const btnHold = document.querySelector('.btn.btn--hold');
//img Dice
const imgDice = document.querySelector('.dice');
console.info(imgDice.src);

console.info(btnNewGame, btnRoll, btnHold, imgDice);

let angkaRandom = 0;
let cureent = 0;

const init = () => {
  // ketika angka random bernilai satu ini yang terjadi
  const resetIfRandomNumberIsOne = () => {
    if (angkaRandom === 1) {
      // Reset cureent menjadi 0
      cureent = 0;
      //   Memindahkan class active
      player1.classList.toggle('active');
      player2.classList.toggle('active');
    }
  };

  //   Ketika pemain menang
  const winner = () => {
    if (Number(scorePlayer1.textContent) >= 100) {
      player1.classList.add('win');
      player2.classList.add('lose');
      btnRoll.disabled = true;
      btnHold.disabled = true;
      imgDice.classList.remove('show')
    }
    if (Number(scorePlayer2.textContent) >= 100) {
      player1.classList.add('lose');
      player2.classList.add('win');
      btnRoll.disabled = true;
      btnHold.disabled = true;
      imgDice.classList.remove('show')
    }
  };

  //   Ketika bntRool Ditekan Ini yang terjadi
  btnRoll.addEventListener('click', () => {
    // Menambahkan class show,untuk merubah display imgDice menjadi block
    imgDice.classList.add('show');
    // Untuk mendapatkan angka random
    angkaRandom = Math.floor(Math.random() * 6) + 1;
    console.info(angkaRandom);

    // Memanggil function resetIfRandomNumberIsOne
    resetIfRandomNumberIsOne();

    if (player1.classList.contains('active')) {
      if (angkaRandom !== 1) {
        // untuk menambahkan nilai current
        cureent += angkaRandom;
      }
      // Ini untuk merubah textContent cureentScorePlayer 1
      cureentScorePlayer1.textContent = angkaRandom;
      //   untuk merubah img dice
      imgDice.src = `img/dice-${angkaRandom}.png`;
    }

    if (player2.classList.contains('active')) {
      if (angkaRandom !== 1) {
        // untuk menambahkan nilai current
        cureent += angkaRandom;
      }

      // Ini untuk merubah textContent cureentScorePlayer 1
      cureentScorePlayer2.textContent = angkaRandom;
      //   untuk merubah img dice
      imgDice.src = `img/dice-${angkaRandom}.png`;
    }
  });
  //   Ketika bntHold Ditekan Ini yang terjadi
  btnHold.addEventListener('click', () => {
    if (player1.classList.contains('active')) {
      // Untuk menmabahkan text content Player 1 (Scorenya)
      scorePlayer1.textContent = `${
        Number(scorePlayer1.textContent) + cureent
      }`;
      //   Untuk meriset current menjadi nol
      cureent = 0;
    }
    if (player2.classList.contains('active')) {
      // Untuk menmabahkan text content Player 1 (Scorenya)
      scorePlayer2.textContent = `${
        Number(scorePlayer2.textContent) + cureent
      }`;
      //   Untuk meriset current menjadi nol
      cureent = 0;
    }
    // Untuk memindah class active
    player1.classList.toggle('active');
    player2.classList.toggle('active');

    winner();
  });

  btnNewGame.addEventListener('click', () => {
    cureent = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    cureentScorePlayer1.textContent = 0;
    cureentScorePlayer2.textContent = 0;
    player1.classList.remove('win');
    player2.classList.remove('win');
    player1.classList.remove('lose');
    player2.classList.remove('lose');
    btnRoll.disabled = false;
    btnHold.disabled = false;
    console.info(scorePlayer1.textContent);
    imgDice.classList.remove('show');
    player1.classList.add('active');
    player2.classList.remove('active');
  });
};

init();
