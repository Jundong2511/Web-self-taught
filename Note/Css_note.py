<link href="https://fonts.googleapis.con.css?family=Lobster" rel="stylesheet" type="text/css"> # import font
---------------------------------------------
<style>
    """
    when wrap by @media, this style will come true only the sutiation in () happen
    in this case, if the user's browser smaller than 350px, it will change picture size to 200px,
    and skin color to black
    """
    @media (max-width: 350px) {
    :root {
    --penguin-size: 200px;
    --penguin-skin: black;
    }
  }
---------------------------------------------
    .penguin {
    --penguin-skin: gray;  # set a veriable here, change one time can make serveral change under
    --penguin-belly: yellow;
    --penguin-beak: orange;
    # "--var" is a kind of make a variable, and use#header-img {
        width: 10vw;
        height: 10vw;
     it in multiple places.

    background: var(--penguin-skin, blue); # if add a color to this, means fallback, like if the gary
                                           # not working, make it blue
    background: white;# this is fall back for var(--penguin-beak), if var not working,
                      # will set background to white.
    background: var(--penguin-beak);

    background: var(--penguin-belly);
    """
        in any style class or id, can set e.g.
        --penguin-belly: white;
        to overrides --penguin-belly var to white
    """
---------------------------------------------

    # style a class use .
  .red-text {

    color: red !important; # !important overrides everything.

    background-color: silver;
    background-color: transparent; # transparent means clear
    background-color: #00FF00 # color starts with # and with 6 numbers, it means hex number of a color
    background-color: #0F0 # if two numbers are same, it can be shorten by one, #0F0 is same as #00FF00
    background-color: rgb(255, 165, 0) # rgb color is mix Red, Green, Blue color from 0 to 256 to get any color
    background-color: rgba(45, 45, 45, 0.1);
    """
    rgba stands for
    red, green, blue and alpha/level of opactiy (0 to 1, 1 is solid, 0 is clear.)
    """

    background-color: hsl(120, 100%, 50%);
    """
    hsl(120, 100%, 50%) means green
    h: hue, range 0 to 360, 0 is red, 60 is yellow, 120 is green, 240 is blue, magenta is 300.
    s: saturation, basiclly a gray number. range 0% to 100%, 100% means no gray, 0% means all gray.
    l: lightness, a light number, range 0% to 100%, 0% means black, 100% means bright, 50% is normal.
    """

    background: linear-gradient(**deg, color1, color2, color3...)
    """
    linear-gradient is for color transition, **deg for the degree, then starts from first color, end at last color.
    """
    background: repeating-linear-gradient(**deg, color1 **px, color2 **px...)
    """
    repeating-linear-gradient is for repeat color transition, color only shows at the **px position,
    then starts transform into next position.
    but if the color next to each other are same, it ganna show a color line, not a transition.
    e.g. 45deg, yellow 0px, yellow 0px, black 0px, black 0px;
    """
    background: url(https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png); # background can use url().

---------------------------------------------

 any{
    transform: scale(2); # make any box 2 times big.
 }

---------------------------------------------
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
    """
    box-shadow means make a shadow but always under the main object, can take upto 8 values,
    h-offset: Required, how much push the shadow horizontal way, positive number push to right. negative to left.
    y-offset: Required, how much push the shadow vertical way, positivenumber push up, negative to down.
    blur: optional, blur radius. higher number, more blurred shadow.
    spread: optional, spread radius, positive value increases the size of shadow, negative decreases.
    color: optional. default value is text color. NOTE: in Safari(on PC) this parameter is required. no color no shadow.
    inset: optional, change the shadow from outer shadow (outset) to an inner shadow.
    initial: set to default value.
    inherit: inherits from parent element.
    """

    opacity: 0.7; # opacity is for how much can see though,range in 0 to 1, 1 is no, 0 is all
---------------------------------------------

    padding-top: 40px;  # padding and margin can be different
    padding-left: 40px;
    padding-bottom: 20px;
    padding-right: 20px;

    padding: 1.5em  # em: size of element's font, mm: millimeters, in: inches.
    padding: 1.5in
    padding: 1.5mm

    width: 245px; # certain size
    height: 25px

    # picture size change
    max-width: 100%;  # this kind width and height set ganna make sure the picture always
    height: auto;     # in the container and change size when user's window change size
or  width: auto;
    height: 30%;


    margin-top: 40px;
    margin-right: 40px;
    margin-right: 20px;
    margin-bottom: 20px
    margin: auto; # set on center.

    padding: 40px 20px 20px 40px; # or can set as clockwise up, right, bottom, left
    margin: 40px 20px 20px 40px;


    text-align: justify; # make all lines except the last line fit the screen.
    text-align: center;
    text-align: right;
    text-align: left; # this is the default.


    text-transform:
    """
        lowercase: lowercase
        uppercase: UPPERCASE
        capitalize: Capitalize
        initial: use default value
        inherit: uer the text-transform value from the parent element
        none: Defalt, use the originaltext
    """

---------------------------------------------

      # will cause overlap
      position: relative;
      position: absolute; # absolute make the box stick with page
      position: fixed; # fixed make the box stick with user's window
      position: sticky;

      # z-index for fix overlap
      z-index: 2, # must be a integer, higher number get most top.

      float: left/right;
      width: 50%;

      top: 15px; # top means move away from top, same as left, right, bottom
      left: 10px;
      right: 20px;
      bottom: 10px;

---------------------------------------------


    # style a attribute user [attr=value]
    [type="checkbox"]{
  margin-top: 10px;
  margin-bottom: 15px;
}


---------------------------------------------
    # style <p> user only p
  p {
    font-size: 16px;
    font-weight: 800; # how thick or thin the characters are in section of text
    line-height: 25px;

    font-family: "Lobster";# use imported font
    font-family: "Lobster", monospace # font degrades, if lobster not avialble at user's browser, user monospace
}
---------------------------------------------

    any:hover { # hover means when user put mouse on top of any, excute this style.
    color: blue;
    transform: scale(2);
    transform: skewX(34deg); # make box skew along X axis
    transform: skewY(34deg); # Y
 }


---------------------------------------------
    # resize a pic  this class should be add into <img>
    # e.g. <img class="smaller-image" ...>
  .smaller-image{
    width: 100px;
  }



---------------------------------------------
  # add boarder around element.
  # if one element has more than one class, should write like
  # e.g. <img class="smaller-image thick-green-border" ...>

  .thick-green-border{
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 10px; # round corner, can be percentage too,like 50%, this round shadow too.
  }


---------------------------------------------
"""
::before and ::after
user to add something before or aftr selected element.
e.g. this will make a heart shape. even only make shape, it still need content, can be an empty string "".
"""
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
    z-index:2
  }
</style>


---------------------------------------------
  # id should be unique
  # e.g <form id="cat-photo-form"...>
  #cat-photo-form{
     background-color: green;
   }
