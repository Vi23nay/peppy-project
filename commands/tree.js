let path = require("path");
let fs = require("fs");
function tree(srcpath){
    if(srcpath == undefined){
        srcpath = process.cwd();
    }
    
    if(fs.existsSync(srcpath)  == true){
        treeHelper(srcpath, "");
    }else{
        console.log("Please enter correct path");
    }
}

function treeHelper(srcpath, indent){
    isFile = fs.lstatSync(srcpath).isFile();
    if(isFile){
        let fileName = path.basename(srcpath);
        console.log(indent + "├──"+fileName);
    }else{//if directory
        let dirName = path.basename(srcpath);
        console.log(indent+"└──"+dirName);
        let content = fs.readdirSync(srcpath);
        for(let i = 0 ; i < content.length ; i++){
            let childPath = path.join(srcpath, content[i]);
            treeHelper(childPath,indent+"\t");
        }
    }
}

module.exports={
    treefxn : tree
}