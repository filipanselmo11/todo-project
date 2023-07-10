const express = require('express')

const app = express()

app.use(express.json())

const users = []

app.post("/users", (request, response) => {
    // const { id, name, username, todos } = request.body => forma alternativa
    const body = request.body
    users.push(body)
    return response.json(body)
})

app.get("/users", (request, response) => {
    return response.json(users)
})


app.listen(3030)