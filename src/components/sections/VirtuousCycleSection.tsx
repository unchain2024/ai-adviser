"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function VirtuousCycleSection() {
  const t = useTranslations("virtuousCycle");

  const positions = [
    { x: 150, y: 30 },   // top
    { x: 270, y: 150 },  // right
    { x: 150, y: 270 },  // bottom
    { x: 30, y: 150 },   // left
  ];

  return (
    <SectionReveal>
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:px-12 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          05
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("title")}
        </h2>
        <p className="mt-6 max-w-[720px] text-[17px] text-text-secondary">
          {t("desc")}
        </p>

        {/* Cycle diagram */}
        <div className="mt-16 flex justify-center">
          <svg viewBox="0 0 300 300" className="h-auto w-full max-w-[400px]">
            {/* Animated dashed circle */}
            <circle
              cx="150"
              cy="150"
              r="100"
              fill="none"
              className="stroke-svg-stroke"
              strokeWidth="1"
              strokeDasharray="4 4"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 150 150"
                to="360 150 150"
                dur="30s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Arrow arcs between nodes */}
            {[0, 1, 2, 3].map((i) => {
              const angle1 = (i * 90 - 90) * (Math.PI / 180);
              const angle2 = ((i + 1) * 90 - 90) * (Math.PI / 180);
              const midAngle = ((i * 90 + 45) - 90) * (Math.PI / 180);
              const r = 100;
              const x1 = 150 + Math.cos(angle1) * r;
              const y1 = 150 + Math.sin(angle1) * r;
              const x2 = 150 + Math.cos(angle2) * r;
              const y2 = 150 + Math.sin(angle2) * r;
              const mx = 150 + Math.cos(midAngle) * (r + 15);
              const my = 150 + Math.sin(midAngle) * (r + 15);
              return (
                <path
                  key={i}
                  d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
                  fill="none"
                  className="stroke-svg-stroke"
                  strokeWidth="1"
                  markerEnd="url(#arrowhead)"
                />
              );
            })}

            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="6"
                refX="8"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L8,3 L0,6" fill="none" className="stroke-svg-stroke" strokeWidth="1" />
              </marker>
            </defs>

            {/* Center pulse */}
            <ellipse
              cx="150"
              cy="148"
              rx="32"
              ry="10"
              className="fill-accent/5"
            >
              <animate
                attributeName="rx"
                values="32;36;32"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0.5;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </ellipse>

            {/* Center text */}
            <text
              x="150"
              y="151"
              textAnchor="middle"
              className="fill-text-tertiary text-[11px] font-semibold tracking-[0.12em] uppercase"
            >
              {t("center")}
            </text>

            {/* Nodes with hover pulse */}
            {positions.map((pos, i) => (
              <g key={i} className="cursor-pointer">
                {/* Pulse ring */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="24"
                  fill="none"
                  className="stroke-accent/20"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="r"
                    values="24;30;24"
                    dur={`${2 + i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0;0.3"
                    dur={`${2 + i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>

                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="24"
                  fill="white"
                  className="stroke-svg-node"
                  strokeWidth="2"
                />
                <text
                  x={pos.x}
                  y={pos.y + 4}
                  textAnchor="middle"
                  className="fill-text-primary text-[8px] font-semibold"
                >
                  {t(`nodes.${i}`)}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </SectionReveal>
  );
}
