"use client";

import dynamic from "next/dynamic";

const TTSSite = dynamic(() => import("@/components/TTSSite"), {
  ssr: false,
});

export default function Home() {
  return <TTSSite />;
}
