import Employee from './components/Employee';
import './App.css';

function App() {
  console.log('we are about to list the employee')
  const showEployees = true
  return (
    <div className="App">
      {console.log('inside the div')}
      {showEployees ? (
        <>
          <Employee name='Daniel' role='Intern' />
          <Employee name='John'/>
          <Employee name='Magnus'/>
        </>
      ): (
        <p>You cannot see this page</p>
      )}

    </div>
  );
}

export default App;
