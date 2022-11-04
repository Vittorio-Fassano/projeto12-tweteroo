import express from 'express';
import chalk from 'chalk';
import cors from 'cors';

const app = express(); 

app.use(cors());
app.use(express.json());

const users = [];

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;

    const newUser = {
        username,
        avatar,
    };

    users.push(newUser);
    res.status(201).send("OK");

    console.log(users);
});


app.listen(5000, () => {
    console.log(chalk.bold.green('Server running on port 5000'))
});