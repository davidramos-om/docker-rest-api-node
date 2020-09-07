const app = require('./app');

const port = 5000;

const onListen = () =>
{
    console.info("listening on port " + port);
}

app.listen(port, onListen);