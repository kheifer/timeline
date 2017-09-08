export class TimeCalc {

  constructor (birthday) {
    this.birthday = birthday;
  }

  findSeconds(){
    let timeLived = (this.birthday.getTime())/1000;

    return timeLived;
  }
  findDifferenceBetweenTwoDates(second){
    let primary = this.birthday.findSeconds();
    let secondary =  second.findSeconds();
    let difference = secondary - primary;
    return difference;
  }
  calculateAgeInEarthYears(){
      let age = parseFloat(this.birthday.findDifferenceBetweenTwoDates(new TimeCalc(new Date())/ 31536000).toFixed(2);
      return age;
  }

}
