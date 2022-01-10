import React, {createContext, useState, useEffect} from 'react'
import axios from "axios"

const baseUrl = "https://api.vschool.io/daltonbunker/thing"
const UglyThingsContext = createContext()

function UglyThingsProvider({children}) {

    const [uglyThingsArray, setUglyThingsArray] = useState([])
    const [editMode, setEditMode] = useState([false, {}])

    function addThing(newThing) {
        axios.post(baseUrl, newThing)
        .then(resp => setUglyThingsArray(prevThings => [...prevThings, resp.data]))
    }

    function editThing(newThing, id) {
        axios.put(`${baseUrl}/${id}`, newThing).then(() => {
            setUglyThingsArray(prevThings => {
                return prevThings.map(thing => {
                    if (thing._id === id) {
                        return {...thing, ...newThing}
                    }
                    return thing
                })
            })
        })
    }

    function deleteThing(id) {
        axios.delete(`${baseUrl}/${id}`).then(() => {
            setUglyThingsArray(prevThings => {
                return prevThings.filter(thing => thing._id !== id)
            })
        })
    }

    useEffect(() => {
        axios.get(baseUrl)
        .then(resp => setUglyThingsArray(resp.data))
    }, [])

    return (
        <UglyThingsContext.Provider value={{uglyThingsArray, addThing, deleteThing, editThing, editMode, setEditMode}}>
            {children}
        </UglyThingsContext.Provider>
    )
}

export {UglyThingsProvider, UglyThingsContext}
