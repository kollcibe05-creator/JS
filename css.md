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

