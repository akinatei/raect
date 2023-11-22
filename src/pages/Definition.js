import { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DefinitionSearch from "../components/DefinitionSearch";
import NotFound from "../components/NotFound";
import useFetch from "../hooks/UseFetch";

export default function Definition() {
    //const [word, setWord] = useState()
    //const [notFound, setNotFound] = useState(false)
    //const [error, setError] = useState(false)
    //console.log(useParams())
    let { search } = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const { data: [{ meanings: word }] = [{}], errorStatus } = useFetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+search)

    // useEffect(() => {
    //     console.log(word)
    // })

    /*
    useEffect(() => {
        //const url = 'https://httpstat.us/500'
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+search
        fetch(url)
            .then((response) => {
                if(response.status === 404) {
                    setNotFound(true)
                } else if (response.status === 401) {
                    // navigate('/login', {
                    //     state: {
                    //         previousUrl: location.pathname
                    //     }
                    // })
                } else if (response.status === 500) {
                    setError(true)
                }

                if (!response.ok) {
                    setError(true)
                    throw new Error('Something went wrong')
                }
                return response.json()
            }
            )
            .then((data) => {
                setWord(data[0].meanings)
                // console.log(data[0].meanings)
            })
            .catch((e) => {
                console.log(e.message)
            })
    },[]);
    */

    
    if (errorStatus === true) {
        return(
        <>
         <NotFound />
         <Link to='/dictionary'>Search another</Link>
         </>
        )
    }

    if (errorStatus) {
        return(
        <>
         <p>Something went wrong, try again ?</p>
         <Link to='/dictionary'>Search another</Link>
         </>
        )
    }
    
    
    return (
    <>
     {word ? (
        <>
        <h1>Here is a Definition Page:</h1>
        <h2>{search}</h2>
         {word.map((meaning) =>{
        return (<p key={uuidv4()}>
            {meaning.partOfSpeech}: {meaning.definitions[0].definition}
            </p>
        )
     })}
     <p>Search again:</p>
     <DefinitionSearch />
    </>
    ): null}
    </>
    );
}