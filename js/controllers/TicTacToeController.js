class TicTacToe {

  constructor() {

    this._players = [];

    this._ticTacToeView = new TicTacToeView();
    this._formTemplate = new FormTemplate();
    this._gameTemplate = new GameTemplate();

    this._playerTime;
    this._winnerPlayer;

    this.init();
  }

  init() {
    this._ticTacToeView.addTemplate(this._formTemplate.getTemplate());
  }

  changePlayerTime() {
    if (!this._playerTime || this._playerTime == this._players[1]) 
      this._playerTime = this._players[0];
    else 
      this._playerTime = this._players[1];

    this.addPlayerMessage(`Vez do jogador: ${this._playerTime.name}`);
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
        try {
          this._gameTemplate.addCharInQuadrant(quadrant, 
            this._playerTime.char, this.gameHasEnded());

          if (this.gameHasEnded()) {
            this._gameTemplate.addBtnRestart();
            this.restartMatch();
            return true;
          }
          this.changePlayerTime();
        } catch (e) {
          this.addPlayerMessage(e.message);
        }
      });
    });
  }

  gameHasEnded() {
    if (this.withoutWinner()) {
      this.addPlayerMessage('O jogo terminou sem vencedores');
      return true;
    } else if (this.hasWinner()) {
      this.addPlayerMessage(`${this._winnerPlayer.name} venceu!`);
      return true;
    }

    return false;
  }

  restartMatch() {
    const addBtnRestart = document.querySelector('#btn-restart');
    addBtnRestart.addEventListener('click', () => {
      this.initGameTemplate();
    });
  }

  withoutWinner() {
    return document.querySelectorAll('.space').length == 0;
  }

  hasWinner() {
    const quadrants = this.getQuadrantsArrayValue();
    const linesAndColumns = this.checkSequenceToWin(quadrants);

    return linesAndColumns.some(element => {
      return element.some(e => {
        if (e[0] == e[1] && e[1] == e[2]) {
          this.defineWinner(e[0]);
          return true;
        }
      });
    }); 
  }

  checkSequenceToWin(quadrants) {
    const columns = [];
    const rows = [];
    const diagonal = this.pushQuadrantsOndiagonal(quadrants);;

    for (let i = 0; i < 3; i++) {
      columns.push([quadrants[i], quadrants[i+3], quadrants[i+6]]); 
    }

    for (let i = 0; i < 7; i+=3) {
      rows.push([quadrants[i], quadrants[i+1], quadrants[i+2]]);
    }

    return [rows, columns, diagonal];
  }

  pushQuadrantsOndiagonal(quadrants) {
    const diagonal = [];
    diagonal.push([quadrants[0], quadrants[4], quadrants[8]]);
    diagonal.push([quadrants[2], quadrants[4], quadrants[6]]);
    return diagonal;
  }

  defineWinner(char) {
    this._winnerPlayer = this._players[0].char == char ? this._players[0] :
     this._players[1];
  }

  addPlayerMessage(message) {
    this._gameTemplate.addValueInElement('#player-time-winner', message);
  }

  addPlayer(event) {
    event.preventDefault();

    const $ = document.querySelector.bind(document);
    const player1NameEl = $('#player1-name');
    const player2NameEl = $('#player2-name');
    const player1CharEl = $('#char');

    let validator = new ValidatePlayers(player1NameEl, player2NameEl);

    if (!validator.isValid()) {
      this._formTemplate.addErrorMessage(validator.getErrorMessage());
      return;
    }

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