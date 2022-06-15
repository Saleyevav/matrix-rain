# matrix-rain

This is javascript module that draws the matrix-rain effect on the canvas

### Screenshot

![Screenshot](./images/screenshot.png)

### Demo

[codesandbox.io](https://codesandbox.io/s/matrix-rain-ok0gjw)

### Installation

1. Put matrix-rain.js in your project
2. HTML:
   ```html
   <canvas id="canvasId"></canvas>
   <script src="matrix-rain.js"></script>
   ```
3. Javascript:

   ```javascript
   const matrix = matrixRain("canvasId");
   matrix();
   ```

   More styling options:

   ```javascript
   const matrix = matrixRain("canvasId", {
     fontSize: 15,
     fps: 30,
     color: "white",
   });
   matrix();
   ```

   **Properties**
   _ **fontSize**: `Number` _(`24` by default)_ Font size of letters
   _ **fps**: `Number` _(`60` by default)_ Frames Per Second
   _ **color**: `String` _(`green` by default)\* Color of letters
