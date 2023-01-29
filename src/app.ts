import express, { Request, Response } from 'express'
import { userRouter } from './routers/user.router.js';

const server = express();

server.use(express.json());

server.get('/health', (req: Request, res: Response)=> {res.send('ok')})

server.use(userRouter)

const port = 4000
server.listen(port, ()=> console.log(`Server is running in port ${port}`))