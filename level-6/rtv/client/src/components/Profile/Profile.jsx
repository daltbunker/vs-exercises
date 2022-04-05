import React, { useEffect, useContext, useState} from 'react'
import { IssuesContext } from '../../context/IssuesProvider';
import Issues from '../Issues/Issues';

export default function Profile() {

    const [userIssues, setUserIssues] = useState([])
    const { getUserIssues } = useContext(IssuesContext)

    useEffect(() => {
        getUserIssues(setUserIssues);
    }, [getUserIssues])

    return (
        <div className='issues-container'>
            <Issues data={userIssues} setProfileState={setUserIssues} />
        </div>
    )
}
