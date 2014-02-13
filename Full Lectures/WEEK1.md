# HTML Text and Lists
Most of any website is text, which is why the first thing we are going to cover is text!

## Level 1-6 Headers
h1 is used for main headings, h2-h6 for subheadings

	<h1>This is a Level 1 Heading</h1>
	<h2>This is a Level 2 Heading</h2>
	<h3>This is a Level 3 Heading</h3>
	<h4>This is a Level 4 Heading</h4>
	<h5>This is a Level 5 Heading</h5>
	<h6>This is a Level 6 Heading</h6>

<h1>This is a Level 1 Heading</h1>
<h2>This is a Level 2 Heading</h2>
<h3>This is a Level 3 Heading</h3>
<h4>This is a Level 4 Heading</h4>
<h5>This is a Level 5 Heading</h5>
<h6>This is a Level 6 Heading</h6>

## Paragraphs
Primarily used for body text.

	<p>Bacon ipsum dolor sit amet frankfurter short loin brisket, pork chop leberkas short ribs swine t-bone bresaola beef venison salami boudin corned beef. Shoulder leberkas pastrami kevin turducken frankfurter flank drumstick strip steak landjaeger pig hamburger swine short loin venison. Pork ham salami, ground round andouille tenderloin boudin jowl kevin pork chop. Pastrami sirloin brisket beef fatback jerky ribeye drumstick tongue kielbasa chuck hamburger jowl filet mignon.</p>

	<p>Sausage chicken boudin strip steak ball tip turducken beef ribs venison sirloin biltong. Pork belly cow chuck tongue brisket doner andouille turducken pig. Pork chop shoulder corned beef pig ground round short ribs tail strip steak frankfurter brisket rump. Tongue doner short loin hamburger. Swine shank hamburger salami, ball tip bresaola pork chop boudin pig leberkas meatball tail.</p>

Bacon ipsum dolor sit amet frankfurter short loin brisket, pork chop leberkas short ribs swine t-bone bresaola beef venison salami boudin corned beef. Shoulder leberkas pastrami kevin turducken frankfurter flank drumstick strip steak landjaeger pig hamburger swine short loin venison. Pork ham salami, ground round andouille tenderloin boudin jowl kevin pork chop. Pastrami sirloin brisket beef fatback jerky ribeye drumstick tongue kielbasa chuck hamburger jowl filet mignon.

Sausage chicken boudin strip steak ball tip turducken beef ribs venison sirloin biltong. Pork belly cow chuck tongue brisket doner andouille turducken pig. Pork chop shoulder corned beef pig ground round short ribs tail strip steak frankfurter brisket rump. Tongue doner short loin hamburger. Swine shank hamburger salami, ball tip bresaola pork chop boudin pig leberkas meatball tail.

## Bold, Italic, Strong, and Emphasis
This is an example of semantic markup VS structural markup. Bold and Italic simply describe how the text should look. Strong and Emphasis describes to us the importance of this text in context. If you want someone to focus on a part of a passage, you tell them where the emphasis is, not where the italics are. This is also important for those who are blind because they can't see bold and italics, but can understand strong and emphasis.

By default, strong and bold look the same, and italics and em look the same. They are inline elements.

    <p>Ball tip beef pork belly, pork loin andouille corned beef drumstick short ribs landjaeger salami short loin flank venison pork. Leberkas swine fatback, jowl salami doner tail andouille beef bresaola turkey. <b>Beef ribs</b> pastrami chicken prosciutto, short ribs meatloaf hamburger sausage chuck short loin salami ribeye beef ground round. Swine shankle frankfurter spare ribs chicken turkey strip steak boudin. Turducken beef ribs short loin spare ribs leberkas swine frankfurter <i>hamburger</i> kielbasa pancetta.</p>

    <p>Jerky cow bresaola ham hock, doner short ribs tri-tip salami spare ribs pastrami porchetta landjaeger. Jerky doner turducken pork chop jowl ground round porchetta, beef ribs capicola leberkas strip steak. Sirloin landjaeger <strong>meatloaf</strong>, meatball bresaola swine drumstick hamburger kielbasa pig flank turducken pastrami. Landjaeger filet mignon chicken ball tip rump, turkey shoulder pastrami flank brisket short ribs drumstick chuck sirloin shankle. Shankle pastrami corned beef, venison pig meatball boudin <i>pork chop</i> tri-tip spare ribs pork belly. Chuck drumstick rump brisket beef spare ribs pork belly pastrami frankfurter flank tail. Salami short ribs landjaeger ham hock shankle, ground round turkey pastrami beef.</p>

