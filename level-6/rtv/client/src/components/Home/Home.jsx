import React, { useEffect, useContext, useState} from 'react'
import { IssuesContext } from '../../context/IssuesProvider';
import Issues from '../Issues/Issues';

export default function Home() {

    const [allIssues, setAllIssues] = useState([])
    const { getAllIssues } = useContext(IssuesContext)

    useEffect(() => {
        getAllIssues(setAllIssues);
    }, [getAllIssues])

    return (
        <div className='issues-container'>
            <Issues data={allIssues}/>
        </div>
    )
}
