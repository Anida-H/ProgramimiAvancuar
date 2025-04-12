// src/utils/supabaseClient.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://yvxuuqktdkdybzzdhppk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2eHV1cWt0ZGtkeWJ6emRocHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNzQwNjUsImV4cCI6MjA1OTg1MDA2NX0.rHfJ6jakEcfZlBA6vouwmABhKoT-ModBbhLMDIUvW_g";

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
