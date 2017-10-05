import express from 'express';
import React from 'react';
import template from './template';
import { renderToString, renderToNodeStream } from 'react-dom/server';
const proxy = require('express-http-proxy');
const cookieParser = require('cookie-parser')

import { StaticRouter } from 'react-router';
import { renderRoutes, matchRoutes } from  'react-router-config';
import routes from './components/routes';


import promise from 'es6-promise';
import 'isomorphic-fetch';
const apiURL = 'http://138.197.187.175/';



const app = express();



app.get('*', (req, res, next) => {
    const match = matchRoutes(routes, req.url);
    const promises = []
    match.map(({route}) => {
        if (typeof route.component.fetchData == 'function'){
            promises.push(route.component.fetchData())
        }
    })
    Promise.all(promises).then((value) => {
        let resultText;
        resultText = renderToString(
            <StaticRouter location={req.url} context={{}} >
                { renderRoutes(routes) }
            </StaticRouter>
        )
        res.send(template({body: resultText, title: 'SERVER RENDERING'}))
    })
})



const port = 3000;
app.listen(port);
console.log('server listen port 3000')

