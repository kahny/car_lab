function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year; 
  this.color = color; 
  this.previousOwners = [];
  this.state = "off";
  this.currentOwner = "manufacturer";
  this.passengers = []
};

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner); 
	this.currentOwner = newOwner; //doesn't need this because it doesn't reference up there  
};

Car.prototype.paint = function(newColor){
	this.color = this.newColor; 
};


Car.prototype.start = function(){
	this.state = "on"
}

Car.prototype.off = function(){
	this.state = "off"
}

Car.prototype.driveTo = function(destination){
	if (this.state === "on"){
		console.log("Driving to " + destination)
	}	
}

Car.prototype.park = function(){
	if (this.state === "off"){
		console.log("parked!!")
	}
}

Car.prototype.pickUp = function(name){
	if (this.state === "on"){
		console.log("driving to pick up " + name);
		this.passengers.push(name);
	}
}

Car.prototype.dropOff = function(name){
	if(this.state === "on"){
		for(var i = 0; i<this.passengers.length; i++){
			if(this.passengers[i] === name){
			this.passengers.splice(i, 1);
			}
		}
	}
	else{
		console.log("turn on your car")
	}
};


module.exports = Car;




