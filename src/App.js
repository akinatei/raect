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
          <Employee name='Daniel' role='Intern' />
          <Employee name='John' role={role}/>
          <Employee name='Magnus'/>
        </>
      ): (
        <p>You cannot see this page</p>
      )}

    </div>
  );
}

export default App;
