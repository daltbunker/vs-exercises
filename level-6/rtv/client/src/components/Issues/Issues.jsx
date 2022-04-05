import React from 'react'
import IssueCard from './IssueCard'
import './Issues.css'

export default function Issues({ data, setProfileState }) {

    data.sort((a, b) => b.votes - a.votes)

    function issueCards() {
        return data.map((issue) => {
            return (
                <IssueCard key={issue._id} issueObj={issue} setProfileState={setProfileState} />
            )
        })
    }

    return (
        <div className="issues">
            {issueCards()}
        </div>
    )
}
