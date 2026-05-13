### Setting up a specific cursor for an element:
Uisng html:  
```html
<span style="cursor: pointer;">All in the name of love</button>
```
Using css: 
```css
span{
    cursor: pointer;
}
```
The available cursor options include:   
`crosshair, default, e-resize, help, move, n-resize, ne-resize, nw-resize, pointer, progress, s-resize, se-resize, sw-resize, text, w-resize, wait`  
# Grid 
An element becomes a grid when its display is set to either `grid` or `inline-grid`.  
Grid allows us to design complex web pages without having to deal with `float` or positioning.    
#### Grid vs Flexbox
CSS Grid is used for two-dimensional layout, with rows AND columns.  
CSS Flexbox is used for one-dimensional layout, with rows OR columns.  
The amount of columns is dependent of how many templates you decide to generate:
```css
#container-div{
    border: 0.1rem solid red;
    display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 5px;
}
```
For our case, we will have 3 columns  
## All CSS Grid Properties
- `align-content` Vertically aligns the whole grid inside the container(when the total grid size is smaller than container).  
- `align-items` Specifies the default alignment for items inside a flexbox or grid container.  
- `align-self` aligns the content for a special grid item along the column axis.  
- `display` Specifies the display behavior (the type of rendering box) of an element.  
- `column-gap` Specifies the gap between the columns.  
- `gap` a Shorthand property for the **column-gap** and **row-gap** properties.  
- `grid` a Shorthand property for the **grid-template-rows**, **grid-template-columns**, **grid-template-areas**, **grid-auto-rows**, **grid-auto-colums**and the **grid-auto-flow** property.  
- `grid-area` Either specifies a name for the grid item, or this property is a shorthand property for the **grid-row-start**, **grid-column-start**, **grid-row-end**, **grid-colum-end**.   
- `grid-auto-columns` Specifies default column size.  
- `grid-auto-flow` Specifies how auto-placed items are inserted inside the grid.  
- `grid-auto-rows` Specifies a default row size.  
- `grid-column` A shorthand property for the **grid-column-start**and **grid-column-end** properties.  
- `grid-column-end` Specifies where to end the grid item.  
- `grid-column-start` Specifies where to start the grid item.  
- `grid-row` A shorthand property for the **grid-row-start** and **grid-row-end** property.  
- `grid-row-start` Specifies where to  start the grid item.  
- `grid-row-end` Specifies where to end the grid item.    
- `grid-template` A shorthand property for the **grid-template-rows**, **grid-template-columns** and **grid-areas** properties.  
- `grid-template-columns` Specifies the size of the columns, and how many columns in a grid layout.  
- `grid-template-areas` Specifies how to display columns and rows, using named grid items.  
- `grid-template-rows` Specifies the size of the rows, and how many rows in a grid layout.  
- `justify-content` Horizontally aligns the whole grid inside the container (when total size of the grid is smaller than the container).  
- `justify-self` Aligns the content for a specific grid item along the row axis.  
- `place-self` A shorthand property for the **align-self** and the **justify-self** properties.  
- `place-content` A shorthand property for the **align-content** and the **justify-content** properties.  
- `row-gap` Specifies the gap between the grid rows.  
#### fr
Stands for "fraction".  
1 fr takes a fraction of the available space, 2 fr two all depending on the amount of columns you have and the fr allocations.  
#### grid-areas & grid-template-areas
For them to work, the element must take up a `grid-area` name which will be used to specify the layout of the grid using the `grid-template-area` while the `unnamed` elements wil be referenced with a `.`  
```css
span{
    cursor: e-resize;
    grid-area: myArea;
}
#container-div{
    border: 0.1rem solid red;
    display: grid;
    grid-template-areas: 
    "myArea myArea . . .";
    row-gap: 5px;
}
```
### All CSS Item Properties.  
- `align-self` Aligns the content for a specific grid item along the column axis
- `grid-area` A shorthand property for the grid-row-start, grid-column-start, grid-row-end and the grid-column-end properties
- `grid-column` A shorthand property for the grid-column-start and the grid-column-end properties
- `grid-column-end` Specifies where to end the grid item
- `grid-column-start` Specifies where to start the grid item
- `grid-row` A shorthand property for the grid-row-start and the grid-row-end properties
- `grid-row-end` Specifies where to end the grid item
- `grid-row-start` Specifies where to start the grid item
- `justify-self` Aligns the content for a specific grid item along the row axis
- `place-self` A shorthand property for the align-self and the justify-self properties

# All CSS Flex Container Properties
- `display` - Must be set to `flex` or `inline-flex`
- `flex-direction` - Sets the display-direction of flex items : `row(default) | column | row-reverse | column-reverse`
- `flex-wrap` - Specifies whether the flex items should wrap or not: `nowrap(default) | wrap | wrap-reverse`
- `flex-flow` - Shorthand property for `flex-direction` and `flex-wrap`.
- `justify-content` - Aligns the flex items when they do not use all available space on the main-axis (horizontally): `center | flex-start(default) | flex-end | space-around | space-between | space-evenly`
- `align-items` - Aligns the flex items when they do not use all available space on the cross-axis (vertically): `normal | stretch | center | flex-start | flex-end | baseline`
- `align-content` - Aligns the flex lines when there is extra space in the cross axis and flex items wrap: `stretch(default) | center | flex-start | flex-end | space-between | space-around | space-evenly`
## All CSS Flex Item Properties
- `order` - Specifies the display order of the flex items inside the flex container: `number`
- `flex-grow` - Specifies how much a flex item will grow relative to the rest of the flex items: `number(default - 0)`
- `flex-shrink` - Specifies how much a flex item will shrink relative to the rest of the flex items: `number(default: 1)`
- `flex-basis` - Specifies the initial length of a flex item: `(length measurements)`
- `flex` - Shorthand property for **flex-grow**, **flex-shrink**, and **flex-basis**.
- `align-self` - Specifies the alignment for the flex item inside the flex container. `overrides align-items(thus similar values).`
# Border-radius
`border-radius` is actually a shorthand for `border-top-left-radius`, `border-top-right-radius`, `border-bottom-right-radius` and `border-bottom-left-radius`.   
To form an elliptical shape, you must specify two values for each radius, separated by a slash.  
The first value defines the horizontal radius and the second value vertical radius.  
To create an oval shape(for a rectangle element) or to create a circular element(for a square element) set the `border-radius to 50%`.
```css
/*Elliptical*/
#div1 {
  border-radius: 70px / 30px;
  background: #04AA6D;
  width: 200px;
  height: 150px; 
}
/*Elliptical*/

#div2 {
    border-radius: 15px / 50px;
  background: #04AA6D;
  width: 200px;
  height: 150px; 
}
/*Oval*/
#div3 {
  border-radius: 50%;
  background: #04AA6D;
  width: 200px;
  height: 150px;
} 

/*Circular*/
#div4 {
  border-radius: 50%;
  background: #04AA6D;
  width: 200px;
  height: 200px;
} 
```
# Background property
- `background`	A shorthand property for setting all the background properties in one declaration
- `background-clip`	Specifies the painting area of the background: `border-box(default - the background extends behind the border) | padding-box(background extends to the inside of the edge of the border) | content-box(background extends to the edge of the content box)`
- `background-image`	Specifies one or more background images for an element
- `background-origin`	Specifies where the background image(s) is/are positioned: `padding-box(default - starts from the top left corner of the padding edge) | border-box(from the top left corner of border edge) | content-box(from the top left corner of the content edge)`(Has no impact if `background attachment` is set to *fixed*).
- `background-size`	Specifies the size of the background image(s): `auto(default - original size) | contain(scales the image up and down to fit inside the content area) | cover | units`
- `background-attachment` Specifies whether a background image scrolls with the rest of the page, or is fixed. `scroll(default) | fixed | local(scrolls with the element's contents) | initial | inherit(from parent)`
- `background-position` Sets the starting position of a background image: `x% y%(default 0% 0%) | left top | left-center | left bottom | right top | center top | center center | center | bottom | right center | initial | inherit` (if one is specified the other will be center)
- `background-repeat` : `repeat(default -the last can be clipped if not enough) | repeat-x | repeat-y | no-repeat | initial | inherit | space(The background-image is repeated as much as possible without clipping. The first and last image is pinned to either side of the element, and whitespace is distributed evenly between the images) | round(The background-image is repeated and squished or stretched to fill the space (no gaps)) | initial | inherit`
```css
#example1 {
  background-image: url(img_flwr.gif), url(paper.gif);
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
}
```
Using the shorthand property of `background`, you can achieve the same as: 
```css
#example1 {
  background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
}
```
`backgound` is a shorthand for:
- background-color
- background-image
- background-position
- background-size
- background-repeat
- background-origin
- background-clip
- background-attachment
```css
body {
  background: lightblue url("img_tree.gif") no-repeat fixed center;
}
```
It does not matter if any of the values are missing.  
# @supports 
The `@supports` rule lets one check if the browser supports a specific css property or value, and to define fallback styles if the feature is not supported.  
Basic syntax: 
```css
@supports (property: value) {
    /*CSS rules to apply*/
}
```
If it supports, the CSS styling provided inside the @supports rule will apply, if not the styling rule outside it will be applied.  
```css
/* use this CSS if the browser does not support display: flex */
.container {
  float: left;
  width: 100%;
}

/* use this CSS if the browser supports display: flex */
@supports (display: flex) {
  .container {
    display: flex;
  }
}
```
## Negating with not
Apply the style if the browser does not support the featre.   
```css
@supports not (display: grid) {
    .warning: {
        background-color: pink;
        padding: 10px;
        border: 1px solid red;
    }
}
```
## Combining Conditions
You can use **and**, **or** and **not** for multiple conditions simultaneously.  
```css
@supports (display: grid) and  (not gap: 10px) {
    .container {
    display: grid;
    gap: 10px;
  }
}
```
# CSS Color Keywords
CSS has some special predefined color keywords that can be used with properties like **color**, **background-color** and **border-color**.   
- transparent
- currentcolor
- inherit
#### transparent
Similar to rgba(0,0,0,0).
```css
body {
  background-image: url("paper.gif");
}

div {
  background-color: transparent;
}
```
#### currentcolor
A variable that holds the current value of the color property of an element.  
```css
div { /*the border of the <div> will be blue because the textcolor of the <div> is blue */
  color: blue;
  border: 10px solid currentcolor;
}
```
```css
body {/* the <div>'s background color is set to the current color value of the body element*/
  color: purple;
}

div {
  background-color: currentcolor;
}
```
#### inherit
Specifies that a property should inherit its value from its parent element.  

