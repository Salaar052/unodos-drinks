"use client";

import { useEffect, useState } from "react";
import { isMenuUnlocked } from "@/lib/storage";
import { Atmosphere } from "./Atmosphere";
import { DeveloperSection } from "./DeveloperSection";
import { Gate } from "./Gate";
import { Hero } from "./Hero";
import { Menu } from "./Menu";

export function HomeClient() {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUnlocked(isMenuUnlocked());
    setReady(true);
  }, []);

  return (
    <>
      <Atmosphere />
      <main className="shell">
        <Hero />
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
      {ready && !unlocked ? <Gate onUnlocked={() => setUnlocked(true)} /> : null}
    </>
  );
}