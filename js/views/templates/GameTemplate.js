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
      <div class="row col-md-8">
        <div class="quadrant" id="quadrant-1">
          <h1>X</h1>
        </div>
        <div class="quadrant">
          <h1>X</h1>
        </div>
        <div class="quadrant">
          <h1>X</h1>
        </div>
      </div>

      <div class="row col-md-8">
        <div class="quadrant">
          <h1>X</h1>
        </div>
        <div class="quadrant">
          <h1>X</h1>
        </div>
        <div class="quadrant">
          <h1>X</h1>
        </div>
      </div>

      <div class="row col-md-8">
        <div class="quadrant">
          <h1>X</h1>
        </div>
        <div class="quadrant">
          <h1>X</h1>
        </div>
        <div class="quadrant">
          <h1>X</h1>
        </div>
      </div>
    </div>
    `;
  }

}