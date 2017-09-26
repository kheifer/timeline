import {TimeCalc} from './../js/time.js'

describe(TimeCalc, function(){
  it('should test for conversion of date entered to Unix epoch',function(){
    let testAge = new TimeCalc(new Date("2000-09-08"))
    expect(testAge.findSeconds()).toEqual(968371200)
  });
  it('should return the difference between two dates in seconds', function(){
    let testAge = new TimeCalc(new Date("2000-09-09"))
    let testAge2 = new TimeCalc(new Date("2000-09-09"))
    expect(testAge.findDifferenceBetweenTwoDates(testAge2)).toEqual(0);
  });
  it('should return the age in Earth Years', function(){
    let testAge = new TimeCalc(new Date("2000-09-09"))
    let testAge2 = new TimeCalc(new Date("2001-09-09"))
    expect(testAge.calculateAgeInEarthYears(testAge2)).toEqual(1);
  });
  it('should return the age by planet', function(){
    let testAge = new TimeCalc(new Date("2000-09-09"))
    let age = 27
    let planet = "Mercury"
    expect(testAge.getAgeInYearsByPlanet(age, planet)).toEqual(112.5);
  });
  it('should calculate how many years you have left to live on earth', function(){
    let testAge = new TimeCalc(new Date("2000-09-09"))
    let testAge2 = new TimeCalc(new Date("2001-09-09"))
    let AgeTotal = 4;
    expect(testAge.calculateTimeLeft(AgeTotal, testAge)).toEqual(4);
  });
})
