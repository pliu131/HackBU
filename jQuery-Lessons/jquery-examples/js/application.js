// This is how the DOM (Document Object Model) is structured:
// |--DOCUMENT
//   |--html
//     |--head
//       |--title
//          |--"HackBU- jQuery Examples"
//   |--body    
//     |--h1
//       |--"Hello World!"
//     |--p
//        |--"These are the examples for jQuery."

/*
  To find elements in the DOM, we use CSS selectors:
  In CSS, we do this:

    h1 { font-size: 36px; }
    p { color: red; }

  In jQuery, we use the jQuery() method or the shorthand, $()

    $("h1")
    $("p")

  These will find all the elements that are h1's or p's.

  To fetch or modify an element's content/text:

    $("h1").text(); // returns the text
    $("h1").text("Haha, I changed you!"); // changes the content

  You want the script to be execute after the Document is done loading the HTML content before we start doing things to the content..    
*/ 
