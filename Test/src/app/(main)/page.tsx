"use client";

import MainSection from "../_components/dashboard/main-section";
import SecondSection from "../_components/dashboard/second-section";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-1 p-8 gap-8">
      <div className="lg:col-span-2 col-span-1">
        <MainSection />
      </div>
      <div className="lg:col-span-3 col-span-1">
        <SecondSection />
      </div>
    </div>
  );
}
