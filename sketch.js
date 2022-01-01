// initialize variables
let x = 16;
let gridSize = x * x;
const reset = document.querySelector(".reset");
const container = document.querySelector(".container");

// add an initial grid by performing the following loop for each square div to be added to the container div
for (let i = 0; i < gridSize; i++){

    // create the square divs that will make up the grid and give them a pre-built class to make them float left
    const square = document.createElement("div");
    square.classList.add("square");

    // get the height of the container div and use it to calculate the height and width of each square div to be added
    let containerHeight = document.getElementById("container").offsetHeight;
    let height = `${containerHeight / x}px`;
    let width = `${height}`;
    const widthHeightAttribute = document.createAttribute("style");
    widthHeightAttribute.value = `width: ${height}; height: ${width}`;
    square.setAttributeNode(widthHeightAttribute);

    // add an event listener to change the color of a square div if the mouse hovers over it
    square.classList.add("squareColor");
    square.addEventListener("mouseover", () => {
        square.classList.replace("squareColor", "newColor");
    });

    // add the square div to the container div
    container.appendChild(square);
};

// add option for user to reset and grid and choose a grid size
reset.addEventListener("click", () => {

    // prompt user to input grid size
    let x = window.prompt("Number of blocks per side");
    gridSize = x * x;

    // add warning and re-prompt if user selects a value greater than 100 or less than 0
    if (x > 100) {
        alert("You must choose a number between 0 and 100");
        return;
    } else if (x < 0) {
        alert("You must choose a number between 0 and 100");
        return;
    }

    // remove the blocks already on the screen
    while (container.firstChild) {
        container.firstChild.remove();
    }

    // add the new grid
    for (let i = 0; i < gridSize; i++){

        // create the square divs that will make up the grid and give them a pre-built class to make them float left
        const square = document.createElement("div");
        square.classList.add("square");

        // get the height of the container div and use it to calculate the height and width of each square div to be added
        let containerHeight = document.getElementById("container").offsetHeight;
        let height = `${containerHeight / x}px`;
        let width = `${height}`;
        const widthHeightAttribute = document.createAttribute("style");
        widthHeightAttribute.value = `width: ${height}; height: ${width}`;
        square.setAttributeNode(widthHeightAttribute);

        // add an event listener to change the color of a square div if the mouse hovers over it
        square.classList.add("squareColor");
        square.addEventListener("mouseover", () => {
            square.classList.replace("squareColor", "newColor");
        });

        // add the square div to the container div
        container.appendChild(square);
    };
});
