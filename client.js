console.log('client.js');

$(document).ready(onReady)

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

function onReady() {
  console.log('jQuery')
  //click listener for submit button, runs addEmployee
  $('#submitButton').on('click', addEmployee)
  //click listener on .deleteButton class within tbody, runs deleteEmployee
  $('#employeeList').on('click', '.deleteButton', deleteEmployee)
  updateTotalMonthly();
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
        <td class="employeeSalary">${formatter.format(salary)}</td>
        <td class="button"><button class="deleteButton">Remove</button></td>
      </tr>`
    );//end append row
    //------------------------------------
    //change salary to formatter.format(salary) in table above after adding employee class
    //------------------------------------
    $('input').val('');
  }//end if statement
  updateTotalMonthly();
}// end addEmployee

//deletes selected row, re-runs updateTotalMonthly
function deleteEmployee() {
  $(this).closest('tr').remove();
  updateTotalMonthly();
}

//updates value of total monthly salary by looping through all salaries
//refreshes totalMonthlyDiv with updated value of totalMonthly
//should iterate through array of objects instead of table elements
function updateTotalMonthly() {
  let totalMonthly = 0;
  //select all td of class .employeeSalary
  //add each value to totalMonthly counter variable
  $('.employeeSalary').each(function() {
    totalMonthly += Number($(this).text());    
  });//end .each loop
  //divide by 12 to get monthly value
  totalMonthly = totalMonthly/12
  console.log(totalMonthly);
  //display total monthly value on DOM
  $('#totalMonthlyDiv').html(`<h2>Total Monthly: ${formatter.format(totalMonthly)}</h2>`);
  //check if total > 20000. if yes, change #totalMonthlyDiv background color to red
  if(totalMonthly > 20000) {
    $('#totalMonthlyDiv').css('background-color', 'red');
  } else {
    $('#totalMonthlyDiv').css('background-color', '');
  }//end if statement
}//end updateTotalMonthly