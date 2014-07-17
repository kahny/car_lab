// test/car_test.js

var Car = require('../src/car.js'),
  expect = require('chai').expect;  //chai is an assertion library 


describe('Car', function(){

  var myCar;

  beforeEach(function(){
    // create a new myCar object each time
    myCar = new Car('honda', 'civic', 2000, 'silver');
  });

  //describe is a group of tests we are trying to write for a feature. The 'it' block will be testing one particular feature 
  describe('#sale', function(){
  	it('should move currentOwner to previousOwner and update currentOwner with the new owner ', function(){
		myCar.sale("Connie");
		expect(myCar.previousOwners).to.eql(['manufacturer']);
		expect(myCar.currentOwner).to.equal('Connie')	
  	})
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      myCar.paint('gold');
      expect(myCar.color).to.equal('gold');
    });
  });

  describe('#start', function(){
  	it('should turn the state to on', function(){
  		myCar.start();
  		expect(myCar.state).to.equal('on');
  	});
  });

  describe('#off', function(){
  	it('should turn the state to off', function(){
  		myCar.off();
  		expect(myCar.state).to.equal('off');
  	})
  })

  describe('driveTo', function(){
  	it('should drive the car to a given destination', function(){
  		myCar.start();
  		myCar.driveTo("Saratoga");
  		expect(myCar.destination).to.equal('Driving to Saratoga')
  	})
  })

  describe('park', function(){
  	it('should change the car to parked', function(){
  		myCar.park();
  		expect(myCar.state).to.equal('off');
  	})
  })

 describe('pickUp', function(){
  	it('should pick up a passenger and add them to passenger list', function(){
  		myCar.start();
  		myCar.pickUp("Sally")
  		expect(myCar.passengers.pop()).to.equal('Sally');
  		// expect(myCar.passengers).to.eql(["Sally"])    //alternative since there is only one item in the array 
  	})
  })


 describe('dropOff', function(){
  	it('should drop off a passenger and take them off the passenger list', function(){
  		myCar.start();
  		myCar.pickUp("Sally")
  		myCar.dropOff("Sally")
  		expect(myCar.passengers).to.eql([]);
  	})
  })

//the parameters called are all unique to the specific describe, just because you picked up sally in the previous describe it doesn't carry over to dropoff test


  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers).to.eql([]);
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previousOwners).to.eql([]);    
  	});
  });


  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.currentOwner).to.equal('manufacturer');
    });
  });




});