# CSS Gradients
Functions to let one display smooth transitions btwn two or more colors within an element.  
Are of three types; 
1. `Linear Gradient` - The color transition goes down, up, left, right or diagonally.  
2.  `Radial Gradient` - Color transitions goes out from a central point.   
3. `Conic Gradients` - Color transition is rotated around a center point.  
The css gradient functions are used within the `background-image` property.   
## CSS linear-gradient() Function  
A linear gradient defines a color transition that goes in a straight line, it can go down, up, to left, to right, or diagonally.  
A linear gradient requires at least two color stops.  
Color stops are the colors you want to render smooth transitions among.  
You can also set a starting point and a direction (or an angle) along with the gradient effect.  
`backround-image: linear-gradient(direction, color-stop-1, color-stop2,.....)`  
```css
#grad {
  background-image: linear-gradient(to top, red, yellow);
}
```
### Directions
- Top to Bottom(default) - *to bottom*
- Bottom to Top - *to top*
- Left to Right - *to right*
- Diagonal - *to bottom right*
### Using Angles
- A value of 0deg is equivalent to "to top".
- A value of 90deg is equivalent to "to right".
- A value of 180deg is equivalent to "to bottom".
- A value of 270deg equivalent to "to left"
`background-image: linear-gradient(angle, color-stop1, color-stop2);`  
```css
#grad {
  background-image: linear-gradient(180deg, red, yellow);
}
```
### transparency
To add transparency, we use the `rgba()` function to define the color stops. The last parameter in the rgba() function can be a value from `0 to 1`, and it defines the transparency of the color: 0 indicates full transparency, 1 indicates full color (no transparency)  
```css
#grad {
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}
```
### repeating-linear-gradient()
```jsx
#grad {
  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
}
```
```css
#grad2 {
  height: 200px;
  background-color: red; /* For browsers that do not support gradients */
  background-image: repeating-linear-gradient(45deg,red,yellow 7%,green 10%);
}
```
```css
#grad5 {
  height: 200px;
  background-color: red; /* For browsers that do not support gradients */
  background-image: repeating-linear-gradient(45deg, red 0px, red 10px, yellow 10px, yellow 20px);
}
```
## CSS radial-gradient() function 
`background-image: radial-gradient(shape size at position, start-color, ..., last-color);`    
By default, `shape` is `ellipse`, `size` is `farthest-corner`, and `position` is `center`.  
### Directions
- `Evenly Spaced color Stops`(default)
```css
#grad {
  background-image: radial-gradient(red, yellow, green);
}
```
- ` Differently Spaced Color Stops`
```css
#grad {
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
}
```
### Setting shapes
```css
#grad {
  background-image: radial-gradient(circle, red, yellow, green);
}
```
### Size Parameter
Defines the size of the gradient'ending shape. 
Can take one of the following values:
- **closest-side**
- **farthest-side**
- **closest-corner**
- **farthest-corner**
```css
#grad1 {
  background-image: radial-gradient(closest-side at 70% 60%, red, yellow, black);
}

#grad2 {
  background-image: radial-gradient(farthest-side at 70% 60%, red, yellow, black);
}
```
### repeating-linear-gradient
```css
#grad {
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}
```
## CSS conic-gradient() function
To create a conic gradient you must define at least two colors.  
`background-image: conic-gradient([from angle] [at position,] color [degree], color [degree], ...);`   
By default, `angle` is `0deg` and `position` is `center`.  
If no degree is specified, the colors will be spread equally around the center point.  
### Three colors
```css
#grad{
  background-image: conic-gradient(red, yellow, green)
}
```
### Three Colors and Degrees
```css
#grad {
  background-image: conic-gradient(red 45deg, yellow 90deg, green 210deg);
}
```
### Creating Pie charts
```css
#grad {
  background-image: conic-gradient(red, yellow, green, blue, black);
  border-radius: 50%;
}
```
Below is a perfect one since all of the colors' degrees have been defined.  
```css
#grad {
  background-image: conic-gradient(red 0deg, red 90deg, yellow 90deg, yellow 180deg, green 180deg, green 270deg, blue 270deg);
  border-radius: 50%;
}
```
### Conic Gradient With Specified From Angle
The **[from angle]** specifies an angle that the entire conic gradient is rotated by.
```css
#grad {
  background-image: conic-gradient(from 90deg, red, yellow, green);
}
```
### Conic Gradient With Specified Center Position
The **[at position]** specifies the center of the conic gradient.
```css
#grad {
  background-image: conic-gradient(at 60% 45%, red, yellow, green);
}
```
### repeating-conic-gradient() 
```css
#grad {
  background-image: repeating-conic-gradient(red 10%, yellow 20%);
  border-radius: 50%;
}
```
```css
#grad {
  background-image: repeating-conic-gradient(red 0deg 10deg, yellow 10deg 20deg, blue 20deg 30deg);
  border-radius: 50%;
}
```
# CSS Shadow Effects
## CSS text-shadow
In its simplest form, you only specify the `horizontal` and `vertical` shadow.  
In addition, you can add a `shadow color` and `blur effect`.
```css
h1 {
  text-shadow: 2px 2px;
}
```
```css
h1 {
  text-shadow: 2px 2px red;
}
```
```css
h1 {
  text-shadow: 2px 2px 5px red; /*With a blur effect*/
}
```
### Multiple Shadows
To add more than one shadow to the text, you can add a `comma-separated list` of shadows.  
```css
h1 {
  text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;
}
```
### Border around text!
You can also use the text-shadow to create a plain border around some text.  
```css
h1 {
  color: coral;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
```
## CSS Box Shadow
In its simplest use, you can only specify the `horizontal` and the `vertical` `offset` of the shadow.    
In addition, you can add a `shadow color`, a `spread radius`, a `blur effect`, and change the shadow from an `outer shadow` to an `inner shadow` `(inset)`.
```css
div {
  box-shadow: 10px 10px;
}
```
```css
div {
  box-shadow: 10px 10px lightblue;  /*With the shadow color*/
}
```
```css
div {
  box-shadow: 10px 10px 5px lightblue; /*With a blur effect*/
}
```
### Spread Radius of the Shadow
A positive value increases the size of the shadow, and a negative value decreases the size of the shadow.  
```css
div {
  box-shadow: 10px 10px 5px 12px lightblue;
}  
```
### Inset Parameter
The inset parameter changes the shadow from an outer shadow (outset) to an inner shadow (inside an element's frame).  
```css
div {
  box-shadow: 10px 10px 5px lightblue inset;
}
```
### Multiple Shadows
To have most of them, use a comma-separated list of shadows.  
```css
div {
  box-shadow: 5px 5px 8px blue, 10px 10px 8px red, 15px 15px 8px green;
}
```
# CSS Text Effects
- `text-overflow` Specifies how to handle overflowed content.  
- `word-wrap` Allows long words to be able to be broken and wrap onto the next line.  
- `word-break` Specifies line breaking rules.  
- `writing-mode` Specifies whether lines of text are laid out horizontally or vertically.  
- `text-justify` Specifies how justified text should be aligned and spaced. 
## text-overflow
Specifies how overflowed content that is not displayed should be signaled to the user.  
It can be clipped or rendered with ellipsis.  
Both of the following for the `text-overflow` to take effect:
- `whitespace: nowrap`
- `overflow: hidden`
```css
p.test1 {
  width: 200px;
  border: 1px solid #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}

p.test2 {
  width: 200px;
  border: 1px solid #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```
You can display the overflowed content when hovering over: 
```css
p:hover {
  overflow: visible;
}
```
## word-wrap(now officially called overflow-wrap)
Values: 
- `break-word`
- `normal`(words only break at standard points such as spaces and hyphens. If a single word is longer, it will overflow rather than break).  
- ``anywhere`(available via `overflow-wrap`: Similar to break-word, but it also considers soft wrap opportunities when calculating the minumum content size of the container.)
## word-break
Specifies how words should break when reaching the end of a line.  
Can take one of the following; 
- `normal`(default) Uses the default line breaking rules of the language.
- `break-all` Allows words to be broken at any character to prevent overflow.(no hyphens)  
- `keep-all` Prevents words from breaking.  
## writing-mode
Specifies whether lines of text are laid out horizontally or vertically.  
Can take one of the following: 
- `horizontal-tb` (Default) The text flows horizontally from left to right, vertically from top to bottom.  
- `vertical-rl` Text flows vertically from top to bottom, horizontally from right to left.  
- `vertical-lr` Text flows vertically from top to bottom, horizontally from left to right.  
```css
p.test1 {
  writing-mode: horizontal-tb;
}

span {
  writing-mode: vertical-rl;
}

p.test2 {
  writing-mode: vertical-rl;
}
```
### text-justify
`text-justify: auto(browser determines the justification algorithm.) | inter-word(increases/decreases the space btwn words) | inter-character(increases/decreases space between characters) | none | initial | inherit`  
# CSS Tooltip
Used to specify extra information about something when the user moves the mouse pointer over an element.  
```css
<style>
/* Tooltip container */
.container {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* Add dots under the hoverable text */
  cursor: pointer;
}

/* Tooltip text */
.tooltip {
  visibility: hidden; /* Hidden by default */
  width: 130px;
  background-color: black;
  color: #ffffff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1; /* Ensure tooltip is displayed above content */
}

/* Show the tooltip text on hover */
.container:hover .tooltiptext {
  visibility: visible;
}
</style>

<div class="container">Hover over me
  <span class="tooltip">Some tooltip text</span>
</div>
```
#### HTML 
Uses a container element like `<div>`.  
The tooltip text is placed inside an inline element (like `<span>`).  
#### CSS
The container element class uses `position: relative`, which is needed to position the tooltip text(`position: absolute`).  
The `:hover` selector is used to show the tooltip text when the use moves the mouse over the `<div>`.  
### Positioning the tooltip
#### Right and Left aligned Tooltip 
```css
/*In this example, the tooltip is placed to the right (left:105%) of the "hoverable" text (<div>). Also note that top:-5px is used to place it in the middle of its container element. We use the number 5 because the tooltip text has a top and bottom padding of 5px. If you increase its padding, also increase the value of the top property to ensure that it stays in the middle (if this is something you want). The same applies if you want the tooltip placed to the left.*/
.tooltiptext {
  top: -5px;
  left: 105%;
}
```
Left-aligned tooltip;
```css
.tooltiptext {
  top: -5px;
  right: 105%;
}
```
#### Top and Bottom-aligned Tooltip
```css
/* Note that we use the margin-left property with a value of minus 65 pixels. This is to center the tooltip above/below the hoverable text. It is set to the half of the tooltip's width (130/2 = 65).*/
.tooltiptext {
  width: 130px;
  bottom: 100%;
  left: 65%;
  margin-left: -65px; /* Use half of the width (130/2 = 65), to center the tooltip */
}
```
Bottom-aligned top;
```css
 .tooltiptext {
  width: 130px;
  top: 100%;
  left: 50%;
  margin-left: -65px; /* Use half of the width (130/2 = 65), to center the tooltip */
}
```
### Fade-in tooltip 
If you want to have a tooltip that fades in, use the CSS `transition` property and the `opacity` property to go from being completely invisibe to invisible 100% visible in a number of specified seconds.  
```css
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  cursor: pointer;  
}

.tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 2s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
```
## CSS Tooltip Arrows
To create an arrow that should appear from a specific side of the tooltip, add "empty" content after the tooltip, with the pseuo-element class `::after` together with the `content` property. The arrow itself is created using borders. This will make the tooltip look like a speech bubble.   
```css
/*bottom arrow*/
.tooltiptext::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%; /*centers the arrow*/
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
```
**Note**: The `border-width` property specifies the size of the arrow. If you change this, also change the `margin-left` value to the same. This will keep the arrow centered.  
The border-color is used to transform the content into an arrow. We set the top border to black, and the rest to transparent. If all sides were black, you would end up with a black square box.  
```css
/*Top Arrow*/
.tooltiptext::after {
  content: " ";
  position: absolute;
  bottom: 100%;  /* At the top of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}
```
```css
/*Left Arrow*/
.tooltiptext::after {
  content: " ";
  position: absolute;
  top: 50%;
  right: 100%; /* To the left of the tooltip */
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}
```
```css
/*Right Arrow*/
.tooltiptext::after {
  content: " ";
  position: absolute;
  top: 50%;
  left: 100%; /* To the right of the tooltip */
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent black;
}
```
# Responsive Images
If you want an image to scale down if it has to, but never scale up to be larger than its original size, add the following:  
```css
img{
  max-width: 100%;
  height: auto
}
```
Contrived example: 
```css
@media only screen and (max-width: 768px) {
  div.gallery-item {
    width: calc(50% - 20px);
  }
}

@media only screen and (max-width: 480px) {
  div.gallery-item {
    width: calc(100% - 20px);
  }
}
```
#### Responsive Gallery Example
```html
<!DOCTYPE html>
<html>
<head>
<style>
* {
  box-sizing: border-box;
}

div.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

div.gallery-item {
  margin: 5px;
  border: 1px solid #ccc;
  width: calc(25% - 20px);
}

div.gallery-item:hover {
  border: 1px solid #777;
}

div.gallery-item img {
  width: 100%;
  height: auto;
}

div.gallery-item div.desc {
  padding: 15px;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  div.gallery-item {
    width: calc(50% - 20px);
  }
}

@media only screen and (max-width: 480px) {
  div.gallery-item {
    width: calc(100% - 20px);
  }
}
</style>
</head>
<body>

<h2>Responsive Image Gallery</h2>

<h4>Resize the browser window to see the effect!</h4>

<div class="gallery">

<div class="gallery-item">
  <a target="_blank" href="img_5terre.jpg">
    <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
  </a>
  <div class="desc">Cinque Terre</div>
</div>

<div class="gallery-item">
  <a target="_blank" href="img_forest.jpg">
    <img src="img_forest.jpg" alt="Forest" width="600" height="400">
  </a>
  <div class="desc">Green Forest</div>
</div>

<div class="gallery-item">
  <a target="_blank" href="img_lights.jpg">
    <img src="img_lights.jpg" alt="Northern Lights" width="600" height="400">
  </a>
  <div class="desc">Northern Lights</div>
</div>

<div class="gallery-item">
  <a target="_blank" href="img_mountains.jpg">
    <img src="img_mountains.jpg" alt="Mountains" width="600" height="400">
  </a>
  <div class="desc">Mountains</div>
</div>

</div>

<p>Here we use media queries to re-arrange the images on different screen sizes:</p>
<ul>
  <li>If screen is larger than 768px wide - show four images side by side</li>
  <li>If screen is smaller than 768px - show two images side by side</li>
  <li>If screens is smaller than 480px - stack the images vertically (100%)</li>
</ul>
</body>
</html>
```
# CSS Responsive Modal Images
A modal image gives a user ability to display a larger version of an image without navigating away from the current page.  
When a user clicks a modal image, it shows a popup window that appears at the top of the main content of the webpage, often with a semi-transparent background.  
This modal must be closed by the user, typically with a "close" button or an 'X' sign in top-right corner.    
We use CSS to create a modal window(dialog box), and hide it by default.  
```html
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  padding: 20px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 15px;
}

.gallery-item {
  position: relative;
  width: calc(25% - 20px);
  height: auto;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.5s ease;
}

.gallery-item:hover {
  transform: scale(1.1);
}

/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease;
}

/* Modal content (image) */
.modal-content {
  position: relative;
  width: 90%;
  height: auto;
  max-width: 90%;
  max-height: 90%;
  border-radius: 5px;
  overflow: hidden;
  animation: zoomIn 0.5s;
}

@keyframes zoomIn {
  from {transform: scale(0.6);}
  to {transform: scale(1);}
}

.modal.show {
  display: flex;
  opacity: 1;
}

/* Close button */
.close {
  position: absolute;
  top: 10px;
  right: 15px;
  color: #ffffff;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s;
}

/* Caption of modal image */
.caption {
  position: absolute;
  bottom: 15px;
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 24px;
}

@media screen and (max-width: 768px) {
  .gallery-item {
    width: calc(50% - 20px);
  }
}

@media screen and (max-width: 480px) {
  .gallery-item {
    width: calc(100% - 20px);
  }
}
</style>
</head>
<body>

<h1>Responsive Modal Images</h1>

<div class="gallery">
  <img src="img_5terre.jpg" alt="Cinque Terre" class="gallery-item" onclick="openModal('modal1', 'Cinque Terre')">
  <img src="img_forest.jpg" alt="Forest" class="gallery-item" onclick="openModal('modal2', 'Forest')">
  <img src="img_lights.jpg" alt="Northern Lights" class="gallery-item" onclick="openModal('modal3', 'Nothern Lights')">
  <img src="img_mountains.jpg" alt="Mountains" class="gallery-item" onclick="openModal('modal4', 'Mountains')">
</div>

<div id="modal1" class="modal">
  <span class="close" onclick="closeModal('modal1')">&times;</span>
  <img src="img_5terre.jpg" alt="Cinque Terre" class="modal-content">
  <div class="caption"></div>
