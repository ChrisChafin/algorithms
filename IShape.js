"use strict";

var sum = 0;
//variable for the for llop
var i;
//array to hold the area totals
var arr = [];

class IShape {
    constructor(base, height) {
        this.base = base;
        this.height = height;
        //for the sake of argument, we'll suppose that the base is the same as the diameter
        this.diameter = base;   
        this.arr = arr;        
    }

    calculateAreaTriangle() {
        return (this.base * this.height)/2;
    }

    calculateAreaCircle() {
        return (.25 * Math.PI) * Math.pow(this.diameter, 2);
    }        
}

class Triangle extends IShape{

    //implements the method for the area of a triangle
    get area() {
        return this.calculateAreaTriangle();
    }
}

class Circle extends IShape{

    //implements the method for the area of a circle
    get area() {
        return this.calculateAreaCircle();
    }
}

//add to sum total
class totalArea extends IShape{

    //adding the areas together
    get total() {
        for (i=0; i<this.arr.length; i++) {
            sum += this.arr[i];    
        }
     return sum;
    }
}



//new IShape instance
var shape = new IShape;
//new circle and triangle classes
var t = new Triangle(5, 5);
var c = new Circle(10);

//pushing both of the areas to the IShape array
shape.arr.push(t.area);
shape.arr.push(c.area);

//new sum of both areas
var summed = new totalArea;

//should print out 91.03981633974483
console.log(summed.total)




