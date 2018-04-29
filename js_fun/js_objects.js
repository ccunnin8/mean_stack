let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (let i = 0; i < students.length; i++){
  console.log(`Name: ${students[i].name}, Cohort: ${students[i].cohort}`)
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

console.log("EMPLOYEES");
 for (let i = 0; i < users.employees.length; i++){
   let employee = users.employees[i];
   let length = employee.first_name.length + employee.last_name.length;
   console.log(`${i+1} - ${employee.last_name}, ${employee.first_name} - ${length}`);
 }
 console.log("MANAGERS");
 for (let i = 0; i < users.managers.length; i++){
   let manager = users.managers[i];
   let length = manager.first_name.length + manager.last_name.length;
   console.log(`${i+1} - ${manager.last_name}, ${manager.first_name} - ${length}`);
 }
