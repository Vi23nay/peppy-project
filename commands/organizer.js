let fs = require("fs");
let path = require("path");

function organizer(srcpath){
    let types = {
        media: [".mp4", ".mkv"],
        archives: ['.zip', '.7z', '.rar', '.tar', '.gz', '.ar', '.iso', ".xz"],
        documents: ['.docx', '.doc', '.pdf', '.xlsx', '.xls', '.odt', '.ods', '.odp', '.odg', '.odf', '.txt', '.ps', '.tex'],
        app: ['.exe', '.dmg', '.pkg', ".deb"]
    }

    if(srcpath == undefined){
        srcpath = process.cwd();
    }
    let organizedFilePath = path.join(srcpath,"organized_files");
    // console.log(organizedFilePath);
    if(fs.existsSync(organizedFilePath) == false){
        fs.mkdirSync(organizedFilePath);
    }
    
    let allfiles = fs.readdirSync(srcpath);//array
    for(let file = 0 ; file < allfiles.length ; file++){
        // let contentPath = path.join(srcpath+content[i]);
        // let fileName = path.basename(content);
        let extension = path.extname(allfiles[file]);
        ;
        // console.log(extension);
        for(let folderName in types){
            let fileInclude = false;
            if(types[folderName].includes(extension)){
                
                let filesrcPath = path.join(srcpath,allfiles[file]);
                let destPath = path.join(organizedFilePath,folderName);
                if(fs.existsSync(destPath)){
                    
                }else{
                    fs.mkdirSync(destPath);

                }
                destPath = path.join(organizedFilePath,folderName,allfiles[file]) 
                fs.copyFileSync(filesrcPath,destPath);
                
            }
            

        }
        
    }
    console.log("files organized");




}

module.exports={
    organizerfxn : organizer
}