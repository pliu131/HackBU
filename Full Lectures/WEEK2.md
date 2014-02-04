# HTML Topics for Week 2
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

### Tables
Tables are essentially Excel sheets. They are comprised of columns and rows of cells, with data inside of them. Here is an example:
    
    <table>
        <tr>
    		<td>1</td>
    		<td>2</td>
    		<td>3</td>
    	</tr>
    	<tr>
    		<td>4</td>
    		<td>5</td>
    		<td>6</td>
    	</tr>
    	<tr>
    		<td>7</td>
    		<td>8</td>
    		<td>9</td>
    	</tr>
    </table>
    
<table>
    <tr>
		<td>1</td>
		<td>2</td>
		<td>3</td>
	</tr>
	<tr>
		<td>4</td>
		<td>5</td>
		<td>6</td>
	</tr>
	<tr>
		<td>7</td>
		<td>8</td>
		<td>9</td>
	</tr>
</table>

The entire table is wrapped in a table tags, much like how lists are list items wrapped within a list element. tr stands for table row, and is the row of a table. td stands for table data, and contain the cells for each row. Make sure that when you are creating a table, you include the same number of td's in each tr.

Here is another, more entertaining example of a table.

    <table>
        <tr>
    		<th scope="row">Movies</th>
    		<th scope="col">F*ck</th>
    		<th scope="col">The Wolf of <br>Wall Street</th>
    		<th scope="col">Summer of Sam</th>
    	</tr>
    	<tr>
    		<th scope="row">F*cks Said</th>
    		<td>857</td>
    		<td>506</td>
    		<td>435</td>
    	</tr>
    	<tr>
    		<th scope="row">Minutes</th>
    		<td>93</td>
    		<td>179</td>
    		<td>142</td>
    	</tr>
    	<tr>
    		<th scope="row">Uses/Minutes</th>
    		<td>9.21</td>
    		<td>2.83</td>
    		<td>3.06</td>
    	</tr>
    </table>
    
<table>
    <tr>
		<th scope="row">Movies</th>
		<th scope="col">F*ck</th>
		<th scope="col">The Wolf of <br>Wall Street</th>
		<th scope="col">Summer of Sam</th>
	</tr>
	<tr>
		<th scope="row">F*cks Said</th>
		<td>857</td>
		<td>506</td>
		<td>435</td>
	</tr>
	<tr>
		<th scope="row">Minutes</th>
		<td>93</td>
		<td>179</td>
		<td>142</td>
	</tr>
	<tr>
		<th scope="row">Uses/Minutes</th>
		<td>9.21</td>
		<td>2.83</td>
		<td>3.06</td>
	</tr>
</table>

In these example, we used th elements, or table headers, to label every rows and columns of the tables.

Here is an example of a larger and more complex table.

    <table border="1">
        <thead>
    		<tr>
    			<th>Movie</th>
    			<th>Year</th>
    			<th>Ticket Cost</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td>Argo</td>
    			<td>2013</td>
    			<td>13</td>
    		</tr>
    		<tr>
    			<td>The Avengers</td>
    			<td>2012</td>
    			<td>10</td>
    		</tr>
    		<tr>
    			<td>Despicable Me 2</td>
    			<td>2013</td>
    			<td>9</td>
    		</tr>
    		<tr>
    			<td>Argo</td>
    			<td>2013</td>
    			<td>13</td>
    		</tr>
    		<tr>
    			<td>The Avengers</td>
    			<td>2012</td>
    			<td>10</td>
    		</tr>
    		<tr>
    			<td>Despicable Me 2</td>
    			<td>2013</td>
    			<td>9</td>
    		</tr>
    		<tr>
    			<td>Argo</td>
    			<td>2013</td>
    			<td>13</td>
    		</tr>
    		<tr>
    			<td>The Avengers</td>
    			<td>2012</td>
    			<td>10</td>
    		</tr>
    		<tr>
    			<td>Despicable Me 2</td>
    			<td>2013</td>
    			<td>9</td>
    		</tr>
    	</tbody>
    	<tfoot>
    		<td></td>
    		<td></td>
    		<td>1140321</td>
    	</tfoot>
    </table>

