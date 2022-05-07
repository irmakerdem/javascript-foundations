class Skater {
  constructor(skater) {
    this.name = skater.name;
    this.skill = skater.skill;
    this.tricks = skater.tricks;
    this.money = skater.cash;
    this.frustration = 0;
  }
  practice(trickType) {
    if(!this.tricks[trickType]) {
    this.frustration ++;
    }
    if(this.frustration > 2) {
    this.tricks[trickType] = true;
    this.frustration = 0;
    return `I just learned to ${trickType}!!!`;
    }
  }
}

module.exports = Skater;
