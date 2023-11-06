import Employee from './components/Employee';
import { useState } from 'react';
import './index.css';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employess';

function App() {

  return(
    <Header>
   <Employees />
   </Header>
   
  )
}
export default App;
