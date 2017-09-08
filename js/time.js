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
  calculateAgeInEarthYears(){
      let age = parseFloat(this.findDifferenceBetweenTwoDates(new TimeCalc(new Date())/ 31536000).toFixed(2);
      return age;
  }
  getAgeInYearsByPlanet(planet){
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
    } else{
      return "I'm not sure how you got that planet, but we don't have data for it";
    }
    let age = (this.calculateAgeInEarthYears()* multiplier)
    return "You would be " + age + " years old on planet " + planet;
  }
}