<table border="1">
    <thead>
		<tr>
			<th>Movie</th>
			<th>Year</th>
			<th>Ticket Cost</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Argo</td>
			<td>2013</td>
			<td>13</td>
		</tr>
		<tr>
			<td>The Avengers</td>
			<td>2012</td>
			<td>10</td>
		</tr>
		<tr>
			<td>Despicable Me 2</td>
			<td>2013</td>
			<td>9</td>
		</tr>
		<tr>
			<td>Argo</td>
			<td>2013</td>
			<td>13</td>
		</tr>
		<tr>
			<td>The Avengers</td>
			<td>2012</td>
			<td>10</td>
		</tr>
		<tr>
			<td>Despicable Me 2</td>
			<td>2013</td>
			<td>9</td>
		</tr>
		<tr>
			<td>Argo</td>
			<td>2013</td>
			<td>13</td>
		</tr>
		<tr>
			<td>The Avengers</td>
			<td>2012</td>
			<td>10</td>
		</tr>
		<tr>
			<td>Despicable Me 2</td>
			<td>2013</td>
			<td>9</td>
		</tr>
	</tbody>
	<tfoot>
		<td></td>
		<td></td>
		<td>1140321</td>
	</tfoot>
</table>

In this example, we broke the table up into three distinct parts. The thead, or the table head contains the titles for each column. The tbody, or table body, contains the important data. The tfoot, or table footer, can contain information that sums up the data in the table's body.

### Forms
Forms can be incredibly simple from Google's search bar, to more complex, like registration forms for other websites. Forms elements are most different types of inputs, like texts, password, or multiple choice box, with the exception of elements like buttons. Like a table, the important parts of the form, like all the inputs, are wrapped within a form element.

In addition, forms have two important attributes. One is the action, which refers to the link where the action, like updating your Facebook status or tweeting a new post, takes place. The other attribute is method, which is the HTTP method that you send to the server. If this doesn't make sense to you right now, that is fine; we will talk more about this when we talk about server-side programming.

Here is a very basic example of the structure of a form:

    <form action="https://www.twitter.com/tweet" method="post">
        <p>This is where all the form controls go.</p>
    </form>
    
<form action="https://www.twitter.com/tweet" method="post">
    <p>This is where all the form controls go.</p>
</form>

### All of the Types of Inputs
Text and password inputs are used for shorter text lengths, like names or email addresses. The only different between password and text inputs are that you cannot view the characters typed into a password input.

There is also a textarea element, which is used for larger bodies of text.

Here is an example. Keep in mind that these should generally be wrapped within a form element.

    <fieldset>
    	<legend>Login Info</legend>
    	<!-- text input -->
    	<label>Name:<input type="text" name="name" size="15" maxlength="50" /></label></br>
    	<!-- password input -->
    	<label>Password:<input type="password" name="password" size="15" maxlength="50" /></label></br>
    	<!-- text area -->
    	<label>Life Story:</label></br>
    	<textarea name="lifestory" cols="20" rows="4">Please tell me your life story here...</textarea>
    </fieldset>
    
<fieldset>
    	<legend>Profile Info</legend>
		<!-- text input -->
		<label>Name:<input type="text" name="name" size="15" maxlength="50" /></label></br>
		<!-- password input -->
		<label>Password:<input type="password" name="password" size="15" maxlength="50" /></label></br>
		<!-- text area -->
		<label>Life Story:</label></br>
		<textarea name="lifestory" cols="20" rows="4">Please tell me your life story here...</textarea>
</fieldset>
    
We see that inputs are defined by their type attribute. Text inputs use "text" and password inputs use "password". You must also define a name for the input, which will set the data within that input as a variable with that name when it is sent to the server side. We'll talk more about this in the future. We also have size and maxlength attributes for each of these inputs; the size attributes define how big the field is, and the maxlength attribute determines the maximum number of characters you can type into the field.

The textarea element has rows and cols (columns) attributes, and they determine the size of the text box as seen on the screen.

These inputs can also contain placeholder text, as seen in the textarea box.

With this, I have introduced a few new elements: legend, label, and fieldset. These have semantic meaning, like the elements within a more complex table. Fieldsets contain related inputs. For example, this fieldset asks for your name, password, and life story for your profile. The legend is just a way to label your fieldset. Each label corresponds to an adjacent input.

Here are some more inputs. These are used for choosing options from a list and consist of radio buttons, checkboxes, multiple select boxes, and dropdown menus.

