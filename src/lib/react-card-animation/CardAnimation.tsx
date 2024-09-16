'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import './react-card-animation.css';

type CardAnimationType = {
  children: React.ReactElement;
  angle?: number;
};

type MousePositionType = {
  x: null | number;
  y: null | number;
};

export const CardAnimation = ({ children, angle = 30 }: CardAnimationType) => {
  const [mousePosition, setMousePosition] = useState<MousePositionType>({
    x: null,
    y: null,
  });
  const [isInMouse, setIsInMouse] = useState(false);
  const mousePositionRef = useRef<MousePositionType>({ x: null, y: null });
  const requestRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const containerWidth = containerRef?.current?.offsetWidth;
      const containerHeight = containerRef?.current?.offsetHeight;

      const mouseX = e.nativeEvent.offsetX; // 마우스 X 좌표
      const mouseY = e.nativeEvent.offsetY; // 마우스 Y 좌표

      document.body?.style.setProperty('--card-animation-lighting-x', `${mouseX}px`);
      document.body?.style.setProperty('--card-animation-lighting-y', `${mouseY}px`);

      const xRatio = mouseX / (containerWidth ?? 1);
      const yRatio = mouseY / (containerHeight ?? 1);

      const ratio = angle;

      const xValue = ratio - xRatio * (ratio * 2);
      const yValue = ratio - yRatio * (ratio * 2);

      mousePositionRef.current = { x: -yValue, y: xValue };
      setIsInMouse(true);
    },
    [angle],
  );

  const handleMouseOut = useCallback(() => {
    setTimeout(() => {
      setIsInMouse(false);
    }, 500);
  }, []);

  const loop = useCallback(() => {
    setMousePosition(mousePositionRef.current);
    requestRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(requestRef.current ?? 0);
      document.body.style.removeProperty('--card-animation-lighting-x');
      document.body.style.removeProperty('--card-animation-lighting-y');
    };
  }, [loop]);

  return React.cloneElement(children, {
    ref: containerRef,
    onMouseMove: handleMouseMove,
    onMouseOut: handleMouseOut,
    style: {
      ...children.props.style,
      transform: `perspective(800px) rotateX(${isInMouse ? mousePosition.x : 0}deg) rotateY(${isInMouse ? mousePosition.y : 0}deg)`,
    },
    className: `${children.props.className ?? ''} card-animation`,
  });
};
