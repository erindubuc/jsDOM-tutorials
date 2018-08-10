// query can grab an element 
const wmf = document.querySelector('#book-list li:nth-child(2).name');
// console.log(wmf);

// make variable to store books in, but this will only grab one
var books = document.querySelector('#book-list li .name');
// console.log(books);
 
// this selector can grab ALL of the elements in the list
books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// now, this function can display the array
Array.from(books).forEach(function(book) {
    console.log(book);
});