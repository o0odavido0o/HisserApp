"use strict";

let postsFilling = new PostsFilling();
let postsForm = new PostsForm();
let PSview = new PostSectionView();
let PScontroller = new PostSectionController();
let Cview = new CreationWindowView();
let Ccontroller = new CreationWindowController();
let SUview = new SignUpWindowView();
let SUcontroller = new SignUpWindowController();
PostSectionView.refresh();

/*let xhr = new XMLHttpRequest();
xhr.open('Get', 'http://localhost:8080/tweets?id=12', true);
xhr.onreadystatechange = function () {
    if (xhr.status != 200) {
        // обработать ошибку
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        let str = xhr.responseText;
        alert( xhr.responseText ); // responseText -- текст ответа.
    }
};
xhr.send();*/