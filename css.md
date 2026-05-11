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
