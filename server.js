const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    let a=req.body.first;
    let b=req.body.second;
    res.json({ "result": Number(a)+Number(b)});
});


baseRouter.post('/subtract', (req, res) => {
    let a=req.body.first;
    let b=req.body.second;
    res.json({ "result": Number(a)-Number(b) });
});

app.use(baseUrl, baseRouter); 
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});      