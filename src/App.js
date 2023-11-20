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
import { useEffect } from 'react';
import { baseUrl } from './shared';
import Register from './pages/Register';

export const LoginContext = createContext()

function App() {
  useEffect(() => {
    function refreshTokens(){
      if(localStorage.refresh){
        const url = baseUrl + 'api/token/refresh/'
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            refresh: localStorage.refresh,
          }),
        }).then((response) => {
          return response.json()
        }).then((data) => {
          localStorage.access = data.access
          localStorage.refresh = data.refresh
          setLoggedIn(true)
        })
      }
    }
    const minute = 1000 * 60
    refreshTokens()
    setInterval(refreshTokens, minute * 3)
  }, [])

  // check localStorage for an access token --> maybe expires
  // longterm goal --> use Refresh token and if it works, stay logged in
  // otherwise take it to login page
  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false)

  function changeLoggedIn(value) {
    setLoggedIn(value)
    if (value === false) {
      localStorage.clear()
    }
  }

  return(
    <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
    <BrowserRouter>
    <Header>
      <Routes>
        <Route path='/employees' element={<Employees />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/customers/:id' element={<Customer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
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
