class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.countAction = 0;
    this.layingDown = false;
  }
  shootBow() {
    this.countAction ++;
    if (this.countAction < 3 && !this.layingDown) {
      return `Twang!!!`;
    }
      this.cranky = true;
      return `NO!`;
  }
  run() {
    this.countAction ++;
    if (this.countAction < 3 && !this.layingDown) {
      return `Clop clop clop clop!!!`;
    }
      this.cranky = true;
      return `NO!`;
    }
  sleep() {
    if (this.layingDown) {
      this.cranky = false;
      this.countAction = 0;
      return `ZZZZ`;
    }
      return `NO!`;
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if(this.standing) {
      this.cranky = false;
    }
      return `Not while I\'m laying down!`;
    }
}

module.exports = Centaur;
