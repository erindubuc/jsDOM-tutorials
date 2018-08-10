const bookList = document.querySelector('#book-list');

// 2 ways to retrieve the parent of an element - moving up
console.log('the parent node is:', bookList.parentNode);
// 2 levels up
console.log('the parent element is:', bookList.parentElement.parentElement);

// finding children
console.log(bookList.children);