
let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: Array<number> = [1,2,3,4];
let myObj: Object  = { name:'Bill'};
var stringVariable: string = "Hey";
var numberVariable: number = 25;
var arrayOne: Array<boolean> = [true, false, true, true];
var arrayTwo = [1, 'abc', true, 2];
var myObj1: Object = { x: 5, y: 10 };
// object constructor
class MyNode {
    val: number;
    _priv: number;
    constructor(val: number) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    }
}

let myNodeInstance = new MyNode(1);

console.log(myNodeInstance.val);

function myFunction(): void{
    console.log("Hello World");
    return;
}
function sendingErrors(): never{
	throw new Error('Error message');
}
