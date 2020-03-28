import header from './view/header.html';

export default class Header {
    constructor(){
        this.element = document.createElement('div');
        this.element.innerHTML = header;
    }
    component(){
        return this.element;
    }
}
