const express = require("express")
const todosRoute = express.Router()
const {v4: uuid} = require("uuid")

const todos = [
    {
        title: "Groceries",
        completed: false,
        description: "milk, bread, fruit",
        imgUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        _id: uuid()
    },
    {
        title: "Wash Car",
        completed: true,
        description: "Friday",
        imgUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        _id: uuid()
    },
    {
        title: "Europe Trip",
        completed: false,
        description: "France, August 22",
        imgUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        _id: uuid()
    }
]

todosRoute.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(`"${newTodo.title}"" was added.`)

    })

todosRoute.route("/:todoId")
    .get((req, res) => {
        const id = req.params.todoId
        const matchingTodo = todos.find(todo => todo._id === id)
        res.send(matchingTodo)
    })
    .put((req, res) => {
        const id = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === id)
        const updatedTodo = Object.assign(todos[todoIndex], req.body)
        res.send(updatedTodo)
    })
    .delete((req, res) => {
        const id = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === id)
        const [deletedTodo] = todos.splice(todoIndex, 1)
        res.send(`"${deletedTodo.title}" was deleted.`)
    })



module.exports = todosRoute