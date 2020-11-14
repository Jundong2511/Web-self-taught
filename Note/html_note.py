"""
alt= in a img anchor tag shows a content whenever the img can not show.
e.g.
<img src="dingKarateWow.jpeg" alt="Camper Cat is doing karate">
when the img can not show, it should show "Camper Cat is doing karate

add a empty string to alt ganna replace the broken img pic but not showing anything.
"""
-----------------------------------------------------------------------
"""
<h1> tag for search engines to understand the topic of the page,
one page should have and only have one <h1> tag.
and so do <main>, on eand only one.
<div>: groups content
<section>: groups related content
<article>: groups independent, self-contained content
<head>: the web title, meta information
<header>: inside the <body>
<nav>: the links in this tag will lead to some place of your page.
<footer>: at bottom, has a butil-in landmark to let assistive device quickly navigate
         also used to contain copyright information.
<audio controls>: ganna show a mp3 player with contorller on the webpage, need <source>
<figure>?
<figcaption>?
<label for="**">?
<fieldset>: set the block in side this tag into a container
<legend>: could use for description
<input type="date">: show a form that user can pick or type date.
<time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time> :???
<anytag accesskey="*"> ? can get in with keyboard press*?
<anytag tabindex="0"> ?
-----------------------------------------------------------------------
<form action="url"><input type="text" placeholder="string here" required><form>
# this create a 'form' that take 'action' which take the 'input' then send to 'url'
# placeholder is what user see fist in the form.
# required means input is required.
<a href="url">place holder</a> # user see placeholder not the link.
<img src="url"> # img is self closing.
<button type="submit">placeholder</button> # submit button.

# radio button, can only select one option, 'for=' need equal to 'id='
<label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor">indoor</label>
<label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor">outdoor</label>

# checkbox button, can select multiple items. 'for=' need equal to 'id='
<label for="chicken"><input id="chicken" type="checkbox" name="personality"> chicken</label><br>
<label for="beef"><input id="beef" type="checkbox" name="personality"> beef</label><br>
<label for="pork"><input id="pork" type="checkbox" name="personality"> pork</label><br>

# save the value to database need add a value= in <input>, value should be lowercase, equal to input
<label for="loving"><input value="loving" id="loving" type="checkbox" name="personality"> Loving</label>

# add checked to <input>, pre select item for user
<label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>

# for comment use
<textarea></textarea>

# dropdown with options
<select id="dropdown" type="dropdown" >
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="none">Don't ask</option>
</select>

#   insert a video
 <video id="video" src="https://youtu.be/FqnKB22pOC0" autoplay poster="https://upload.wikimedia.org/wikipedia/commons/5/55/Overwatch_circle_logo.svg">Overwatch Trailer</video>


 <form id="form" action=" https://www.freecodecamp.com/email-submit" method="post"> # submit to this url
    <label for="email">email</label> # label at front of input
    <input id="email" type="email" placeholder="email" name="email"> # for == name
    <input id="submit" type="submit" value="Submit"></input> # value is what user see on the button, submit is a input, not a button.
</form>

# insert a video from youtube to html, right click video, copy the code.
<iframe width="480" height="360" src="https://www.youtube.com/embed/FqnKB22pOC0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Overwatch Trailer</iframe>


<code>???
