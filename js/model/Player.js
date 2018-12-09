class Player {

  constructor(name, char) {
    this._name = name;
    this._char = char;
  }

  get name() {
    return this._name;
  }

  get char() {
    return this._char;
  }
}