// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://cxjpkogawvzpilqzpwiq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4anBrb2dhd3Z6cGlscXpwd2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNDUwMjUsImV4cCI6MjA2NTcyMTAyNX0.TwqMUza1fwlmqMVyx-FBwWTwWSUaE2EY3ec_uGnuXaw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);