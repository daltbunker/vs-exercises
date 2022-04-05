import React from "react";
import axios from "axios";
import notify from "../global/notify";

export const IssuesContext = React.createContext();
const issuesAxios = axios.create();

issuesAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function IssuesProvider(props) {

    function getAllIssues(setState) {
        issuesAxios.get("/api/issues")
            .then(resp => setState(resp.data))
            .catch(err => console.error(err))
    }

    function getUserIssues(setState) {
        issuesAxios.get(`/api/issues/user`)
            .then(resp => setState(resp.data))
            .catch(err => console.error(err))
    }

    function createIssue(newIssue) {
        issuesAxios.post(`/api/issues/`, newIssue)
            .then(() => notify("Issue Created!"))
            .catch(err => {
                notify("Failed to create issue 🤖")
                console.error(err)
            })
    }

    function deleteIssue(id, setState) {
        issuesAxios.delete(`/api/issues/${id}`)
            .then(() => {
                notify("Issue was deleted.")
                setState(prevState => {
                    return prevState.filter(issue => issue._id !== id)
                })
            })
            .catch(err => {
                notify("Failed to delete issue 🤖")
                console.error(err)
            })
    }

    function getComments(issueId, setState) {
        issuesAxios.get(`/api/issues/${issueId}/comments`)
            .then(resp => setState(resp.data))
            .catch(err => console.error(err))
    }

    function submitComment(issueId, setState, comment) {
        issuesAxios.post(`/api/issues/${issueId}/comments`, comment)
        .then(resp => {
            setState(prevState => [...prevState, resp.data])
            notify("Comment Submitted!")
        })
        .catch(err => {
            notify("Comment Failed to Submit 🤖")
            console.error(err)
        })
    }

    function vote(issueId, setState, voteDirection) {
        issuesAxios.put(`/api/issues/${issueId}/${voteDirection}vote`)
            .then(resp => {
                setState(resp.data.votes.length)
            })
            .catch(err => console.error(err))
    }

    return (
        <IssuesContext.Provider value={{ getAllIssues, getUserIssues, createIssue, deleteIssue, getComments, submitComment, vote }}>
            {props.children}
        </IssuesContext.Provider>
    )
}