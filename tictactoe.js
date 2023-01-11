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
  player1 = {
    // piece: X

  };
  player2 = {

  };
  console.log('hi');

  const cell = document.querySelectorAll('.cell');

  let count = 0;
  let cellX;

  cell.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      // cell.setAttribute('style', piece());
      cell.classList.add(piece());
      cell.classList.remove('cell');
      count++;
      console.log(count);
      checkWinner();
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
      if (checkDivsClass1(grid[i][0], grid[i][1], grid[i][2]) || checkDivsClass2(grid[i][0], grid[i][1], grid[i][2])) {
        return true;
      }
    }
    return false;
  }

  function checkColumns(grid) {
    for (let i = 0; i < 3; i++) {
      if (checkDivsClass1(grid[0][i], grid[1][i], grid[2][i]) || checkDivsClass2(grid[0][i], grid[1][i], grid[2][i])) {
        return true;
      }
    }
    return false;
  }

  function checkDiagonals(grid) {
    if (checkDivsClass1(grid[0][0], grid[1][1], grid[2][2]) || checkDivsClass2(grid[0][0], grid[1][1], grid[2][2])
        || checkDivsClass1(grid[0][2], grid[1][1], grid[2][0]) || checkDivsClass2(grid[0][2], grid[1][1], grid[2][0])) {
      return true;
    }
    return false;
  }

  function checkWinner() {
    if (checkRows(grid)) {
      console.log('Three divs in a row have either class1 or class2!');
    } else if (checkColumns(grid)) {
      console.log('Three divs in a column have either class1 or class2!');
    } else if (checkDiagonals(grid)) {
      console.log('Three divs diagonally have either class1 or class2!');
    } else {
      console.log('No rows or columns have three divs with either class1 or class2.');
    }
  }
})();
