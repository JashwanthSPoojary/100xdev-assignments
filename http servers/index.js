const express = require('express');
const app = express();

app.use(express.json());

const todos = [];

app.post('/post', (req, res) => {
    const name = req.body.name;
    const id = req.body.id;

    todos.push({
        name,
        id
    });
    res.send("done")
});

app.put('/put', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const todo = todos.find((todo) => todo.id == id);
    if (todo) {
        todo.name = name;
        res.send("done")
    } else {
        res.status(404).send("todo not found")
    }
})
app.delete('/delete', (req, res) => {
    const id = req.body.id;
    const todo = todos.findIndex((todo) => todo.id == id);
    if (todo) {
        todos.splice(todo, 1)
        res.send("done")
    } else {
        res.status(404).send("todo not found")
    }
})

app.get('/', (req, res) => {
    res.json({
        todos
    });
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});