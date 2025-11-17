import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jwlpkgdgybihfubjztyw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3bHBrZ2RneWJpaGZ1Ymp6dHl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzODkwNzcsImV4cCI6MjA3ODk2NTA3N30.iCYZx0HknEWGQ1nGZ_DU-qQ7EqeWQw22pUOVav6vYc0'

export const supabase = createClient(supabaseUrl, supabaseKey)
