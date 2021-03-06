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

   - **fontSize**: `Number` (`24` by default) Font size of letters
   - **fps**: `Number` (`60` by default)Frames Per Second
   - **color**: `String` (`green` by default) Color of letters
