class Snowman {
  // constructor(carrots, coal, buttons, snowballs) {
  //   this.carrots = carrots;
  //   this.coal = coal;
  //   this.buttons = buttons;
  //   this.snowballs = snowballs;
  //   this.magicHat = false;
  // }
  constructor(cat) {
    this.carrots = cat.carrots;
    this.coal = cat.coal;
    this.buttons = cat.buttons;
    this.snowballs = cat.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if (this.coal >= 2 && this.buttons >= 5 && this.carrots >= 1 && this.snowballs >= 2) {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;
