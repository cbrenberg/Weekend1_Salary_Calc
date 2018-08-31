console.log('client.js');

$(document).ready(onReady)

function onReady() {
  console.log('jQuery')
  //click listener for submit button, runs addEmployee
  $('#submitButton').on('click', addEmployee)
  //click listener on .deleteButton class within tbody, runs deleteEmployee
  $('#employeeList').on('click', '.deleteButton', deleteEmployee)
}//end onReady

//add new employee from input values and clears inputs
function addEmployee() {
  let firstName = $('#firstNameIn').val();
  let lastName = $('#lastNameIn').val();
  let employeeId = $('#idIn').val();
  let title = $('#titleIn').val();
  let salary = $('#salaryIn').val();
  //validate inputs with if statement
  if (firstName && lastName && employeeId && title && salary) {
    //select table body and append new row
    $('#employeeList').append(
      `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeId}</td>
        <td>${title}</td>
        <td>${salary}</td>
        <td><button class="deleteButton">Remove</button></td>
      </tr>`
    );//end append row
    $('input').val('');
  }//end if statement
}// end addEmployee

//deletes selected row, re-runs updateTotalMonthly
function deleteEmployee() {
  $(this).closest('tr').remove();

}

//updates value of total monthly salary by looping through all salaries
function updateTotalMonthly() {
  let totalMonthly = 0;
  //for loop on nth-child of each tr?

}//end updateTotalMonthly

