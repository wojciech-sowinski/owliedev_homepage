import { useRef, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const CanvasBackground = ({ darkMode }) => {

  const canvasRef = useRef(null)
  const [play, setPlay] = useState(true)

  const canvasRender = () => {
  };

  useEffect(() => {

    const polygonsCount = window.innerWidth * window.innerHeight / 10000

    let requestFrameId
    const canvas = canvasRef.current
    const fill = darkMode ? `rgba(30,30,30,1)` : `rgba(255,255,255,1)`;
    const refreshFill = darkMode ? `rgba(30,30,30,0.1)` : `rgba(255,255,255,0.1)`;
    const lineColor = darkMode ? 'rgba(60, 60, 60,0.1)' : 'rgba(210, 210, 210, 0.1)'
    const activeLineColor = darkMode ? 'rgba(255, 152, 0, 0.08)' : 'rgba(255, 152, 0, 0.1)'


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

      console.log(window.innerWidth * window.innerHeight / 10000);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const polygons = [];
      for (let i = 0; i < window.innerWidth * window.innerHeight / 10000; i++) {
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
      this.polygonRadius = Math.random() * 60
      this.sides = 3;
      this.rotate = 100 * Math.random();
      this.rotationSpeed = Math.random() - 0.5;
      this.moveSpeedX = (Math.random() - 0.5) / 2;
      this.moveSpeedY = (Math.random() - 0.5) / 2;
      this.color = lineColor;

      this.draw = function () {

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

        ctx.save();
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
        this.radius < this.rotationSpeed * 100 && (this.radius += 0.1);
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
      ctx.fillStyle = refreshFill;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      polygons.forEach((polygon) => {
        polygon.draw();
        polygon.update();
      });
      requestFrameId = window.requestAnimationFrame(animate);
    }

    animate()

    return () => {
      window.cancelAnimationFrame(requestFrameId)
    }

  }, [darkMode]);

  return ReactDOM.createPortal(
    <canvas id={"canvas-background"} ref={canvasRef}>
    </canvas>,
    document.body
  );
};

export default CanvasBackground;
