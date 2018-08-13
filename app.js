const list = document.querySelector('#book-list ul');

// delete books "delete" event
list.addEventListener('click', function(e) {
    if (e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// Add book-list "submit" event grabs value of field
const addForm = document.forms['add-book'];

    addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;


// create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

// add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;


// add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
 
    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
});

                // notes on changing attributes directly in the console
// var book = document.querySelector('li:first-child .name')

// book.getAttribute('class') checks to see what the class name is
// book.setAttribute('class', 'name-2') changes the class name
// book.hasAttribute('class') would return true
// book.hasAttribute('href') would return false
// book.removeAttribute('class') removes the class 
// book.setAttribute('class', 'name') gives the deleted class a name again