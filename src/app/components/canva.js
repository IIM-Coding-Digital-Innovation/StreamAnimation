import { useEffect, useRef } from 'react';
import styles from "../assets/styles/page.module.css";

const ShapeCanvas = () => {
  const canvasRef = useRef(null);
  const currentVerticesRef = useRef(null);
  const lastDrawTimeRef = useRef(performance.now());
  const redrawIntervalRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const numVertices = 6;

    if (canvasRef.current) {
        canvasRef.current.classList.add('yes');
    }

    const draw = () => {
      const currentTime = performance.now();
      const elapsedTime = currentTime - lastDrawTimeRef.current;

      if (elapsedTime > redrawIntervalRef.current) {
        redrawIntervalRef.current = 20000;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const vertices = currentVerticesRef.current || [];
        if (vertices.length !== numVertices) {
          for (let i = 0; i < numVertices; i++) {
            vertices[i] = {
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height
            };
          }
        }

        const targetVertices = [];
        for (let i = 0; i < numVertices; i++) {
          targetVertices[i] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
          };
        }

        const duration = 10000;
        let startTime = currentTime;

        const tween = () => {
          const now = performance.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const currentVertices = [];

          for (let i = 0; i < numVertices; i++) {
            const startX = vertices[i].x;
            const startY = vertices[i].y;
            const targetX = targetVertices[i].x;
            const targetY = targetVertices[i].y;

            const x = startX + (targetX - startX) * progress;
            const y = startY + (targetY - startY) * progress;

            currentVertices.push({ x, y });
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          ctx.beginPath();
          ctx.moveTo(currentVertices[0].x, currentVertices[0].y);
          for (let i = 1; i < numVertices; i++) {
            ctx.lineTo(currentVertices[i].x, currentVertices[i].y);
          }
          ctx.closePath();

          ctx.fillStyle = '#6441A4';
          ctx.fill();

          if (progress < 1) {
            requestAnimationFrame(tween);
          } else {
            startTime = now;
            currentVerticesRef.current = targetVertices;
          }
        };

        tween();

        lastDrawTimeRef.current = currentTime;
      }

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

    return () => cancelAnimationFrame(draw);
  }, []);

  return <canvas className={styles.canvas} ref={canvasRef}></canvas>;
};

export default ShapeCanvas;