<p>Ball tip beef pork belly, pork loin andouille corned beef drumstick short ribs landjaeger salami short loin flank venison pork. Leberkas swine fatback, jowl salami doner tail andouille beef bresaola turkey. <b>Beef ribs</b> pastrami chicken prosciutto, short ribs meatloaf hamburger sausage chuck short loin salami ribeye beef ground round. Swine shankle frankfurter spare ribs chicken turkey strip steak boudin. Turducken beef ribs short loin spare ribs leberkas swine frankfurter <i>hamburger</i> kielbasa pancetta.</p>

<p>Jerky cow bresaola ham hock, doner short ribs tri-tip salami spare ribs pastrami porchetta landjaeger. Jerky doner turducken pork chop jowl ground round porchetta, beef ribs capicola leberkas strip steak. Sirloin landjaeger <strong>meatloaf</strong>, meatball bresaola swine drumstick hamburger kielbasa pig flank turducken pastrami. Landjaeger filet mignon chicken ball tip rump, turkey shoulder pastrami flank brisket short ribs drumstick chuck sirloin shankle. Shankle pastrami corned beef, venison pig meatball boudin <i>pork chop</i> tri-tip spare ribs pork belly. Chuck drumstick rump brisket beef spare ribs pork belly pastrami frankfurter flank tail. Salami short ribs landjaeger ham hock shankle, ground round turkey pastrami beef.</p>

## Superscript and Subscript
For all the mathematicians and chemists.

	<p>My birthday is January 31<sup>st</sup>, 1993</p>
	<p>Vitamin water is essentially just C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></p>

<p>My birthday is January 31<sup>st</sup>, 1993</p>
<p>Vitamin water is essentially just C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></p>


## Line Breaks and Horizontal Rule 
These push the content afterwards onto a new line. These are empty elements.

	<p>Would you please<br /> just let me<br /> finish this sentence<br> on one line?</p>
	<p>I don't like the sentence below me.</p>
	<hr>
	<p>What is that line doing there?</p>

<p>Would you please<br /> just let me<br /> finish this sentence<br> on one line?</p>
<p>I don't like the sentence below me.</p>
<hr>
<p>What is that line doing there?</p>

## Whitespace Collapsing
Unless you specify, simply pressing enter on a line will not create a new line on the web page. In addition, any amount of spaces will simply show a single space. This is known as whitespace collapsing.

	<p>This is an example of whitespace collapsing</p>
	<p>This       is an example of whitespace collapsing</p>
	<p>This is an           example of whitespace collapsing</p>
	<p>This is an example of           whitespace 
		        collapsing</p>

<p>This is an example of whitespace collapsing</p>
<p>This       is an example of whitespace collapsing</p>
<p>This is an           example of whitespace collapsing</p>
<p>This is an example of           whitespace collapsing</p>

## Quotations
Blockquotes are block elements (as you can assume), and regular quotes are inline items, like strong and em.
		
    <blockquote>
    <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>
    </blockquote>
	<p>Samuel L. Jackson said <q>English, mother******! Do you speak it?!<q></p>

<blockquote>
  <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
	</p>
</blockquote>

<p>Samuel L. Jackson said <q>English, motherfucker! Do you speak it?!<q></p>

## Abbreviations and Acronyms 
These must contain a title attribute. What is contained in these attributes will be shown in a tooltip when you hover over the element.
		
	<p><abbr title="Hyper-text markup language">HTML</abbr> is a term you all should be familiar with by now.</p>
	<p><abbr title="Doctor">Doc.</abbr>, <abbr title="professor">Prof.</abbr>, and <abbr title="mister">MR.</abbr> should also be familiar to you.</p> 

<p><abbr title="Hyper-text markup language">HTML</abbr> is a term you all should be familiar with by now.</p>
<p><abbr title="Doctor">Doc.</abbr>, <abbr title="professor">Prof.</abbr>, and <abbr title="mister">Mr.</abbr> should also be familiar to you.</p> 


## Citations and Definitions
Citations are used for sources that you are not your own.

	<p><cite>Flowers for Algernon</cite> was a book I read last semester for English. It was really good.</p>

<p><cite>Flowers for Algernon</cite> was a book I read last semester for English. It was really good.</p>		

Definitions are used for important terms.

    <p><dfn>HTML</dfn> is a term you should definitely be able to define by now. So is <dfn>CSS</dfn>.</p>

<p><dfn>HTML</dfn> is a term you should definitely be able to define by now. So is <dfn>CSS</dfn>.</p>

## Addresses 
Simply contain information about your address and contact information. This is an example of semantic markup.

	<address>
      <p><a href="mailto:pliu7@binghamton.edu">pliu7@binghamton.edu</a></p>
      <p>20 Hawley Street</p>
      <p>Binghamton, NY 13901</p>
	</address>

