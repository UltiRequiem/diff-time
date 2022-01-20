import React from 'react'
import { useParams } from 'react-router-dom'

import { Calendar } from '@containers/main'
import { Header, Text, Footer } from '@components'

export default function App() {
  const { date } = useParams()

  return (
    <>
      <Header text="Diff Time" />
      <Text
        text="In the calendar, put a date and I will tell you how many days
        have passed or are missing for that date to arrive."
      />

      <Calendar dateQuery={date} />
      <Footer text="UltiRequiem © 2021" url="https://github.com/UltiRequiem" />
    </>
  )
}
