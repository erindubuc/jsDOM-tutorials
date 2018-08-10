var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    });
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e) {
    // this is to prevent the click from navigating directly to the website
    e.preventDefault();
    console.log('navigation to ', e.target.textContent, ' was prevented');
})