/**
 * Lightweight wrapper around GA4 + Microsoft Clarity event tracking.
 * Calls are no-ops if the underlying service hasn't loaded
 * (e.g. consent not granted, env vars unset).
 */
type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params?: Params) {
  if (typeof window === 'undefined') return;
  try {
    window.gtag?.('event', event, params || {});
    if (params?.label) {
      window.clarity?.('event', `${event}:${String(params.label)}`);
    } else {
      window.clarity?.('event', event);
    }
  } catch {
    // Silent — analytics failures must never break the UI.
  }
}
