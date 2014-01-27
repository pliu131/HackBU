# CSS Color
There are multiple ways of specifying color in CSS.
One way is through the predefined name for a color. You can Google these.
    body {
      color: red;
    }
Another way is to use a hex-code. I don't want to go into too much detail about these, but these specify the amount of red, green, and blue in the color:
    body {
      color: #FAFAFA;
    }
There is also another way to specify the amount of red, green, and blue in a color. These values range from 0 to 255.
    body {
      color: rgb(100,100,100)
    }
We can also define a color using hue, saturation, and lightness:
    body {
      color: hsl(0, 0%, 78%);
    }
Hue is expressed as an angle from 0 to 360, and saturation and lightness are both expressed in percentages.

There are also two types of color we can specify: foreground color and background color.
Foreground color is simply named color. This changes the color of the text.
    color: red;
Background color is called background-color. The changes the color behind the text.
    background-color: blue;

# CSS Text Properties
## Font
### font-family and font-face
This allows you to specify which font you would like to use. It is important to list more than one font in the case that the font you specified is not installed on the user's machine.

Using font-family tells the browser to look for the specified font on the user's computer.
  body {
    font-family: Helvetica, Arial, sans-serif;
  }

Specifying a font-face lets use choose a font, given we know where to get it. It is commonly used for web fonts, like Google Fonts. Here is an example of how to include a Google font:
    @font-face {
      font-family: 'Open Sans';
      src: url('http://fonts.googleapis.com/css?family=Open+Sans');
    }

You can specify the font name and provide a URL for where to find the font.
Then you can use that font in the font-family property:
  body {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  }

There is also another way to do this that is specified on the Google Fonts website.
Include this in the head tag of the HTML page:
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

This takes care of setting @font-face in your CSS. Then you can continue to do:
    body {
      font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    }

### font-size
There are three ways of specifying the font size, and these measurements are also used in different properties such as the height and width of other elements

We can use pixels.
  body {
    font-size: 16px;
  }

We can also use percentages and ems, which are relative to the size of body font.
  font-size: 200%; /* 32px */
  font-size: 1.5em; /* 24px */

### font-weight
There are five different values for the weight of a font. 
  .font-weight {
    font-weight: bold; 
    /* font-weight: normal; */
    /* font-style: normal; */
    /* font-style: italic; */
    /* font-style: oblique; */
  }

## Kerning and Leading
### line-height
Kerning describes the spacing between the lines of text.
    .line-height {
      line-height: 1.4em;
    }

### letter-spacing
Leading describes the spacing between letters.
    .letter-spacing {
      letter-spacing: 0.2em;
    }

### word-spacing
Tracking describes the spacing between words.
    .word-spacing {
      word-spacing: 1em;
    }

## Alignment
### text-align
This is the horizontal alignment of text on the page.
    .text-align {
      text-align: left;
      /* text-align: right; */
      /* text-align: center; */
      /* text-align: justify; */
    }

### vertical-align
This is the vertical alignment of text on the page.
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

## Other Stuff
### text-transform
We can easily change the case of text using CSS.
    .text-transform {
      text-transform: uppercase;
      /* text-transform: lowercase; */
      /* text-transform: capitalize; */
    }

### text-decoration
We can also add decoration to text easily.
    .text-decoration {
      text-decoration: none;
      /* text-decoration: underline; */
      /* text-decoration: overline; */
      /* text-decoration: line-through; */
    }

### text-shadow
This allows us to add a drop shadow behind the text, which just creates a copy of the text at the specified location relative to the text and in the specified color. This property is a bit more complicated than the others because it takes four values: three lengths that tell us about the position, and the color of the drop shadow.

First value: how far left or right
Second value: how far up or down
Third value (optional): amount of blur
Fourth value: color
    p.shadow {
      text-shadow: 1px 1px 5px #111111;
    }


## Pseudo Elements
Pseudo elements can let us pick out certain parts of text, and style our interactions with links and other elements.

### first-letter and first-line
As the name suggests, it will let us pick out the first letter or first line from a body of text.
    p.intro:first-letter {
      font-weight: 48px;
    }
    p.intro:first-line {
      font-weight: bold;
    }

### link, visited
These let you choose links that have been visited and links that haven't been visited.
    a:link {
      color: gray;
    }
    a:visited {
      color:blue;
    }

### hover, active, focus
hover is used when the mouse is hovering over an element.
    h1:hover {
      font-size: 12px;
    }
Active is used when the element is being used by the user. This is used for links or buttons.
    a:active {
      color: red;
    }
Focus is where the focus is. You think about when you press tab on a website to go through a form, this is where the focus lies.
    input:focus {
      border: 1px red;
    }

# CSS List Properties
## The Style of the Bullets
You can change what the bullets next to list items look like.
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

## How to Count List Items
Don't like numbers? We have some options for you.
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

## Changing the Position of the Bullets
The bullets can either be inside the line or outside the line.
EXAMPLE ONE
    .exampleOne {
      /* can position where the markers are */
      list-style-position: inside;
    }

EXAMPLE TWO
    .exampleTwo {
      list-style-position: outside;
    }

## Shorthand
All of this can be done in short hand using list-style
    /*list-style: inside disc;

# Work on your portfolios!
- Find a font or two that you'd like to use on Google fonts or any other webfont website, and use them in your website.
- Pick out a color scheme for your website.
- Place with any other CSS properties you'd like to.