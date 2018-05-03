class Bike {
  price: number;
  max_speed: String;
  miles: number;
  constructor(price,max_speed,miles=0){
    this.price = price;
    this.max_speed = max_speed;
    this.miles = miles;
  }
  displayInfo(): void {
    console.log(`This bike costs ${this.price} and can go ${this.max_speed}`);
  }
  ride(): void {
    console.log("Riding");
    this.miles = this.miles + 10;
  }
  reverse(): void {
    console.log("Reversing");
    this.miles = this.miles + 5;
  }
}

let bike1 = new Bike(25,"25mph");
let bike2 = new Bike(40,"5mph");
let bike3 = new Bike(200,"50mph");

bike1.displayInfo();
bike2.ride();
bike3.reverse();
