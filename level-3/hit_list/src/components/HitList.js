import React, { useState, useEffect  } from 'react'
import axios from "axios"
import HitComponent from './HitComponent'

function HitList() {

    const [ hitArr, setHitArr] = useState([])

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(resp => setHitArr([...resp.data]))
    }, [])

   
    const hitComponents = hitArr.map(obj => {
        return (
            <HitComponent image={obj.image} name={obj.name}/>
        )
    })
    return (
        <div className='HitList'>
            {hitComponents}
        </div>
    )
    
}

export default HitList

