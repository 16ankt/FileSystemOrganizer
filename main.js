#!/usr/bin/env node

let inputArr = process.argv.slice(2);// it takes input form 2 index its not take node main.js
let fs = require("fs"); // path exits or not
let path = require("path");
let helpobj = require("./Lecture-1/filesystemorganizer/help")
let treeobj = require("./Lecture-1/filesystemorganizer/tree")
let organiseobj = require("./Lecture-1/filesystemorganizer/organize")
// console.log(inputArr);
//node main.js tree "directoryPath"
//node main.js organise "directoryPath"
//node main.js help
let command = inputArr[0];

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

switch(command){
    case "tree":
        treeobj.treekey(inputArr[1]);
        break;

    case "organise":
        organizeobj.organisekey(inputArr[1]);
        break;
    
    case "help":
        helpobj.helpkey;
        break;
    default:
        console.log("😉 please imput valid command");
        break;
}







