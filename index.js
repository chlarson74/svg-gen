
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
        name:"fillColor",
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
    // const fillColor = response.fillColor;
    const svg = new Shape()
    //the fill is empty - there must be a problem with the shapeColor/fillColor response
    svg.setColor(response.fillColor)
    let shape;
    if (response.shape === "Circle") {
        shape = new Circle(response.textColor,response.text,response.fillColor)
    }
    if (response.shape === "Square") {
        shape = new Square(response.textColor,response.text,response.fillColor)
    }
    if (response.shape === "Triangle") {
        shape = new Triangle(response.textColor,response.text,response.fillColor)
    }

    svg.setShape(shape.render())
    fs.writeFileSync("./examples/logo.svg",svg.render())
})