</style>

"""
content : main thing in your box, could be a picture or some words.
Padding : space between self's content and its border.
Margin : space between self's border and surrounding elements.
border : most outside line of self's box, margin is not belong to the box, it's a room between self and other.
        border is between padding and margin.

"""


---------------------------------------------

    # if a tag has two same kind class that trying to make simlier change to that tag
    r.g.
    <style>

    .pink-text {
    color: pink;
  }

  .blue-text {
    color: blue;   # this wins.
  }
  </style>
  <h1 class="pink-text blue-text">Hello World!</h1>

  then the bottom class in <style> wins, and the order of class in <h1> tag doesn't matter.

---------------------------------------------


# inlinestyle > id > class > p > div > body,  more detail, bigger.


---------------------------------------------


# <strong(bold)>  <u(underline)>  <em(italic)>  <s(line-through)>  <hr(a line across width )>tag e.g.
<h4><s>Google</s>Alphabet</h4>
<hr>
<p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
---------------------------------------------

"""
@keyframes and animation
animation-name
animation-duration
animation-fill-mode: forwards  # this ganna keep 100% sutiation.
animation-iteration-count: infinite;  # this ganna make the animation keep going.
animation-timing-function: { # animation speed, all finish animation in animation
                                duration time, but speed different.
    linear: same speed
    ease: starts slow, then fast, then slow
    ease-in: starts slow, fast end
    ease-out: starts fast, slow end
    cubic-bezier(0.311, 0.411, 0.444, 1.649):
        cubic-bezier need 4 x,y location, (p1, p2, p3, p4), p1 and p4 is preset, it's (0,0) and (1,1)
        so it only need 2 middle location which is (0.311, 0.411) and (0,444, 1.649) above.
        if the y > 1, means ainimation ganna move over the end point.
    !!!! need findout
}


animation-name for name a animation, and animation-duration is for set the time of animation
@keyframes for define the animation what ganna happen to it
percentage 0% is begining of the animation, 100% is at the end, not has to start at 0% and finish at 100%.
e.g. this ganna show a picture start from blue turns green then turns yellow in 4s.

anything{
    animation-name: rainbow;
    animation-duration: 4s;
    animation-fill-mode: forwards
}
@keyframes rainbow {
    0% {
    background-color: blue;
    top: 0 px;
    left: 50px;             # also can set position if the element has position.
    opacity: 0.1;           # can set opacity too.
    }
    50% {background-color: green;}
    100% {backguangrou-color: yellow;}
}
"""

---------------------------------------------

# for something wanna show screen reader user only, can just move the box outside of screen
 anytag {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }
  """""
 # NOTE:

    function change(){
      const number=Math.floor(Math.random()*4)
      document.getElementById('text').innerHTML=textArr[number];
       document.getElementById('author').innerHTML=authorArr[number];
    };
    window.onload=change() : None or Visibility: hidden, hides content for everyone, including screen reader users
 zero values for pixel sizs, such as wodth: 0px; height: 0px; will remove that element from the flow of your document, means screen readers will ignore it too.
  """
