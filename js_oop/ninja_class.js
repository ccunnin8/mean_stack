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

  this.punch = function(ninja){
    if (ninja instanceof Ninja){
      ninja.subtractHealth(5);
      console.log(ninja.name + " was punched by " + this.name + " and lost 5 health!");
    }
    else {
      console.log("ERROR");
    }
  }

  this.kick = function(ninja){
    if (ninja instanceof Ninja){
      ninja.subtractHealth(15);
      console.log(ninja.name + " was kicked by " + this.name + " and lost 15 health!");
    }
    else {
      console.log("ERROR");
    }
  }

  this.subtractHealth = function(num){
    this.health -= num;
  }
}

const ninja1 = new Ninja("Hyabusa");
const ninja2 = new Ninja("Joe");
ninja1.sayName();
ninja1.showStats();
ninja2.kick(ninja1);
