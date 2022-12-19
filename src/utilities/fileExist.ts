
import fs from "fs";

const FileExist = (path:string):boolean => {
   try {
    fs.accessSync(path);
    return true;
   } catch  {
    return false;
   }
   

};

export default FileExist;