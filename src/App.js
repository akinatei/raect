import Employee from './components/Employee';
import { useState } from 'react';
import './index.css';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';

function App() {
  const [role, setRole] = useState('Dev')
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Daniel',
      role: 'Developer',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    },
    {
      id: 2,
      name: 'Ruth',
      role: 'CCS',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    },
    {
      id: 3,
      name: 'Sal',
      role: 'Senior',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    },
    {
      id: 4,
      name: 'Jake',
      role: 'Software Engineer',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    },
    {
      id: 5,
      name: 'Molly',
      role: 'Researcher',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    },
    {
      id: 6,
      name: 'Grimes',
      role: 'Operations',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    }
  ])
  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id){
        return { ...employee, name:newName, role:newRole }
      }
      return employee
    })
    setEmployees(updatedEmployees)
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  }

  const showEployees = true
  return (
    <div className="App">
      {showEployees ? (
        <>
          <input type="text" onChange={(e) =>{
            //console.log(e.target.value)
            setRole(e.target.value)
          }} />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) =>{ 
              //console.log(employee);
              console.log(uuidv4())
              return (<Employee
                //key={uuidv4()}
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                updateEmployee={updateEmployee}
              />)
             })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ): (
        <p>You cannot see this page</p>
      )}

    </div>
  );
}

export default App;
