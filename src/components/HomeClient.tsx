"use client";

import { Atmosphere } from "./Atmosphere";
import { DeveloperSection } from "./DeveloperSection";
import { Gate } from "./Gate";
import { Hero } from "./Hero";
import { Menu } from "./Menu";
import { useMenuUnlocked } from "@/lib/use-menu-unlocked";

export function HomeClient() {
  const { unlocked, unlock } = useMenuUnlocked();

  return (
    <>
      <Atmosphere />
      <main className="shell">
        <Hero menuUnlocked={unlocked} />
        <div
          className={unlocked ? undefined : "menu-eager-preload"}
          aria-hidden={!unlocked}
        >
          <Menu />
        </div>
        {unlocked ? <DeveloperSection /> : null}
        <footer className="site-footer">
          Unofficial fan-tribute menu. Not affiliated with any studio or franchise.
        </footer>
      </main>
      {!unlocked ? <Gate onUnlocked={unlock} /> : null}
    </>
  );
}