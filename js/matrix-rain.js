"use strict";
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Symbol(x, y, fontSize, canvasHeight) {
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
    context.fillStyle = "green";
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  };
}

function Effect(canvasWidth, canvasHeight) {
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;
  this.fontSize = 25;
  this.columns = this.canvasWidth / this.fontSize;
  this.symbols = [];
  this.init = function () {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  };
  this.init();
  console.log(this.symbols);
}

const effect = new Effect(canvas.width, canvas.height);

function animate() {
  ctx.font = effect.fontSize + "px monospace";
  effect.symbols.forEach((symbol) => symbol.draw(ctx));
  requestAnimationFrame(animate);
}
animate();
