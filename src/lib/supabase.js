import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://bhrwyqjgbluowgipslvp.supabase.co";


const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJocnd5cWpnYmx1b3dnaXBzbHZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NTA5NTIsImV4cCI6MjEwMzQyNjk1Mn0.ktsXZf23HGUEGB3fTamYmxJlV-qXTSXZW3zmKc-K5F8";


export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);