class Hobbit {
  constructor(hobbitObj) {
    this.name = hobbitObj.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }
  celebrateBirthday() {
    this.age ++;
    if (this.age >= 101) {
      this.old = true;
    } else if (this.age >= 33) {
      this.adult = true;
    }
  }
  getRing() {
    if (this.name === 'Frodo') {
      this.hasRing = true;
      return `Here is the ring!`;
    } else {
        return `You can\'t have it!`;
    }
  }
}

module.exports = Hobbit;




// class Hobbit {
//   constructor(someHobitDetail) {
//     // var someHobitDetail = {
//     //   name: 'Bilbo' || 'Mark',
//     // }
//     this.name = someHobitDetail.name;
//     this.age = 0;
//     this.adult = false;
//     this.old = false;
//     this.hasRing = false;
//   }
//   celebrateBirthday() {
//     // this.age++
//     this.age = this.age +1
//     if (this.age > 32) {
//       this.adult = true;
//     }
//     if (this.age > 100) {
//       this.old = true;
//     }
//   }
//     getRing() {
//       if (this.name === 'Frodo') {
//         this.hasRing = true;
//         return `Here is the ring!`
//       } else {
//         return `You can\'t have it!`
//       }
//
//   }
// }
