# Finally, some style!
---
# Introduction to CSS
---
CSS stands for Cascading Stylesheets. 
---
We will explain the Cascading part later, but first, we'll talk about the stylesheet part. 
---
CSS applies rules for the elements in HTML and allow us to change things like font, color, size, and spacing. 
---
Most of these changes are attributes we can change in HTML, but this just makes everything easier and more maintable. 
---
CSS is similar to HTML in that it is a text file that is understood by the web browser, and instead of being saved as a .html file, it is saved as a .css file. 
---
## CSS Selectors, Properties, and Values
Here's an example we saw earlier:
---
    <h1 font-size="36px;">This header will be 36px. That's pretty big.</h1>
    <p color="red;">This is a red sentence, because I'm different.</p>
---
We wouldn't want to do that for a hundred of these, would we? 
---
CSS makes this easy by allowing us to choose what type of elements we want, and what rules or attributes we want to apply for that. 
---
In the HTML file:
---
    <h1>This header will be 36px. That's pretty big.</h1>
    <p>This is a red sentence, because I'm different.</p>
---
In the CSS file:
---
    h1 {
      font-size: 36px;
    }
    p {
      color: red;
    }
---
Each declaration follows the same format: 
    
    selector {
      property: value;
    }
---
The selector is the element you want to target, the property is the attribute of the element you want to change, and value is what you want to change it to.
---
## How does the HTML file know about the CSS file?
---
Good question. 
---
For those who actually asked it.
---
There are two ways of doing this.
---
We can embed it in the HTML file or we can put it in a separate .css and tell the HTML file about it.
---
### Internally
---
Since CSS will not be shown within the HTML file, we put it in the head tag, in its own element, appropriately called "style".
---

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
---
## Externally
---
Create a separate file called "styles.css" (or anything that you want), and add the CSS. This needs to be in the same folder as the HTML file you are using.
---

    h1 {
      font-size: 36px;
    }
    p {
      color: red;
    }
---
Then in your HTML file, add this line in the head tag:
---
    <link href="styles.css" rel="stylesheet" type="text/css">
---
The href refers to the CSS file you want to use, rel tells the file what the relationship between the two files are, the type is text/css.
---
## Types of Selectors
---
- Universal: * (all elements)
- Type element: h1, p, ul (which element)
- Class: .class, p.class (elements with a class attribute)
- Id: #id, p#id (elements with an ID attribute)
- Child: parent > child (p after an h1)
- Descendant: element descendant (span within a p)
- Adjacent sibling: h1+p (elements right next to each other)
- General sibling: h1~p ()

---
## Why are they Cascading?
---
CSS have a hierarchy within the rules. It's a bit like being the last kid picked in gym class.
---
### Last Rule Takes Precendence
---

    h1 {
      font-size: 1000px;
    }
    h1 {
      font-size: 8px;
    }
    
---
### Specificity Takes Precedence
---

    p {
      color: red;
    }
    p.pretty {
      color: cyan;
    }
    
---

    <p class="pretty">I feel pretty</p> 

---
## Inheritance
---
Some properties are inherited, some are not inherited. 
# CSS Color
---
There are multiple ways of specifying color in CSS.
---
One way is through the predefined name for a color. You can Google these.
---    
    body {
      color: red;
    }
---
Another way is to use a hex-code.
---
    body {
      color: #FAFAFA;
    }
---
There is also another way to specify the amount of red, green, and blue in a color. These values range from 0 to 255.
---    
    body {
      color: rgb(100,100,100)
    }
---
We can also define a color using hue, saturation, and lightness:
---
    body {
      color: hsl(0, 0%, 78%);
    }
---
Hue is expressed as an angle from 0 to 360, and saturation and lightness are both expressed in percentages.
---
There are also two types of color we can specify: foreground color and background color.
---
Foreground color is simply named color. This changes the color of the text.
---
   color: red;
---
Background color is called background-color. The changes the color behind the text.
---
    background-color: blue;
---
# CSS Text Properties
---
## Font
---
### font-family and font-face
---
Important to list fallback options.
---
    body {
      font-family: Helvetica, Arial, sans-serif;
    }
---
Google Fonts
---
    @font-face {
      font-family: 'Open Sans';
      src: url('http://fonts.googleapis.com/css?family=Open+Sans');
    }
---
You can specify the font name and provide a URL for where to find the font.
---
Then you can use that font in the font-family property:
---
    body {
      font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    }
---
There is also another way to do this that is specified on the Google Fonts website.
---
Include this in the head tag of the HTML page:
---
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
---
This takes care of setting @font-face in your CSS. Then you can continue to do:
---
    body {
      font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    }
---
### font-size
---
There are three ways of specifying the font size
---
These measurements are also used in different properties such as the height and width of other elements
---
We can use pixels.
---
    body {
      font-size: 16px;
    }
