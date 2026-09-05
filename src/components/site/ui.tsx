import type { CSSProperties, ReactNode } from "react";

/** 1200px content column — the design canvas is 1440 wide with 120px gutters. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-8 xl:px-0 ${className}`}>
      {children}
    </div>
  );
}

/** 〔 label 〕 — blue brackets, 2px round stroke, from the Figma export. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`flex h-[18px] w-fit items-center gap-[8px] ${className}`}>
      <svg width="8" height="18" viewBox="119 121 8 18" fill="none" aria-hidden="true">
        <path
          d="M126 122H124C121.791 122 120 123.791 120 126V134C120 136.209 121.791 138 124 138H126"
          stroke="#004DFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[14px] leading-none whitespace-nowrap">{children}</span>
      <svg width="8" height="18" viewBox="751 121 8 18" fill="none" aria-hidden="true">
        <path
          d="M751.5 122H753.5C755.709 122 757.5 123.791 757.5 126V134C757.5 136.209 755.709 138 753.5 138H751.5"
          stroke="#004DFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/**
 * Fixed-ratio artwork lifted straight out of the Figma SVG, with live text
 * layered on top. Children position themselves in % of the design box and size
 * their type in `cqw`, so the overlay tracks the artwork at any width.
 */
export function ArtLayer({
  src,
  w,
  h,
  className = "",
  children,
}: {
  src: string;
  w: number;
  h: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ aspectRatio: `${w} / ${h}`, containerType: "inline-size" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full" />
      {children}
    </div>
  );
}

/** Absolutely-positioned live text inside an <ArtLayer>. Coordinates are design px. */
export function ArtText({
  box,
  origin = [0, 0],
  x,
  y,
  size,
  width,
  lineHeight,
  color,
  weight = 500,
  align = "left",
  middle = false,
  className = "",
  children,
}: {
  box: [number, number];
  /** top-left of the artwork crop in design-canvas coordinates */
  origin?: [number, number];
  x: number;
  /** top edge of the text, or its vertical centre when `middle` is set */
  y: number;
  size: number;
  width?: number;
  lineHeight?: number;
  color: string;
  weight?: number;
  align?: "left" | "center" | "right";
  /** centre on `y` instead of hanging from it — keeps labels centred in a pill
   *  even when a locale needs a different font size */
  middle?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const [bw, bh] = box;
  const style: CSSProperties = {
    left: `${((x - origin[0]) / bw) * 100}%`,
    top: `${((y - origin[1]) / bh) * 100}%`,
    fontSize: `${(size / bw) * 100}cqw`,
    lineHeight: lineHeight ? `${(lineHeight / bw) * 100}cqw` : 1.2,
    color,
    fontWeight: weight,
    textAlign: align,
    width: width ? `${(width / bw) * 100}%` : undefined,
    transform: middle ? "translateY(-50%)" : undefined,
  };
  return (
    <span className={`absolute whitespace-pre-wrap ${className}`} style={style}>
      {children}
    </span>
  );
}
