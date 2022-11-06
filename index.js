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
});

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;

    const user = users.find((user) => user.username === username);

    console.log("user-> ",user)
    console.log("users-> ",users)

    const newTweet = {
        username,
        tweet,
        avatar: user.avatar,
    }

    tweets.push(newTweet);

    console.log("tweets-> ", tweets);

    res.status(201).send("OK");
})

app.get("/tweets", (req, res) => {
    let lastTen = [];

    if(tweets.length < 10) {
        for(let i = tweets.length-1; i >=0; i--) {
            lastTen.push(tweets[i]);
        }
        res.send(lastTen)
    } else {
        for(let i = tweets.length-1; i >= tweets.length-10; i--) {
            lastTen.push(tweets[i]);
        }
        res.send(lastTen)
    }
});

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