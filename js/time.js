export class TimeCalc {

  constructor (birthday) {
    this.birthday = birthday;
  }

  findSeconds(){
    let timeLived = (this.birthday.getTime())/1000;
    return timeLived;
  }
  findDifferenceBetweenTwoDates(second){
    let primary = this.findSeconds();
    let secondary =  second.findSeconds();
    let difference = primary - secondary
    return difference;
  }
  }
