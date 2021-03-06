export class TimeCalc {

  constructor (birthday) {
    this.birthday = birthday;
  }
  findSeconds(){
    let timeLived = (this.birthday.getTime())/1000;
    return timeLived;
  }
  findSecondsByAge(age){
    let seconds = age * 31556952;
   return seconds;
  }
  findDifferenceBetweenTwoDates(second){
    let primary = this.findSeconds();
    let secondary =  second.findSeconds();
    let difference = secondary - primary;
    return difference;
  }
  calculateAgeInEarthYears(currentDate){
    let age = parseFloat((this.findDifferenceBetweenTwoDates(currentDate)/ 31536000).toFixed(2));
    return age;
  }
  calculateTimeLeft(total, currentDate){
    let age = parseFloat(total - (this.calculateAgeInEarthYears(currentDate)).toFixed(2));

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
    }else if (planet  == "Saturn"){
      multiplier = 29.46;
    }else if (planet  == "Uranus"){
      multiplier = 84.01;
    }else if (planet  == "Neptune"){
      multiplier = 164.79;
    }else if (planet  == "Pluto"){
      multiplier = 248.59;
    }else if (planet  == "Sun"){
      return "You would burn bright like a star";
    }else{
      return "I'm not sure how you got that planet, but we don't have data for it";
    }
    let planetAge = parseFloat((age / multiplier).toFixed(2));

    if(planetAge < 0){
      return "You've been alive "+(Math.abs(planetAge))+" longer than the average human.";
    }
    return planetAge;
  }
}
