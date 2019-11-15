import { useState, useEffect } from 'react'

const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
}

export default () => {
  const [loading, setLoading] = useState(false)
  const [currentPosition, setCurrentPosition] = useState({ lat: null, lon: null })

  const success = ({ coords: { latitude, longitude } }) => {
    setCurrentPosition({
      lat: latitude,
      lon: longitude,
    })
    setLoading(false)
  }

  const error = error => {
    setLoading(false)
    alert(error.message)
  }

  useEffect(() => {
    setLoading(true)
    let id = navigator.geolocation.watchPosition(success, error, options)
    return () => {
      navigator.geolocation.clearWatch(id)
    }
  }, [])
  return {
    ...currentPosition,
    loading
  }
}