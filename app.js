const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const fs = require('fs');
const htmlDir = './html/';

// route pages
app.get('/', function (req, res) {

    let sortedFiles = [];
    let stats;

    const findFiles = function(dir){
        fs.readdirSync(dir).forEach(function(file){
            stats = fs.statSync('' + dir + '/' + file)
            return sortedFiles.push({
                "filename" : file,
                "modified" : stats['mtime']
            });
        })
        console.log(sortedFiles);
    };

    findFiles(htmlDir);

    
    res.render('index', {
        sortedFiles : sortedFiles,
    });    
});


// what port to run server on
app.listen(8080, function () {
  console.log('server started on port 8080');
});