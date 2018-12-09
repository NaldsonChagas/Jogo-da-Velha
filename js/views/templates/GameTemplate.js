class GameTemplate extends Template {

  getTemplate() {
    return `
    <div class="row game-info-area col-md-8">
      <table class="table" id="players-info">
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