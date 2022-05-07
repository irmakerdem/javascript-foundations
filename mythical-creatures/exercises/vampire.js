class Vampire {
  constructor(nam, pettt) {
    this.name = nam;
    this.pet = pettt || 'bat';
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  drink() {
    this.thirsty = false;
    if (this.ouncesDrank < 50) {
        this.ouncesDrank += 10;
    }
    return `I\'m too full to drink anymore!`;
  }
  // drink() {
  //   this.thirsty = false;
  //   if (this.ouncesDrank < 50) {
  //     return `I\'m too full to drink anymore!`
  //   }
  //   this.ouncesDrank += 10;
  // }
}

module.exports = Vampire;
