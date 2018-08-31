console.log('client.js');

$(document).ready(onReady)

function onReady() {
  console.log('jQuery')
  //click listener for submit button, runs addEmployee
  $('#submitButton').on('click', addEmployee)
  //click listener on delete button, runs deleteEmployee
}//end onReady

//add new employee from input values and clears inputs
function addEmployee() {
  let firstName = $('#firstNameIn').val();
  let lastName = $('#lastNameIn').val();
  let employeeId = $('#idIn').val();
  let title = $('#titleIn').val();
  let salary = $('#salaryIn').val();
  //select table body and append new row
  $('#employeeList').append(
    `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeId}</td>
        <td>${title}</td>
        <td>${salary}</td>
      </tr>`
  );//end append row
  $('input').val('');
}// end addEmployee


//updates value of total monthly salary by looping through all salaries
function updateTotalMonthly() {
  let totalMonthly = 0;
  //for loop

}//end updateTotalMonthly