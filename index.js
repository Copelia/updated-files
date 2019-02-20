const fs = require('fs');
// const path = require('path');
// const parentDir = path.basename(filename);
// const path = require('path');
// const htmlDir = path.join(__dirname, 'html', '00_home_tab.html');
// const htmlFile = './html/00_estructura_basica.html';
const htmlDir = './html/';

let sortedFiles = [];
let stat;

const findFiles = function(dir){
    fs.readdirSync(dir).forEach(function(file){
        stat = fs.statSync('' + dir + '/' + file)
        // console.log(stat.mtime);
        return sortedFiles.push({
            "filename" : file,
            "modified" : stat['mtime']
        });
    })
    console.log(sortedFiles);
};

findFiles(htmlDir);

// fs.readdirSync(htmlDir).forEach(file => {
    // let readFile = file;
//   (function(file) {
    // var fileObj = url + file;
    // stat = fs.statSync('/' + file);
    // stat = fs.statSync(parentDir(file));
//     console.log(stat);
//     sortedFiles.push({
//         "filename" : readFile,
//         "modified" : stat['mtime']
//     });
//     console.log(filesSorted);
// });
// });


// fs.readdirSync(htmlDir).forEach(file => {
//     let readFile = file;
    // console.log(readFile);
    // const fileStats = fs.statSync(readFile)

    // const fileStats = fs.statSync(file);
//     console.log(fileStats.mtime);
//   });


// const getUpdatedFile = () => {
//     const stats = fs.statSync(htmlFile, 'utf8');
    // return stats.mtime;
//     console.log(stats.mtime);
// };

// getUpdatedFile(htmlFile);

// const getUpdatedFiles = () => {
//     fs.readdirSync(htmlDir).forEach(file => {
//         const fileStats = fs.statSync(file, 'utf8');
//         console.log(fileStats.mtime)
//     })
//     return file;
// };

// getUpdatedFiles(htmlDir);

