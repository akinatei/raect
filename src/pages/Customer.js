import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
//import NotFound from "../components/NotFound";
import { baseUrl } from "../shared";

export default function Customer(){
    const { id } = useParams()
    const navigate = useNavigate()
    const [customer, setCustomer] = useState()
    const [tempCustomer, setTempCustomer] = useState()
    const [changed, setChanged] = useState(false)
    const [notFound, setNotFound] = useState()
    const [error, setError] = useState()

    // eslint-disable-next-line
    useEffect(() => {
        if(!tempCustomer) return
        if(!customer) return
        let equal = true
        if (customer.name !== tempCustomer.name){
            equal = false
        }
        if (customer.industry !== tempCustomer.industry){
            equal = false
        }
        if (equal) {
            setChanged(false)
        }
    })
    useEffect(() => {
        const url = baseUrl+'api/customers/'+id;
        fetch(url)
        .then((response) => {
        if(response.status === 404){
            // using redirect
            //navigate('/404')
            setNotFound(true)

        }
        if(!response.ok) throw new Error('Something went wrong try again later')
        return response.json()
        
    })
        .then((data) => {setCustomer(data.customer)
                        setTempCustomer(data.customer)
                        setError(undefined)
        }).catch((e) => {
            setError(e.message)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    function updateCustomer() {
        const url = baseUrl + 'api/customers/' + id
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tempCustomer)
        }).then((response) => {
            if(!response.ok) throw new Error('something went wrong')
            return response.json()
        }).then((data) => {
            setCustomer(data.customer)
            setChanged(false)
            setError(undefined)
        }).catch((e)=>{
            setError(e.message)
        })
    }

    // function compareCustomers(){

    // }
    return( 
        <>
        {notFound ? <p>The page of {id} is not in our database</p> : null}
        {customer ? <div>
            {/* <p className="m-2 block px-2">{tempCustomer.id}</p> */}
            <input className="m-2 block px-2" type="text" value={tempCustomer.name} onChange={(e) =>{
                setChanged(true)
                setTempCustomer({...tempCustomer, name: e.target.value})
            }} />
            <input className="m-2 block px-2" type="text" value={tempCustomer.industry} onChange={(e) =>{
                setChanged(true)
                setTempCustomer({...tempCustomer, industry: e.target.value})
            }} />
            {changed ? 
            <>
            <button className="mx-2" onClick={(e) => {
                setTempCustomer({ ...customer })
                setChanged(false)
            }}>Cancel</button> 
            <button onClick={updateCustomer}>Save</button>
            </>
             : null}

        <button className="mx-2" onClick={(e) => {
            const url = baseUrl+'api/customers/'+id
            fetch(url, { method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        }, })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong')
                }
                //setError(undefined)
                // assume the object was deleted
                navigate('/customers')
            }).catch((e) => {
                setError(e.message)
            })
        }}>Delete</button>
        </div>: null}
        {error ? <p>{error}</p> : null}
        <br />
        <Link to={'/customers'}>Go back</Link>
        </>
    )
}