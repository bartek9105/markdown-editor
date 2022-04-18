import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dvzvwjtyrbjhifyjthfd.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY as string
export const supabase = createClient(supabaseUrl, supabaseKey)
