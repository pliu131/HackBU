Be sure to have students ask questions!

# Creating Static Websites with FTP/SFTP
http://skillcrush.com/2012/07/18/ftp-sftp-2/

# WYSIWYG
	Word processors.

# API
	Application Programming Interface
	It is a way for computers as will as other applications to share information with each other. For example, if you upload a picture on Instagram, you can also post it to Facebook and Twitter. That is because Instagram is using Facebook and Twitter's APIs. That way you don't have to go to each of these sites individually to post photos of your exotic food.

# Command Line
	Way of browsing and interacting with your computer using text. What you see now is a GUI (graphical user interface) to do things like delete, rename, move, create files, but you can do the same thing in the command line. 
# Version Control
# Grid Systems
# Rails
	Awesome framework for building web applications. Web applications let you do things like buy stuff, search, upload pictures, blog, etc. Rails makes it easy.
# Cookies 
	Tracking devices downloaded automatically when visiting a website. Used to remember infromation about the user, like if you want to stay logged in as a user or if you want a store to remember what items are in your cart. Usually just want to know what you are doing on their website. Also used for advertisement, by websites THAT YOU DON'T PAY FOR. So don't complain.

	Origin story about cookies.
# Error Codes
	HTTP Response Status Codes, tell you what happened when you requested a web page. Kind of like when you call a phone number and they have an automated message that says "this number has been disconnected" or "Stacy doesn't want to talk to you, stop calling". 
	1xx - Informational

	2xx - Success!
		200 OK!
	3xx - Redirect
		301 - Moved permanently, like that girl you seriously creeped out
	4xx - Client Errors
	  400 - Bad request. Don't ask for weird things like asdkjsalds.
		403 - You aren't allowed here
		404 - Not found
	5xx - Server Issues
		500 Internal Server Error

	Developers are funny. 
	418 I'm a Teapot - 1998 April Fools Joke, as part of the Hyper Text Coffee Pot Control Protocol. Status codes for your teapot!
	http://joereddington.com/projects/418-error-code-teapot/

# Responsive Design
	Designing a web page to be easily viewed on multiple screen sizes. Relies on CSS3 media queries, which basically means that the web browser knows how big the screen is and will adjust accordingly. For examples, instead of seeing three columns on your screen, your phone will align them vertically for viewability.
	Foundation and Bootstrap are two frameworks that are responsive. Really hard to create a responsive framework! Also open source. I think?
	
# SEO
	http://skillcrush.com/2012/10/29/seo-2/
	Search Engine Optimization: ways of making your website appear at the top of the searches. So if I type in Peter Liu, I won't find the dozens of doctors, but I would find me.
# Pseudo Code

# The Cloud
	The internet. Seriously. It's just some clever marketing.

# CMS
	Content Management System. Think Tumblr, Blogger, Wordpress, etc. Lets you easily publish content on the web.

# HTTPS (illustrations for code)
	Hypertext Transfer Protocal (Secure) vs the unsecure version. Usually used for transactions to keep it secure. With regular HTTP, people can intercept information, like searching products on an e-commerce website. Not safe for credit card info! Works by:
	1) Web server verifies its identity using an SSL certificate, which is like an ID card for a web server. Web browser compares SSL certificate with list of SSL certificates it trusts and only shares info if it matches.
	2) Web browser and web server agree on a secret code that they will use to encrypt all your HTTPS transmissions. Protects you from hackers! Can't listen in on your HTTPS communications.
	Check out HTTPS Everywhere.

# Open Source
	Best part of being a developer! It is the practice of sharing how a computer program was made and allowing anyone to customize the program as they see fit. For example, Ruby on Rails is open source. So is mostly everything on github. You have a version of the program as well as the source code, and you can fix it if you find a problem.
	For example, Photoshop is a closed-source project, because it isn't something you can tinker with, or make changes to, or add changes to.
	However, WordPress and Mozilla are (open source and not-for-profit). They rely on a community of people who work on software out of the good of their hearts and the desire to contribute to a meaningful product.
	GitHub is a huge platform that combines open source and social networking. Developers put source code and other developers in the community copy it (fork it), make changes, and submit them to the original creator to see if they want to use those changes. 
# Ajax 
http://skillcrush.com/2012/09/11/ajax-2/

# Domain and DNS
http://skillcrush.com/2012/11/01/domain-2/
If your website is like an address, the DNS (Domain Name Server) is like a phonebook for the internet. You won't remember an IP address (like how most of us don't remember our own phone numbers), but instead use a domain name like google.com. They are just a bunch of servers that keep record of domain names and IP address all over the internet. For example, if you want to visit Facebook, you could visit 223.172.190.38 or you could visit its domain name at facebook.com. It will talk to the computer at 223.172.190.38 and ask for that web page.
# Full Stack
	Technologies need to create your web product.

