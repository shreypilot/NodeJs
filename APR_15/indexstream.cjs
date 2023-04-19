const fs = require('fs');
const TransformStream = require('stream').Transform;
const readstream = fs.createReadStream(__dirname + '/run.txt');
const fileWritestream = fs.createWriteStream(__dirname + '/wite.txt');

const transFormedStream = new TransformStream({
    transform(chunk ,enc,cb){//encoding and cb-callbck
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb,1000)//this read another chunk after 1 sec of 1st chunk tranformstion
    }//not it reading each chunks after 1 sec
});

const writeStream = process.stdout;
const outputStream = readstream.pipe(transFormedStream);


// readstream
// .pipe(transFormedStream)
// .pipe(writestream);

outputStream.pipe(writeStream);
outputStream.pipe(fileWritestream)