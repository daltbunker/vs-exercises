const express = require("express");
const issuesRouter = express.Router();
const Issue = require("../models/issue");
const Comment = require("../models/comment")

issuesRouter.route("/")
    .get((req, res, next) => {
        Issue.find((err, issues) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues)
        })
    })
    .post((req, res, next) => {
        req.body.user = req.user._id
        const newIssue = new Issue(req.body)
        newIssue.save((err, issue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(issue)
        })
    })

issuesRouter.get("/user", (req, res, next) => {
    Issue.find({user: req.user._id}, (err, issues) => {
        if (err) {
            res.status(500)
        }
        return res.status(200).send(issues)
    })
})

issuesRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        {_id: req.params.issueId},
        (err, issue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issue)
        }
    )
})

issuesRouter.put("/:issueId/upvote", (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        {$addToSet: {votes : req.user._id}},
        {new: true}, 
        (err, issue) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(201).send(issue);
        }
    )
})

issuesRouter.put("/:issueId/downvote", (req, res, next) => {
      Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        {$pull: {votes : req.user._id}},
        {new: true}, 
        (err, issue) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(201).send(issue);
        }
    )
})

issuesRouter.route("/:issueId/comments")
    .get((req, res, next) => {
        Comment.find({ issue: req.params.issueId}, (err, comments) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comments)
        })
    })
    .post((req, res, next) => {
        req.body.user = req.user._id
        req.body.issue = req.params.issueId
        const newComment = new Comment(req.body)
        newComment.save((err, issue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(issue)
        })
    })

    module.exports = issuesRouter