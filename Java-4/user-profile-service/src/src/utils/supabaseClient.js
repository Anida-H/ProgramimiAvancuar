const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://hsiuidnlfulgpvonwlys.supabase.co'; // replace with your project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzaXVpZG5sZnVsZ3B2b253bHlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMDIzMzEsImV4cCI6MjA1OTc3ODMzMX0.WkAgH8u1P8yWOWcENABspOc4VFlWDLiWoJ7kX5dLDyo'; // replace with your anon API key

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
