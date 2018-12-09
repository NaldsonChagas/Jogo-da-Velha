class FormTemplate extends Template {
  
  getTemplate() {
    return `
    <form>
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" name="player1-name" id="player1-name" placeholder="Seu nome" class="form-control">

        <label for="char">Selecione com o que você quer jogar:</label>
        <select name="char" id="char" class="form-control">
          <option value="X">X</option>
          <option value="O">O</option>
        </select>
      </div>
      <strong>Jogador 2:</strong>
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" name="player2-name" id="player2-name" placeholder="Seu nome" class="form-control">
      </div>
      <button class="btn btn-info">Começar</button>
    </form>
    `;
  }

}