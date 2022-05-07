var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }
  gatherMaterials(materials, amount) {
    if (materials === 'snowballs') {
      this.materials.snowballs += amount
    }
    if (materials === 'coal') {
      this.materials.coal += amount
    }
    if (materials === 'buttons') {
      this.materials.buttons = this.materials.buttons + amount
    }
    if (materials === 'carrots') {
      this.materials.carrots += amount
    }
  }
  // gatherMaterials(materials, amount) {
  //   this.materials[materials] += amount
  // }
  buildASnowman() {
    var snowmanArg = {
      carrots: this.materials.carrots,
      coal: this.materials.coal,
      snowballs: this.materials.snowballs,
      buttons: this.materials.buttons
    };
    var currentSnowman = new Snowman(snowmanArg);
    // currentSnowman.canWearMagicHat();
    return currentSnowman;
  }
  // buildASnowman(){
  //   return new Snowman(this.materials)
  // }
  placeMagicHat() {
    var snowman = this.buildASnowman();
    if (!snowman.magicHat) {
      return `I guess I didn\'t build it correctly.`;
    }
      return `Woah, this snowman is coming to life!`;
  }
}

module.exports = Human;
