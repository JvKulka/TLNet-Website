import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: "dark" | "light";
}

export function Logo({ className, width = 120, height = 60, variant = "dark" }: LogoProps) {
  const primaryColor = variant === "light" ? "#FFFFFF" : "#1B5E3F";
  const shadowColor = variant === "light" ? "rgba(0,0,0,0.3)" : "#0F4C2E";
  const orbitColor = variant === "light" ? "rgba(255,255,255,0.5)" : "#9CA3AF";
  const arrowColor = variant === "light" ? "#FFFFFF" : "#1B5E3F";
  const gridColor = variant === "light" ? "rgba(0,0,0,0.2)" : "white";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      {/* Globe with grid pattern */}
      <g transform="translate(100, 25)">
        {/* Outer orbit ellipse */}
        <ellipse
          cx="0"
          cy="0"
          rx="22"
          ry="8"
          fill="none"
          stroke={orbitColor}
          strokeWidth="1"
          opacity="0.4"
        />
        
        {/* Inner orbit ellipse */}
        <ellipse
          cx="0"
          cy="0"
          rx="18"
          ry="6"
          fill="none"
          stroke={orbitColor}
          strokeWidth="1"
          opacity="0.4"
        />
        
        {/* Arrow on outer orbit */}
        <g transform="rotate(45)">
          <path
            d="M 20 0 L 15 -3 L 15 3 Z"
            fill={arrowColor}
            transform="translate(0, -8)"
          />
        </g>
        
        {/* Globe circle */}
        <circle cx="0" cy="0" r="12" fill={primaryColor} />
        
        {/* Grid pattern on globe */}
        <g opacity="0.3">
          <line x1="-8" y1="0" x2="8" y2="0" stroke={gridColor} strokeWidth="0.5" />
          <line x1="0" y1="-8" x2="0" y2="8" stroke={gridColor} strokeWidth="0.5" />
          <path
            d="M -6 -6 Q 0 -8 6 -6"
            fill="none"
            stroke={gridColor}
            strokeWidth="0.5"
          />
          <path
            d="M -6 6 Q 0 8 6 6"
            fill="none"
            stroke={gridColor}
            strokeWidth="0.5"
          />
        </g>
      </g>
      
      {/* TL NET Text */}
      <g transform="translate(0, 65)">
        {/* Shadow effect */}
        <text
          x="100"
          y="25"
          fontSize="28"
          fontWeight="700"
          fill={shadowColor}
          textAnchor="middle"
          opacity="0.3"
          transform="translate(1, 1)"
        >
          TL NET
        </text>
        
        {/* Main text with 3D effect */}
        <text
          x="100"
          y="25"
          fontSize="28"
          fontWeight="700"
          fill={primaryColor}
          textAnchor="middle"
          style={{
            filter: variant === "dark" 
              ? "drop-shadow(0 2px 2px rgba(0,0,0,0.1))" 
              : "drop-shadow(0 2px 2px rgba(0,0,0,0.3))",
          }}
        >
          TL NET
        </text>
      </g>
    </svg>
  );
}
