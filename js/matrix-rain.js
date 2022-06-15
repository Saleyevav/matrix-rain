"use strict";
const matrixRain = (function () {
  const defaultOptions = { fontSize: 24, fps: 60, color: "green" };

  function Symbol(x, y, fontSize, canvasHeight, color) {
    this.characters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = "";
    this.canvasHeight = canvasHeight;
    this.draw = function (context) {
      this.text = this.characters.charAt(
        Math.floor(Math.random() * this.characters.length)
      );
      context.fillStyle = color;
      context.fillText(
        this.text,
        this.x * this.fontSize,
        this.y * this.fontSize
      );
      if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
        this.y = 0;
      } else {
        this.y += 1;
      }
    };
  }

  function Effect(canvasWidth, canvasHeight, options) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = options.fontSize;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.init = function () {
      for (let i = 0; i < this.columns; i++) {
        this.symbols[i] = new Symbol(
          i,
          0,
          this.fontSize,
          this.canvasHeight,
          options.color
        );
      }
    };
    this.init();
    this.resize = function (width, height) {
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.init();
    };
  }

  return function (canvasId, clientOptions) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const options = {
      ...defaultOptions,
      ...clientOptions,
    };

    const effect = new Effect(canvas.width, canvas.height, options);
    let lastTime = 0;
    const fps = options.fps;
    const nextFrame = 1000 / fps;
    let timer = 0;
    window.addEventListener("resize", function () {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      effect.resize(canvas.width, canvas.height);
    });
    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      if (timer > nextFrame) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.textAlign = "center";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = effect.fontSize + "px monospace";
        effect.symbols.forEach((symbol) => symbol.draw(ctx));
        timer = 0;
      } else {
        timer += deltaTime;
      }

      requestAnimationFrame(animate);
    }

    return function () {
      animate(1);
    };
  };
})();
