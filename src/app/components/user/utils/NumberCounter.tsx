"use client";
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const NumberCounter = ({ number }:any) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Percentage of the element's visibility
  });

  const props = useSpring({
    from: { number: 1 },
    number: inView ? number : 1,
    config: { duration: 2000 },
  });

  return (
    <div ref={ref}>
      <animated.div>{props.number.to(n => n.toFixed(0))}</animated.div>
    </div>
  );
};

export default NumberCounter;