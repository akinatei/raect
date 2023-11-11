import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import { baseUrl } from "../shared";

export default function Customer(){
    const { id } = useParams()
    const navigate = useNavigate()
    const [customer, setCustomer] = useState()
    const [notFound, setNotFound] = useState()
    const url = baseUrl+'api/customers/'+id;
    useEffect(() => {
        fetch(url)
        .then((response) => {
        if(response.status === 404){
            // using redirect
            //navigate('/404')
            
            setNotFound(true)

        } else{
        return response.json()
        }
    })
        .then((data) => {setCustomer(data.customer)
        });
    }, [])
    return( 
        <>
        {notFound ? <p>The page of {id} is not in our database</p> : null}
        {customer ? <div>
            <p>{customer.id}</p>
            <p>{customer.name}</p>
            <p>{customer.industry}</p>
        </div>: null}
        <Link to={'/customers'}>Go back</Link>
        </>
    )
}