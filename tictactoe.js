


const gameBoard = (() => {
  player1 = {
    //piece: X

  };
  player2 = {

  };
  console.log('hi');

  var cell = document.querySelectorAll('.cell');

  cell.forEach(cell => {
    cell.addEventListener('click', function color(event) {
      cell.setAttribute('style', 'background-image: url(x100.png);');
    })
  })






})();

