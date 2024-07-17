document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');
  const resetBtn = document.querySelector('#reset');
  const newGameBtn = document.querySelector('#new');
  const msgContainer = document.querySelector('.msg-container');
  const msg = document.querySelector('#msg');
  let turnX = true;
  let gameActive = true;

  const winPatterns = [
      [0, 1, 2], [0, 3, 6], [0, 4, 8],
      [3, 4, 5], [6, 7, 8], [1, 4, 7],
      [2, 5, 8], [2, 4, 6],
  ];

  boxes.forEach((box) => {
      box.addEventListener('click', () => {
          if (gameActive && box.textContent === '') {
              box.textContent = turnX ? 'X' : 'O';
              checkWinner();
              turnX = !turnX;
          }
      });
  });

  const checkWinner = () => {
      for (let pattern of winPatterns) {
          let pos1 = boxes[pattern[0]].textContent;
          let pos2 = boxes[pattern[1]].textContent;
          let pos3 = boxes[pattern[2]].textContent;

          if (pos1 !== '' && pos1 === pos2 && pos2 === pos3) {
              showWinner(pos1);
              break;
          }
      }
  };

  const showWinner = (winner) => {
      msg.textContent = `Congratulations! ${winner} wins!`;
      msgContainer.classList.remove('hide');
      gameActive = false;
  };

  resetBtn.addEventListener('click', () => {
      boxes.forEach((box) => {
          box.textContent = '';
      });
      msgContainer.classList.add('hide');
      gameActive = true;
      turnX = true;
  });

  newGameBtn.addEventListener('click', () => {
      boxes.forEach((box) => {
          box.textContent = '';
      });
      msgContainer.classList.add('hide');
      gameActive = true;
      turnX = true;
  });
});
