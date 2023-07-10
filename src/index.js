const express = require('express')

const app = express()

app.use(express.json())

const users = []

const todos = []

/**
 * Rotas do Usuário
 */

app.post("/users", (request, response) => {
    // const { id, name, username, todos } = request.body => forma alternativa
    const body = request.body
    users.push(body)
    // console.log(body)
    return response.json(body)
})

app.get("/users", (request, response) => {
    return response.json(users)
})

/**
 * Rotas do Todos
 */

app.post("/todos", (request, response) => {
    const body = request.body
    todos.push(body)
    return response.json(body)
})

app.get("/todos", (request, response) => {
    return response.json(todos)
})

app.put("/todos/:id", (request, response) => {
    const { id } = request.params
    return response.json(id)
})

app.patch("/todos/:id/done", (request, response) => {
    const body = request.body
    return response.json(body)
})

app.delete("/todos/:id", (request, response) => {
    const {id} = request.params
    todos.pop()
    return response.json(id)
})


app.listen(3030)