var books = document.querySelectorAll('#book-list li .name');
// this will grab al of the span tag with class of name and store in the variable books 

Array.from(books).forEach(function(book){
// turning the book collection into an array
// using the forEach method to cycle through them 
// passing in a function which is going to fire on each book
// (its gonna take the individual book and iterate each one)
    
    // console.log(book.textContent); - textContent - this property is going to grab the text within the book element 
    
    book.textContent = 'test';
    // this will rewrite the textContent of the span element with the class of name
});

const bookList = document.querySelector('#book-list');
//console.log(bookList.innerHTML);

//bookList.innerHTML = '<h2>Books and more books...</h2>';
// this will replace all that innner HTML with the h2 element

bookList.innerHTML += '<p>This is how you add HTML element.</>';
// this will append(add on to) the html by creating a <p> tag
