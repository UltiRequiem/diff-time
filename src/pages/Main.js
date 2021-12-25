import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Calendar } from '@containers/main'
import { Header, Text, Footer } from '@components'

export default function App() {
  const [params, setParams] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setParams(new URLSearchParams(location.search).get('date'))
  })

  return (
    <>
      <Header text="Diff Time" />
      <Text
        text="In the calendar, put a date and I will tell you how many days
        have passed or are missing for that date to arrive."
      />

      <Calendar dateQuery={params} />
      <Footer text="UltiRequiem © 2021" url="https://github.com/UltiRequiem" />
    </>
  )
}
