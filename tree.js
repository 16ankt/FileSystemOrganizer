function treeHelper(dirPath, indent) {
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    } else {
        let dirName = path.basename(dirPath)
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }


}
function treeFn(dirPath){
    console.log("tree command implemented for ", dirPath);
    let destpath;
    if(dirPath == undefined){
        //console.log("Opps! you forget to enter the path");
       process.cwd();
       treeHelper( treeHelper(dirPath));
        return;
    }
    else{
    let doesexist = fs.existsSync(dirPath);
    if(doesexist){
    //2. create-> organise_file->directory
    
        treeHelper(dirPath);
    }
    
    
    }
    // else{
    //     console.log("please enter the valid path");
    //     return;
    // }
}
module.exports = {
treekey:treeFn
}