Here is an example of all four of these types:

    <fieldset>
    	<legend>Personal Questions</legend>
    	<!-- radio buttons -->
    	What is your species?<br>
    	<input id="human" type="radio" name="species" value="human" /><label for="human">Human</label><br>
    	<input id="radio" type="radio" name="species" value="robot" /><label for="robot">Robot</label><br>
    	<input id="doge" type="radio" name="species" value="doge" checked="checked"/><label for="doge">Hi, this is doge</label><br>
    	<br>
    	<!-- checkboxes -->
    	What is your drink of choice?<br>
    	<input id="coffee" type="checkbox" name="drink" value="coffee" /><label for="coffee">Coffee</label><br>
    	<input id="tea" type="checkbox" name="drink" value="tea" /><label for="tea">Tea</label><br>
    	<input id="water" type="checkbox" name="drink" value="water" /><label for="water">Water</label><br>
    	<input id="beer" type="checkbox" name="drink" value="beer" check="checked" /><label for="beer">Beer</label><br>
    	<br>
    	<!-- multiple select box -->
    	Where do you go grocery shopping?<br>
    	<select name="store" size="2" multiple="multiple">
    		<option value="wegmans" selected>Wegmans</option>
    		<option value="walmart">Walmart</option>
    		<option value="olums">Olums</option>
    		<option value="priceChoppers">Price Choppers</option>
    		<option value="familyDollar">Family Dollar</option>
    	</select><br>
    	<br>
    	<!-- dropdown menu -->
    	Which is your favorite store?<br>
    	<select name="store">
    		<option value="wegmans" selected="selected">Wegmans</option>
    		<option value="walmart">Walmart</option>
    		<option value="olums">Olums</option>
    		<option value="priceChoppers">Price Choppers</option>
    		<option value="familyDollar">Family Dollar</option>
    	</select><br>
    	<br>
    </fieldset>
    
<fieldset>
    <legend>Personal Questions</legend>
	<!-- radio buttons -->
	What is your species?<br>
	<input id="human" type="radio" name="species" value="human" /><label for="human">Human</label><br>
	<input id="radio" type="radio" name="species" value="robot" /><label for="robot">Robot</label><br>
	<input id="doge" type="radio" name="species" value="doge" checked="checked"/><label for="doge">Hi, this is doge</label><br>
	<br>

	<!-- checkboxes -->
	What is your drink of choice?<br>
	<input id="coffee" type="checkbox" name="drink" value="coffee" /><label for="coffee">Coffee</label><br>
	<input id="tea" type="checkbox" name="drink" value="tea" /><label for="tea">Tea</label><br>
	<input id="water" type="checkbox" name="drink" value="water" /><label for="water">Water</label><br>
	<input id="beer" type="checkbox" name="drink" value="beer" check="checked" /><label for="beer">Beer</label><br>
	<br>
	<!-- multiple select box -->
	Where do you go grocery shopping?<br>
	<select name="store" size="2" multiple="multiple">
		<option value="wegmans" selected>Wegmans</option>
		<option value="walmart">Walmart</option>
		<option value="olums">Olums</option>
		<option value="priceChoppers">Price Choppers</option>
		<option value="familyDollar">Family Dollar</option>
	</select><br>
	<br>
	<!-- dropdown menu -->
	Which is your favorite store?<br>
	<select name="store">
		<option value="wegmans" selected="selected">Wegmans</option>
		<option value="walmart">Walmart</option>
		<option value="olums">Olums</option>
		<option value="priceChoppers">Price Choppers</option>
		<option value="familyDollar">Family Dollar</option>
	</select><br>
	<br>
</fieldset>

The first type of inputs are radio buttons. Within each fieldset, you are only allowed to choose one of these.

The next inputs are checkboxes; within each fieldset, you can pick multiple options.

Each of the first two inputs contains name and value attributes. They contain information that will be sent to the server.

The third type of input is the multiple select box. They are wrapped in a select element, with the attribute multiple="multiple". The select element contains option elements, which are choices within the box. You are allowed to pick more than one option from this. Each option has a value which is sent to the server.

The last type of input is a dropdown menu. It is like the multiple select box, but you cannot choose more than one option.

Then there are submit buttons!
There are file upload buttons and submit buttons. There are also hidden forms.


### Video and Music
We will not discuss this in total detail, since most music or video hosting websites contain an embed URL.
