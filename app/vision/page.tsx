"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function VisionPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#09090b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        color: "#fff",
        gap: 16,
      }}
    >
      <div style={{ fontSize: 11, color: "#52525b" }}>
        SSR rendered ✓ — client JS: {mounted ? "LOADED ✓" : "loading…"}
      </div>

      <div style={{ fontSize: 28, fontWeight: 700 }}>Vision Test</div>

      <div
        style={{
          fontSize: 13,
          color: "#a1a1aa",
          background: "#18181b",
          padding: "8px 16px",
          borderRadius: 8,
          border: "1px solid #27272a",
        }}
      >
        {mounted ? "React mounted successfully" : "Hydrating…"}
      </div>

      <button
        onClick={() => alert("Button clicked — JS is working")}
        style={{
          padding: "12px 32px",
          borderRadius: 12,
          background: "#6366f1",
          border: "none",
          color: "#fff",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Click me to test JS
      </button>

      <button
        onClick={() => {
          navigator.mediaDevices
            ?.getUserMedia({ video: true })
            .then(() => alert("Camera: GRANTED"))
            .catch((e) => alert("Camera error: " + e.name + " — " + e.message));
        }}
        style={{
          padding: "12px 32px",
          borderRadius: 12,
          background: "#059669",
          border: "none",
          color: "#fff",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Test camera directly
      </button>

      <div style={{ fontSize: 11, color: "#3f3f46", marginTop: 8 }}>
        URL: {mounted ? window.location.href : "…"}
      </div>
    </div>
  );
}
