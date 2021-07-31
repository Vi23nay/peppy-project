let path = require("path");
let fs = require("fs");
function tree(srcpath){
    if(srcpath == undefined){
        srcpath = process.cwd();
    }
    
    let parentfolderName = path.basename(srcpath);
    console.log("└──"+parentfolderName);

    let content = fs.readdirSync(srcpath);
    for(i=0 ; i < content.length ; i++){
        console.log("\t"+"├──"+content[i]);
    }
}

module.exports={
    treefxn : tree
}