import express, { Request, Response } from 'express'
import { guessRouter } from './routers/guess.router.js';
import { matchRouter } from './routers/match.router.js';
import { teamRouter } from './routers/team.router.js';
import { userRouter } from './routers/user.router.js';

const server = express();

server.use(express.json());

server.get('/health', (req: Request, res: Response) => { res.send('ok') });

server
    .use(userRouter)
    .use(teamRouter)
    .use(guessRouter)
    .use(matchRouter)

const port = 4000;
server.listen(port, () => console.log(`Server is running in port ${port}`));