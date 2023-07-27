// logo_generator.js

function generateLogo() {
    const text = prompt("Enter up to three characters:")?.slice(0, 3);
    const textColor = prompt("Enter text color (keyword or hexadecimal number):");
    const shapes = ["circle", "triangle", "square"];
    const shape = prompt("Choose a shape from the list: " + shapes.join(", "));
    const shapeColor = prompt("Enter shape color (keyword or hexadecimal number):");
  
    if (text && textColor && shapes.includes(shape) && shapeColor) {
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
  
      // Create a Blob to store the SVG code
      const blob = new Blob([svgCode], { type: "image/svg+xml" });
  
      // Create a download link for the SVG file
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "logo.svg";
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
  
      // Trigger the download and cleanup
      downloadLink.click();
      document.body.removeChild(downloadLink);
  
      console.log("Generated logo.svg");
    } else {
      console.log("Invalid input. Please provide all the required information.");
    }
  }
  
  generateLogo();
  