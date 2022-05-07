class Spell {
  constructor(nam, desc) {
    this.name = nam;
    this.description = desc;
    this.executionHistory = [];
  }
  execute(targets) {
    var statement = "";
    if(typeof targets === "string") {
      statement = `Success! You've cast a spell on the ${targets}.`;
    } else {
      for (var i = 0; i < targets.length; i++) {
        this.executionHistory.push(targets[i]);
        if(i === 0) {
          statement += `Success! You've cast a spell on the ${targets[i]}.`;
        } else {
          statement += ` Success! You've cast a spell on the ${targets[i]}.`;
        }
      }
    } return statement;
  }
  clearExecutionHistory() {
    // this.executionHistory = [];
    for (var i = 0; i < this.executionHistory.length; i++) {
      this.executionHistory.splice(i, this.executionHistory.length);
    }
  }
}

module.exports = Spell;


//without the typeof "string" being the if condition, the for loop
//iterates through the word "book"
//therefore, is index of the word "book" such as "b", "o", "o", "k"
//is what gets interpolated




// execute(targets) {
//   var statement = "";
//   if(typeof targets === "string") {
//     statement = `Success! You've cast a spell on the ${targets}.`
//     return statement
//   } else {
//     for (var i = 0; i < targets.length; i++) {
//       if(i === 0) {
//         statement += `Success! You've cast a spell on the ${targets[i]}.`
//       } else {
//         statement += ` Success! You've cast a spell on the ${targets[i]}.`
//       }
//     }
//     return statement
//   }
// }



// execute(targets) {
//   var statement = "";
//     for (var i = 0; i < targets.length; i++) {
//       if(i === 0) {
//         statement += `Success! You've cast a spell on the ${targets[i]}.`
//       } else {
//         statement += ` Success! You've cast a spell on the ${targets[i]}.`
//       }
//     }
//     console.log(statement);
//     return statement
// }
