// Global variables
var employeeList = []; // List of employees
var currentEmployeeIndex = -1; // Index of currently selected employee

// DOM elements
var employeeListContainer = document.getElementById('employeeList');
var addEmployeeModal = document.getElementById('addEmployeeModal');
var employeeNameInput = document.getElementById('employeeName');
var turnSlider = document.getElementById('turnSlider');
var turnValue = document.getElementById('turnValue');
var saveTurnButton = document.getElementById('saveTurnButton');
var cancelTurnButton = document.getElementById('cancelTurnButton');



// Show the "Add Employee" modal

// this is the function that is called when the button is clicked popup modal
function showAddEmployee() {
  addEmployeeModal.style.display = 'block';
}

// Hide the "Add Employee" modal
// to close the add employee modal
function hideAddEmployee() {
  addEmployeeModal.style.display = 'none';
}

// Add a new employee
function addEmployee() {
  var employeeName = employeeNameInput.value.trim(); // trim removes white space
  if (employeeName.length > 0) {
    var employee = {
      name: employeeName,
      turns: [0]
    };
    employeeList.push(employee);
    displayEmployeeList(); // display the employee name in the list
    hideAddEmployee();  // hide the add employee modal
    employeeNameInput.value = ''; // clear the input field for next input
  }
}


// Initialize
function init() {
  // Add some sample employees
  employeeList.push({name: 'Huy', turns: [0]});  // add a new employee
  employeeList.push({name: 'Andy ', turns: [0]});   // add a new employee
  // Display the employee list
  displayEmployeeList();    // display the employee name in the list
}
init(); // call the init function


function displayEmployeeList() {
    var employeeListHtml = '';  // create a variable to hold the html
    for (var i = 0; i < employeeList.length; i++) {     // loop through the employee list
      var employee = employeeList[i];   // create a variable to hold the employee
      var turnsHtml = '';   // create a variable to hold the turns
      for (var j = 0; j < employee.turns.length; j++) {     // loop through the turns
        turnsHtml += '<div class="turn">' + employee.turns[j] + '</div>';   // add the turn to the turns html
      }
      employeeListHtml += '<div class="employee">' +    // add the employee to the employee list html
        '<div class="name" onclick="showTurnsModal(' + i + ')">' + employee.name + '</div>' +   // add the name to the employee list html
        '<div class="turns">' + turnsHtml + '</div>' +  // add the turns to the employee list html
        '</div>' +  // close the employee div
        '<div id="turnsModal' + i + '" class="modal">' + // add the modal to the employee list html
        '<div class="modal-content">' + // add the modal content to the employee list html
        '<span class="close" onclick="hideTurnsModal(' + i + ')">&times;</span>' +  // add the close button to the employee list html
        '<div class="modal-header">' +  // add the modal header to the employee list html
        '<h2>Update Turns for ' + employee.name + '</h2>' + // add the employee name to the employee list html
        '</div>' +  // close the modal header div
        '<div class="modal-body">' +    // add the modal body to the employee list html
        '<input type="range" min="-1" max="1" step="0.5" value="0" id="turnSlider' + i + '">' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button onclick="updateEmployeeTurns(' + i + ')">Save</button>' +
        '<button onclick="hideTurnsModal(' + i + ')">Cancel</button>' +
        '</div>' +
        '</div>' +
        '</div>';
    }
    employeeListContainer.innerHTML = employeeListHtml;
  }
  
  function showTurnsModal(index) {  // show the turns modal
    var modal = document.getElementById('turnsModal' + index);
    modal.style.display = 'block';
  }

  
  
  function hideTurnsModal(index) {  // hide the turns modal
    var modal = document.getElementById('turnsModal' + index);
    modal.style.display = 'none';
  }
  function updateEmployeeTurns(index) { // update the employee turns
    var slider = document.getElementById('turnSlider' + index);
    var value = slider.value ;  // get the value from the slider
    employeeList[index].turns.push(value);  // add the value to the employee turns
    displayEmployeeList();  // display the employee list
  }
