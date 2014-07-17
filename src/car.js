function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year; 
  this.color = color; 
  this.previousOwners = [];     //
  this.state = "off";
  this.currentOwner = "manufacturer";   // 
  this.passengers = []
  this.destination = ""
};
//
Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner); 
	this.currentOwner = newOwner; //doesn't need this because it doesn't reference up there  
};
//
Car.prototype.paint = function(newColor){
	this.color = newColor; //this needs to be newColor 
};

//
Car.prototype.start = function(){
	this.state = "on"
}
//
Car.prototype.off = function(){
	this.state = "off"
}

Car.prototype.driveTo = function(destination){
	if (this.state === "on"){
		console.log("Driving to " + destination)
		this.destination = "Driving to " + destination 
	}	
}

Car.prototype.park = function(){
	if (this.state === "off"){
		console.log("parked!!")
	}
}

Car.prototype.pickUp = function(name){
	if (this.state === "on"){
		console.log("Driving to pick up " + name);
		this.passengers.push(name);
	}
	else{
		console.log("turn on your car")
	}
}

Car.prototype.dropOff = function(name){
	if(this.state === "on"){
		for(var i = 0; i<this.passengers.length; i++){
			if(this.passengers[i] === name){
			this.passengers.splice(i, 1);
			console.log("Dropped off " + name)
			}
		}
	}
	else{
		console.log("turn on your car")
	}
};


module.exports = Car;

//exports is an object by default, and it exports the object we're going to be requiring when we require this file.
//car is a function (specifically a constructor)



