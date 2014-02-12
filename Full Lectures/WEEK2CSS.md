# More CSS! All the CSS!
## Tables
## Forms
## Links
## Images (should be in week 1, but I'm going to type it out here)
## Boxes
Recall that you should think inside the box in the context of HTML and CSS, and think of every element being wrapped inside of a box. A box has dimensions that include height and width, as a box very well should.

### Width and Height
To control the size of your box more accurately or exactly, you can use pixels.

  div.box { 
    height: 400px;
    width: 400px;
    background-color: green;
  }

You can use percentages. When you use them, keep in mind that this percentage is based on the context in which the box is in. If the box is in just the body element, then setting a height of 50% will only fill up half of the browser window. If a box is nested within another box, it will take up 50% of that box.
Here is an example of what this looks like.

  div.box {
    height: 400px;
    width: 400px;
    background-color: green;
  }

  p {
    height: 50%;
    width: 50%;
    background-color: red;
  }

You can also limit the width of your box by using min-width and max-width, and the same for height with min-height and max-height. 
