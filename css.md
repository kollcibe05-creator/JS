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
