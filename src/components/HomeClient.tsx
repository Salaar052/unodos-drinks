"use client";

import dynamic from "next/dynamic";
import { Atmosphere } from "./Atmosphere";
import { DeveloperSection } from "./DeveloperSection";
import { Hero } from "./Hero";
import { Menu } from "./Menu";
import { useMenuUnlocked } from "@/lib/use-menu-unlocked";

const Gate = dynamic(() => import("./Gate").then((m) => m.Gate), {
  ssr: false,
  loading: () => null,
});

export function HomeClient() {
  const { unlocked, unlock } = useMenuUnlocked();

  return (
    <>
      <Atmosphere />
      <main className="shell">
        <Hero menuUnlocked={unlocked} />
        {unlocked ? (
          <>
            <Menu />
            <DeveloperSection />
          </>
        ) : null}
        <footer className="site-footer">
          Unofficial fan-tribute menu. Not affiliated with any studio or franchise.
        </footer>
      </main>
      {!unlocked ? <Gate onUnlocked={unlock} /> : null}
    </>
  );
}