var books = document.querySelectorAll('#book-list li .name');
// this will grab al of the span tag with class of name and store in the variable books 

Array.from(books).forEach(function(book){
// turning the book collection into an array
// using the forEach method to cycle through them 
// passing in a function which is going to fire on each book
// (its gonna take the individual book and iterate each one)
    
    book.textContent += '(book title)';
    // append(add) more text with the span element text
});


const bookList = document.querySelector('#book-list');
//console.log(bookList.innerHTML);

//bookList.innerHTML = '<h2>Books and more books...</h2>';
// this will replace all that innner HTML with the h2 element

bookList.innerHTML += '<p>This is how you add HTML element.</>';
// this will append(add on to) the html by creating a <p> tag



