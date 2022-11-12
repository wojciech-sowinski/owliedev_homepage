import { useRef, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";

const CanvasBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);

  const canvasRender = () => {
    const canvas = canvasRef.current;

    const fill = darkMode ? `rgba(0,0,0,1)` : `rgba(250,250,250,1)`;
    const refreshFill = darkMode ? `rgba(0,0,0,0.3)` : `rgba(250,250,250,0.3)`;
    const lineColor = darkMode ? "#e3e3e340" : "#4e4e4e40";

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
    ctx.fillStyle = fill;
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = fill;
    });

    const Polygon = function () {
      const colors = ["#f0f0f0", "#e3e3e3", "#f5f5f5"];

      this.x = 0;
      this.y = 0;
      this.originX = Math.random() * canvas.clientWidth;
      this.originY = Math.random() * canvas.clientHeight;
      this.radius = 3000;
      this.sides = 3;
      this.rotate = 100 * Math.random();
      this.rotationSpeed = Math.random() - 0.5;
      this.moveSpeedX = (Math.random() - 0.5) / 2;
      this.moveSpeedY = (Math.random() - 0.5) / 2;
      this.color = lineColor;
      this.colorActive = "#ff980004";

      this.draw = function () {
        if (
          mouse.x > this.originX - 100 &&
          mouse.x < this.originX + 100 &&
          mouse.y > this.originY - 100 &&
          mouse.y < this.originY + 100
        ) {
          this.color = "#ff980010";
        } else {
          this.color = "#e3e3e340";
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
          const x = 30 * Math.sin(angle * i) + this.x;
          const y = 30 * Math.cos(angle * i) + this.y;
          i == 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        // ctx.fill();
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

    for (let i = 0; i < 100; i++) {
      polygons.push(new Polygon());
    }

    const animate = function () {
      window.requestAnimationFrame(animate);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = refreshFill;
      polygons.forEach((polygon) => {
        polygon.update();
        polygon.draw();
      });
    };

    animate();
  };

  useEffect(() => {
    canvasRender();
  }, [darkMode]);

  return ReactDOM.createPortal(
    <canvas id={"canvas-background"} ref={canvasRef}>
      {console.log("canvas")}
    </canvas>,
    document.body
  );
};

export default CanvasBackground;
