console.log('client.js');

$(document).ready(onReady)

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

let employees = [];

class Employee {
  constructor(firstName, lastName, employeeId, title, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.employeeId = employeeId;
    this.title = title;
    this.salary = salary;
  }
}

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
    employees.push(new Employee(firstName, lastName, employeeId, title, salary))
    console.log(employees);
  }//end if statement
  $('input').val('');
  updateEmployeeTable();
}//end addEmployee

function updateEmployeeTable() {
  //clear table before refreshing
  $('#employeeList').empty();
  //for each employee object, append new row to table
  for (employee of employees) {
    console.log(employee.firstName)
    $('#employeeList').append(
      `<tr id="${employee.employeeId}">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.employeeId}</td>
        <td>${employee.title}</td>
        <td class="employeeSalary">${employee.salary}</td>
        <td class="button"><button class="deleteButton">Remove</button></td>
      </tr>`
    );//end append row
  }//end for loop
  //------------------------------------
  //change salary to formatter.format(salary) in table above after adding employee class
  //------------------------------------
  updateTotalMonthly();
}// end update EmployeeTable

//deletes selected row, re-runs updateTotalMonthly
//also find index of selected employee and remove from employees array
//then update total monthly
function deleteEmployee() {
  let rowId = $(this).closest('tr').attr('id');
  console.log('row id:', rowId);
  employees.splice(employees.findIndex(function (employee) { return employee.employeeId === rowId; }), 1);
  console.log(employees);
  updateEmployeeTable();
  updateTotalMonthly();
}

//updates value of total monthly salary by looping through all salaries
//refreshes totalMonthlyDiv with updated value of totalMonthly
//should iterate through array of objects instead of table elements
function updateTotalMonthly() {
  let totalMonthly = 0;
  //select all td of class .employeeSalary
  //add each value to totalMonthly counter variable
  $('.employeeSalary').each(function () {
    totalMonthly += Number($(this).text());
  });//end .each loop
  //divide by 12 to get monthly value
  totalMonthly = totalMonthly / 12
  console.log(totalMonthly);
  //display total monthly value on DOM
  $('#totalMonthlyDiv').html(`<h2>Total Monthly: ${formatter.format(totalMonthly)}</h2>`);
  //check if total > 20000. if yes, change #totalMonthlyDiv background color to red
  if (totalMonthly > 20000) {
    $('#totalMonthlyDiv').css('background-color', 'red');
  } else {
    $('#totalMonthlyDiv').css('background-color', '');
  }//end if statement
}//end updateTotalMonthly