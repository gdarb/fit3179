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
      <div className="w-full bg-gray-50">
        <div className="relative isolate px-6 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] -mt-40 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transportation across Victoria
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Exploring the intricate web of Victoria&apos;s transportation
                networks, from the bustling hubs of Melbourne to the expansive
                reach of regional roads and rail.
              </p>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] mt-40 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="z-10 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
          {/* @ts-ignore */}
          <VegaLite spec={map} actions={false} />
        </div>
        <div className="px-4 py-4 text-gray-600 sm:px-6">
          This visualisation maps the annual traffic volume on{" "}
          <b className="text-red-600">Victorian roads</b> against the annual
          passenger count at <b className="text-sky-600">train stations</b>. The{" "}
          <b>radial layout</b> of Victoria&apos;s train lines emanates
          distinctly from Melbourne, underscoring the city&apos;s central role
          in the state&apos;s rail network. Additionally, the concentrated and
          darker dots in the central region emphasise Melbourne&apos;s
          significantly <b>higher passenger count</b> when compared to the
          regions.
        </div>
      </div>

      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
          {/* @ts-ignore */}
          <VegaLite spec={line} actions={false} />
        </div>
        <div className="px-4 py-4 text-gray-600 sm:px-6">
          Utilising the interactive feature of the line chart, the timeline can
          be <b>scrubbed</b> to filter data on the adjoining bar chart. The data
          illustrates a gradual return of public transport usage to its{" "}
          <b>pre-pandemic levels</b> by mid-2023. Notably, while{" "}
          <b>Regional Trains</b> traditionally and cumulatively outpace{" "}
          <b>Regional Buses</b> in popularity, an intriguing shift was observed
          at the pandemic&apos;s peak where buses experienced a surge,{" "}
          <b>surpassing</b> train usage temporarily.
        </div>
      </div>

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
