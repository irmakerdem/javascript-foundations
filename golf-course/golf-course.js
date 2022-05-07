class GolfCourse {
  constructor(nam, diff, openings, feat) {
    this.name = nam;
    this.difficulty = diff;
    this.openings = openings;
    this.features = feat;
    this.currentlyPlaying = [];
  }
  checkInGroup(groupArray) {
    if(this.openings >= groupArray.length) {
      this.openings = this.openings - groupArray.length;
      for (var i = 0; i < groupArray.length; i++) {
        this.currentlyPlaying.unshift(groupArray[i].name);
      }
      return `You\'re checked in. Have fun!`;
    } else {
      return `Sorry, we are currently booked! Please come back later.`;
    }
  }
}

module.exports = GolfCourse;;


// checkInGroup(groupArray) {
//   for (var i = 0; i < groupArray.length; i++) {
//     if(this.openings > groupArray.length) {
//       this.openings = this.openings - groupArray.length
//       this.currentlyPlaying.unshift(groupArray[i].name)
//       return `You\'re checked in. Have fun!`
//     } else {
//       return `Sorry, we are currently booked! Please come back later.`
//     }
//   }
// }



//groupArray[2]
//i is dynamic (can access all indeces of array)
//to access an index of an array, use bracket notation

//dot notation is used to access properties in an object

// var someObject = {
//   'first-name': 'Bridget',
//   lastName: 'Jones',
//   handicap: 25
// }
//
// console.log("34", someObject['first-name'])
