import fs from "fs";
import translate from "./xliffPigLatin";

const INPUT_FILE_ARG = 2;
const OUTPUT_FILE_ARG = 3;

const inputFile = process.argv[INPUT_FILE_ARG];
const outputFile = process.argv[OUTPUT_FILE_ARG];

fs.readFile(inputFile, "utf8", (readError, data) => {
    if(readError) {
        return console.log(readError);
    }
    console.log("reading : ", inputFile);

    const output = translate(data);

    fs.writeFile(outputFile, output, writeError => {
        if(writeError) {
            return console.log(writeError);
        }
        return console.log("saved to : ", outputFile);
    });
    return true;
});

