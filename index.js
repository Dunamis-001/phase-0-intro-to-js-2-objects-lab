
let employee = {
  name: 'Jane Smith',
  streetAddress: '456 Oak Ave'
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
  
  return { ...employee,
    [key]: value
  };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

  employee[key] = value;
  return employee;
}


function deleteFromEmployeeByKey(employee, key) {
 
  const newEmployee = { ...employee
  };
  
  delete newEmployee[key];
  return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {

  delete employee[key];
  return employee;
}

