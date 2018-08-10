//Getting element by id// 
document.getElementById('page-banner');
var banner = document.getElementById('page-banner');

//Getting element by id//
document.getElementById('book-list');
var bookList = document.getElementById('book-list');

// Getting multiple elements by class//
document.getElementsByClassName('title');
var titles = document.getElementsByClassName('title');

// Getting multiple elements by tag name//
var lis = document.getElementsByTagName('li');


var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item){
    console.log(item);
})