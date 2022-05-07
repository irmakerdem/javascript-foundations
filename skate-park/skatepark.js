class SkatePark {
  constructor(skatepark) {
    this.name = skatepark.name;
    this.yearFounded = skatepark.year;
    this.style = skatepark.type;
    this.features = skatepark.features;
    this.isPrivate = skatepark.isPrivate || false;
    this.cost = skatepark.price || 0;
    this.occupants = [];
  }
  admit(skater) {
    if(this.cost > skater.money) {
      return `Sorry, you don't have enough money.`;
    }
    if(this.occupants.length >= 3) {
      this.occupants.pop();
      return `Sorry, we are at max capacity. Thank you for understanding.`;
    }
    if(this.isPrivate) {
      this.occupants.push(skater);
      skater.money -= this.cost;
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
    }
    this.occupants.push(skater);
    return `Welcome to the free ${this.name} Skatepark!`;
  }
}

module.exports = SkatePark;


// admit(skater) {
//   this.occupants.push(skater);
//   if(this.isPrivate) {
//     skater.money -= this.cost
//     return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
//   } else {
//       return `Welcome to the free ${this.name} Skatepark!`
//   }
// }
