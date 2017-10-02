import express from 'express';

const app = express();

app.get('*', (req, res) => {
    console.log('req', req.headers.cookie);
    res.send('hello');
});

const port = 3000;
app.listen(port);
console.log('server listen port 3000')




































//app.get('*', (req, res, next) => {
//
//    const store = initStore();
//    const context = {};
//    const resultServer = () => {
//        const resultText = renderToString(
//        createElement(Provider, { store },
//            createElement(StaticRouter, { location: req.url, context },
//                <App />)
//            )
//        );
//        const storeString = JSON.stringify(store.getState());
//
//        res.send(template({
//            body: resultText,
//            title: 'FROM THE SERVER',
//            store: storeString
//        }));
//    };
//    renderToString(
//    createElement(Provider, { store },
//        createElement(StaticRouter, { location: req.url, context },
//            <App server={ true } resultServer={ resultServer }/>)
//        )
//    );
//});
//
//const port = 3000;
//app.listen(port);
//console.log(`Listening on port ${port}`);
