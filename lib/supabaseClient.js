import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Check if environment variables are provided (only in development)
if (process.env.NODE_ENV === 'development' && (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)) {
  console.warn('⚠️  Supabase environment variables are missing for local development.');
  console.warn('📝 Create a .env.local file with:');
  console.warn('   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url');
  console.warn('   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key');
  console.warn('🔗 Get these from: https://app.supabase.com → Settings → API');
}

// Create Supabase client - will use placeholder values if env vars are missing
export const supabase = createClient(url, key);