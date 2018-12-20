const banner = document.querySelector('#page-banner');
// grabbing the page-banner element

console.log('#page-banner node type is:', banner.nodeType);
// printing the node type: the constabt banner which will give you a number 
// node type will read this as a 1 which means its an element

console.log('#page-banner node name is:', banner.nodeName);
// output the node name that will return the element name which will be a DIV

console.log('#page-banner has child nodes:', banner.hasChildNodes());
// output true or false if the banner element has a child node

const clonedBanner = banner.cloneNode(true);
// can clone an entire node and can insert it somewhere else(true because it will give the nested content)
// if I don;t put true it would create a div with an ID of page banner and it will disregard every child node inside 

// const clonedBanner = banner.cloneNode(false);
// if I pass in (false) will only give me the div with ID of banner and not have the nested node in it

console.log(clonedBanner);



