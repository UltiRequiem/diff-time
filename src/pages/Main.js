/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Header, Instructions, Calendar, Footer } from '@containers/main'

const App = () => {
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

export default App
