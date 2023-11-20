// import Employee from './components/Employee';
import { createContext, useState } from 'react';
import './index.css';
// import { v4 as uuidv4 } from 'uuid';
// import AddEmployee from './components/AddEmployee';
// import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employess';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';
import Customer from './pages/Customer';
import Login from './pages/Login';

export const LoginContext = createContext()

function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  return(
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
    <BrowserRouter>
    <Header>
      <Routes>
        <Route path='/employees' element={<Employees />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/customers/:id' element={<Customer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dictionary/:search' element={<Definition />} />
        <Route path='/dictionary' element={<Dictionary />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Header>
    </BrowserRouter>
    </LoginContext.Provider>
   
  )
}
export default App;