# IP Address
	Is an address/phone number for your computer. Consists of four sets of octets (256 numbers, from 0-255). It's the way that your computer knows what computer to ask for information from.
	Since the internet and the number of devices are growing, we need a new version of IP address, now IPv6 (vs current IPv4).
	2001:cdba:0000:0000:0000:0000:3257:9652
	IPv4: 4,294,967,296
	IPv6: 340,282,366,920,938,463,463,374,607,431,768,211,456

# Bugs
	Problems or errors in software or computer hardware. When it fails to do what it was supposed to do.
	Fun fact: Referring to problems as 'bugs' dates back to Thomas Edison in the 1870's, and was popularized in the 40's. One of the early computers, the Mark II, was acting up and it was because a moth went into a relay.

# Web Server
	Web servers are computers that can be accessed through the internet. Photo of what servers look like. They are a computer without a monitor or a keyboard or mouse, and it's about the size of a laptop. It communicates through the internet. 

	Process! When you go to a website, Google.com
	1) Browser sends out a request for the web page
	2) Web server receives request and puts together the right parts
	3) Web server sends back a web page
	Like ordering take-out.
	Almost any computer can be used as a web server, as long as you have the right software installed that will listen in for step 2. Even Raspberry Pi (hack for a media server). Typical web server is different, as mentioned above.

# Ruby
	Ruby was created in 1995 in Japan by Yukihiro Matsumoto (MATZ!), who felt that programming languages were too focused on machines and not very human friendly. For example, C.
	Let's say you wanted to say "ho" three.
	In many programming languages, you'd have to do this:
		for ($i = 0; $i < 3; $i++) {
			echo "ho";
		}
	In Ruby!
		3.times do
			print "ho";
		end

	Ultimately became very popular with Ruby on Rails in 2005, a framework that made it easier to create web applications. 
	Twitter and Hulu both used Ruby on Rails, although Twitter had issues with scaling (because it's Twitter), and switched over to Java.


# Frontend/Backend
	Frontend is everything you see, which includes HTML/CSS/JavaScript. The backend is what makes a web application happen. A typical setup is an application, a web server, and a database. For example, when you are a booking a flight, you need to check prices, book itineraries, and charge credit cards. All that happens on the backend. A web server sends a note to the application that you want to see all the flight to Chicago. The application looks up the flights in the DB and puts together a web page that lists them. Sends that web page through the server.

	Database stores your info. Could be MySQL, MongoDB, PostgreSQL. Server side languages could be Python, Ruby, PHP, or interestingly enough now, Javascript.

	This is not very different from client-side and server-side. Just a different in semantics. Front-end vs back-end describe WHAT the action is while server-side vs client-side describe WHERE the action is. 

# Javascript
	Javascript and a programming language that makes websites interactive. One of the very few programming languages that work in your browser. Once a toy, but now very serious. Used for node.js for server side, and even for full-stack (MeteorJS).
	Examples of great Javascript:
		Google's autocomplete
		Google spreadsheet
		Chrome Racer
		Slide shows
		Annoying ads
		Facebook and Twitter updates

# Programming
	We use programming languages to tell our computers what to do. Computers talk to each other in binary, which looks like this:
	00110010010101010100001111
	We don't understand this, just like if we went to Russia and had to try to understand what they were saying. 
	We write our instructions in programming language (there are a ton of those...), which just looks like weird English. Then a compiler or an interpreter (like in real life) converts our instructions/code into binary, something our computer can understand. 

	For anyone who has taken a programming class, the first thing that you need to do is make your program say "Hello World!"

	C++
	#include <iostream>
	using namespace std;
	int main ()
	{
		cout << "Hello World!";
		return 0;
	}

	PHP
	echo "Hello World!"

	Ruby
	puts "Hello World!"

	Java
	class helloworld {
		public static void main(String[] args) {
			System.out.println("Hello World!");
		}
	}

# Databases
	Think of a spreadsheet. Have a picture of SQL database.
	Because it isn't a spreadsheet, you need to use a language to CRUD data. Most popular is SQL (Structured Query Language).
	For example, you wanted a list of names from the user database of the users over 25 years old:
		SELECT name FROM users WHERE age > 25;
		These are called SQL queries.

# CSS
	Also written in text, and add .css to end.
	HTML tells the browser what the structure and different parts of the page are. CSS is what makes websites pretty and adds style to them. You can control the color, font styles, size, etc.
	Include flash from the 2000s.
	If you wanted to change the font and color of a paragraph:
		p {
			font-family: 'Helvetica'; 
			background-color: red;
		}

# HTML
	Written in text file, but add .html.
	When you visit a website, there are clear distinctions between parts of the website, like headlines and paragraphs. Each item has its own HTML tag, which look like this.
	<h1>This is a header.</h1>
	<p>This is a paragraph.</p>
	Types of Media:
	Paragraphs, audio, video, lists, articles, images, emphasis, button. Must use specific HTML tags.
	HTML5 - more semantic markup
	Link to HTML5 layout.