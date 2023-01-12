const gameBoard = (() => {
  const cell1 = document.getElementById('cell1');
  const cell2 = document.getElementById('cell2');
  const cell3 = document.getElementById('cell3');
  const cell4 = document.getElementById('cell4');
  const cell5 = document.getElementById('cell5');
  const cell6 = document.getElementById('cell6');
  const cell7 = document.getElementById('cell7');
  const cell8 = document.getElementById('cell8');
  const cell9 = document.getElementById('cell9');
  let Winner;
  const turn = document.getElementsByClassName('turn');

  const cell = document.querySelectorAll('.cell');

  let count = 0;

  cell.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      if (cell.disabled) {
        return;
      }
      cell.classList.add(piece());
      cell.classList.remove('cell');
      cell.disabled = true;
      count++;
      console.log(count);
      displayTurn();
      checkWinner();
      checkDraw();
    });
  });

  const piece = () => {
    if (count % 2 == 0) {
      return 'cellX';
    }
    return 'cellO';
  };

  function checkDivsClass1(cell1, cell2, cell3) {
    if (cell1.className === class1 && cell2.className === class1 && cell3.className === class1) {
      return true;
    }
    return false;
  }

  function checkDivsClass2(cell1, cell2, cell3) {
    if (cell1.className === class2 && cell2.className === class2 && cell3.className === class2) {
      return true;
    }
    return false;
  }

  const class1 = 'cellX';
  const class2 = 'cellO';

  const grid = [[cell1, cell2, cell3],
    [cell4, cell5, cell6],
    [cell7, cell8, cell9],
  ];

  function checkRows(grid) {
    for (let i = 0; i < 3; i++) {
      if (checkDivsClass1(grid[i][0], grid[i][1], grid[i][2])) {
        return Winner = class1;
      }
      if (checkDivsClass2(grid[i][0], grid[i][1], grid[i][2])) { return Winner = class2; }
    }
    return false;
  }

  function checkColumns(grid) {
    for (let i = 0; i < 3; i++) {
      if (checkDivsClass1(grid[0][i], grid[1][i], grid[2][i])) {
        return Winner = class1;
      }
      if (checkDivsClass2(grid[0][i], grid[1][i], grid[2][i])) {
        return Winner = class2;
      }
    }
    return false;
  }

  function checkDiagonals(grid) {
    if (checkDivsClass1(grid[0][0], grid[1][1], grid[2][2])
        || checkDivsClass1(grid[0][2], grid[1][1], grid[2][0])) {
      return Winner = class1;
    }
    if (checkDivsClass2(grid[0][0], grid[1][1], grid[2][2])
        || checkDivsClass2(grid[0][2], grid[1][1], grid[2][0])) {
      return Winner = class2;
    }

    return false;
  }

  function checkWinner() {
    if (checkRows(grid)) {
      whenWinner();
    } else if (checkColumns(grid)) {
      whenWinner();
    } else if (checkDiagonals(grid)) {
      whenWinner();
    } else {
      console.log('No rows or columns have three divs with either class1 or class2.');
    }
  }

  function checkDraw() {
    if (count == 9 && checkDiagonals(grid) == false && checkColumns(grid) == false && checkRows(grid) == false) { return document.getElementById('turn').innerHTML = 'It is a draw!'; }
  }

  const displayTurn = () => {
    if (count % 2 == 0) {
      return document.getElementById('turn').innerHTML = "Player X's turn";
    }
    return document.getElementById('turn').innerHTML = "Player O's turn";
  };

  function whenWinner() {
    for (let i = 0; i < cell.length; i++) {
      cell[i].disabled = true;
    }
    if (Winner == 'cellX') {
      return document.getElementById('turn').innerHTML = 'Player X Wins!';
    }
    return document.getElementById('turn').innerHTML = 'Player O Wins!';
  }

  function restart() {
    const cells = document.querySelectorAll('.cellX, .cellO');
    cells.forEach((cell) => cell.className = 'cell');
    cells.forEach((cell) => cell.disabled = false);
    count = 0;
    Winner = null;
    document.getElementById('turn').innerHTML = "Player X's turn";
  }

  const restartBtn = document.getElementById('restartBtn');
  restartBtn.addEventListener('click', restart);
})();
