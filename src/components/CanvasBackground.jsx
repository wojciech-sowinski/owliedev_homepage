import { useRef, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const CanvasBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);
  const [play, setPlay] = useState(true);


  function browserPerf() {
    //opera has problem with canvas render - reduce multiplier to 0.1 or 0.2

    const userAgent = navigator.userAgent
    if (userAgent.includes("Firefox")) {
      return 1;
    } else if (userAgent.includes("SamsungBrowser")) {
      return 0.1;
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
      return 0.2;
    } else if (userAgent.includes("Trident")) {
      return 1;
    } else if (userAgent.includes("Edge")) {
      return 1;
    } else if (userAgent.includes("Edg")) {
      return 1;
    } else if (userAgent.includes("Chrome")) {
      return 1;
    } else if (userAgent.includes("Safari")) {
      return 0.1;
    } else {
      return 0.1;
    }
  }


  useEffect(() => {

    const polygonsCount = ((window.innerWidth * window.innerHeight) / 20000) * browserPerf();

    let requestFrameId;
    let fps;
    const canvas = canvasRef.current;
    const fill = darkMode ? `rgba(30,30,30,1)` : `rgba(255,255,255,1)`;
    const refreshFill = darkMode
      ? `rgba(30,30,30,0.1)`
      : `rgba(255,255,255,0.1`;
    const lineColor = darkMode
      ? "rgba(40, 40, 40,1)"
      : "rgba(235, 235, 235, 1)";
    const activeLineColor = darkMode
      ? "rgba(80, 55, 0, 1)"
      : "rgb(255, 195, 106)";

    //mouse action
    const mouse = {
      x: undefined,
      y: undefined,
    };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    //initial fill

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = fill;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const polygons = [];
      for (
        let i = 0;
        i < (window.innerWidth * window.innerHeight) / 20000;
        i++
      ) {
        polygons.push(new Polygon());
      }
      ctx.fillStyle = fill;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    const Polygon = function () {
      this.x = 0;
      this.y = 0;
      this.originX = Math.random() * canvas.clientWidth;
      this.originY = Math.random() * canvas.clientHeight;
      this.radius = 3000;
      this.polygonRadius = Math.random() * 60;
      this.sides = 3;
      this.rotate = 100 * Math.random();
      this.rotationSpeed = Math.random() / 3 - 0.15;
      this.moveSpeedX = (Math.random() - 0.5);
      this.moveSpeedY = (Math.random() - 0.5);
      this.color = lineColor;

      this.draw = function () {
        ctx.save();

        if (
          mouse.x > this.originX - 100 &&
          mouse.x < this.originX + 100 &&
          mouse.y > this.originY - 100 &&
          mouse.y < this.originY + 100
        ) {
          this.color = activeLineColor;
        } else {
          this.color = lineColor;
        }

        const angle = (Math.PI * 2) / this.sides;

        ctx.translate(this.originX, this.originY);
        ctx.rotate((this.rotate * Math.PI) / 180);
        ctx.beginPath();

        for (let i = 0; i < this.sides; i++) {
          ctx.moveTo(0, 0);
          const x = this.radius * Math.sin(angle * i) + this.x;
          const y = this.radius * Math.cos(angle * i) + this.y;
          ctx.lineTo(x, y);
        }
        for (let i = 0; i < this.sides; i++) {
          const x = this.polygonRadius * Math.sin(angle * i) + this.x;
          const y = this.polygonRadius * Math.cos(angle * i) + this.y;
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.restore();
      };

      this.update = function () {
        this.rotate += this.rotationSpeed / 2;
        this.radius < this.rotationSpeed * 10 && (this.radius += 0.1);
        if (this.originX > canvas.width || this.originX < 0) {
          this.moveSpeedX = -this.moveSpeedX;
        }
        this.originY += this.moveSpeedY;
        if (this.originY > canvas.height || this.originY < 0) {
          this.moveSpeedY = -this.moveSpeedY;
        }
        this.originX += this.moveSpeedX;
      };
    };
    const polygons = [];

    for (let i = 0; i < polygonsCount; i++) {
      polygons.push(new Polygon());
    }

    const animate = function () {
      fps = setTimeout(() => {
        ctx.fillStyle = refreshFill;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        polygons.forEach((polygon) => {
          polygon.draw();
          polygon.update();
        });
        requestFrameId = window.requestAnimationFrame(animate);
      }, 1000 / 30);
    };

    animate();

    return () => {
      clearTimeout(fps);
      window.cancelAnimationFrame(requestFrameId);
    };
  }, [darkMode]);

  return ReactDOM.createPortal(
    <canvas id={"canvas-background"} ref={canvasRef}></canvas>,
    document.body
  );
};

export default CanvasBackground;
