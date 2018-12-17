var titles = document.getElementsByClassName('title'); // this stores the HTML collection 

console.log(Array.isArray(titles));
// title is passing into isArray 
console.log(Array.isArray(Array.from(titles)));
// this will convert the html collection into an array 

// forEach works only on array not HTML collection
Array.from(titles).forEach(function(item){
    console.log(item);
});
