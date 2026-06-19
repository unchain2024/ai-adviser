"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedCounter({
  value,
  className = "",
  prefix = "",
  suffix = "",
}: {
  value: string;
  className?: string;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {prefix}
      <NumberRoll value={value} />
      {suffix}
    </motion.span>
  );
}

function NumberRoll({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("00");

  useEffect(() => {
    if (!isInView) return;

    const num = parseInt(value, 10);
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const totalFrames = 20;
    const id = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(num * progress);
      setDisplay(String(current).padStart(2, "0"));
      if (frame >= totalFrames) {
        clearInterval(id);
        setDisplay(value);
      }
    }, 40);

    return () => clearInterval(id);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}
