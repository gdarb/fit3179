"use client";

import line from "@/vega/line.vega.json";
import map from "@/vega/map.vega.json";
import { VegaLite } from "react-vega";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <VegaLite spec={map} actions={false} />
      {/* @ts-ignore */}
      <VegaLite spec={line} actions={false} />
    </main>
  );
}
