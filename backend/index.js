import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>
    res.send(`Our Soccer application is running ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your Soccer server is running on ${PORT}`)
);