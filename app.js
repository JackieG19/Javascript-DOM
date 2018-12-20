const bookList = document.querySelector('#book-list');

console.log('book list parent node:', bookList.parentNode);
// this will grab a reference to the parent node of then book-list element

console.log('book list parent element:', bookList.parentElement);
// this will do exactly the same thing as the console log above

console.log('book list parent element:', bookList.parentElement.parentElement);
// this will first find the parent element of the book list there then find the 
// parent element of that book list which will grab the reference to that parent

console.log('all node children:');
// grabbing all the child element of the book list element
