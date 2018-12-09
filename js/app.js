const controller = new TicTacToe();

document.querySelector('form').addEventListener('submit', (event) => {
  controller.addPlayer(event);
});