const express = require('express');
//const dirname = "sites/dearassassin/server";
const dirname = "dearassassin/server";
const logger = require('morgan');
const favicon = require('serve-favicon');
const app = express();
const port = 80;
//const port = 8099;
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.set(`trust proxy`, true);

app.use(favicon(`${dirname}/images/favicon.ico`))
app.use(express.static(dirname + "/"))


app.listen(port, () => {
    console.log(`dearassassin Listening on port ${port}`)

})
app.set("port", port);
module.exports = {
    app
}