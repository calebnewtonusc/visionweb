import React from "react";

export function TTSAsterisk({ size = 32, gradId = "astGrad" }: { size?: number; gradId?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TTS"
      role="img"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#99A6F9" />
          <stop offset="100%" stopColor="#F07860" />
        </linearGradient>
      </defs>
      <rect x="38" y="1" width="24" height="98" rx="2" fill={`url(#${gradId})`} transform="rotate(0 50 50)" />
      <rect x="38" y="1" width="24" height="98" rx="2" fill={`url(#${gradId})`} transform="rotate(60 50 50)" />
      <rect x="38" y="1" width="24" height="98" rx="2" fill={`url(#${gradId})`} transform="rotate(-60 50 50)" />
    </svg>
  );
}
