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

Use these to find elements in the DOM

    jQuery("h1");
    jQuery("p");
    $("h1").text("Where to?");
    $("p");

# Manipulating the DOM
Appending to the DOM

  $(document).ready(function(){
    // create a <p> node with the price
    var price = $('<p>From $399.99</p>');
    $('.vacation').append(price);
    $('button').remove();
  });
  
  // want to make it so we can click
  .append(element) (first child)
  .prepend(element) (last child)
  .after(element) (new node after)
  .before(element) (new node before)
  
  .appendTo(element)
  .prependTo(element)
  .insertAfter(element)
  .insertBefore(element)  

  price.appendTo($('.vacation'));
  
  # Acting on Interaction
  $(document).ready(<event handler function>);
  
Making the button work
.on(<event>, <event handler>);

$(document).ready(function() {  
  $('button').on('click', function() {
    // runs when any button is clicked
    var price = $('<p>From $399.99</p>');
    $('.vacation').append(price);
    $('button').remove();
  });
});
 
# Refactor using Traversing
Working, but with errors
(Finds all the li's with class vacation, and replace all li's and removes all buttons)
KEYWORD = this
this will work only with with the button

  $('this').remove();
 
Still adding price to list items

  $('this').after(price); // creates a div, changes the DOM
  
Using .closest(<selector>);

  $(this).closest('.vacation').append(price);
  
Our finished handler

  $(document).ready(function() {
    $('button').on('click', function() {
      var price = $('<p>From $399.99</p>');
      $(this).closest('.vacation').append(price);
      $(this).remove();
    });
  });
  
# Traversing and Filtering
Tackling the HTML
  data-price="399.99" attribute in HTML tag
 jQuery Object Methods
  .data(<name>)
  .data(<name>, <value>)
  
  $('.vacation').first().data('price'); //"399.99"

Refactoring get price
 
 var amount = $(this).closest('.vacation').data('price');
 var price = $('<p>From $'+amount+'</p>');

Reusing jquery objects

  var vacation = $(this).closest('.vacation');
  
On With a CSS Selection

  $('.vacation').on('click', 'button', function() {}); // event delegation
  // only target a button inside a vacation class
  
Filtering HTML
  
  <div id="filters">
    <button class="onsale-filter">On Sale Now</button>
    <button class="expiring-filter">Expiring</button>
  </div>
 
Filtering for Vacations On Sale

  $('#filters').on('click', '.onsale-filter', function() {
    // find all vacations that are on-sale
    $('vacation').filter('.onsale').addClass('highlighted');
    // add a class to these vacations
  });
  
  $('#filters').on('click', '.expiring-filter', function() {
    // find all vacations that are on-sale
    $('vacation').filter('.expiring').addClass('highlighted');
    // add a class to these vacations
  });
  
.addClass
.removeClass
  
Toggling on and off highlighting

  $('.highlighted').removeClass('highlighted');

# On DOM Load

Adding ticket confirmation

  .ticket { display: none; }
  
Watch for click, find ticket, then show it

  $('.confirmation').on('click', 'button', function() {
    $(this).closest('.confirmation').find('ticket').slideDown();
  });

.slideDown()
.slideUp()
.slideToggle()

Alert and Length

  alert('Hello');
  $('li').length; (return numbers of li's)

  alert($('button').length);

Wrap code in DOM ready function

Expanding on on()
!!!Look at list of mouse events  
  
  $('.confirmation').on('mouseenter', 'h3', function() {
    $(this).closest('.confirmation').find('ticket').slideDown();
  });
  
Refactoring this Code  
  
 function showTicket() {
  $(this).closest('.confirmation').find('ticket').slideDown();
  }

  $('.confirmation').on('click', 'button', showTicket);
  $('.confirmation').on('mouseenter', 'h3', showTicket);

showTicket() would call the function immediately!!!

# Keyboard Events
Keyboard and Form events

  $(document).ready(function() {
    $('.vacation').on('keyup', '.quantity', function() {
      // Get the price for this vacation and convert string into number
      var price = +$(this).closest('.vacation').data('price');
      // Get the quantity entered
      var quantity = +$(this).val(); // returns value inside form field
      // Set the total to the price * quantity
      $('#total').text(price + quantity); // can set number or string in DOM
    });
  });



  


