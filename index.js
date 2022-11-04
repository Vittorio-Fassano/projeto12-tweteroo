import express from 'express';
import chalk from 'chalk';
import cors from 'cors';

const app = express(); 

app.use(cors());
app.use(express.json());



app.listen(5000, () => {
    console.log(chalk.bold.green('Server running on port 5000'))
});