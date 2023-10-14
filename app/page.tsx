"use client";

import box from "@/vega/box.vega.json";
import hist from "@/vega/hist.vega.json";
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
          <span className="max-w-md text-gray-600">
            The following boxplot highlights the unique nature of some
            metropolitan stations. <b>Flagstaff</b> carries a minimal amount of
            passengers on weekends due to trains skipping the station.{" "}
            <b>Richmond</b> has a flipped distribution due to the station being
            a major interchange between lines.
          </span>
          {/* @ts-ignore */}
          <VegaLite spec={box} actions={false} />
        </div>
      </Panel>
      <Panel>
        <div className="flex items-center gap-10">
          {/* @ts-ignore */}
          <VegaLite spec={hist} actions={false} />
          <span className="max-w-md text-gray-600">
            <b>Growth rate</b> is the percentage annual increase in traffic
            volume for a road. The histogram opposite shows that a majority of
            freeways and highways in Victoria had an increase of traffic volume
            between <b>0% and 10%</b>.
          </span>
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