<address>
  <p><a href="mailto:pliu7@binghamton.edu">pliu7@binghamton.edu</a></p>
  <p>20 Hawley Street</p>
  <p>Binghamton, NY 13901</p>
</address>

## Changes to Content - Deletions, Insertions, and Strikethroughs
You can bring to notice changes in your content, like awesome price cuts or mistakes you made.

	<p>My favorite fruits are <del>apples</del> <ins>bananas</ins>!</p>
	<p>The price of the Moto X: <br />
	        <s>was $499</s><br />
	        now $349!
	</p>

<p>My favorite fruits are <del>apples</del> <ins>bananas</ins>!</p>
<p>The price of the Moto X: <br />
    <s>was $499</s><br />
    now $349!
</p>


# Lists!
Lists are comprised of two types of elements: the list itself and the list items with in the list. When you enclose list items within a list, they will automatically format. You can also nest other types of elements within a list, like paragraphs or headers.

## Ordered Lists 
As the name suggests, lists all of its items in numerical order.

	<p>These are a few of my favorite things (ranked from most favorite to least favorite):
	<ol>
      <li>Bubble baths</li>
      <li>Teaching web development</li>
      <li>Picking things up and putting them down</li>
      <li>Espresso</li>
      <li>Oxford shirts from Uniqlo</li>
	</ol>

<p>These are a few of my favorite things (ranked from most favorite to least favorite):</p>
<ol>
  <li>Bubble baths</li>
  <li>Teaching web development</li>
  <li>Picking things up and putting them down</li>
  <li>Espresso</li>
  <li>Oxford shirts from Uniqlo</li>
</ol>

## Unordered Lists 
These lists simply add a bullet next to each item.

    <p>Shopping List</p>
    <ul>
      <li>Spinach</li>
      <li>Greek yogurt</li>
      <li>Five <abbr title="pounds">lbs.</abbr> of chicken breast</li>
      <li>Whole Wheat Pasta</li>
      <li>Beer from Wegman's</li>
	</ul>

<p>Shopping List</p>
<ul>
  <li>Spinach</li>
  <li>Greek yogurt</li>
  <li>Five <abbr title="pounds">lbs.</abbr> of chicken breast</li>
  <li>Whole Wheat Pasta</li>
  <li>Beer from Wegman's</li>
</ul>

## Definition Lists 
These are used for definitions, and are a bit different from normal lists. Each definition should contain a definition term and a definition definition (yes, that is what we will call it) associated with it. These element should be adjacent to each other.

    <dl>
      <dt>HTML</dt>
      <dd>Stands for Hyper-text Markup Language. It is what gives structure to the content in webpages.</dd>
      <dt>CSS</dt>
      <dd>Stands for Cascading Style Sheets. It is what makes websites look pretty.</dd>
      <dt>Javascript</dt>
      <dd>A programming language that can be used on the front-end to create interactive website and also on the back-end to create web applications.</dd>
    </dl>

<dl>
  <dt>HTML</dt>
  <dd>Stands for Hyper-text Markup Language. It is what gives structure to the content in webpages.</dd>
  <dt>CSS</dt>
  <dd>Stands for Cascading Style Sheets. It is what makes websites look pretty.</dd>
  <dt>Javascript</dt>
  <dd>A programming language that can be used on the front-end to create interactive website and also on the back-end to create web applications.</dd>
</dl>

## Nested Lists 
You can put lists inside of lists! Listception!

	<p>List of Movies Where Leonardo DiCaprio:</p>
	<ul>
		<li>
			<p>Is arrested for fraud:</p>
			<ol>
			  <li>The Wolf of Wall Street</li>
			  <li>Catch Me If You Can</li>
			</ol>
		</li>
		<li>
			<p>Finds himself in the ocean:</p>
			<ol>
			  <li>Inception</li>
			  <li>Titanic</li>
			</ol>
		</li>
		<li>
			<p>Plays essentially the same character:</p>
			<ol>
			  <li>Inception</li>
			  <li>Shutter Island</li>
			</ol>
		</li>
	</ul>

<p>List of Movies Where Leonardo DiCaprio:</p>
<ul>
	<li>
		<p>Is arrested for fraud:</p>
		<ol>
		  <li>The Wolf of Wall Street</li>
		  <li>Catch Me If You Can</li>
		</ol>
	</li>
	<li>
		<p>Finds himself in the ocean:</p>
		<ol>
		  <li>Inception</li>
		  <li>Titanic</li>
		</ol>
	</li>
	<li>
		<p>Plays essentially the same character:</p>
		<ol>
		  <li>Inception</li>
		  <li>Shutter Island</li>
		</ol>
	</li>
