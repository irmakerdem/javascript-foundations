class Fairy {
  constructor(nam) {
    this.name = nam;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    };
    this.disposition = 'Good natured';
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust ++;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(flowersArray) {
    for (var i = 0; i < flowersArray.length; i++) {
      this.clothes.dresses.push(flowersArray[i]);
    }
  }
  becomeProvoked() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
    infant.disposition = 'Malicious';
    this.humanWards.push(infant);
    }
    if (this.humanWards.length >= 3) {
      this.disposition = 'Good natured';
    }
    return infant;
  }
}

module.exports = Fairy;
