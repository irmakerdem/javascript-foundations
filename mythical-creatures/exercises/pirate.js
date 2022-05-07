class Pirate {
  constructor(nam, job) {
    this.name = nam;
    this.job = job || 'scallywag';
    this.cursed = false;
    this.booty = 0;
  }
  robShip() {
    this.booty += 100;
    if (this.booty >= 500) {
      this.booty = 500;
      this.cursed = true;
      return `ARG! I\'ve been cursed!`;
    } else {
      return `YAARRR!`;
    }
  }
  liftCurse() {
    if (this.cursed) {
      this.booty = this.booty - 300;
      this.cursed = false;
      return `Your curse has been lifted!`;
    } else {
      return `You don\'t need to lift a curse!`;
    }
  }
}

module.exports = Pirate;
