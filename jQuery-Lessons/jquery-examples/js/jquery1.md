This is how the DOM (Document Object Model) is structured:
|--DOCUMENT
  |--html
    |--head
      |--title
         |--"HackBU- jQuery Examples"
  |--body    
    |--h1
      |--"Hello World!"
    |--p
       |--"These are the examples for jQuery."

To find elements in the DOM, we use CSS selectors:
In CSS, we do this:

    h1 { font-size: 36px; }
    p { color: red; }

In jQuery, we use the jQuery() method or the shorthand, $()

    $("h1")
    $("p")

These will find all the elements that are h1's or p's.

To fetch or modify an element's content/text:

    $("h1").text(); //returns the text
    $("h1").text("Haha, I changed you!"); //changes the content

You want the script to be execute after the Document is done loading the HTML content before we start doing things to the content. You want jQuery to wait until the document is done loading, so wrap everything you want to be done in:

  $(document).ready(function() {
    $("h1").text("Haha, I changed you!");
  }

# Using jQuery
Download it and load it into your HTML file.

  <script src="js/jquery.min.js"></script>

And then in a separate JS file:

  <script src="js/application.js"></script>

This is where you will decide what you want to have happen with things.

Keep in mind some syntax things:
End statements with ';'
  
  $('h1').text();

Make sure there is a closing bracket for every open one.
The parameters for a jQuery selector is a string. This will not work:

  $(h1).text();

## Selecting Multiple Elements
The jQuery method selects all the specified elements in the document.

  $('h1'); // will find all the documents

You can specify which class or id you would like to target:

  $('h1.author');
  $('p#intro');
  $('.navbar');
  $('#footer');

# Searching the DOM
Use the descendant selector to find elements that are descendants (nested within) another element. To find an li within a certain ul:

  $('ul#navbar li'); // this will select all the li's within a ul

All will be selected.

  <ul>
    <li>I will be selected</li>
    <li>
      <ul>
        <li>I will be selected</li>
      </ul>
    </li>
    <li>I will be selected</li>
  </ul>

You want only direct children?

  $('ul#navbar > li');

  <ul>
    <li>I will be selected</li>
    <li>
      <ul>
        <li>I will not be selected</li>
      </ul>
    </li>
    <li>I will be selected</li>
  </ul>  

Selecting multiple:

  $('#navbar, .intro');

Pseudo Classes:

  $(#navbar li:first);
  $(#navbar li:last);
  $(#navbar li:odd);
  $(#navbar li:even); // index starts at 0

Traversing the DOM

  ')