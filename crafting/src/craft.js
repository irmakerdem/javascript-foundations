class Craft {
  constructor(newInventedCraft) {
    this.name = newInventedCraft.type;
    this.materials = newInventedCraft.materials;
    this.completed = false;
  }
  completeCraft() {
    if (this.completed = true) {
    return `All done! It looks great!`;
    }
  }
  calculateProjectTotal() {
    var totalCost = 0;
    for (var i = 0; i < this.materials.length; i++) {
        totalCost += this.materials[i].calculateMaterialCost();
    } return totalCost;
  }
}

module.exports = Craft;

//x += y is same as x = x + y

//in general, `new` keyword creates an new empty object {}
//in general, `new` keyword sets value of `this` to be new empty object
//in general, `new` keyword calls constructor method

//but here, `new` keyword creates an new object with an object
//var crossStitch = new Craft({ type: 'cross stitch' })


// class Craft {
//   constructor(nam) {
//     type: {
//       this.name = nam.type;
//     }
//     materials: {
//       this.materials = nam.materials
//     }
// }
// };
