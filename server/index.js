import express from 'express';
import React from 'react';

import { renderToString } from 'react-dom/server';
import App from '../static_src/components/App';
import template from './template';
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux';
import { createElement } from 'react';
import initStore from '../static_src/utils/store'
import promise from 'es6-promise';
import 'isomorphic-fetch';

promise.polyfill();

const app = express();


app.get('*', (req, res) => {

    const store = initStore();
    const context = {};
    const resultServer = () => {
        console.log(234);
        const resultText = renderToString(
        createElement(Provider, { store },
            createElement(StaticRouter, { location: req.url, context },
                <App />)
            )
        );
        const storeString = JSON.stringify(store.getState());
        console.log(456);
        res.send(template({
            body: resultText,
            title: 'FROM THE SERVER',
            store: storeString
        }));
    };
    console.log(req.url);
    renderToString(
    createElement(Provider, { store },
        createElement(StaticRouter, { location: req.url, context },
            <App server={ true } resultServer={ resultServer }/>)
        )
    );
});

const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