</ul>

## Links
Links are specified by the "a" or the "anchor" tags. Each has an attribute called href, or hyperlink reference, which refers to the URL, or the Universal Resource Locator, it will go to when clicked. There are two types of URLs: one is a relative URL and one is an absolute URL. Here are some examples.

This is a relative URL. It points to a webpage relative to the page we are currently on. Thought of in a different way, it refers to a page in the same directory that we are working in.
    
    <a href="index.html">This is a link to the homepage.</a>
    <a href="about/contact.html">This is a link to the contact page. It is within a folder in the root directory called "about".</a>
    <a href="../other.html">This is a link to another page that is in a folder before the present working directory.</a>
    
<a href="index.html">This is a link to the homepage.</a><br>
<a href="about/contact.html">This is a link to the contact page. It is within a folder in the root directory called "about".</a><br>
<a href="../other.html">This is a link to another page that is in a folder before the present working directory.</a><br>

There are also absolute URLs. These refer to the domain name of IP address of the web site you are looking for, and can point to them from anywhere, even if it is not a web page relative to the one you are currently on.

    <a href="https://google.com/">Google</a>
    <a href="https://facebook.com/">Facebook</a>
    <a href="https://twitter.com/">Twitter</a>
    
<a href="https://google.com/">Google</a>
<a href="https://facebook.com/">Facebook</a>
<a href="https://twitter.com/">Twitter</a>

Note that these links are prefixed with "https://". HTTP stands for Hypertext Transfer Protocol, and the S simply means that it is secure. We will talk about this later, but this just lets the browser know that we should use a certain protocol when trying to get web pages.

## Images
Images are embedded into web pages very similar to the way that links/anchor tags. They must have a src attribute that points to the location of the image, and should have a couple of extra attributes to aid those with disabilities or those who have disabled the loading of images/have a slower internet connect.

src attributes, like href attributes, can point to resources relative or absolute.
The title attribute is shown when a mouse hovers over the image.
The alt attribute is read outloud when the client is visually impaired.

For example, this photo uses an image that is not stored in the present working directory. 

    <img src="http://placekitten.com/g/300/300" alt="An adorable little kitten" title="Cute kitten" />

<img src="http://placekitten.com/g/300/300" alt="An adorable little kitten" title="Cute kitten" />

This example, on the other hand, uses an image that is stored in the images folder of the root directory.

    <img src="images/kitten.jpg" alt="An adorable little kitten" title="Cute kitten" />
    
<img src="http://placekitten.com/g/300/300" alt="An adorable little kitten" title="Cute kitten" />

### HTML5 Figure
HTML5 introduced a new element, called a figure. This was made to group images and related content, like image captions, together in one element. The figure tag wraps all of the content, you use a regular img tag for the actual image, and you add a caption to the image using a figcaption element.

    <figure>
        <img src="http://placekitten.com/g/300/300" alt="An adorable little kitten" title="Cute kitten" /><br>
        <figcaption>This is an adorable little kitten.</figcaption>
    </figure>
    
<figure>
    <img src="http://placekitten.com/g/300/300" alt="An adorable little kitten" title="Cute kitten" /><br>
    <figcaption>This is an adorable little kitten.</figcaption>
</figure>

## Grouping Related Elements Together
### Divs and Spans
Divs are used to group text and elements inside a block. For this example, we are using it for a navigation menu.

    <div id="header">
      <h1>Welcome to My Website</h1>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

<div id="header">
  <h1>Welcome to My Website</h1>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</div>

Spans are used to group text and elements within an inline element. For example, if you wanted to add a class attribute to the title of a book.

  <p>I really liked reading that one book, <span class="title">To Kill a Mockingbird</span></p>

<p>I really liked reading that one book, <span class="title">To Kill a Mockingbird</span></p>

Now that we've learned about these elements, we will use them for your own personal benefit...not in an evil way. 

# Work on Your Portfolio!
- Create a Level 1 Header with your name (because you are the most important person on your website)
- Create more headers on what you think you should highlight on your webpage (education, work experience, interests, skills, etc...) and write paragraphs about those things.
- Write a basic cover letter/mission statement/goals/etc.
- Create a contact me portion of the website and add an address section.
- Create a list of your skills, things you are interested in.

## Extra Stuff
- Add your favorite inspirational quote. Or a quote you made or believe in that you can put into a small mission statement.
- Test out the whitespace collapsing. For example, if you want to make something more readable in your HTML, you can put words from the same paragraph on a newline.
