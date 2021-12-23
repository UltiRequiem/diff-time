import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Header, Instructions, Calendar, Footer } from '@containers/main'

export default function App() {
  const [params, setParams] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setParams(new URLSearchParams(location.search).get('date'))
  })

  return (
    <>
      <Header />
      <Instructions />
      <Calendar dateQuery={params} />
      <Footer />
    </>
  )
}
