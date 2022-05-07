class Dragon {
  constructor(nam, rid) {
    this.name = nam;
    this.rider = rid;
    this.hungry = true;
    this.eatCount = 0;
  }
  greet(rid) {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    this.eatCount++
    if (this.eatCount >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;


//breaks terminal
// eat() {
//   for (var i = 0; i = -1; i++) {
//     // console.log(i);
//     this.hungry = false;
//   }
// }

















// class Dragon {
//   constructor(nam, rid) {
//     this.name = nam;
//     this.rider = rid;
//     this.hungry = true;
//     // this.eatCount = 0;
//   }
//   greet(rid) {
//     return `Hi, ${this.rider}!`
//   }
//   eat() {
//     this.eatCount++
//     if (this.eatCount >= 3) {
//       this.hungry = false;
//     }
//   }
// };