</div>

<div id="modal2" class="modal">
  <span class="close" onclick="closeModal('modal2')">&times;</span>
  <img src="img_forest.jpg" alt="Forest" class="modal-content">
  <div class="caption"></div>
</div>

<div id="modal3" class="modal">
  <span class="close" onclick="closeModal('modal3')">&times;</span>
  <img src="img_lights.jpg" alt="Northern Lights" class="modal-content">
  <div class="caption"></div>
</div>

<div id="modal4" class="modal">
  <span class="close" onclick="closeModal('modal4')">&times;</span>
  <img src="img_mountains.jpg" alt="Mountains" class="modal-content">
  <div class="caption"></div>
</div>

<script>
function openModal(modalId, caption) {
  let modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.classList.add("show");
  let message = modal.querySelector(".caption");
  message.innerText = caption;
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
    modal.querySelector(".caption").innerText = "";
  }, 300);
}
</script>

</body>
</html>
```
# CSS Styling Images
### Rounded Images
Use `border-radius` to create rounded images.  
### Polaroid Images/Cards
```css
div.polaroid {
  width: 80%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

img {width: 100%}

div.container {
  text-align: center;
  padding: 10px 20px;
}
```
#### Image Opacity And Image Text Positioning
**Opacity** scales from 0.0 to 1.0
Image text can be set using the measurents to fit any position whether top left, bottom right, bottom left, centered, top right.  
### CSS Image Hover Overlays
#### Fade in Overlay
```css
<style>
.container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
</head>
<body>

<h2>Fade in Overlay</h2>

<div class="container">
  <img src="img_avatar.png" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
```
#### Fade in a box
```css
.container {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
</head>
<body>

<h2>Fade in a Box</h2>

<div class="container">
  <img src="img_avatar.png" alt="Avatar" class="image" style="width:100%">
  <div class="middle">
    <div class="text">John Doe</div>
  </div>
</div>
```
#### Slide in Overlay from top 
```css
.container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #008CBA;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.container:hover .overlay {
  bottom: 0;
  height: 100%;
}

.text {
  white-space: nowrap; 
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
</head>
<body>

<h2>Slide in Overlay from the Top</h2>

<div class="container">
  <img src="img_avatar.png" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
```
#### Slide in bottom
```css
.container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #008CBA;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.container:hover .overlay {
  height: 100%;
}

.text {
  white-space: nowrap; 
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
</head>
<body>

<h2>Slide in Overlay from the Bottom</h2>

<div class="container">
  <img src="img_avatar.png" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
```
#### Slide in Left
```css
.container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #008CBA;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .5s ease;
}

.container:hover .overlay {
  width: 100%;
}

.text {
  white-space: nowrap; 
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
</head>
<body>

<h2>Slide in Overlay from the Left</h2>

<div class="container">
  <img src="img_avatar.png" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
```
#### Slide in from Right
```css
.container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 100%;
  right: 0;
  background-color: #008CBA;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .5s ease;
}

.container:hover .overlay {
  width: 100%;
  left: 0;
}

.text {
  white-space: nowrap; 
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
</head>
<body>

<h2>Slide in Overlay from the Right</h2>

<div class="container">
  <img src="img_avatar.png" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
```



### Flipping an image
```css
img:hover {
  transform: scaleX(-1);
}
```
# CSS Centering Images
## Centering an image horizontally.  
Can be achieved using `display: flex` or `margin: auto`.  
### Using margin: auto
Since image is an inline element by default, and `margin: auto` has no effect on inline elements, we must convert the image to a block element with `display: block`.   
```css
img {
  display: block;
  margin: auto;
  width: 50%;
}
```
### display: flex
We put image inside a `<div>`.  
Then we add the following CSS to the div container.  
- `display: flex`
- `justify-content: center` 

Then we set a `width` for the image. The width, of course must be smaller than the width of the page.    
```css
div {
  display: flex;
  justify-content: center;
}

img {
  width: 50%;
}
```
## Centering an Image Vertically and Horizontally(true centering).  
We can use `display: flex` or `display: grid`.  
### Using display: flex
We use a combination of: 
- `display: flex`
- `justify-content: center`
- `align-items: center`
- `height: 600px`
```css
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  border: 1px solid black;
}

img {
  width: 50%;
}
```
### Using display: grid
We use a combination of: 
- `display: grid;`
- `place-items: center;` (centers the image horizontally and vertically in the container)
- `height: 600px;` (the height of the container)
```css
div {
 display: grid;
  place-items: center;
  height: 600px;
  border: 1px solid black;
}

img {
  width: 50%;
}
```
# CSS Image Filter Effects
The CSS `filter` property is used to add visual effects like blur and saturation to elements.  
With it, you can use one of the following CSS functions:
- **blur()**
- **brightness()**
- **contrast()**
- **drop-shadow()**
- **grayscale()**
- **hue-rotate()**
- **invert()**
- **opacity()**
- **saturate()**
- **sepia()**
#### blur()
A larger value will create more blur.  
If no value is given, 0 is used(no effect)
```css
#img1 {
  filter: blur(2px);
}

#img2 {
  filter: blur(6px);
}
```
#### contrast()
- 100% is default and represents the original contrast.  
- Values over 100% increases the contrast.  
- Values under 100% decreases the contrast.  
- 0% will make the image completely gray. 

```css
#img1 {
  filter: contrast(150%);
}

#img2 {
  filter: contrast(50%);
}
```
#### brightness()
- 100% is default, and represents the original brightness
- Values over 100% will provide brighter results
- Values under 100% will provide darker results
- 0% will make the image completely black
```css
#img1 {
  filter: brightness(150%);
}

#img2 {
  filter: brightness(50%);
}
```
#### drop-shadow()
```css
#img1 {
  filter: drop-shadow(8px 8px 10px gray); 
}

#img2 {
  filter: drop-shadow(10px 10px 7px lightblue);
}
```
#### grayscale() 
Converts an image to grayscale.  
- 100% (or 1) will make the image completely grayscale
- 0% (or 0) will have no effect
```css
#img1 {
  filter: grayscale(1);
}

#img2 {
  filter: grayscale(60%);
}

#img3 {
  filter: grayscale(0.4);
}
```
#### hue-rotate()
Applies a color rotation to an element.  
The value defines the number of degrees around the color circle the image will be adjusted.  
A positive hue rotation increases the hue value, while a negative rotation decreases the hue value.  
0deg represents the original image.  
```css
#img1 {
  filter: hue-rotate(200deg);
}

#img2 {
  filter: hue-rotate(90deg);
}

#img3 {
  filter: hue-rotate(-90deg);
}
```
#### invert()
Inverts the color of an image.  
- 100%(or 1) will fully invert the colors.  
- 0%(or 0) will have no effect.  
```css
#img1 {
  filter: invert(0.3);
}

#img2 {
  filter: invert(70%);
}

#img3 {
  filter: invert(100%);
}
```
#### opacity()
- 100% (or 1) will have no effect
- 50% (or 0.5) will make the element 50% transparent
- 0% (or 0) will make the element completely transparent  
```css
#img1 {
  filter: opacity(80%);
}

#img2 {
  filter: opacity(50%);
}

#img3 {
  filter: opacity(0.2);
}
```
#### saturate()
- 100% (or 1) will have no effect
- 0% (or 0) will make the element completely unsaturated
- 200% (or 2) will make the element super saturated   
```css
#img1 {
  filter: saturate(0);
}

#img2 {
  filter: saturate(100%);
}

#img3 {
  filter: saturate(200%);
}
```
#### sepia()
Converts an image to a sepia tone(a warmer, more-brown/yellow color).  
- 0% (or 0) will have no effect
- 100% (or 1) applies full sepia effect
```css
#img1 {
  filter: sepia(1);
}

#img2 {
  filter: sepia(60%);
}

