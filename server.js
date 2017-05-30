console.log('server is starting...');
// var fs = require('fs');
// var data = fs.readFileSync('src/data.json');
// var people = JSON.parse(data);
// console.log(people);
var express = require('express');

var app = express();

var server = app.listen(8000, listening);

function listening() {
    console.log('listening...');
};

app.use(express.static('src'));
app.use('/:person', express.static('src'))



