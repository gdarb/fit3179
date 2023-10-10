"use client";

import box from "@/vega/box.vega.json";
import line from "@/vega/line.vega.json";
import map from "@/vega/map.vega.json";
import { ReactNode } from "react";
import { VegaLite } from "react-vega";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-y-5 bg-gray-50 px-24 py-12">
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
      <Panel>
        <VegaLite spec={map} actions={false} />
      </Panel>
      <Panel>
        {/* @ts-ignore */}
        <VegaLite spec={line} actions={false} />
      </Panel>
      <Panel>
        <div className="flex items-center gap-10">
          <span className="max-w-xs text-gray-600">
            Pellentesque sagittis, nisi in ultrices rhoncus, odio metus tempus
            lacus, vel facilisis turpis velit ac elit. Quisque efficitur velit
            id eros sollicitudin, sit amet pulvinar diam pulvinar.
          </span>
          {/* @ts-ignore */}
          <VegaLite spec={box} actions={false} />
        </div>
      </Panel>
    </main>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}
