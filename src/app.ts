import express, { Request, Response } from 'express'

const server = express();

server.use(express.json());
server.get('/health', (req: Request, res: Response)=> {res.send('ok')})

const port = 4000
server.listen(port, ()=> console.log(`Server is running in port ${port}`))