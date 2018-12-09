class TicTacToe {

  constructor() {

    this._players = [];

    this._ticTacToeView = new TicTacToeView();
    this._formTemplate = new FormTemplate();
    this._gameTemplate = new GameTemplate();

    this._lastPLayer;

    this.init();
  }

  init() {
    this._ticTacToeView.addTemplate(this._formTemplate.getTemplate());
  }

  choosePlayerTime() {
    if (!this._lastPLayer || this._lastPLayer == this._players[1]) 
      this._lastPLayer = this._players[0];
    else 
      this._lastPLayer = this._players[1];
    
    this._gameTemplate.addValueInElement('#player-time',
     `Vez do jogador: ${this._lastPLayer.name}`);
  }

  play() {
    this.choosePlayerTime();
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
    this._ticTacToeView.addTemplate(this._gameTemplate.getTemplate());

    this._gameTemplate.addValueInElement('#player1-name',
     this._players[0].name);
    this._gameTemplate.addValueInElement('#player1-char',
     this._players[0].char);
    this._gameTemplate.addValueInElement('#player2-name',
     this._players[1].name);
    this._gameTemplate.addValueInElement('#player2-char',
     this._players[1].char);

    this.play();
  }

}