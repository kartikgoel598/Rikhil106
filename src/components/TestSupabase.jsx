import React, { useEffect } from 'react'
import { supabase } from '../config/supabaseClient'
import { supabaseClient } from '../config/supabaseClient'

const TestSupabase = () => {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from('products').select('*')
      if (error) {
        alert('Supabase connection failed!')
        console.error(error)
      } else {
        alert('Supabase connection successful!')
        console.log(data)
      }
    }
    testConnection()
  }, [])

  return null
}

export default TestSupabase