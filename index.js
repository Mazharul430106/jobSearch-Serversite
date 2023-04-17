const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to Job Search Server')
})

app.listen(port, () => {
    console.log(`Job Search Server is running on port ${port}`)
})