#img3 {
  filter: sepia(0.4);
}
```
# CSS Image Shapes
With CSS its so easy to shape(clip) images to circles, ellipses and polygons. 
- **clip-path**
- **shape-outside**
- **circle()**
- **ellipse()**
- **polygon()**
## CSS clip-path and the circle() Functions
The `clip-path` lets you clip an element to a basic shape.  
The `circle()` function defines a circle with a radius and position.  
```css
img {
  clip-path: circle(50%);  /*We're clipping to a circle with 50% radius*/
} 
```
One can also specify the center of the circle which can be a length or percentage value.  
It can also be a value such as left, right, bottom or top.  
The default value is center
```css
/*Clipping an image to a circle with 50% radius and position the center to the right(semi-circular in shape)*/
img {
  clip-path: circle(50% at right);
}
```
## shape-outside and circle()
`shape-outside` lets you define a shape for the wrapping of the inline content.  
`circle()` function defines a circle with a radius and a position.  
```css
img {
  /**The content wraps around the circle at 45% of the total length, semi-circular if the image is at the start of the page.*/
  float: left;
  clip-path: circle(40%);
  shape-outside: circle(45%);
}
```
## clip-path and ellipse()
`ellipse()` function defines an ellipse with two radii x and y.  
```css
/*Clip an image to an ellipse with 50% radius x and 35% radius y*/
img {
  clip-path: ellipse(50% 35%);
}
```
We can also specify the center of the ellipse which can also be a length or a percentage.  
It can also be a value such as left, right, top or bottom.  
Default also center.  
```css
/*laconically half ellipse*/
img {
  clip-path: ellipse(50% 35% at right);
}
```
## shape-outside and ellipse()
```css
img {
  float: left;
  clip-path: ellipse(40% 50%);
  shape-outside: ellipse(45% 50%);
}
```
## polygon()
Defines a polygon.  
This function contains points that define the polygon.  
Can be length or percentage value.  
Each point is a pair of x and y coordinates.  
0 0 defines the left top corner and 100% 100% defines the right bottom corner.     
The `polygon()` function is used within the `clip-path` property and the `shape-outside` property.   
```css
img {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
```
# CSS object-fit Property
`object-fit` property is used to specify how an `<img>` or `<video>` should be resized to fit its container.  
Can take one of the following values.  
- `fill` - This is default. Does not preserve the aspect ratio. The image is resized to fill the container (the image will be stretched or squeezed to fit).
- `cover` - Preserves the aspect ratio, and the image fills the container. Cuts overflowing content if needed.
- `contain` - Preserves the aspect ratio, and fits the image inside the container, without cutting - leaves empty space if needed.
- `none` - The image is not resized.
- `scale-down` - the image is scaled down to the smallest version of `none` or `contain`.
# CSS Object-position Property
Used together with `object-fit` to specify how an `<img>` or `<video>` should be positioned with x/y coordinates within its container.  
The first value controls the x-axis and the second value controls the y-axis. 
The value can be a string (left, center or right), or a number (in px or %).  
Negative values are also allowed.  
```css
/*To cut an image further from the left margin*/
.image-container {
  width: 200px;
  height: 300px;
  border: 1px solid black;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 80% 100%;
}
```
```css
/*To cut the image nearer to the left margin*/
.image-container {
  width: 200px;
  height: 300px;
  border: 1px solid black;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 15% 100%;
}
```
# CSS Masking
Masking allows one to creat a mask layer to place over an element to partially or fully hide portions of the element.  
`mask-image` property specifies the mask layer image.  
The mask layer can be a PNG, an SVG image, a CSS gradient, or an SVG `<mask>` element.  
## Use of a PNG image as the mask layer
To use such, use a url() value to pass in the mask layer image.  
The mask image needs to have a transparent or semi-transparent area. Black indicates fully transparent.  
```css
.the-image-to-mask {
  -webkit-mask-image: url(w3logo.png);
  mask-image: url(w3logo.png);
  mask-repeat: no-repeat;
}
```
The `mask-image` property defines the image to be used as a mask layer for an element.  
`mask-repeat` property specifies if or how a mask image will be repeated.  
## Repeat the Mask Layer Image
Without setting the `mask-repeat` property to `no-repeat`, the mask image(probably a text) will be repeated all over the image.   

## mask-position
Sets the starting point of a mask image (relative to the mask position area).  
By default, a mask image is placed at the top left corner of an element, and repeated both vertically and horizontally.   
```css
.mask1 {
  /*Positioned at the center of the image*/
  -webkit-mask-image: url(w3logo.png);
  mask-image: url(w3logo.png);
  mask-repeat: no-repeat;
  mask-position: center;   
}
```
## All the Masking Properties
- `mask-clip`	Specifies which area is affected by a mask image
- `mask-composite`	Specifies a compositing operation used on the current mask layer with the mask layers below it
- `mask-image`	Specifies an image to be used as a mask layer for an element
- `mask-mode`	Specifies whether the mask layer image is treated as a luminance mask or as an alpha mask
- `mask-origin`	Specifies the origin position (the mask position area) of a mask layer image
- `mask-position`	Sets the starting position of a mask layer image (relative to the mask position area)
- `mask-repeat`	Specifies how the mask layer image is repeated
- `mask-size`	Specifies the size of a mask layer image
- `mask-type`	Specifies whether an SVG `<mask>` element is treated as a luminance mask or as an alpha mask. 

## CSS Gradient Mask Layers
#### Linear Gradient
```css
.mask1 {
  -webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient(black, transparent);
}
```
#### Radial Gradient Mask Layer -Circle
```css
.mask2 {
  -webkit-mask-image: radial-gradient(circle, black 50%, rgba(0, 0, 0, 0.5) 50%);
  mask-image: radial-gradient(circle, black 50%, rgba(0, 0, 0, 0.5) 50%);
}
```
#### Radial Gradient Mask Layer - Ellipse
```css
.mask3 {
  -webkit-mask-image: radial-gradient(ellipse, black 50%, rgba(0, 0, 0, 0.5) 50%);
  mask-image: radial-gradient(ellipse, black 50%, rgba(0, 0, 0, 0.5) 50%);
}
```
#### Conic Gradient Mask Layer
```css
.mask3 {
  -webkit-mask-image: conic-gradient(black 0deg, transparent 360deg);
  mask-image: conic-gradient(black 0deg, transparent 360deg);
}
```
## CSS SVG Mask Layers
The SVG `<mask>` element can be used to apply a mask to an image.  
#### Circle
The SVG `<circle>` element is used to create a circle.  
```html
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <mask id="svgmask1">
    <circle r="150" cx="200" cy="200" fill="#ffffff" />
  </mask>
  <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img_5terre.jpg" mask="url(#svgmask1)"></image>
</svg>
```
#### Ellipse
The `<ellipse>` element is used. 
```html
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <mask id="svgmask1">
    <ellipse cx="220" cy="150" rx="200" ry="100" fill="#ffffff" />
  </mask>
  <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img_5terre.jpg" mask="url(#svgmask1)"></image>
</svg>
```
#### Triangle 
The SVG `<polygon>` element is used to create a graphic that contains at least three sides.  
```html
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <mask id="svgmask1">
    <polygon fill="#ffffff" points="200 0, 400 400, 0 400"></polygon>
  </mask>
  <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img_5terre.jpg" mask="url(#svgmask1)"></image>
</svg>
```
#### Star
`<polygon>` still.  
```html
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <mask id="svgmask1">
    <polygon fill="#ffffff" points="100,10 40,198 190,78 10,78 160,198"></polygon>
  </mask>
  <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img_5terre.jpg" mask="url(#svgmask1)"></image>
</svg>
```
#### Multiple Circles
We define circles with different x and y positions.  
```html
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <mask id="svgmask1">
    <circle fill="#ffffff" cx="75" cy="75" r="75"></circle>
    <circle fill="#ffffff" cx="80" cy="260" r="75"></circle>
    <circle fill="#ffffff" cx="270" cy="160" r="75"></circle>
  </mask>
  <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img_5terre.jpg" mask="url(#svgmask1)"></image>
</svg>
```
# CSS Styling Buttons
Themost common CSS properties for styling are: 
- `background-color` - defines the background color of a button
- `color` - defines the text color of a button
- `border` - defines the border of a button
- `padding` - defines the space between the text and the border of a button
- `border-radius` - adds rounded corners to a button
- `box-shadow` - adds shadows to a button
- `text-align` - centers the text of a button
- `font-size` - defines the font size of the text on a button
- `text-decoration` - removes the underline for `<a>` elements used as buttons
- `cursor` - changes the mouse cursor when hovering over the button
Buttons are typically created with the HTML `<button>` element, the `<input type='button'>` or an `<a>` element styled as a button (or with role). 
##### Border on buttons
```css
.button {
  border: 1px solid green;
}

.btn-group .button:not(:last-child) {
  border-right: none;
}
```
# Pagination
Pagination is typically a series of links, wrapped in an unordered list (`<ul>`). Each link represents an individual page number. In addition there are "previous" and "next" controls:  
##### Simple example
```css
.pagination {
  display: flex;
  justify-content: center;
  list-style: none; /* remove list bullets */
  padding: 0px;
}

.pagination li a {
  display: block; /* let links fill the list item */
  padding: 8px 12px;
  text-decoration: none;
  border: 1px solid gray;
  color: black;
  margin: 0 4px;
  border-radius: 5px; /* add rounded borders */
}
```
##### Pagination With a Disabled Class
```css
.pagination li a.disabled {
  color: #dddddd;
  cursor: not-allowed;
  pointer-events: none;
}
```
# CSS Multi-columns Properties
- `column-count`	Specifies the number of columns an element should be divided into
- `column-fill`	Specifies how to fill columns
- `column-gap`	Specifies the gap between the columns
- `column-rule`	A shorthand property for setting all the column-rule-* properties `column-rule: 1px solid red`
- `column-rule-color`	Specifies the color of the rule between columns
- `column-rule-style`	Specifies the style of the rule between columns `solid | dotted | dashed | ...`
- `column-rule-width`	Specifies the width of the rule between columns 
- `column-span`	Specifies how many columns an element should span across
- `column-width`	Specifies a suggested, optimal width for the columns `length eg. 1px`
- `columns`	A shorthand property for setting column-width and column-count.  
### column-Span
Specifies how many columns an element (typically a heading) should span across. 
Default - `none`.    
```css
h2 {
  column-span: all;
  text-align: center;
}
```
### Columns
A shorthand for `column-count` and `column-width`.  
`columns: auto | column-width column-count | initial | inherit`  
```css
div {
  columns: 100px 3;
}
```
# Vendor Prefixes
Historically, browser engines used prefixes to implement new or experimental CSS features before they were officially "standardized" by the W3C. This allowed developers to test features without breaking the web once the final specification was decided  
Even though many properties are now fully supported without prefixes, `-webkit` remains the most common one you'll see today.  
Because mobile browsing exploded while Chrome and Safari dominated the market, many developers wrote code only using -webkit- prefixes. This forced other browsers (like Firefox and Edge) to actually support -webkit- prefixes just so websites wouldn't look broken on their browsers.  
Therefore, you don't need to manually type these as much as you used to.
The best practice are
- To always put the non-prefixed(standar) property **last**. This ensures that if a browser supports the official version, it  overrides the experimental one.  
```css
.glass {
  -webkit-backdrop-filter: blur(10px); /* Safari support */
  backdrop-filter: blur(10px);         /* Standard version */
}
```
- Use AutoPrefixer: Most modern workflows use a tool called Autoprefixer (via PostCSS). You write standard CSS, and the tool automatically adds the necessary prefixes based on current browser usage data.
- Check "Can I Use": Before cluttering your stylesheet, check CanIUse.com to see if a prefix is even required anymore.
```
Prefix          Browser Engine              Primary Browsers
-webkit-        WebKit / Blink              Chrome, Safari, newer Edge, Android
-moz-           Gecko                       Firefox
-o-             Presto                      Old versions of Opera-ms-Trident / EdgeHTMLInternet Explorer, old Edge
```
# CSS UI 
- **resize**
- **outline-offset**
## CSS Resize 
Can have one of the following:
- **horizontal** - user can resize the element horizontally (the width)
- **vertical** - user can resize the element vertically (the height)
- **both** - user can resize the element both vertically and horizontally
- **none** - user cannot resize the element
```css
div {
  resize: horizontal;
  overflow: auto;
}
```
```css
div {
  resize: vertical;
  overflow: auto;
}
```
### Disable Resize in Textarea
a `<textarea>` is often resizable by default.  
We can use the resize to disable the resizability.  
```css
textarea {
  resize: none;
}
```
## CSS Outline Offset
The *outline-offset* property adds a space between an outline and the edge/border of an element.  
The space between an element and its outline is transparent.  
*Outline differs from borders! Unlike border, the outline is drawn outside the element's border, and may overlap other content. Also, the outline is NOT a part of the element's dimensions; the element's total width and height is not affected by the width of the outline.* 
```css
div.ex1 {
  margin: 20px;
  border: 1px solid black;
  outline: 4px solid red;
  outline-offset: 15px;
}

div.ex2 {
  margin: 10px;
  border: 1px solid black;
  outline: 5px dashed blue;
  outline-offset: 5px;
}
```
# CSS Variables
The `var()` function is used to insert the value of a CSS variable.  
CSS Variables have access to the DOM, which means that you can create variables with local or global scope, change the variable with JS, and change the variables based on media queries.  
A good way to use CSS variables is when it comes to the colors of your design. Instead of copy and paste the same colors over and over again, you can place them in variables.
## Declaring a Variable
CSS variables can have a global or local scope.  
Global variables can be accessed through the entire document, while local variables can be used only inside the selector where it is declared.  
To create a global variable, declare it inside the `:root selector`. The `:root selector` matches the document's root element.  
To create a local variable, declare it inside the selector that is going to use it.  
A CSS variable name must begin with two dashes (--) and is case sensitive!  
```css
:root{
  --primary-bg-color: green;/*global scope*/
}
.note{
  --note-bg: yellow; /*local scope*/
}
```
## The CSS var() function
Used to insert the value of a declared CSS variable.  
`var(--name, value)`  
- **name** Required. The variable name (must start with two dashes.)
- **value** Optional. The fallback value(used if the variable is not found.)  
```css
:root {
  --primary-bg-color: #1e90ff;
  --primary-color: #ffffff;
}

body {
  background-color: var(--primary-bg-color);
}

.container {
  color: var(--primary-bg-color);
  background-color: var(--primary-color);
  padding: 15px;
}

.container h2 {
  border-bottom: 2px solid var(--primary-bg-color);
}

.container .note {
  border: 1px solid var(--primary-bg-color);
  padding: 10px;
}
```
## Overriding Global Variables With Local Variable
To achieve that, we can re-declare the global variable inside the local selector.  
```css
:root {
  --primary-bg-color: #1e90ff;
  --primary-color: #ffffff;
}

body {
  background-color: var(--primary-bg-color);
}

.container {
  color: var(--primary-bg-color);
  background-color: var(--primary-color);
  padding: 15px;
}

.container h2 {
  border-bottom: 2px solid var(--primary-bg-color);
}

.container .note {
  --primary-bg-color: red; /* local variable will override global */
  border: 1px solid var(--primary-bg-color);
  padding: 10px;
}
```
## Adding a New Local Variable
```css
:root {
  --primary-bg-color: #1e90ff;
  --primary-color: #ffffff;
}

body {
  background-color: var(--primary-bg-color);
}

.container {
  color: var(--primary-bg-color);
  background-color: var(--primary-color);
  padding: 15px;
}

.container h2 {
  border-bottom: 2px solid var(--primary-bg-color);
}

.container .note {
  --note-border-color: red; /* new local variable */
  border: 1px solid var(--note-border-color);
  padding: 10px;
}
```
## Changing Variables with JS
### Example 
```html
<script>
// Get the root element
var r = document.querySelector(':root');

// Function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --primary-bg-color variable
  alert("The value of --primary-bg-color is: " + rs.getPropertyValue('--primary-bg-color'));
}

// Function for setting a variable value
function myFunction_set() {
  // Set the value of variable --primary-bg-color to another value (in this case "green")
  r.style.setProperty('--primary-bg-color', 'green');
}
</script>
```
## CSS Variables in Media Queries
```css
:root {
  --primary-bg-color: #1e90ff;
  --primary-color: #ffffff;
}

body {
  background-color: var(--primary-bg-color);
}

.container {
  --fontsize: 20px;
  color: var(--primary-bg-color);
  background-color: var(--primary-color);
  padding: 15px;
  font-size: var(--fontsize);
}

.container h2 {
  border-bottom: 2px solid var(--primary-bg-color);
}

@media screen and (min-width: 450px) {
  .container {
    --fontsize: 40px;
  }
}
```
```css
:root {
  --primary-bg-color: #1e90ff;
  --primary-color: #ffffff;
}

body {
  background-color: var(--primary-bg-color);
}

.container {
  --fontsize: 20px;
  color: var(--primary-bg-color);
  background-color: var(--primary-color);
  padding: 15px;
  font-size: var(--fontsize);
}

.container h2 {
  border-bottom: 2px solid var(--primary-bg-color);
}

@media screen and (min-width: 450px) {
  .container {
    --fontsize: 40px;
  }
  :root {
    --primary-bg-color: lightblue;
  }
}
```
# @property Rule
Used to define custom CSS properties (CSS Variables) directly in the stylesheet without having to run any JS.  
The `@property` rule has data type checking and constraining, sets a default value, and specifies the inherit behaviour.
### Syntax
```css
/*creates a custom property named --myColor, defines it as a color property, specifies that it will inherit values from its parent elements, and its default value is lightgray.*/
@property --myColor {
  syntax: "<color>";
  inherits: true;
  initial-value: lightgray;
}
```
### Using the Custom Property
```css
body {
  background-color: var(--myColor);
}
```
### Benefits of using @Property
- **Data type checking:** You must specify the data type of the custom property:`<number>`, `<color>`, `<length>`, `<percentage>`, `<length-percentage>`(either length or percentage), `<image>`(url(), linear-gradient()), `<url>`, `<integer>`, `<angle>`, `<time>`, `<resolution>`(eg. 300dpi), `<transform-function>`(eg. rotate(10deg)), `<custom-ident>`, `*`(Universal syntax - Accepts any valid CSS value).This prevents errors and ensures that custom properties are used correctly
- **Set default value:** You must set a default value for the custom property. This ensures that if an invalid value is assigned later, the browser uses the default value as a fallback
- **Set inheritance behavior:** You must specify whether the custom property will inherit values from its parent elements or not. This ensures that you will have full control over inheritance

```css
@property --my-bg-color {
  syntax: "<color>";
  inherits: true;
  initial-value: lightgray;
}

@property --my-txt-color {
  syntax: "<color>";
  inherits: true;
  initial-value: darkblue;
}

div {
  width: 300px;
  height: 150px;
  padding: 15px;
  background-color: var(--my-bg-color);
  color: var(--my-txt-color);
}
```
In the example below, we are overriding the custom property in class.  
```css
@property --my-bg-color {
  syntax: "<color>";
  inherits: true;
  initial-value: lightgray;
}

div {
  width: 300px;
  height: 150px;
  padding: 15px;
  background-color: var(--my-bg-color);
}

.fresh {
  --my-bg-color: #ff6347;
}

.nature {
  --my-bg-color: rgb(120, 180, 30);
}
```
### Use of Inherits Value
```css
/* the custom property WILL NOT inherit values from its parent elements*/
@property --my-bg-color {
  syntax: "<color>";
  inherits: false;
  initial-value: lightgray;
}
```
### Create Smooth Animation with @property
```html
<!DOCTYPE html>
<html>
<head>
<style>
@property --startColor {
  syntax: "<color>";
  initial-value: #EADEDB;
  inherits: false;
}

@property --endColor {
  syntax: "<color>";
  initial-value: #BC70A4;
  inherits: false;
}

.ex1 {
  background: linear-gradient(var(--startColor), var(--endColor));
  animation: gradient 3s linear infinite;
}

@keyframes gradient {
  0%,
  100% {
    --startColor: #EADEDB;
    --endColor: #BC70A4;
  }
  50% {
    --startColor: #BC70A4;
    --endColor: #BFD641;
  }
}

#grad1 {
  height: 200px;
}
</style>
</head>
<body>

<h1>The @property Rule</h1>

<p>The @property rule is here used to animate a gradient:</p>

<div id="grad1" class="ex1"></div>

</body>
</html>
```
# CSS Media Queries
Media queries allow you to apply styles based on the characteristics of a device or the environment displaying the web page.    
Essential for creating responsive web pages.  
## Media  Query Syntax
```
@media [not] media-type and (media-feature: value) and (media-feature: value) {
  /*CSS rule to apply.*/
}
```
`media-type` is optional. However, if you use **not**, you must specify a media-type.  
The result of a media query is true if the specified media-type matches the type of device, and all media-features are true.  
When a media query is true, the corresponding style rules are applied, following the normal cascading rules.  
**not:** This optional keyword inverts the meaning of the entire media query.
**and:** This keyword combines a media-type and one or more media-features. 
**,** Acts like an OR operator;the style applies if any of the queries is true.  
## CSS Media Types
Optional. Specifies the type of media the styles are intended for.  
If a media type is omitted, it will be set to `all`.  
- `all` Used for all media type devices.  
- `print` Used for print preview mode.  
- `screen` Used for computer screens, tablets and smart-phones.  
- `speech` Intended for speech synthesizers that read the page aloud.  
### CSS Media Features
- `max-height`	Maximum height of the viewport
- `min-height`	Minimum height of the viewport
- `height	Height` of the viewport (including scrollbar)
- `max-width`	Maximum width of the viewport
- `min-width`	Minimum width of the viewport
- `width`	Width of the viewport (including scrollbar)
- `orientation`	Orientation of the viewport (landscape or portrait)
- `resolution`	Screen resolution
- `prefers-color-scheme`	User's preferred color scheme (light or dark)  
- `prefers-reduced-motion` user may have asked to reduce motion, such as animations and transitions.   
**hover** Detects if the primary input mechanism can hover over elements (e.g., a mouse vs. a touchscreen).   
##### Example
```css
@media screen and (min-width: 480px) and (max-width: 768px) {
  body {
    background-color: lightgreen;
  }
}
```
#### Media Queries for Columns
```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

/* Container for flexboxes */
.container {
  display: flex;
  flex-wrap: wrap;
}

/* Create four equal columns */
.column {
  flex: 25%;
  padding: 20px;
}

/* On screens that are 992px wide or less, go from four columns to two columns */
@media screen and (max-width: 992px) {
  .column {
    flex: 50%;
  }
}

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
</style>
</head>
<body>

<h2>Responsive four-column layout</h2>
<p><strong>Resize the browser window to see the effect.</strong></p>
<p>On screens that are 992px wide or less, the columns will resize from four columns to two columns. On screens that are 600px wide or less, the columns will stack on top of each other instead of next to eachother.</p>

<div class="container">
  <div class="column" style="background-color:#aaa;">
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  
  <div class="column" style="background-color:#bbb;">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
  
  <div class="column" style="background-color:#ccc;">
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
  
  <div class="column" style="background-color:#ddd;">
    <h2>Column 4</h2>
    <p>Some text..</p>
  </div>
</div>

</body>
</html>
```
#### Media Queries For Menus
```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  margin: 0;
  padding: 0;
}

h2, p {
  margin: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #333333;
  display: flex;
}

ul li a {
  display: block;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
}

ul li a:hover {
  background-color: #111111;
}

/* For viewport width 600px or less, make the menu links stack on top of each other */
@media screen and (max-width: 600px) {
  ul {flex-direction: column;}
}
</style>
</head>
<body>

<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

<h2>Responsive navigation menu</h2>

<p>When the screen is less than 600px, the navigation menu will be displayed vertically instead of horizontally.</p>

<p><strong>Resize the browser window to see the effect.</strong></p>


</body>
</html>
```
#### Hide Elements With Media Queries 
```css
/* Hide element if the viewport width is 600px or less */
@media screen and (max-width: 600px) {
  #div1 {
    display: none;
  }
}
```
#### Change Font Size with Media Queries
```css
/* If viewport width is 600px or more, set font-size to 80px */
@media screen and (min-width: 600px) {
  #div1 {
    font-size: 80px;
  }
}
```
### Media Queries For Screen Orientation
Media queries can also be used to change the layout of a page depending on the orientation of the screen.  
Here, we change the background-color of the body, if the screen orientation is in landscape mode:  
```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```
### Media Queries for Users with Preferences
```css
@media (prefers-reduced-motion: reduce) {
  *{
    animation: none !important;
    transition: none !important
  }
}
```
# RWD 
Key components in responsive web design are: 
- Viewport `<meta>` tag. 
- Flexible layout (grid and flex)
- Media queries
```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Lucida Sans", sans-serif;
  font-size: 17px;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header'
    'menu'
    'main'
    'facts'
    'footer';
  background-color: white;
  gap: 10px;  
}