---------------------------------------------
"""
when set font color, make sure use high contrast color, at least 4.5:1 contrast ratio for normal text, the number calculated by relative luminance values, 1:1 is same color, 21:1 is white to black.
for who use a screen reader to read the web, something like "click here","press this", is not good for them, try descript things into detail like "link for story detail".
"""
---------------------------------------------

# @media is a while loop to me, while "situation1", then "any css here" happen to "anytag"
@media (situiation1) {
    anytag {
    any css here
    }
}
@media (max-height:800px) {    #e.g.
    p {
      font-size: 10px;
    }
  }

---------------------------------------------
"""
em: size of element's font
mm: millimeters
in: inches
v: viewport, which is user's browser window
vw: viewport width
vh: viewport height
vmin: viewport minimum
vmax: viewport maximum
"""

anytag {
    width: 75vw;
    height: 80vmin;
}

---------------------------------------------
"""
display: flex : if this element can be show in one line, show in one line

flex-direction:
    row-reverse; : make the elements in this tag row-reverse dispaly.
    column-reverse : make the elements in this tag column-reverse display.
    row : make the elements in this tag row display.
    column : make the elements in this tag column display.

justify-content : how the content shows in the box with empty space
                ### follow the X axis when it's a row, Y when column
    center: center
    flex-start: push items to the left or top
    flex-end: push items to the right or bottom
    space-between: put space in center, items on the side
    space-around: space aournd each item (space:item1:space:space:item2:space)
    space-evenly: space evenly around each item (space:item1:space:item2:space)

align-items: where is the text's location and how box fit it.
            ### follow the Y axis when it's a row, X when column
    flex-start: to left or top.
    flex-end: to right or bottom.
    center: to center.
    stretch: default value if not set. stretch all the room.
    baseline: sit text on the same line, box follow text line

align-self: can override align-items, individualy.
    flex-start: to left or top.
    flex-end: to right or bottom.
    center: to center.
    stretch: default value if not set. stretch all the room.
    baseline: sit text on the same line, box follow text line

flex-wrap: if too much thing on one line, split into miltiple lines.
    nowrap: default value, set everything on one line.
    wrap: wraps items from left to right, or top to bottom.
    wrap-reverse: right to left or bottom to top.

flex-shrink:
    set value is number, in the same container, if box 1 has flex-shrink value 2, and box 2 has flex-shrink value 1, then box 2 ganna be twice bigger than box 1.
    bigger number, smaller item.

flex-grow:
    opposite of flex-shrink. bigger number, bigger item.

flex-basis:
    set box initial size before flex-shrink or flex-grow.

felx: can set 3 above parameter together.
    follow by order: flex-grow flex-shrink flex-basis with no comma.
    e.g. felx: 1 1 150px;

order: the order that items appear. 1 is first, 2 is second.

"""
anytag {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}


---------------------------------------------


.container {
    display: grid;                                  # make container show as a grid
    grid-template-columns: 100px 100px 100px        # make 3 columns, each has 100px width
    grid-template-columns: 50px 50px                # make 2 rows, each has 50px tall
or  grid-template-columns: auto 50px 10% 2fr 1fr
                        #  auto means box fit with the content inside of it
                        #  10% means 10% of total box room
                        #  fr means 2 parts of all avialble room
                        #  in this case: fr = (all_room - auto - 50px - 10%(all_room)) / (2 + 1)
    grid-template-rows: repeat(100, 50px);  # make 100 columns with 50px width each.
    grid-template-columns: repeat(2, 1fr 50px) 20px; # equal to 1fr 50px 1fr 50 px 20 px.
    grid-template-columns: repeat(3, minmax(90px, 1fr));  # make 3 columns with minimum 90px, maximum 1fr wide.
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));  # auto-filll wil automatically controls howmany cells
                                                                  # on each line while user changing the window.
    grit-template-columns: repeat(auto-fit, minmax(90px, 1fr));  # same as auto-fill
                                                                 # but not ganna leave empty space in the first line.

    grid-column-gap: 10px;      # make 10px gaps between the columns.
    grid-row-gap: 5px;          # make 5px gaps between the rows.
    grid-gap: 10px 20px;        # make 10px row gap and 20px column gap.
    ## for columns and rows, there's 4 columns with 3 boxes and 4 rows with 3 boxes. | _ | _ | _ |
    grid-column: 2 / 4;         # make box fill between column 2 to 4
    grid-row: 2 / 4;            # make box fill between row 2 to 4

    justify-self: # make the box fit the content and set the location horizontally
        start: to beginning
        center: center
        end: end
    align-self:  # make the box fir the content and set the location vertically
        start: top
        center: center
        end: bottom
    justify-items:  # move all items
    align-items: # move all items

    grid-template-area:   # . for a empty cell  "inside is one row", every "" is a new row.
        "header header header"
        "advert content content"
        "footer footer footer";
        # after setup the name of cell, later can location the cells by name.
    grid-area: footer;
    grid-area: header;
    grid-area: advert;

or  grid-area: 1/3/2/4;  # this can be use whitout setting grid-template-area,
                         # 1/3/2/4: h line starts at line 1, finish at line 2, v line starts at line 3, finish at line 4.
}
