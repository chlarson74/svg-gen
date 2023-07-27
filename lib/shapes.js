//Create `Triangle`, `Circle`, and `Square` classes

class Shape {
    constructor(){
        this.fillColor = "";
        this.shape = "";
        }
        setShape(shape) {
            this.shape = shape
        }
        setColor(fillColor) {
            this.fillColor = fillColor;
        }
        render() {
            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}</svg>`
    
        }
    }

class Triangle extends Shape {
    constructor(textColor, text){
        super()
        this.textColor = textColor;
        this.text = text;
        }    
//Each shape class should have a render() method
    render() {
        return 
        `<polygon points="100,20 200,20 150,170" fill="${this.fillColor}" /><text x="150" y="100" fill="${this.textColor}" font-size="24" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`

    }
}
class Circle  extends Shape{
    constructor(textColor, text){
        super()
        this.textColor = textColor;
        this.text = text;
        }
    //Each shape class should have a render() method  
    render() {
        return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill=${this.fillColor}/><text x="150" y="100" fill="${this.textColor}" font-size="24" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`
    }
}
class Square extends Shape {
    constructor(textColor, text){
        super()
        this.textColor = textColor;
        this.text = text;
        }
    //Each shape class should have a render() method
    render() {
        return 
        `<rect x="100" y="50" width="100" height="100" fill="${this.fillColor}" /><text x="150" y="100" fill="${this.textColor}" font-size="24" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`
  
    }
}
module.exports = {Shape, Circle, Triangle, Square}
//Exports `Triangle`, `Circle`, and `Square` classes


// can enter up to three characters
// can enter a color keyword (OR a hexadecimal number)
// present a list of shapes to choose from: circle, triangle, and square
// can enter a color keyword (OR a hexadecimal number)
// an SVG file is created named `logo.svg`
// the output text "Generated logo.svg" is printed in the command line
// in a browser a 300x200 pixel image that matches the criteria the user entered

// Uses the Inquirer package
// Uses the Jest package for a suite of unit tests