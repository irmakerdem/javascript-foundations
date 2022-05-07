class Unicorn {
  constructor(nam, col) {
    this.name = nam;
    this.color = col || 'white';
  }
  isWhite() {
    return false;
  }
  says(msg) {
    return `**;* ${msg} *;**`;
  }
}

module.exports = Unicorn;