---
We can also use percentages and ems, which are relative to the size of body font.
---
    font-size: 200%; /* 32px */
    font-size: 1.5em; /* 24px */
---
### font-weight
---
    .font-weight {
      font-weight: bold; 
      /* font-weight: normal; */
      /* font-style: normal; */
      /* font-style: italic; */
      /* font-style: oblique; */
    }
---
## Kerning and Leading
---
### line-height
---
Kerning describes the spacing between the lines of text.
---
    .line-height {
      line-height: 1.4em;
    }
---
### letter-spacing
---
Leading describes the spacing between letters.
---
    .letter-spacing {
      letter-spacing: 0.2em;
    }
---
### word-spacing
Tracking describes the spacing between words.
---
    .word-spacing {
      word-spacing: 1em;
    }
---
## Alignment
---
### text-align
---
Horizontal alignment of text
---
    .text-align {
      text-align: left;
      /* text-align: right; */
      /* text-align: center; */
      /* text-align: justify; */
    }
### vertical-align
---
    .vertical-align {
      /* vertical-align: baseline; */
      /* vertical-align: sub; */
      /* vertical-align: super; */
      /* vertical-align: top; */
      /* vertical-align: text-top; */
      /* vertical-align: middle; */
      /* vertical-align: bottom; */
      /* vertical-align: text-bottom; */
    }
---
## Other Stuff
---
### text-transform
---
We can easily change the case of text using CSS.
---
    .text-transform {
      text-transform: uppercase;
      /* text-transform: lowercase; */
      /* text-transform: capitalize; */
    }
---
### text-decoration
---
    .text-decoration {
      text-decoration: none;
      /* text-decoration: underline; */
      /* text-decoration: overline; */
      /* text-decoration: line-through; */
    }
---
### text-shadow
---
This allows us to add a drop shadow behind the text, which just creates a copy of the text at the specified location relative to the text and in the specified color.
---
First value: how far left or right
Second value: how far up or down
Third value (optional): amount of blur
Fourth value: color
---
    p.shadow {
      text-shadow: 1px 1px 5px #111111;
    }
---
## Pseudo Elements
---
Pseudo elements can let us pick out certain parts of text, and style our interactions with links and other elements.
---
### first-letter and first-line
---
As the name suggests, it will let us pick out the first letter or first line from a body of text.
---
    p.intro:first-letter {
      font-weight: 48px;
    }
    p.intro:first-line {
      font-weight: bold;
    }
---
### link, visited
---
These let you choose links that have been visited and links that haven't been visited.
---
    a:link {
      color: gray;
    }
    a:visited {
      color:blue;
    }
---
### hover, active, focus
---
hover is used when the mouse is hovering over an element.
---
    h1:hover {
      font-size: 12px;
    }
---
Active is used when the element is being used by the user. This is used for links or buttons.
---
    a:active {
      color: red;
    }
--- 
Focus is where the focus is. You think about when you press tab on a website to go through a form, this is where the focus lies.
---
    input:focus {
      border: 1px red;
    }
---
# CSS List Properties
---
## The Style of the Bullets
---
You can change what the bullets next to list items look like.
---
    .unordered1 li {
      list-style-type: none;
    }
    .unordered2 li {
      list-style-type: disc; 
    }
    .unordered3 li {
      list-style-type: circle; 
    }
    .unordered4 li {
      list-style-type: square; 
    }
    .unordered5 li {
      /* you can also add images for bullets */
      /* uncomment below for kitty bullets */
      list-style-image: url("http://placekitten.com/g/10/10"); 
    }
---
## How to Count List Items
---
Don't like numbers? We have some options for you.
---
    .ordered1 li {
    list-style-type: decimal;
    }
    .ordered2 li {
    list-style-type: decimal-leading-zero; 
    }
    .ordered3 li {
    list-style-type: lower-alpha; 
    }
    .ordered4 li {
    list-style-type: upper-alpha; 
    }
    .ordered5 li {
    list-style-type: lower-roman; 
    }
    .ordered6 li {
    list-style-type: upper-roman; 
    } 
---
## Changing the Position of the Bullets
---
The bullets can either be inside the line or outside the line.
---
EXAMPLE ONE
---
    .exampleOne {
      /* can position where the markers are */
      list-style-position: inside;
    }
---
EXAMPLE TWO
---
    .exampleTwo {
      list-style-position: outside;
    }
---
## Shorthand
---
    list-style: inside disc;
---
# Work on your portfolios!
---
- Create a simple style guide for your website
- Find a font or two that you'd like to use on Google fonts or any other webfont website, and use them in your website.
- Pick out a color scheme for your website.
- Place with any other CSS properties you'd like to.