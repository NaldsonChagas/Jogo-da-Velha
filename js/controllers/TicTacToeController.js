class TicTacToe {

  constructor() {

    this._players = [];

    this._ticTacToeView = new TicTacToeView();
    this._formTemplate = new FormTemplate();
    this._gameTemplate = new GameTemplate();

    this._playerTime;
    this._winnerPlayer;

    //this.init();
    this.initOnGame();
  }

  /*

    TEMPORARY METHOD

  */
  initOnGame() {
    this._players.push(new Player('Naldson', 'X'));
    this._players.push(new Player('Llala', 'O'));

    this.initGameTemplate();
    
  }

  init() {
    this._ticTacToeView.addTemplate(this._formTemplate.getTemplate());
  }

  changePlayerTime() {
    if (!this._playerTime || this._playerTime == this._players[1]) 
      this._playerTime = this._players[0];
    else 
      this._playerTime = this._players[1];

    this.addPlayerTimeAndWinnerMessage(`Vez do jogador: ${this._playerTime.name}`);
  }

  getQuadrantsArray() {
    const quadrants = [];
    document.querySelectorAll('.quadrant').forEach(quadrant => {
      quadrants.push(quadrant);
    });
    return quadrants;
  }
  
  getQuadrantsArrayValue() {
    const quadrants = [];

    this.getQuadrantsArray().forEach(quadrant => {
      quadrants.push(quadrant.textContent);
    });
    
    return quadrants;
  }

  play() {
    this.changePlayerTime();
    const quadrants = this.getQuadrantsArray();

    quadrants.some((quadrant) => {
      quadrant.addEventListener('click', () => {
        this.addCharInQuadrant(quadrant);

        if (this.gameHasEnded()) return true;

        this.changePlayerTime();
      });
    });
  }

  gameHasEnded() {
    if (this.withoutWinner()) {
      this.addPlayerTimeAndWinnerMessage('O jogo terminou sem vencedores');
      return true;
    }

    return false;
  }

  withoutWinner() {
    return document.querySelectorAll('.space').length == 0;
  }

  addCharInQuadrant(quadrant) {
    let h1 = document.createElement('h1');
    h1.textContent = this._playerTime.char;
    quadrant.innerHTML = '';
    quadrant.appendChild(h1);
  }

  addPlayerTimeAndWinnerMessage(message) {
    this._gameTemplate.addValueInElement('#player-time-winner', message);
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