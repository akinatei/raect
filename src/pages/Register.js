import { useState, useEffect, useContext } from "react"
import { baseUrl } from "../shared"
import { useLocation, useNavigate } from "react-router-dom"
import { LoginContext } from "../App"

export default function Register() {
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.clear()
        setLoggedIn(false)
    })

    function login(e) {
        e.preventDefault()
        const url = baseUrl+'api/register/'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
            })
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            localStorage.setItem('access', data.access)
            localStorage.setItem('refresh', data.refresh)
            setLoggedIn(true)
            //console.log(localStorage)
            // console.log(location)
            // console.log(location.state)
            // console.log(location?.state?.previousUrl)
            navigate(location?.state?.previousUrl ? location.state.previousUrl : '/customers')
        })
    }

    return(
        <form className="m-2 w-full max-w-sm" id="customer" onSubmit={login}>
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/4">
        <label htmlFor="email">Email</label>
        </div>
        <div className="md:w-3/4">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
         id="email" type="email" value={email} 
         onChange={(e) =>{
            setEmail(e.target.value)
        }} />
        </div>
        </div>
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/4">
        <label htmlFor="username">Username</label>
        </div>
        <div className="md:w-3/4">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
         id="username" type="text" value={username} 
         onChange={(e) =>{
            setUsername(e.target.value)
        }} />
        </div>
        </div>
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/4">
        <label htmlFor="password">Password</label>
        </div>
        <div className="md:w-3/4">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="password" type="password" value={password} 
        onChange={(e) =>{
            setPassword(e.target.value)
        }} />
        </div>
        </div>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Register</button>
        </form>
    )
}