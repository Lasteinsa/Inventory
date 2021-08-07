var express = require("express");
var app = express();

app.use(express.static(__dirname + "/www"));
app.listen(process.env.PORT || 5000);

app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: __dirname + "/www"});
});