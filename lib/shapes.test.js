//import the required files - shapes.js - we need the shape classes
const {
    Shape, Circle, Triangle, Square
} = require("./shapes")
//test suite
describe("generates a svg from user input", () => {
    it("should render a circle from user input", () => {
        const svg = new Shape()
        svg.setColor("blue")
        const shape = new Circle("red", "UCB", "blue")
        svg.setShape(shape.render())
        expect(svg.render()).toBe('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="blue"/><text x="150" y="100" fill="red" font-size="24" text-anchor="middle" alignment-baseline="middle">UCB</text></svg>')
    }) 
    it("should render a square from user input", () => {
        const svg = new Shape()
        svg.setColor("blue")
        const shape = new Square("red", "UCB", "blue")
        svg.setShape(shape.render())
        expect(svg.render()).toBe('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="100" height="100" fill="blue" /><text x="150" y="100" fill="red" font-size="24" text-anchor="middle" alignment-baseline="middle">UCB</text></svg>')
    })
    it("should render a triangle from user input", () => {
        const svg = new Shape()
        svg.setColor("blue")
        const shape = new Triangle("red", "UCB", "blue")
        svg.setShape(shape.render())
        expect(svg.render()).toBe('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,20 200,20 150,170" fill="blue" /><text x="150" y="100" fill="red" font-size="24" text-anchor="middle" alignment-baseline="middle">UCB</text></svg>')
    })
})
    //contains multiple tests
        //each shape needs a test - triangle, circle, square
        //  const shape = new Triangle();
            // shape.setColor("blue");
            // expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');