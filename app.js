var books = document.querySelectorAll('#book-list li .name');

// can change text content w/ textContent returning a string
Array.from(books).forEach(function(book) {
    book.textContent += '(book title)';
});

// grabs HTML and logs to console...then bookList.innerHTML = '<text you want to change>'
const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML<p>';