// function Ninja(name,health){
//   this.name = name;
//   this.health = 100;
//   const speed = 3;
//   const strength = 3;
//   this.sayName = function(){
//     console.log(this.name);
//   }
//   this.showStats = function(){
//     console.log("Name: " + this.name + ", Strength: " + strength + ", Speed: " + speed);
//   }
//   this.drinkSake = function(){
//     this.health += 10;
//   }
//
//   this.punch = function(ninja){
//     if (ninja instanceof Ninja){
//       ninja.subtractHealth(5);
//       console.log(ninja.name + " was punched by " + this.name + " and lost 5 health!");
//     }
//     else {
//       console.log("ERROR");
//     }
//   }
//
//   this.kick = function(ninja){
//     if (ninja instanceof Ninja){
//       ninja.subtractHealth(15);
//       console.log(ninja.name + " was kicked by " + this.name + " and lost 15 health!");
//     }
//     else {
//       console.log("ERROR");
//     }
//   }
//
//   this.subtractHealth = function(num){
//     this.health -= num;
//   }
// }

class Ninja {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.strength = 3;
    this.speed = 3;
  }

  showStats() {
    console.log("Name: " + this.name + ", Strength: " + this.strength + ", Speed: " + this.speed);
  }

  sayName() {
    console.log(this.name);
  }

  punch(ninja) {
    if (ninja instanceof Ninja){
         ninja.subtractHealth(5);
         console.log(ninja.name + " was punched by " + this.name + " and lost 5 health!");
       }
       else {
         console.log("ERROR");
       }
  }

  kick(ninja){
      if (ninja instanceof Ninja){
        ninja.subtractHealth(15);
        console.log(ninja.name + " was kicked by " + this.name + " and lost 15 health!");
      }
      else {
        console.log("ERROR");
      }
    }

    subtractHealth(num){
      this.health -= num;
    }
}

const ninja1 = new Ninja("Hyabusa");
const ninja2 = new Ninja("Joe");
ninja1.sayName();
ninja1.showStats();
ninja2.kick(ninja1);

class Sensei extends Ninja {
  constructor(name){
    super(name)
    this.health = 100;
    this.strength = 10;
    this.speed = 10;
  }

  speakWisdown(){
    console.log("What one programmer can do in one month, two programmers can do in two months.")
  }
}
const sens = new Sensei("Master Splinter");
sens.showStats();
