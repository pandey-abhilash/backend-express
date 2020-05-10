import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './allRoutes';

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '100mb' }));
// app.use(express.json());
// app.use(bodyParser.json({ type: 'application/*+json' }))
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, '../public')));
Object.keys(routes).forEach(key=>{
    app.use(key, routes[key]);
})


export default app;