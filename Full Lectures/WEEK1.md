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

## Paragraphs
Primarily used for body text.
		<p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
		<p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p>

## Bold, Italic, Strong, and Emphasis
This is an example of semantic markup VS structural markup. Bold and Italic simply describe how the text should look. Strong and Emphasis describes to us the importance of this text in context. If you want someone to focus on a part of a passage, you tell them where the emphasis is, not where the italics are. This is also important for those who are blind because they can't see bold and italics, but can understand strong and emphasis.

By default, strong and bold look the same, and italics and em look the same. They are inline elements.
		<p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a <b>glass motherfuckin' house</b>, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause <i>I'll kill the motherfucker</i>, know what I'm sayin'?</p>
		<p>You think water moves fast? <em>You should see ice.</em> It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. <strong>Nature is lethal but it doesn't hold a candle to man.</strong></p>

## Superscript and Subscript
For all the mathematicians and chemists.
		<p>My birthday is January 31<sup>st</sup>, 1993</p>
		<p>Vitamin water is essentially just C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></p>

## Line Breaks and Horizontal Rule 
These push the content afterwards onto a new line. These are empty elements.
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

## Quotations 
Blockquotes are block elements (as you can assume), and regular quotes are inline items, like strong and em.
		<blockquote>
      <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
			</p>
		</blockquote>
		<p>Samuel L. Jackson said <q>English, motherfucker! Do you speak it?!<q></p>

## Abbreviations and Acronyms 
These must contain a title attribute. What is contained in these attributes will be shown in a tooltip when you hover over the element.
		<p><abbr title="Hyper-text markup language">HTML</abbr> is a term you all should be familiar with by now.</p>
		<p><abbr title="Doctor">Doc.</abbr>, <abbr title="professor">Prof.</abbr>, and <abbr title="mister">Mr.</abbr> should also be familiar to you.</p> 

## Citations and Definitions
These are used for sources that you are not your own.
		<p><cite>Flowers for Algernon</cite> was a book I read last semester for English. It was really good.</p>
These are used for important terms.
		<p><dfn>HTML</dfn> is a term you should definitely be able to define by now. So is <dfn>CSS</dfn>.</p>

## Addresses 
Simply contain information about your address and contact information. This is an example of semantic markup.
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

## Nested Lists 
You can put lists inside of lists! Listception!
		<p>List of Movies Where Leonardo DiCaprio:
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

Now that we've learned about these elements, we will use them for your own personal benefit...in a not evil way. 

# Work on Your Portfolio!
- Create a Level 1 Header with your name (because you are the most important person on your website)
- Create more headers on what you think you should highlight on your webpage (education, work experience, interests, skills, etc...) and write paragraphs about those things.
- Write a basic cover letter/mission statement/goals/etc.
- Create a contact me portion of the website and add an address section.
- Create a list of your skills, things you are interested in.

## Extra Stuff
- Add your favorite inspirational quote. Or a quote you made or believe in that you can put into a small mission statement.
- Test out the whitespace collapsing. For example, if you want to make something more readable in your HTML, you can put words from the same paragraph on a newline.