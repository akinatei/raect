import Employee from './components/Employee';
import { useState } from 'react';
import './index.css';

function App() {
  const [role, setRole] = useState('Dev')
  const showEployees = true
  return (
    <div className="App">
      {showEployees ? (
        <>
          <input type="text" onChange={(e) =>{
            console.log(e.target.value)
            setRole(e.target.value)
          }} />
          <div className="flex flex-wrap justify-center">
            <Employee name='Daniel' role='Intern' img="https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg?s=612x612&w=is&k=20&c=AbkSDhhYr-FMi3vllBog0cU8ZA5lntxL9LfleKYuVXM="/>
            <Employee name='John' role={role} img="https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg?s=612x612&w=is&k=20&c=AbkSDhhYr-FMi3vllBog0cU8ZA5lntxL9LfleKYuVXM="/>
            <Employee name='Magnus' img="https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg?s=612x612&w=is&k=20&c=AbkSDhhYr-FMi3vllBog0cU8ZA5lntxL9LfleKYuVXM="/>
            <Employee name='Daniel' role='Intern' img="https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg?s=612x612&w=is&k=20&c=AbkSDhhYr-FMi3vllBog0cU8ZA5lntxL9LfleKYuVXM="/>
            <Employee name='John' role={role} img="https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg?s=612x612&w=is&k=20&c=AbkSDhhYr-FMi3vllBog0cU8ZA5lntxL9LfleKYuVXM="/>
            <Employee name='Magnus' img="https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg?s=612x612&w=is&k=20&c=AbkSDhhYr-FMi3vllBog0cU8ZA5lntxL9LfleKYuVXM="/>
            <Employee name='Daniel' role='Intern' img="https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg?s=612x612&w=is&k=20&c=AbkSDhhYr-FMi3vllBog0cU8ZA5lntxL9LfleKYuVXM="/>
            <Employee name='John' role={role} img="https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg?s=612x612&w=is&k=20&c=AbkSDhhYr-FMi3vllBog0cU8ZA5lntxL9LfleKYuVXM="/>
            <Employee name='Magnus' img="https://media.istockphoto.com/id/184324190/photo/relaxed-businessman.jpg?s=612x612&w=is&k=20&c=AbkSDhhYr-FMi3vllBog0cU8ZA5lntxL9LfleKYuVXM="/>
          </div>
        </>
      ): (
        <p>You cannot see this page</p>
      )}

    </div>
  );
}

export default App;
