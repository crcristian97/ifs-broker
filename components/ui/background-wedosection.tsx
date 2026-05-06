"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const SQRT3 = Math.sqrt(3);

interface AnimatedGridPatternProps {
  /** Longitud del lado de cada triángulo equilátero (y ancho del mosaico de rombos). */
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: number | string;
  /** Número de triángulos animados (nombre histórico: antes eran “cuadrados”). */
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

type Cell = {
  id: number;
  /** Índice en mosaico de rombos: columna, fila, mitad superior o inferior del rombo. */
  pos: [col: number, row: number, upper: 0 | 1];
};

export function AnimatedGridPattern({
  width = 80,
  height: _height = 80,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay: _repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [cells, setCells] = useState<Cell[]>(() =>
    Array.from({ length: numSquares }, (_, i) => ({
      id: i,
      pos: [0, 0, 0] as [number, number, 0 | 1],
    })),
  );

  /** Altura de un triángulo equilátero de lado `width`. */
  const triH = (width * SQRT3) / 2;
  /** Un tile del patrón = un rombo (dos triángulos); alto = 2 * triH. */
  const patternH = 2 * triH;

  /** Vértices del triángulo equilátero dentro del rombo (col,row) en mosaico tipo ladrillo. */
  function getRhombusTrianglePoints(col: number, row: number, upper: 0 | 1) {
    const s = width;
    const h = triH;
    const xShift = (row % 2) * (s / 2);
    const ox = col * s + xShift;
    const oy = row * patternH;
    const Ax = ox + s / 2;
    const Ay = oy;
    const Bx = ox + s;
    const By = oy + h;
    const Cx = ox + s / 2;
    const Cy = oy + 2 * h;
    const Dx = ox;
    const Dy = oy + h;
    if (upper === 1) {
      return `${Ax},${Ay} ${Bx},${By} ${Dx},${Dy}`;
    }
    return `${Bx},${By} ${Cx},${Cy} ${Dx},${Dy}`;
  }

  function getPos(): [number, number, 0 | 1] {
    if (!dimensions.width || !dimensions.height || triH <= 0) {
      return [0, 0, 0];
    }
    const s = width;
    const maxCol = Math.max(1, Math.floor(dimensions.width / s) + 3);
    const maxRow = Math.max(1, Math.floor(dimensions.height / patternH) + 3);
    return [
      Math.floor(Math.random() * maxCol),
      Math.floor(Math.random() * maxRow),
      Math.random() < 0.5 ? 0 : 1,
    ];
  }

  function generateCells(count: number): Cell[] {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }));
  }

  const updateCellPosition = (cellId: number) => {
    setCells((current) =>
      current.map((sq) =>
        sq.id === cellId
          ? {
              ...sq,
              pos: getPos(),
            }
          : sq,
      ),
    );
  };

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setCells(generateCells(numSquares));
    }
  }, [dimensions, numSquares, width]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    const el = containerRef.current;
    if (el) {
      resizeObserver.observe(el);
    }

    return () => {
      if (el) {
        resizeObserver.unobserve(el);
      }
    };
  }, []);

  /** Rombo (solo ángulos 60°/120°): sin segmentos en ángulo recto ni cuadrícula rectangular. */
  const rhombusTilePath = `M ${width / 2} 0 L ${width} ${triH} L ${width / 2} ${patternH} L 0 ${triH} Z`;

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full stroke-[#91D8F7]/40",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={patternH}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={rhombusTilePath} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {cells.map(({ pos: [col, row, upper], id: cellId }, index) => (
          <motion.polygon
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
            }}
            onAnimationComplete={() => updateCellPosition(cellId)}
            key={`tri-${cellId}-${col}-${row}-${upper}-${index}`}
            points={getRhombusTrianglePoints(col, row, upper)}
            fill="#91D8F7"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}
