# Finally, some style!

# Introduction to CSS
As you may have notice, your page looks pretty boring at this point, and it probably looks exactly the same as the person sitting next to you. That's because this is the default style for HTML. We are going to change that using CSS to style our pages.

CSS stands for Cascading Stylesheets. We will explain the Cascading part later, but first, we'll talk about the stylesheet part. 

CSS applies rules for the elements in HTML and allow us to change things like font, color, size, and spacing. Most of these changes are attributes we can change in HTML, but this just makes everything easier and more maintable. 

CSS is similar to HTML in that it is a text file that is understood by the web browser, and instead of being saved as a .html file, it is saved as a .css file. 

## CSS Selectors, Properties, and Values
Here's an example we saw earlier:

    <h1 font-size="36px;">This header will be 36px. That's pretty big.</h1>
    <p color="red;">This is a red sentence, because I'm different.</p>

<h1 font-size="36px">This header will be 36px. That's pretty big.</h1>
<p style="color:red">This is a red sentence, because I'm different.</p>

<hr>

Now imagine we wanted all the headers to have a font size of 36px and all the paragraphs to be red. We wouldn't want to do that for a hundred of these, would we? CSS makes this easy by allowing us to choose what type of elements we want, and what rules or attributes we want to apply for that. So instead of setting the attributes for each element individually, we can set the rules in a CSS file:

In the HTML file:

    <h1>This header will be 36px. That's pretty big.</h1>
    <p>This is a red sentence, because I'm different.</p>
    <h1>This header will be 36px. That's pretty big.</h1>
    <p>This is a red sentence, because I'm different.</p>
    <h1>This header will be 36px. That's pretty big.</h1>
    <p>This is a red sentence, because I'm different.</p>

<h1>This header will be 36px. That's pretty big.</h1>
<p>This is a red sentence, because I'm different.</p>
<h1>This header will be 36px. That's pretty big.</h1>
<p>This is a red sentence, because I'm different.</p>
<h1>This header will be 36px. That's pretty big.</h1>
<p>This is a red sentence, because I'm different.</p>

In the CSS file:

    h1 {
      font-size: 36px;
    }
    p {
      color: red;
    }

Each declaration follows the same format: 
    
    selector {
      property: value;
    }

The selector is the element you want to target, the property is the attribute of the element you want to change, and value is what you want to change it to.

## How does the HTML file know about the CSS file?
Good question. For those who actually asked it.
There are two ways of doing this: we can embed it in the HTML file or we can put it in a separate .css and tell the HTML file about it.

### Internally
Since CSS will not be shown within the HTML file, we put it in the head tag, in its own element, appropriately called "style". This is what it would look like.

    <head>
      <style>
        h1 {
          font-size: 36px;
        }
        p {
          color: red;
        }
      </style>
    </head>

However, once you create more CSS rules, it gets messier. This is good if we want to add minor changes to a single webpage, but the better way is to create a separate CSS file.

## Externally
Create a separate file called "styles.css" (or anything that you want), and add the CSS. This needs to be in the same folder as the HTML file you are using.

    h1 {
      font-size: 36px;
    }
    p {
      color: red;
    }

Then in your HTML file, add this line:
    <link href="styles.css" rel="stylesheet" type="text/css">

The href refers to the CSS file you want to use, rel tells the file what the relationship between the two files are, the type is text/css.

## Types of Selectors
- Universal: * (all elements)
- Type element: h1, p, ul (which element)
- Class: .class, p.class (elements with a class attribute)
- Id: #id, p#id (elements with an ID attribute)
- Child: parent > child (p after an h1)
- Descendant: element descendant (span within a p)
- Adjacent sibling: h1+p (elements right next to each other)
- General sibling: h1~p ()

## Why are they Cascading?
CSS have a hierarchy within the rules. It's a bit like being the last kid picked in gym class.

### Last Rule Takes Precendence
CSS:

    h1 {
      font-size: 1000px;
    }
    h1 {
      font-size: 8px;
    }
    
HTML:
    
    <h1>I am going to be a tiny header.</h1>

### Specificity Takes Precedence
Specificity Takes Precedence
CSS:

    p {
      color: red;
    }
    p.pretty {
      color: cyan;
    }
HTML:

    <p class="pretty">I feel pretty</p> 

## Inheritance
Some properties are inherited, some are not inherited. For example, if you want to set what font the entire page will use, you don't want to set that for headers, paragraphs, strong, em, etc. You would want to set it once. You can do that in the body.
Other things are not. For example, if you don't want a border around every element in the body.