import express from 'express';

import cookieParser from 'cookie-parser';

import cors from 'cors';

const app = express();

const coreOptions = {
    origin : process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true,
}

app.use(cors(coreOptions));
app.use(express.json({limit : '200kb'}));
app.use(express.urlencoded({extended : true, limit : '200kb'}));
app.use(express.static('public'));
app.use(cookieParser(process.env.COOKIE_SECRET));




export default app;