/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Header, Instructions, Calendar, Footer } from '@containers/main'

const App = () => {
  const [params, setParams] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const singleValue = queryParams.get('date')
    setParams(singleValue)
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
