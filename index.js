const employee = {
    name : "victor",
    streetAddress :"hilltop",
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    const updatedEmployee ={...employee,};
    updatedEmployee[key]=value;
    return updatedEmployee;
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee,"zipcode",3032);
console.log(updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(updatedEmployee,key,value){
    updatedEmployee[key]=value;
    return updatedEmployee;
}
const updatedEmployee1 = destructivelyUpdateEmployeeWithKeyAndValue(updatedEmployee,"streetAddress","meru");
console.log(updatedEmployee1.streetAddress);

function deleteFromEmployeeByKey(updatedEmployee1,key,value){
    const deleteEmployee = {...updatedEmployee1};
    deleteEmployee[key]=value;
    return deleteEmployee;
}
const deleteEmployee = deleteFromEmployeeByKey(updatedEmployee1,"streetAddress","meru");
console.log(deleteEmployee);

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
console.log(employee);

