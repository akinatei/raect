import Employee from './components/Employee';
import { useState } from 'react';
import './index.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('Dev')
  const [employees, setEmployees] = useState([
    {
      name: 'Daniel',
      role: 'Developer',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    },
    {
      name: 'Ruth',
      role: 'CCS',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    },
    {
      name: 'Sal',
      role: 'Senior',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    },
    {
      name: 'Jake',
      role: 'Software Engineer',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    },
    {
      name: 'Molly',
      role: 'Researcher',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    },
    {
      name: 'Grimes',
      role: 'Operations',
      img: 'https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg'
    }
  ])
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
                key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
              />)
             })}
          </div>
        </>
      ): (
        <p>You cannot see this page</p>
      )}

    </div>
  );
}

export default App;
