import React, { useEffect, useRef, useState } from "react";

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const [mouse, setMouse] = useState({
    x: undefined,
    y: undefined,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    const radii = [3, 2, 1];
    const dotcolor = "white";
    const noOfDots = Math.floor(window.innerWidth / 20);
    const farDist = 120;
    const speedFactor = 0.6;
    const repelRadius = window.innerWidth / 8;

    const Circle = class {
      constructor(x, y, r, dx, dy, quad) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.circularPath = false;
        this.draw = () => {
          c.beginPath();
          c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
          c.strokeStyle = dotcolor;
          c.fillStyle = dotcolor;
          c.stroke();
          c.fill();
        };

        this.update = () => {
          if (this.x > innerWidth + 2 * r) {
            this.x = innerWidth - r;
            this.dx *= -1;
          } else if (this.x < -r) {
            this.x = r;
            this.dx *= -1;
          }
          if (this.y > innerHeight + 2 * r) {
            this.y = innerHeight - r;
            this.dy *= -1;
          } else if (this.y < -r) {
            this.y = r;
            this.dy *= -1;
          }

          if (quad == 0) {
            this.x += speedFactor * this.dx;
            this.y += speedFactor * this.dy;
          } else if (quad == 1) {
            this.x -= speedFactor * this.dx;
            this.y += speedFactor * this.dy;
          } else if (quad == 2) {
            this.x += speedFactor * this.dx;
            this.y -= speedFactor * this.dy;
          } else {
            this.x -= speedFactor * this.dx;
            this.y -= speedFactor * this.dy;
          }
          this.draw();
        };
      }
    };

    let tempArray = [];
    for (let i = 0; i < noOfDots; i++) {
      let r = radii[i % 3];
      let x = Math.random() * (innerWidth - 2 * r) + r;
      let y = Math.random() * (innerHeight - 2 * r) + r;
      let dx = Math.random() * 2;
      let dy = Math.random() * 2;
      tempArray.push(new Circle(x, y, r, dx, dy, i % 4));
    }

    const repel = (mousex, mousey) => {
      let arr = tempArray;
      for (let i = 0; i < arr.length; i++) {
        let dist = Math.sqrt(
          (arr[i].x - mousex) * (arr[i].x - mousex) +
            (arr[i].y - mousey) * (arr[i].y - mousey)
        );
        if (dist < repelRadius) {
          arr[i].y = mousey + (repelRadius * (arr[i].y - mousey)) / dist;
          arr[i].x = mousex + (repelRadius * (arr[i].x - mousex)) / dist;
        }
      }
      return arr;
    };

    const join = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          let dist = Math.sqrt(
            (arr[i].x - arr[j].x) * (arr[i].x - arr[j].x) +
              (arr[i].y - arr[j].y) * (arr[i].y - arr[j].y)
          );
          if (dist <= farDist) {
            let num = Math.floor(90 - dist / 2);
            let rep = num.toString();
            c.strokeStyle = `rgb(${rep},${rep},${rep})`;
            c.beginPath();
            c.moveTo(arr[i].x, arr[i].y);
            c.lineTo(arr[j].x, arr[j].y);
            c.stroke();
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, innerWidth, innerHeight);
      c.fillStyle = "#1c1e1e";
      c.fillRect(0, 0, canvas.width, canvas.height);
      join(tempArray);
      for (let i = 0; i < tempArray.length; i++) {
        tempArray[i].update();
      }
      repel(mouse.x, mouse.y);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  const mouseMoveEvent = (event) => {
    setMouse({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const clickEvent = (event) => {
    const radii = [3, 2, 1];
    const r = radii[Math.floor(Math.random() * 3)];
    const dx = Math.random() * 2;
    const dy = Math.random() * 2;
    const tempArr = dotArray.concat(
      Array.from(
        { length: 3 },
        () =>
          new Circle(
            event.clientX,
            event.clientY,
            r,
            dx,
            dy,
            1 + Math.floor(Math.random() * 4)
          )
      )
    );
    setDotArray(tempArr);
  };

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full bg-[#1c1e1e] absolute "
      onMouseMove={(e) => mouseMoveEvent(e)}
      onClick={(e) => clickEvent(e)}
    ></canvas>
  );
};

export default CanvasBackground;
