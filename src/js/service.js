import $ from 'jquery';

export default class Service {
    constructor(){
        this.formData;
    }
    set formData(data){
        this.formData = new FormData();
        if(data){
            for(const ket in data){
                this.formData.append(Key,data[key]);
            }
        }
    }
    get(path){
        $.ajax({
            url:path,
            method:'GET',
            contentType: false,
            processData: false,
            async: false,
            data: this.formData
        }).done(function(data){
            console.log("check servcie success:",data);
            return data;
        }).fail(function(err){
            console.log("check service err:",err);
            return err;
        });
    }
    post(path){
        $.ajax({
            url:path,
            method:'POST',
            contentType: false,
            processData: false,
            async: false,
            data: this.formData
        }).done(function(data){
            console.log("check servcie success:",data);
            // return data;
        }).fail(function(err){
            console.log("check service err:",err);
            // return err;
        });
    }
    put(path){

    }
    delete(path){

    }
}