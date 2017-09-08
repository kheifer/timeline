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
    let difference = secondary - primary;
    return difference;
  }
  calculateAgeInEarthYears(currentDate){
    let age = parseFloat(this.findDifferenceBetweenTwoDates(currentDate)/ 31536000).toFixed(2);
    return age;
  }
  calculateTimeLeft(total, currentDate){
    let age = parseFloat(total - (this.calculateAgeInEarthYears(currentDate))).toFixed(2);

    return age;
  }
  getAgeInYearsByPlanet(age, planet){
    let multiplier = 0;
    if(planet == "Mercury"){
      multiplier = 0.24;
    }else if(planet == "Venus"){
      multiplier = 0.62;
    }else if(planet == "Mars"){
      multiplier = 1.88;
    }else if(planet == "Jupiter"){
      multiplier = 11.88;
    }else if (planet  == "Earth"){
      multiplier = 1;
    }else if (planet  == "Sun"){
      return "YOu would burn bright like a star";
    }else{
      return "I'm not sure how you got that planet, but we don't have data for it";
    }
    let planetAge = parseFloat(age / multiplier).toFixed(2);
    return planetAge;
  }
}
