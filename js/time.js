export class TimeCalc {

  constructor (birthday) {
    this.birthday = birthday;
    this.currentTime = new Date();
  }

  findSeconds(){
    let timeLived = (this.birthday.getTime())/1000;
    return timeLived;
  }
}
