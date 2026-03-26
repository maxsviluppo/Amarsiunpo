import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kcqeiogrndnifhimrawd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjcWVpb2dybmRuaWZoaW1yYXdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NTY3MzIsImV4cCI6MjA4NzQzMjczMn0.s6XdnTyKYMHkIw5KhDI-6EHcdnDjQtW7kVBuY5QYdAk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
