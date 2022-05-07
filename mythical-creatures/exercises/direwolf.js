class Direwolf {
  constructor(nam, hom, siz) {
    this.name = nam;
    this.home = hom || 'Beyond the Wall';
    this.size = siz || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(starkObj) {
    if (this.home === starkObj.location && this.starksToProtect.length <= 1) {
    starkObj.safe = true;
    this.starksToProtect.push(starkObj);
    this.huntsWhiteWalkers = false;
    }
  }
  leave(starkObj) {
    this.starksToProtect.pop();
    starkObj.safe = false;
  }
}

module.exports = Direwolf;
