import {TimeCalc} from './../js/time.js'

describe(TimeCalc, function(){
  it('should test for conversion of age to seconds',function(){
    let testAge = new TimeCalc(new Date("2000-09-08"))
    expect(testAge.findSeconds()).toEqual(968371200)
  });
})
