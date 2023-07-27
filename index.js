
//application starts - prompts user
inquirer = require("inquirer")
fs = require("fs")
const {
    Shape, Circle, Triangle, Square
} = require("./lib/shapes")
inquirer.prompt([
    {
        question:"What shape do you want?",
        name:"shape",
        type:"list",
        choices:["Circle", "Square", "Triangle"],
    },
    {
        question:"What color do you want?",
        name:"shapeColor",
        type:"input",
    },
    {
        question:"What text do you want? Enter three letters",
        name:"text",
        type:"input",
    },
    {
        question:"What text color do you want?",
        name:"textColor",
        type:"input",
    }
]) 
.then(response => {
    const svg = new Shape()
    svg.setColor(response.shapeColor)
    let shape;
    if (response.shape === "Circle") {
        shape = new Circle(response.textColor,response.text)
    }
//duplicate above for other shapes
    svg.setShape(shape.render())
    fs.writeFileSync("./examples/logo.svg",svg.render())
})