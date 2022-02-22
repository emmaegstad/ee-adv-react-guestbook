import { createClient } from '@supabase/supabase-js';
import { supabase } from '../utils/settings';

export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL || supabase.URL,
  process.env.REACT_APP_SUPABASE_KEY || supabase.KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
