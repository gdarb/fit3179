// @ts-nocheck
"use client";

import box from "@/vega/box.vega.json";
import line from "@/vega/line.vega.json";
import map from "@/vega/map.vega.json";
import { VegaLite } from "react-vega";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-y-5 px-24 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Transportation across Victoria
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>
      <div>
        <VegaLite spec={map} actions={false} />
      </div>
      <div className="h-1 w-full bg-gray-500/50" />
      <div>
        <VegaLite spec={line} actions={false} />
      </div>
      <div className="h-1 w-full bg-gray-500/50" />
      <div className="flex items-center gap-10">
        <span>hello there</span>
        <VegaLite spec={box} actions={false} />
      </div>
    </main>
  );
}
