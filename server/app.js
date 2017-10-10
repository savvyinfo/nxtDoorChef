const express =require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

// console.log("this is the path we made for index.html", path.resolve(__dirname, '..', 'dist'));
app.listen(PORT, () => {
    console.log("Starting server on PORT, ", PORT);
});