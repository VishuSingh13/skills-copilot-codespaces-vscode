// Create web server
// Create a web server that listens to the port 3000.
// The server should respond to requests to /comments in the following way:
// • GET /comments - Respond with the list of comments
// • POST /comments - Add a new comment
// • DELETE /comments - Delete all the comments
// • GET /comments/:id - Respond with a single comment
// • DELETE /comments/:id - Delete a single comment

const express = require('express');
const app = express();

let comments = [];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.send('Comment added!');
});

app.delete('/comments', (req, res) => {
    comments = [];
    res.send('All comments deleted!');
});

app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});

app.delete('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');

    const index = comments.indexOf(comment);
    comments.splice(index, 1);

    res.send('Comment deleted!');
});

app.listen(3000, () => console.log('Listening on port 3000...'));

// Test with Postman
// GET /comments
// POST /comments
// DELETE /comments
// GET /comments/:id
// DELETE /comments/:id