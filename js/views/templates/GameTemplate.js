class GameTemplate extends Template {

  getTemplate() {
    return `
    <div class="row game-info-area col-md-8">
      <table class="table" id="players-info">
        <tr>
          <td>Jogador 1:</td>
          <td id="player1-name"></td>
          <td id="player1-char"></td>
        </tr>
        <tr>
          <td>Jogador 2:</td>
          <td id="player2-name"></td>
          <td id="player2-char"></td>
        </tr>
      </table>
    </div>
    <div class="game">
      <div class="text-center col-md-8">
        <h4 id="player-time-winner">Vez do jogador: Naldson</h4>
        <div class="text-center" id="btn-restart"></div>
      </div>
      <div class="row col-md-8">
        <div class="quadrant"><h1 class="space">1</h1></div>
        <div class="quadrant"><h1 class="space">2</h1></div>
        <div class="quadrant"><h1 class="space">3</h1></div>
      </div>

      <div class="row col-md-8">
        <div class="quadrant"><h1 class="space">4</h1></div>
        <div class="quadrant"><h1 class="space">5</h1></div>
        <div class="quadrant"><h1 class="space">6</h1></div>
      </div>

      <div class="row col-md-8">
        <div class="quadrant"><h1 class="space">7</h1></div>
        <div class="quadrant"><h1 class="space">8</h1></div>
        <div class="quadrant"><h1 class="space">9</h1></div>
      </div>
    </div>
    `;
  }

  addCharInQuadrant(quadrant, char, gameHasEnded) {
    if (gameHasEnded) 
      throw new Error('Fim de jogo! Por favor, reinicie a partida');
    else if (['X', 'O'].includes(quadrant.textContent))
      throw new Error('Clique em um local que não esteja preenchido');

    const h1 = document.createElement('h1');
    h1.textContent = char;
    quadrant.innerHTML = '';
    quadrant.appendChild(h1);
  }

  addBtnRestart() {
    const btnRestartEl = document.querySelector('#btn-restart');
    const btn = btnRestartEl.appendChild(document.createElement('button'));
    btn.classList.add('btn', 'btn-info');
    btn.textContent = 'Reiniciar partida';
  }

  addValueInElement(element, value) {
    let playerTimeEl = document.querySelector(element);
    playerTimeEl.innerHTML = value;
  }

}