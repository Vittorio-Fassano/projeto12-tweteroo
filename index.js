import express from 'express';
import chalk from 'chalk';
import cors from 'cors';

const app = express(); 

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

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

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;

    const user = users.find((user) => user.username === username);

    const newTweet = {
        username,
        tweet,
        /*avatar: user.avatar,*/
    }

    tweets.push(newTweet);
    res.status(201).send("OK");

    console.log(tweets);
})


app.listen(5000, () => {
    console.log(chalk.bold.green('Server running on port 5000'))
});

/*
requests: 

post sign-up
{
    "username": "Germán Cano",
	"avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGZ_s98hOOHpMEjzRx0RKxczVHKdBKZtdEs10p9ky&s"
}

post tweets
{
    "username": "Germán Cano",
	"tweet": "faça o L imediatamente"
}
*/