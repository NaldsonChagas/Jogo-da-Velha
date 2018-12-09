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
        <h4 id="player-time">Vez do jogador: Naldson</h4>
      </div>
      <div class="row col-md-8">
        <div class="quadrant" id="quadrant-1">
          <h1 class="space">X</h1>
        </div>
        <div class="quadrant">
          <h1 class="space">X</h1>
        </div>
        <div class="quadrant">
          <h1 class="space">X</h1>
        </div>
      </div>

      <div class="row col-md-8">
        <div class="quadrant">
          <h1 class="space">X</h1>
        </div>
        <div class="quadrant">
          <h1 class="space">X</h1>
        </div>
        <div class="quadrant">
          <h1 class="space">X</h1>
        </div>
      </div>

      <div class="row col-md-8">
        <div class="quadrant">
          <h1 class="space">X</h1>
        </div>
        <div class="quadrant">
          <h1 class="space">X</h1>
        </div>
        <div class="quadrant">
          <h1 class="space">X</h1>
        </div>
      </div>
    </div>
    `;
  }

  addValueInElement(element, value) {
    let playerTimeEl = document.querySelector(element);
    playerTimeEl.innerHTML = value;
  }

}