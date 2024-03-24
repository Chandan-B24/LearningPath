export const tstypeExpCode : string = 
`type User = {
	firstName: string;
	lastName: string;
	age: number
}
`

export const tsUnions : string = 
`type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(\`ID: \${id}\`);
}

printId(101); // ID: 101
printId("202"); // ID: 202
`

export const tsIntersection : string = 
`type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "chandan",
    startDate: new Date(),
    department: "Software developer"
  };
  
`