.header {
  grid-area: header;
  background-color: purple;
  text-align: center;
  color: #ffffff;
}

.header > h1 {
  font-size: 40px;
}

.menu {
  grid-area: menu;
  }
  
.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
}

.menu li:hover {
  background-color: #0099cc;
}
  
.content {
  grid-area: main;
}

.content > h1 {
  font-size: 30px;
  margin-bottom: 7px;
}

.content > p {
  margin-bottom: 7px;
}

.facts {
  grid-area: facts;
  border: 1px solid #0099cc;
  background-color: beige;
  padding: 10px;
}

.facts > h2 {
  font-size: 20px;
}

.facts li {
  margin-bottom: 5px;
}

.footer {
  grid-area: footer;
  background-color: #0099cc;
  color: #ffffff;
  text-align: center;
}

@media (min-width: 600px) {
  .header {grid-area: 1 / span 6;}
  .menu {grid-area: 2 / span 1;}
  .content {grid-area: 2 / span 4;}
  .facts {grid-area: 3 / span 6;}
  .footer {grid-area: 4 / span 6;}
}

@media (min-width: 768px) {
  .header {grid-area: 1 / span 6;}
  .menu {grid-area: 2 / span 1;}
  .content {grid-area: 2 / span 4;}
  .facts {grid-area: 2 / span 1;}
  .footer {grid-area: 3 / span 6;}
}
</style>
</head>
<body>

