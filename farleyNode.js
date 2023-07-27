const readline = require('readline');
const fs = require('fs');

// readline: readline is a built-in module in Node.js that provides an easy way to read data from a Readable stream (such as process.stdin) line by line.
// createInterface: The createInterface method creates an instance of the readline.Interface class. This interface allows you to interact with the standard input (stdin) and standard output (stdout) streams.
// input: process.stdin: This sets the input stream to be process.stdin, which represents the standard input stream. It allows the application to read user input from the terminal.
// output: process.stdout: This sets the output stream to be process.stdout, which represents the standard output stream. It allows the application to write messages to the terminal.
// By setting up this interface, the Node.js application can use the rl variable (which is an instance of the readline.Interface class) to interactively read user input and print output in the command-line environment.
// In the provided code, the rl variable is later used with the rl.question() method to prompt the user for various inputs and read their responses from the terminal. The answers provided by the user are then used to generate the SVG logo accordingly.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateLogo() {
  rl.question('Enter up to three characters: ', (text) => {
    text = text.slice(0, 3);

    rl.question('Enter text color (keyword or hexadecimal number): ', (textColor) => {
      rl.question(`Choose a shape from the list: circle, triangle, square: `, (shape) => {
        const shapes = ["circle", "triangle", "square"];
        if (!shapes.includes(shape)) {
          console.log("Invalid shape. Please choose from circle, triangle, or square.");
          rl.close();
          return;
        }

        rl.question('Enter shape color (keyword or hexadecimal number): ', (shapeColor) => {
          const svgCode = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="white" />
              ${
                shape === "circle"
                  ? `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`
                  : shape === "triangle"
                  ? `<polygon points="100,20 200,20 150,170" fill="${shapeColor}" />`
                  : shape === "square"
                  ? `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`
                  : ""
              }
              <text x="150" y="100" fill="${textColor}" font-size="24" text-anchor="middle" alignment-baseline="middle">${text}</text>
            </svg>
          `;

          fs.writeFile('logo.svg', svgCode, (err) => {
            if (err) {
              console.error('Error writing to logo.svg:', err);
            } else {
              console.log('Generated logo.svg');
            }
            rl.close();
          });
        });
      });
    });
  });
}

generateLogo();
