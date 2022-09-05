import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 3000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://thuxtable:28zen8Zp4q4qQLy@cluster0.hm0cq8i.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Our Soccer application is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your Soccer server is running on ${PORT}`)
);