import article from './view/article.html';

export default class Article {
    constructor(){
        this.element = document.createElement('div');
        this.element.innerHTML = article;
    }
    component(){
        return this.element;
    }
}
