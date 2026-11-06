"use client";

import { useState, useEffect } from "react";

/**
 * Hook to ensure all textual content, layout, fonts, and critical visuals
 * load first with zero video bandwidth competition.
 *
 * Videos are only loaded:
 * 1. Immediately on-demand when the user clicks / forcefully plays a video.
 * 2. On hover for individual card preview.
 * 3. Deferred in background only after the full front-end view has completely loaded
 *    and the browser enters an idle state (window 'load' + requestIdleCallback).
 */
export function useDeferredVideos(delayMs = 2000) {
  const [canLoadVideos, setCanLoadVideos] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    const scheduleDeferredLoad = () => {
      const trigger = () => {
        if (typeof window !== "undefined" && "requestIdleCallback" in window) {
          (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => void }).requestIdleCallback(
            () => setCanLoadVideos(true),
            { timeout: 3000 }
          );
        } else {
          setCanLoadVideos(true);
        }
      };

      timerId = setTimeout(trigger, delayMs);
    };

    if (typeof document !== "undefined") {
      if (document.readyState === "complete") {
        scheduleDeferredLoad();
      } else {
        window.addEventListener("load", scheduleDeferredLoad, { once: true });
        // Safety fallback timer if load event already passed
        const fallbackTimer = setTimeout(scheduleDeferredLoad, delayMs + 3000);
        return () => {
          window.removeEventListener("load", scheduleDeferredLoad);
          clearTimeout(fallbackTimer);
          if (timerId) clearTimeout(timerId);
        };
      }
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [delayMs]);

  return canLoadVideos;
}
