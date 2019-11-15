import { useState, useEffect } from 'react'
import axios from 'axios'

const ipApiUrl = 'http://ip-api.com/json?fields=country,countryCode'

export default () => {
  const [countryCode, setCountryCode] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(
    () => {
      (async () => {
        setLoading(true)
        const { data } = await axios.get(ipApiUrl)
        setLoading(false)
        setCountryCode(data.countryCode)
      })()
    }, [])
  return { countryCode, loading }
}
