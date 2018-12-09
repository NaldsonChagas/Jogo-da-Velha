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
    this._player1NameEl = $('#player1-name');
    this._player2NameEl = $('#player2-name');
    this._player1CharEl = $('#char');

    this._players.push(
      new Player(this._player1NameEl.value, this._player1CharEl.value)
    );
    const char = this._player1CharEl.value == 'X' ? 'O' : 'X';
    this._players.push(
      new Player(this._player1NameEl.value, char)
    );

    this._ticTacToeView.addTemplate(new GameTemplate().getTemplate());
  }

}