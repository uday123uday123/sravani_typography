"use client";

import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particles-typography";
import { WelcomeToast } from "@/components/ui/welcome-toast";
import { useTabInteraction } from "@/hooks/use-tab-interaction";

export default function Home() {
  const { showWelcome, welcomeMessage } = useTabInteraction({
    awayMessages: [
      "hey, you. ♡",
      "oh, leaving already?",
      "I was getting to the good part...",
      "fine. I'll pretend I don't miss you.",
      "you know, the particles are lonely.",
      "come baaack ♡",
      "I'll wait right here...",
      "still gone? okay then.",
      "the tab misses you more than it should.",
    ],
    returnMessages: [
      "there you are. ♡",
      "welcome back, gorgeous. ♡",
      "I knew you'd come back. ♡",
      "the particles just lit up. ♡",
      "hey again. missed you. ♡",
    ],
    messageCycleMs: 4000,
    welcomeDurationMs: 3000,
    swapFavicon: true,
  });

  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center relative">
      <WelcomeToast show={showWelcome} message={welcomeMessage} />

      <CursorDrivenParticleTypography
        text="SRAVANI"
        fontSize={160}
        particleDensity={5}
        dispersionStrength={20}
      />
    </div>
  );
}
