export default class ImgFile {
    constructor(){
        this.file = new Array();
    }
    setFile(file){
        this.file.push(file);
    }
    getFile(){
        return  this.file;
    }
    removeFile(index){
        this.file.splice(parseInt(index),1);
    }
    imgPreview(reader){
        reader.readAsDataURL(this.file[this.file.length-1]);
        return this.file[this.file.length-1].name;
    }
}
