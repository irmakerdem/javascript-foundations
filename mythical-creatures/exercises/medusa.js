var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(nam) {
    this.name = nam;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var statue = new Statue(victim.name);
    this.statues.push(statue);
    if (this.statues.length > 3) {
      var freedPerson = this.statues.shift();
      //returns a statue with just a name
      var person = new Person(freedPerson.name);
      person.mood = 'relieved';
    }
    return person;
  }
}

module.exports = Medusa;



// class Medusa {
//   constructor(nam) {
//     this.name = nam;
//     this.statues = [];
//   }
//   gazeAtVictim(person) {
//     var statue = new Statue(person.name)
//     this.statues.push(statue)
//     if(this.statues.length > 3) {
//       person = new Person(this.statues[0].name)
//       person.mood = 'relieved'
//       this.statues.shift()
//       return person
//     }
//   }
// };




// class Medusa {
//   constructor(nam) {
//     this.name = nam;
//     this.statues = [];
//   }
//   gazeAtVictim(person) {
//     var statue45 = new Statue(person.name);
//     this.statues.push(statue45);
//     if (this.statues.length > 3){
//       var person96 = new Person(this.statues[0].name);
//       this.statues.shift()
//       person96.mood = 'relieved';
//       return person96
//     }
//   }
// }
