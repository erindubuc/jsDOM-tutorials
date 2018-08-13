const list = document.querySelector('#book-list ul');

// delete books "delete" event
list.addEventListener('click', function(e) {
    if (e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// Add book-list "submit" event
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
});