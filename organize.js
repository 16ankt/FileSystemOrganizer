function organiseFn(dirPath){
    // console.log("organise command implemented for ", dirPath);
 //1. input->directory path given
 let destpath;
 if(dirPath == undefined){
     // console.log("Opps! you forget to enter the path");
     dirPath = process.cwd();
     return;
 }
 else{
 let doesexist = fs.existsSync(dirPath);
 if(doesexist){
 //2. create-> organise_file->directory
 
 destpath = path.join(dirPath,"organised_files");
 if(fs.existsSync(destpath) == false){// check for folder already exits
 fs.mkdirSync(destpath);
 }
 
 
 }
 else{
     console.log("please enter the valid path");
     return;
 }
 }
 
 organiseHelper(dirPath , destpath);
 //2. create-> organise_file->directory
 
 //4.copy all the files in all the directory inside of any of categories folder ex media ,txt etc; 
 }

function organiseHelper(source,destination){
    //3.indentify all files categories present in that directory->
   //a. get
   let childnames = fs.readdirSync(source);
   // console.log(childnames);

for(let i = 0;i<childnames.length;i++){
let childaddress =    path.join(source,childnames[i]);
let isFile =fs.lstatSync(childaddress).isFile();
if(isFile){
   //  console.log(childnames[i]);
     let category =getCategory(childnames[i]);
     console.log(childnames[i],"belongs to -->",category);
     
     //4.copy all the files in all the directory inside of any of categories folder ex media ,txt etc; 
     sendfiles(childaddress,destination,category);
}
}

}

function getCategory(name){
   let ext =  path.extname(name);
   ext = ext.slice(1);
   console.log(ext);

   for(let type in types){
       let ctype = types[type];
       for(let i = 0 ;i<ctype.length;i++){
           if(ext ==ctype[i]){
               return type;
           }
       }
   }
   return "others";
}
function sendfiles(srcfile, dest , category){
    let categorypath = path.join(dest,category);
    if(fs.existsSync(categorypath) == false){
        fs.mkdirSync(categorypath);
    }
   let filename= path.basename(srcfile);
   let destfilepath = path.join(categorypath,filename);
   fs.copyFileSync(srcfile,destfilepath);
   fs.unlinkSync(srcfile);// for deleting the original file
   console.log(filename," copied to ",category);
}
module.exports={
    organisekey:organiseFn
}