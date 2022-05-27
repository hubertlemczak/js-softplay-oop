// TODO: Write your class in this file
class SoftPlay {
  constructor() {
    this.adults = 0;
    this.children = 0;
    this.maxOccupancy = 20;
    this.childPerAdult = 3;
  }

  enter(numAdult, numChild) {
    const maxOccupancyReached =
      numAdult + this.adults + numChild + this.children < this.maxOccupancy;
    if (numAdult >= numChild && maxOccupancyReached) {
      this.adults += numAdult;
      this.children += numChild;
    }
    return numAdult >= numChild && maxOccupancyReached;
  }

  leave(numAdult, numChild) {
    const adultPresent = numAdult >= numChild;
    const adultLeaveWithChild = numAdult === numChild;
    const moreAdults = this.adults > this.children && numAdult > numChild;
    const valid = this.adults >= numAdult && this.children >= numChild;
    if ((adultPresent && adultLeaveWithChild && valid) || moreAdults) {
      this.adults -= numAdult;
      this.children -= numChild;
    }
    return (adultPresent && adultLeaveWithChild && valid) || moreAdults;
  }

  occupancy() {
    return { adults: this.adults, children: this.children };
  }
}
// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay,
};