<div class="grid-container">

<div class="header"><h1>Chania</h1></div>

<div class="menu">
  <ul>
    <li>The Flight</li>
    <li>The City</li>
    <li>The Island</li>
    <li>The Food</li>
  </ul>
</div>

<div class="content">
  <h1>The City</h1>
  <p>Chania is the capital of the Chania region on the island of Crete.</p>
  <p>The city can be divided in two parts, the old town and the modern city. The old town is situated next to the old harbour and is the matrix around which the whole urban area was developed.</p>
  <p>Chania lies along the north west coast of the island Crete.</p>
</div>  

<div class="facts">
  <h2>Facts:</h2>
  <ul>
    <li>Chania is a city on the island of Crete</li>
    <li>Crete is a Greek island in the Mediterranean Sea</li>
  </ul>
</div>

<div class="footer"><p>Resize the browser window to see the responsive effect.</p></div>
  
</div>

</body>
</html>
```
## The Viewport
The visible area of a web page.  
You should include the `<meta>` element in the `<head>` section of all of all your web pages.    
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
This gives the browser instructions on how to control the page's dimensions and scaling.  
The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).   
The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser.  
Some additional rules to follow:   
**Do NOT use large fixed-width elements** For example, if an image has a width wider than the viewport, it causes the viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport.  
**Do NOT let the content rely on a particular width to render well**  Since screen dimensions vary widely between devices, content should not rely on a particular viewport width to render well.  
**Use CSS media queries to apply different styling for small and large screens**  Setting large absolute CSS widths for page elements will cause the elements to be too wide for smaller devices. Instead, consider using relative width values, such as width: 100%. Also, be careful of using large absolute positioning values. It may cause the element to fall outside the viewport on small devices.  
## RWD - Media Queries
```css
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Lucida Sans", sans-serif;
  font-size: 17px;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header'
    'menu'
    'main'
    'facts'
    'footer';
  background-color: white;
  gap: 10px;  
}

.header {
  grid-area: header;
  background-color: purple;
  text-align: center;
  color: #ffffff;
}

.header > h1 {
  font-size: 40px;
}

.menu {
  grid-area: menu;
  }
  
.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
}

.menu li:hover {
  background-color: #0099cc;
}
  
.content {
  grid-area: main;
}

.content > h1 {
  font-size: 30px;
  margin-bottom: 7px;
}

.content > p {
  margin-bottom: 7px;
}

.facts {
  grid-area: facts;
  border: 1px solid #0099cc;
  background-color: beige;
  padding: 10px;
}

