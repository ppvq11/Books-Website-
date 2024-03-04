let stars=document.getElementById('stars');
let book=document.getElementById('book');
let mount3=document.getElementById('mount3');
let mount4=document.getElementById('mount4');
let boat=document.getElementById('boat');
let MyBook=document.querySelector('.MyBook');
window.onscroll = function() {
    let value = scrollY ;
    stars.style.right = value +'px';
    book.style.top = value * 3 +'px';
    mount3.style.right= value * 1 +'px';
    mount4.style.left= value * 1 +'px';
    boat.style.left= value * 2 +'px';
    MyBook.style.fontSize= value +'px';
}
