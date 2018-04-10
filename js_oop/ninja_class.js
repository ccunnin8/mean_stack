function Ninja(name,health){
  this.name = name;
  this.health = 100;
  const speed = 3;
  const strength = 3;
  this.sayName = function(){
    console.log(this.name);
  }
  this.showStats = function(){
    console.log("Name: " + this.name + ", Strength: " + strength + ", Speed: " + speed);
  }
  this.drinkSake = function(){
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
