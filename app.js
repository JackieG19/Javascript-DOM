const wrap = document.querySelector('#wrapper');
// constant set it = to this method is going to go out 
// and grab this wrapper Id element and return it

console.log(wrap); 
// this should print out the html element that has the Id of wrapper

const wmf = document.querySelector('#book-list li:nth-child(2).name');
// constant set it = to this method that grabs the second child of the Li element by using 
// a pseudo class :nth-child in (put the second child of LI element).then class of name

console.log(wmf);
// this should print out the the book in the list element with the Id of book-list

const book = document.querySelector('#book-list li .name');
// the querySelector method only returns one element 
console.log(book);
//will print out the first element with the classname of book-list 

const books = document.querySelectorAll('#book-list li .name');
// the querySelectorAll method will return a collection of element 
// so this will grab every element with an element class of name inside and li inside the book-list
console.log(books);
// this print out all the elements  with the classname of name

// this is how you cycle through the collection of books into an array 
Array.from(books).forEach(function(book){
// creating an array using the Array.from method (from the variable books)
//turning the book collections into an array using the forEach() method
// passing through a function(the book iterate through at that moment)

    console.log(book);
});