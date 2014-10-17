var fs = require("fs");
var translate = require("./xliffPigLatin");

var inputFile = process.argv[2];
var outputFile = process.argv[3];

fs.readFile(inputFile, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    console.log("reading : ", inputFile);

    var output = translate(data);

    fs.writeFile(outputFile, output, function(err) {
        if(err) {
            return console.log(err);
        } else {
            return console.log("saved to : ", outputFile);
        }
    });

});

