"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Default message sets ────────────────────────────────────────────

const DEFAULT_AWAY_MESSAGES = [
  "hey, you. ♡",
  "oh, leaving already?",
  "I was getting to the good part...",
  "fine. I'll pretend I don't miss you.",
  "you know, the particles are lonely.",
  "come baaack ♡",
  "I'll wait right here...",
  "still gone? okay then.",
  "the tab misses you more than it should.",
];

const DEFAULT_RETURN_MESSAGES = [
  "there you are. ♡",
  "welcome back, gorgeous. ♡",
  "I knew you'd come back. ♡",
  "the particles just lit up. ♡",
  "hey again. missed you. ♡",
];

// ─── Types ───────────────────────────────────────────────────────────

export interface UseTabInteractionConfig {
  /** Messages shown in the tab title while the page is hidden. */
  awayMessages?: string[];
  /** Messages shown on-page when the visitor returns. */
  returnMessages?: string[];
  /** Milliseconds between cycling to the next away message (default 4000). */
  messageCycleMs?: number;
  /** Milliseconds the welcome-back toast stays visible (default 3000). */
  welcomeDurationMs?: number;
  /** Path to an SVG favicon used while the page is hidden. */
  awayFaviconHref?: string;
  /** Path to the default SVG favicon (restored on return). */
  defaultFaviconHref?: string;
  /** Set false to disable favicon swapping entirely (default true). */
  swapFavicon?: boolean;
}

export interface UseTabInteractionReturn {
  /** True while the welcome-back message should be visible. */
  showWelcome: boolean;
  /** The current welcome-back message text. */
  welcomeMessage: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────

/** Fisher-Yates shuffle (returns a new array). */
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Pick a random element that is not `last`, if possible. */
function pickRandom<T>(arr: T[], last?: T): T {
  if (arr.length <= 1) return arr[0];
  const filtered = arr.filter((m) => m !== last);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

/** Upsert a `<link rel="icon">` element in the document head. */
function setFavicon(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.type = "image/svg+xml";
  link.href = href;
}

// ─── Hook ────────────────────────────────────────────────────────────

export function useTabInteraction(
  config: UseTabInteractionConfig = {}
): UseTabInteractionReturn {
  const {
    awayMessages = DEFAULT_AWAY_MESSAGES,
    returnMessages = DEFAULT_RETURN_MESSAGES,
    messageCycleMs = 4000,
    welcomeDurationMs = 3000,
    awayFaviconHref = "/favicon-away.svg",
    defaultFaviconHref = "/favicon-default.svg",
    swapFavicon = true,
  } = config;

  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");

  // Refs survive across renders without triggering them.
  const originalTitle = useRef<string>("");
  const cycleTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const welcomeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const messageIndex = useRef(0);
  const shuffledAway = useRef<string[]>([]);
  const lastReturn = useRef<string | undefined>(undefined);
  const hiddenAt = useRef<number>(0);

  // ── Clear any running cycle timer ──────────────────────────────────
  const clearCycle = useCallback(() => {
    if (cycleTimer.current !== null) {
      clearInterval(cycleTimer.current);
      cycleTimer.current = null;
    }
  }, []);

  // ── Clear the welcome-back timer ───────────────────────────────────
  const clearWelcome = useCallback(() => {
    if (welcomeTimer.current !== null) {
      clearTimeout(welcomeTimer.current);
      welcomeTimer.current = null;
    }
  }, []);

  useEffect(() => {
    // Bail out if the API is not supported (e.g. SSR or very old browser).
    if (typeof document === "undefined" || typeof document.hidden === "undefined") {
      return;
    }

    // Capture the title that was already set when the hook mounts.
    originalTitle.current = document.title;

    // Set the default favicon on mount.
    if (swapFavicon) {
      setFavicon(defaultFaviconHref);
    }

    // ── Visibility change handler ────────────────────────────────────
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // ──── Page just became hidden ────────────────────────────────
        hiddenAt.current = Date.now();

        // Shuffle the away messages to keep them fresh each time.
        shuffledAway.current = shuffle(awayMessages);
        messageIndex.current = 0;

        // Set the first message immediately.
        document.title = shuffledAway.current[0];

        // Swap favicon.
        if (swapFavicon) {
          setFavicon(awayFaviconHref);
        }

        // Dismiss any visible welcome toast.
        clearWelcome();
        setShowWelcome(false);

        // Start cycling through subsequent messages.
        clearCycle();
        cycleTimer.current = setInterval(() => {
          messageIndex.current =
            (messageIndex.current + 1) % shuffledAway.current.length;
          document.title = shuffledAway.current[messageIndex.current];
        }, messageCycleMs);
      } else {
        // ──── Page just became visible again ─────────────────────────
        clearCycle();

        // Restore original title.
        document.title = originalTitle.current;

        // Restore default favicon.
        if (swapFavicon) {
          setFavicon(defaultFaviconHref);
        }

        // Show a welcome-back message (non-repetitive when possible).
        const msg = pickRandom(returnMessages, lastReturn.current);
        lastReturn.current = msg;
        setWelcomeMessage(msg);
        setShowWelcome(true);

        // Auto-dismiss after the configured duration.
        clearWelcome();
        welcomeTimer.current = setTimeout(() => {
          setShowWelcome(false);
        }, welcomeDurationMs);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // ── Cleanup on unmount ───────────────────────────────────────────
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearCycle();
      clearWelcome();

      // Always restore the original title so the tab is left in a clean state.
      document.title = originalTitle.current;

      // Restore default favicon.
      if (swapFavicon) {
        setFavicon(defaultFaviconHref);
      }
    };
  }, [
    awayMessages,
    returnMessages,
    messageCycleMs,
    welcomeDurationMs,
    awayFaviconHref,
    defaultFaviconHref,
    swapFavicon,
    clearCycle,
    clearWelcome,
  ]);

  return { showWelcome, welcomeMessage };
}
