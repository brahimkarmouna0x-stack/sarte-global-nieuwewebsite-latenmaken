import { createClient } from "@supabase/supabase-js";

/**
 * Shared Supabase client (public, anon key only — safe for client & server).
 *
 * Used exclusively for unauthenticated reads (site settings, etc.). If
 * authenticated/admin operations are ever needed, create a fresh client per
 * request or use the service-role key server-side instead.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
