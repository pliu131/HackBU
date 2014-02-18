# Introduction to JQuery
## What is jQuery?
Clicking button and having a modal show up.
find elements in an HTML doc
change HTML content
listen to what a user does and react accordingly
animate content on page
talk over network to fetch new content (AJAX)

find it
change it

DOM - Document Object Model
Tree like structure to find HTML elements using Javascript.

HTML document to DOM picture
nodes = HTML elements
text node = the content

Javascript gives developers way to interact with the DOM.

Use jQuery with all browsers because they all have different DOM.

How jquery accesses the DOM
jQuery(document);

Need to use CSS selectors
h1 { font-size: 3em; }
p { color: blue; }

Use these to find elements in t he DOM

    jQuery("h1");
    jQuery("p");
    $("h1").text("Where to?");
    $("p");




