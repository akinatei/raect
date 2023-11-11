import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Customer(){
    const { id } = useParams()
    const navigate = useNavigate()
    const [customer, setCustomer] = useState()
    const url = 'http://localhost:8000/api/customers/'+id;
    useEffect(() => {
        fetch(url)
        .then((response) => {
        if(response.status === 404){
            // using redirect
            navigate('/404')
        } else{
        return response.json()
        }
    })
        .then((data) => {setCustomer(data.customer)
        });
    }, [])
    return( 
        <>{customer ? <div>
            <p>{customer.id}</p>
            <p>{customer.name}</p>
            <p>{customer.industry}</p>
        </div>: null}
        <Link to={'/customers'}>Go back</Link>
        </>
    )
}