import { useState, useEffect } from "react";

export default function Dictionary() {
    const [word, setWord] = useState('')
    const [word2, setWord2] = useState('')

    useEffect(() => {
        console.log('the update state ' + word)
    },[word])

    useEffect(() => {
        console.log('the update state ' + word2)
    },[word2])

    return (
        <>
            <input
                type='text'
                onChange={(e) => {
                    setWord(e.target.value)
                }}
            />
            <h1>Le's get the defination of {word}</h1>
            <input
                type='text'
                onChange={(e) => {
                    setWord2(e.target.value)
                }}
            />
            <h2>Le's get the defination of {word2}</h2>
        </>
    )
}