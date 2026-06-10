import PocketBase from "pocketbase";

/**
 * Shared PocketBase client.
 *
 * We only perform public, unauthenticated reads (no per-request auth state to
 * leak), so a module-level singleton is safe and avoids re-instantiating the
 * client on every render. If authenticated/admin reads are ever added, create a
 * fresh client per request instead.
 */
const POCKETBASE_URL =
  process.env.NEXT_PUBLIC_POCKETBASE_URL ?? "http://127.0.0.1:8090";

export const pb = new PocketBase(POCKETBASE_URL);

// Disable auto-cancellation: under concurrent SSR the SDK would otherwise reject
// duplicate in-flight requests for the same resource with an "autocancelled" error.
pb.autoCancellation(false);
