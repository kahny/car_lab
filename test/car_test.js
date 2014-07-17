// test/car_test.js

var Car = require('../src/car.js'),
  expect = require('chai').expect;


describe('Car', function(){

  var myCar;

  beforeEach(function(){
    // create a new myCar object each time
    myCar = new Car('honda', 'civic', 2000, 'silver');
  });

  

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers).to.eql([]);
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previousOwners).to.eql([]);    });

  });


  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.currentOwner).to.equal('manufacturer');
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

  describe('#sale', function(){
  	it('should move currentOwner to previousOwner and update currentOwner with the new owner ', function(){
		myCar.sale("Connie");
		expect(myCar.previousOwners).to.eql(['manufacturer']);
		expect(myCar.currentOwner).to.equal('Connie')	
	  })
	});

});

