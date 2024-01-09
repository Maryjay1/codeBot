function togglePopUp(popupID) {
    document.getElementById(popupID).classList.toggle("active");

} 

  // Array to store user inputs
let userInputArray = [];

function addUserInput() {

    // Get the input element and its value
    let userInputElement = document.getElementById('userInput');
    let userInputValue = userInputElement.value;

    if (userInputValue.trim() !=='') {
    // // Add the input to the array

        userInputArray.push({input: userInputValue, response: getResponse()});

    //     // Display the input in the display area
        displayUserInputs();

        // Clear the input text box
        userInputElement.value = '';

    }
}

function getResponse() {
    return "This is a response to your input.";
}

function displayUserInputs() {
    let displayAreaElement = document.getElementById('displayArea');

      // Clear the display area
    displayAreaElement.innerHTML = '';

        // Iterate through the array and display each input
    userInputArray.forEach(function (item) {
        let inputElement = document.createElement('p');
        let responseElement = document.createElement('p');
        inputElement.textContent = 'User Input: ' + item.input; 
        responseElement.textContent = 'Response: ' + item.response;
        displayAreaElement.appendChild(inputElement);
        displayAreaElement.appendChild(responseElement);

        });
}