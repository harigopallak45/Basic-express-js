const express = require('express');
const example = require('./example');

const app = express();

app.get('/', (req, res) => {
    const message = example.helloWorld(); // Call function from example.js
    res.send(message);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
