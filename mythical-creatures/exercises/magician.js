class Magician {
  constructor(someObject) {
    this.name = "The Great " + someObject.name;
    this.assistant = someObject.assistant;
    this.favoriteAccessory = someObject.clothing || 'top hat';
    this.confidencePercentage = 10;
  }
  performIncantation(saying) {
    return saying.toUpperCase() + "!";
  }
  performTrick() {
    this.confidencePercentage += 10;
    if(this.favoriteAccessory === 'top hat') {
      return "PULL RABBIT FROM TOP HAT";
    } else {
      return "PULL DOVE FROM SLEEVE";
    }
  }
  performShowStopper() {
    if(this.confidencePercentage >= 100 && this.assistant) {
      return "WOW! The magician totally just sawed that person in half!";
    } else {
      return "Oh no, this trick is not ready!";
    }
  }
}

module.exports = Magician;
