class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }
  fill(anything) {
    this.candies.push(anything);
    this.count++;
  }
  contains(someCandy) {
    for (var i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === someCandy) {
        return true;
      }
        return false;
    }
  }
}

module.exports = Bag;
