import footer from './view/footer.html';

export default class Footer {
    constructor(){
        this.element = document.createElement('div');
        this.element.innerHTML = footer;
    }
    component(){
        return this.element;
    }
}
