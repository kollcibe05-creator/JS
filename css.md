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
