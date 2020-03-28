//modules 
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ImgFile from './js/imgFile.js';
import Service from './js/service.js';
//style
import css from './style/style.css';
//component
import Header from './header.js';
import Article from './article.js';
import Footer from './footer.js';

// component class
const components = new Array();
components.push(new Header());
components.push(new Article());
components.push(new Footer());

for (const i in components) {
    document.body.appendChild(components[i].component());
}

//event
$(document).ready(function(){
    // element
    const $drop = $("#drop");
    const $form = $("#form");
    const $submit = $('#submit');
    // service
    const imgFile = new ImgFile();
    const service = new Service();
    // reader
    const reader = new FileReader();

    $drop.on('dragleave',function(event){
        return false;
    });
    $drop.on('dragover',function(event){
        return false;
    });
    $drop.on('drop',function(event){
        //image preview
        imgFile.setFile(event.originalEvent.dataTransfer.files[0]);
        imgFile.imgPreview(reader);
        return false;
    }); 
    
    $drop.on('click',function(){
        $form.find('input').click();
    });

    $form.find('input').on('change',function(event){        
        //imgPreview
        imgFile.setFile(event.target.files[0]);
        imgFile.imgPreview(reader);
    });
    
    $submit.on('click',function(){
        console.log("submit");
        for (const index in imgFile.getFile()) {
            let formData = {
                'lang':$form.find('select').val(),
                'file':imgFile.getFile()[index]
            };
            service.setFormData(formData);
        }

        service.get('');
        
    });

    reader.onload = (event) => {
        // document.
        let imgDiv = $('<div>');
        imgDiv.addClass('col-md-4');
        
        let imgTag = $('<img/>');
        imgTag.attr('src',event.target.result);
        
        imgTag.on('click',function(event){         
            // $('#ImgModal').modal('show');
            // $('#ImgModal').find($('.modal-body').empty());
            
            // let canvas = $('#canvas');
            // let ctx = canvas[0].getContext("2d");
            // // canvas.attr('style',`width:${event.target.width*2};height:${event.target.height*2};`);
            // ctx.drawImage(event.target,0,0);

            // let canvas = $('<canvas>');
            // let ctx = canvas[0].getContext("2d");
            // canvas.attr('style',`width:${event.target.width*2};height:${event.target.height*2};`);
            // ctx.drawImage(event.target,0,0,event.target.width*2,event.target.height*2);

            // $('#ImgModal').find('.modal-body').append(canvas);

            return false;
        });

        let imgClose = $('<p>');
        imgClose.text("X");

        imgClose.on('click',function(event){
            imgFile.removeFile($(event.currentTarget).closest('div').index());
            $(event.currentTarget).closest('div').remove();
            return false;
        });

        $drop.find('#imgBox')
            .append(imgDiv.append(imgTag)
                .append($('<span>').text(imgFile.getFile()[imgFile.getFile().length-1].name))
                    .append(imgClose));
    }

});
