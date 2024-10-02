import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import "reflect-metadata";
import cors from 'cors'
import { routerMain } from './routes';

import morgan from 'morgan';
import { exceptionHandler } from './errors/HttpException';

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan('dev'));
// const origins = [process.env.CLIENT_DOMAIN]

app.use(cors({
  origin: "*",
  credentials: true //!Esto es muy importante para las cookies y headers
}));

app.use("/", routerMain)

app.use(exceptionHandler)


export default app 