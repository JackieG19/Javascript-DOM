var books = document.querySelectorAll('#book-list li .name');
// this will grab al of the span tag with class of name and store in the variable books 

Array.from(books).forEach(function(book){
// turning the book collection into an array
// using the forEach method to cycle through them 
// passing in a function which is going to fire on each book
// (its gonna take the individual book and iterate each one)
    
    console.log(book.textContent);
    // textContent - this property is going to grab the text within the book element 
});