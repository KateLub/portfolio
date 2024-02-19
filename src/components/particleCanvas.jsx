/* Inspired by by WindOso (https://codepen.io/WindOso/pen/PoXBYdb)*/

import React, { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.background = "#0c0a16";

    function clearCanvas() {
      ctx.fillStyle = 'rgba(12,10,22,0.07)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    class Particle {
          constructor(x, y, speed, color) {
              this.x = x;
              this.y = y;
              this.speed = speed;

              this.update = function () {
                  ctx.strokeStyle = color;
                  ctx.lineWidth = 1;
                  ctx.lineCap = 'round';
                  ctx.beginPath();
                  ctx.moveTo(this.x, this.y);
                  this.x += this.speed.x;
                  this.y += this.speed.y;
                  ctx.lineTo(this.x, this.y);
                  ctx.stroke();

                  this.angle = Math.atan2(this.speed.y, this.speed.x);
                  this.magnitude = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
                  const options = [this.angle + Math.PI / 4, this.angle - Math.PI / 4];
                  const randomIndex = Math.floor(Math.random() * options.length);
                  if (Math.random() < 0.05) {
                      this.speed.x = Math.cos(options[randomIndex]) * this.magnitude;
                      this.speed.y = Math.sin(options[randomIndex]) * this.magnitude;
                  }

                  if (Math.random() < 0.005) {
                      ctx.beginPath();
                      ctx.arc(this.x + (this.speed.x), this.y + (this.speed.y), 5, 0, 2 * Math.PI);
                      ctx.stroke();
                      this.speed.x = 0;
                      this.speed.y = 0;
                  }
              };
          }
      }

    const speed = 5;
    const period = 1000;

    function pulse() {
      setTimeout(pulse, period);
      const h = Math.random() * 60 + 300; // Random shades of red
      const startingX = 0; // Start from left
      const startingY = canvas.height; // Start from bottom
      for (let i = 0; i < 56; i++) {
        particles.current.push(new Particle(startingX, startingY, {
          x: Math.cos((i / 4) * Math.PI) * speed,
          y: Math.sin((i / 4) * Math.PI) * speed,
        }, `hsl(${h},100%,50%)`));
      }
    }

    function gameMove() {
      requestAnimationFrame(gameMove);
      clearCanvas();
      for (let i = 0; i < particles.current.length; i++) {
        particles.current[i].update();
        if (particles.current[i].x < 0 || particles.current[i].x > canvas.width || 
            particles.current[i].y < 0 || particles.current[i].y > canvas.height ||
            particles.current[i].speed.x == 0 || particles.current[i].speed.y == 0) {
          particles.current.splice(i, 1);
        }
      }
    }

    pulse();
    gameMove();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      clearCanvas();
    };

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(gameMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ParticleCanvas;
