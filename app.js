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

 
    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
});