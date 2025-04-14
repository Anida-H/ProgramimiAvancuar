const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://ntlltimjivqqvqcjhlkr.supabase.co"; // replace with your project URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50bGx0aW1qaXZxcXZxY2pobGtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MTQwOTIsImV4cCI6MjA2MDE5MDA5Mn0.ydxEsLrviE_BQPBrTgvF_SOMHzEd3f36mn8Lxg3QwqE"
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
