#!/usr/bin/env node
////////shebang syntax ko make this project globally
let inputArr = process.argv.slice(2);
let cmd = inputArr[0];
// let srcpath = inputArr[1];

let helpobj = require("./commands/help");
let treeobj = require("./commands/tree");
let orgainerobj = require("./commands/organizer");
switch(cmd){
    case  "help":
        helpobj.helpfxn();
        break;
    case "tree":
        treeobj.treefxn(inputArr[1]);
        break;
    case "organizer":
        orgainerobj.organizerfxn(inputArr[1]);
        break;
    default:
        console.log('kindly enter help to see all commands');


}