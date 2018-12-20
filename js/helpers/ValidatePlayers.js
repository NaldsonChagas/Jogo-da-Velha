class ValidatePlayers {

  constructor(...elements) {
    this._elements = elements;
    this._errorMessage;
  }

  isValid() {
    let valid = true;
    this._elements.forEach(element => {
      let value = element.value;

      if (value == '' || value.length > 10) {
        this._errorMessage = 'Nome inválido. Insira um nome com no máximo 10 caracteres';
        valid = false;
      }
    });
    return valid;
  }

  getErrorMessage() {
    return this._errorMessage;
  }
}