.facts > h2 {
  font-size: 20px;
}

.facts li {
  margin-bottom: 5px;
}

.footer {
  grid-area: footer;
  background-color: #0099cc;
  color: #ffffff;
  text-align: center;
}

@media (min-width: 600px) {
  .header {grid-area: 1 / span 6;}
  .menu {grid-area: 2 / span 1;}
  .content {grid-area: 2 / span 4;}
  .facts {grid-area: 2 / span 1;}
  .footer {grid-area: 3 / span 6;}
}
</style>
</head>
<body>

<div class="grid-container">

<div class="header"><h1>Chania</h1></div>

<div class="menu">
  <ul>
    <li>The Flight</li>
    <li>The City</li>
    <li>The Island</li>
    <li>The Food</li>
  </ul>
</div>

<div class="content">
  <h1>The City</h1>
  <p>Chania is the capital of the Chania region on the island of Crete.</p>
  <p>The city can be divided in two parts, the old town and the modern city. The old town is situated next to the old harbour and is the matrix around which the whole urban area was developed.</p>
  <p>Chania lies along the north west coast of the island Crete.</p>
</div>  

<div class="facts">
  <h2>Facts:</h2>
  <ul>
    <li>Chania is a city on the island of Crete</li>
    <li>Crete is a Greek island in the Mediterranean Sea</li>
  </ul>
</div>

<div class="footer"><p>Resize the browser window to see the responsive effect.</p></div>
  
</div>

</body>
</html>
```
### Typical Device Breakpoints
There are tons of screens and devices with different heights and widths, so it is hard to create an exact breakpoint for each device. To keep things simple you could target five groups:  
```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```
## RWD - Images
### Using width Property
If the `width` property is set to a `percentage` and the `height` property set to `auto`, the image will be responsive and scale up and down.    
```css
img {
  width: 100%;
  height: auto;
}
```
### Using the max-width Property
If the max-width propert is set to 100%, the image will scale up and down if it has to, but never scale up to be larger than it's original size.  
```css
img {
  max-width: 100%;
  height: auto;
}
```
### Background Images
Background images can also respond to resizing and scaling.  
- `background-size: contain;` The background image will scale up and down, and tries to fit the content area. However, the image will keep its aspect ratio (the proportional relationship between the image's width and height):  
```css
div {
  width: 100%;
  height: 400px;
  background-image: url('img_flowers.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid black;
}
```
- `background-size: 100% 100%;` The background image will stretch to cover the entire content area:  
```css
div {
  width: 100%;
  height: 400px;
  background-image: url('img_flowers.jpg');
  background-size: 100% 100%;
  border: 1px solid black;
}
```
- `background-size: cover;` The background image will scale to cover the entire content area. The "cover" value keeps the aspect ratio, and some part of the background image may be clipped:    
```css
div {
  width: 100%;
  height: 400px;
  background-image: url('img_flowers.jpg');
  background-size: cover;
  border: 1px solid black;
}
```
### Different Images For Different Devices.
```css
/* For width smaller than 400px: */
body {
  background-image: url('img_smallflower.jpg');
}

/* For width 400px and larger: */
@media only screen and (min-width: 400px) {
  body {
    background-image: url('img_flowers.jpg');
  }
}
```
### The HTML `<picture>` Element
Gives web developers more flexibility in specifying image resources.  
The most common use of the `<picture>` element will be for images used in responsive designs. Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more nicely fill the browser viewport.  
The `<picture>` element works similar to the `<video>` and `<audio>` elements. You set up different sources, and the first source that fits the preferences is the one being used: 
```html
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 400px)">
  <source srcset="img_flowers.jpg">
  <img src="img_flowers.jpg" alt="Flowers">
</picture>
```
The `srcset` attribute is required, and defines the source of the image.  
The `media` attribute is optional, and accepts the media queries you find in CSS @media rule.  
You should also define an `<img>` element for browsers that do not support the `<picture>` element.  
### Responsive Image Grid
```html
<!DOCTYPE html>
<html>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
}

.header {
  text-align: center;
  padding: 32px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
<body>

<!-- Header -->
<div class="header">
  <h1>Responsive Image Gallery</h1>
  <p>Resize the browser window to see the responsive effect.</p>
</div>

<!-- Photo Grid -->
<div class="container"> 
  <div class="column">
    <img src="/w3images/wedding.jpg" style="width:100%">
    <img src="/w3images/rocks.jpg" style="width:100%">
    <img src="/w3images/falls2.jpg" style="width:100%">
    <img src="/w3images/paris.jpg" style="width:100%">
    <img src="/w3images/nature.jpg" style="width:100%">
    <img src="/w3images/mist.jpg" style="width:100%">
    <img src="/w3images/paris.jpg" style="width:100%">
  </div>
  
  <div class="column">
    <img src="/w3images/underwater.jpg" style="width:100%">
    <img src="/w3images/ocean.jpg" style="width:100%">
    <img src="/w3images/wedding.jpg" style="width:100%">
    <img src="/w3images/mountainskies.jpg" style="width:100%">
    <img src="/w3images/rocks.jpg" style="width:100%">
    <img src="/w3images/underwater.jpg" style="width:100%">
  </div> 
   
  <div class="column">
    <img src="/w3images/wedding.jpg" style="width:100%">
    <img src="/w3images/rocks.jpg" style="width:100%">
    <img src="/w3images/falls2.jpg" style="width:100%">
    <img src="/w3images/paris.jpg" style="width:100%">
    <img src="/w3images/nature.jpg" style="width:100%">
    <img src="/w3images/mist.jpg" style="width:100%">
    <img src="/w3images/paris.jpg" style="width:100%">
  </div>
  
  <div class="column">
    <img src="/w3images/underwater.jpg" style="width:100%">
    <img src="/w3images/ocean.jpg" style="width:100%">
    <img src="/w3images/wedding.jpg" style="width:100%">
    <img src="/w3images/mountainskies.jpg" style="width:100%">
    <img src="/w3images/rocks.jpg" style="width:100%">
    <img src="/w3images/underwater.jpg" style="width:100%">
  </div>
</div>

</body>
</html>
```
## RWD - Videos
### Using the width property
If the `width` property is set to `100%`, the video player will be responsive and scale up and down:    
```css
video {
  width: 100%;
  height: auto;
}
```
### Using the max-width Property
If the `max-width` property is set to 100%, the video player will scale down if it has to, but never scale up to be larger than its original size:  
```css
video {
  max-width: 100%;
  height: auto;
}
```
```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Lucida Sans", sans-serif;
  font-size: 17px;
}

video {
  width: 100%;
  height: auto;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header'
    'menu'
    'main'
    'facts'
    'footer';
  background-color: white;
  gap: 10px;  
}

.header {
  grid-area: header;
  background-color: purple;
  text-align: center;
  color: #ffffff;
}

.header > h1 {
  font-size: 40px;
}

.menu {
  grid-area: menu;
  }
  
.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
}

.menu li:hover {
  background-color: #0099cc;
}
  
.content {
  grid-area: main;
}

.content > h1 {
  font-size: 30px;
  margin-bottom: 7px;
}

.content > p {
  margin-bottom: 7px;
}

.facts {
  grid-area: facts;
  border: 1px solid #0099cc;
  background-color: beige;
  padding: 10px;
}

.facts > h2 {
  font-size: 20px;
}

.facts li {
  margin-bottom: 5px;
}

.footer {
  grid-area: footer;
  background-color: #0099cc;
  color: #ffffff;
  text-align: center;
}

@media (min-width: 600px) {
  .header {grid-area: 1 / span 6;}
  .menu {grid-area: 2 / span 1;}
  .content {grid-area: 2 / span 4;}
  .facts {grid-area: 3 / span 6;}
  .footer {grid-area: 4 / span 6;}
}

@media (min-width: 768px) {
  .header {grid-area: 1 / span 6;}
  .menu {grid-area: 2 / span 1;}
  .content {grid-area: 2 / span 4;}
  .facts {grid-area: 2 / span 1;}
  .footer {grid-area: 3 / span 6;}
}
</style>
</head>
<body>

<div class="grid-container">

<div class="header"><h1>Chania</h1></div>

<div class="menu">
  <ul>
    <li>The Flight</li>
    <li>The City</li>
    <li>The Island</li>
    <li>The Food</li>
  </ul>
</div>

<div class="content">
  <h1>The City</h1>
  <p>Chania is the capital of the Chania region on the island of Crete.</p>
  <p>The city can be divided in two parts, the old town and the modern city. The old town is situated next to the old harbour and is the matrix around which the whole urban area was developed.</p>
  <p>Chania lies along the north west coast of the island Crete.</p>
  <video width="400" controls>
    <source src="mov_bbb.mp4" type="video/mp4">
    <source src="mov_bbb.ogg" type="video/ogg">
    Your browser does not support HTML5 video.
  </video>
</div>  

<div class="facts">
  <h2>Facts:</h2>
  <ul>
    <li>Chania is a city on the island of Crete</li>
    <li>Crete is a Greek island in the Mediterranean Sea</li>
  </ul>
</div>

<div class="footer"><p>Resize the browser window to see the responsive effect.</p></div>
  
</div>

</body>
</html>
```
## RWD - Frameworks
- W3.CSS
- Bootstrap