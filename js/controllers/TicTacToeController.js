class TicTacToe {

  constructor() {

    this._players = [];
    this._ticTacToeView = new TicTacToeView();

    this.init();
  }

  init() {
    const formTemplate = new FormTemplate();
    this._ticTacToeView.addTemplate(formTemplate.getTemplate());
  }

  addPlayer(event) {
    event.preventDefault();

    const $ = document.querySelector.bind(document);
    const player1NameEl = $('#player1-name');
    const player2NameEl = $('#player2-name');
    const player1CharEl = $('#char');

    this._players.push(
      new Player(player1NameEl.value, player1CharEl.value)
    );
    const char = player1CharEl.value == 'X' ? 'O' : 'X';
    this._players.push(
      new Player(player2NameEl.value, char)
    );

    this.initGameTemplate();
  }

  initGameTemplate() {
    this._ticTacToeView.addTemplate(new GameTemplate().getTemplate());

    const $ = document.querySelector.bind(document);
    $('#player1-name').textContent = this._players[0].name;
    $('#player1-char').textContent = this._players[0].char;
    $('#player2-name').textContent = this._players[1].name;
    $('#player2-char').textContent = this._players[1].char;

  }

}