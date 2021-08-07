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
        let childAddress = path.join(srcpath, allfiles[file]);

        if(fs.lstatSync(childAddress).isFile() == true){
            let extension = path.extname(allfiles[file]);
            let belongingFolder;
            let validFile = false;

            for(let folderName in types){
                if(types[folderName].includes(extension)){
                    validFile = true;
                    belongingFolder = folderName;
                    break;
                }
            }
            
            if (validFile == false){
                belongingFolder = "others";
            }
            let filesrcPath = path.join(srcpath,allfiles[file]);
            let destPath = path.join(organizedFilePath,belongingFolder);
            if(fs.existsSync(destPath)){
                
            }else{
                fs.mkdirSync(destPath);

            }
            destPath = path.join(organizedFilePath,belongingFolder,allfiles[file]) 
            console.log(allfiles[file] +"  ----belongs to ->> " + belongingFolder);
            fs.copyFileSync(filesrcPath,destPath);

                
        }
    }console.log("Files organised");
        }

module.exports={
    organizerfxn : organizer
}