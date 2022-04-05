import React, { useState, useEffect, useContext } from 'react'
import { IssuesContext } from '../../context/IssuesProvider'
import { useLocation } from 'react-router-dom'
import { FaRegTrashAlt,  } from 'react-icons/fa';
import { BiLike, BiDislike  } from 'react-icons/bi';

export default function IssueCard({ issueObj, setProfileState }) {

    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState(false)
    const [commentInput, setCommentInput] = useState("")
    const [voted, setVoted] = useState(false)
    const [votes, setVotes] = useState(issueObj.votes.length)
    const [expanded, setExpanded] = useState(false)
    const { getComments, submitComment, vote, deleteIssue } = useContext(IssuesContext)
    const location = useLocation();

    useEffect(() => {
        getComments(issueObj._id, setComments)
    }, [getComments, issueObj._id])

    function listComments() {
        if (comments.length > 0) {
            return comments.map(comment => {
                return (
                    <div key={comment._id} className="comment">
                        <div className="comment-text">{comment.text}</div>
                        <div className="comment-date">{comment.date.slice(0, 10)}</div>
                    </div>
                )
            })
        }
        return null
    }

    function handleCommentSubmit(e) {
        e.preventDefault()
        setCommentInput("")
        submitComment(issueObj._id, setComments, {text: commentInput})
    }

    function handleVote(direction) {
        if (direction === 'up') {
            setVoted(true)
        } else if (direction === 'down') {
            setVoted(false)
        }
        vote(issueObj._id, setVotes, direction)
    }

    function format(description) {
        if (description.length > 150 && !expanded) {
            return description.slice(0, 150) + '...'
        } 
        return description
    }

    return (
        <div className="issue-card">
            <h3>{issueObj.title}</h3>
            <p className="issue-description" onClick={() => setExpanded(prevState => !prevState)}>{format(issueObj.description)}</p>
            <button className="secondary-btn" disabled={voted} onClick={() => handleVote('up')}><BiLike/></button>
            <button className="secondary-btn" disabled={!voted} onClick={() => handleVote('down')}><BiDislike/></button>
            <span className="vote-count">{votes}</span>
            <div>
               <span onClick={() => setShowComments(prev => !prev)} className="comments">{comments.length} comments 💬</span>
               {showComments && listComments()}
               <form onSubmit={handleCommentSubmit} className="comment-form">
                    <input 
                        type="text" 
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                        required
                    />
                    <button className="primary-btn">comment</button>
                </form>
            </div>
            {location.pathname === '/profile' && 
            <button 
                className="issue-delete primary-btn"
                onClick={() => deleteIssue(issueObj._id, setProfileState)}
            >
                <FaRegTrashAlt style={{marginTop: 3}}/>
            </button>
            }
        </div>
    )
}
