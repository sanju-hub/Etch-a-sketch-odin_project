// Get references to the container element and the button element
let container_element = document.getElementById("container");
let button_element = document.getElementById("button");

// Add event listener to the button element
button_element.addEventListener("click", get_input);

// Function to get user input
function get_input() {
  let user_input = prompt("Please enter the size of the grid (less than 100):");

  // Check if user clicked "Cancel" button
  if (user_input === null) {
    console.log("User canceled input.");
  } else {
    // Check if input is less than 100
    if (parseInt(user_input) < 100) {
      // Call the after_click function if the input is less than 100
      after_click(user_input);
    } else {
      console.log("Input is greater than or equal to 100.");
    }
  }
}

// Function to create grid squares based on user input
function after_click(user_content) {
  // Perform actions with the user's input
  let v = parseInt(user_content);

  // Remove existing grid squares
  container_element.innerHTML = "";

  // Create rows
  for (let i = 0; i < v; i++) {
    let row = document.createElement("div");
    row.classList.add("grid-row");

    // Create columns for each row
    for (let j = 0; j < v; j++) {
      // Create a column div (grid square)
      let gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");

      // Add event listeners for hover effect
      gridSquare.addEventListener("mouseenter", function () {
        gridSquare.style.backgroundColor = "blue"; // Change color on hover
      });

      gridSquare.addEventListener("mouseleave", function () {
        gridSquare.style.backgroundColor = "gray"; // Revert color on mouse leave
      });

      row.appendChild(gridSquare);
    }

    // Append the row to the container
    container_element.appendChild(row);
  }
}
