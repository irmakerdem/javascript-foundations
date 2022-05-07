var Skier = require('./Skier');

class Lift {
  constructor(lmt) {
    this.inService = true;
    this.limit = lmt;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(name, hasTicket) {
    var coolSkier = new Skier(name, hasTicket);
    if (!coolSkier.hasLiftTicket) {
      return `Sorry, ${coolSkier.name}. You need a lift ticket!`;
    }
    this.skiers.push(coolSkier);
    if (this.skiers.length > this.limit) {
      this.skiers.pop();
      return `Sorry, ${coolSkier.name}. Please wait for the next lift!`;
    }
  }
  startLift() {
    if(this.skiers.length === this.limit) {
      this.safetyBar = 'down';
    } if(this.limit - this.skiers.length === 1) {
      return `We still need ${this.limit - this.skiers.length} more skier!`;
    } else {
      return `We still need ${this.limit - this.skiers.length} more skiers!`;
    }
  }
}

module.exports = Lift;

  // admitSkier(name, hasTicket) {
  //   var coolSkier = new Skier(name, hasTicket);
  //     this.skiers.push(coolSkier);
  //     if (this.skiers.length > 2) {
  //     this.skiers.pop();
  //     return `Sorry, ${coolSkier.name}. Please wait for the next lift!`
  //   }
  // }
