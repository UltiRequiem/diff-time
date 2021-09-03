/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'

import { Calendar, Footer, Header, Text } from '../components'

import { dateDiffInDays } from '../utils'

const App = () => {
  const [date, setDate] = useState(null)

  return (
    <>
      <Header text="Diff Time" />

      <Text
        text="In the calendar, put a date and I will tell you how many days
        have passed or are missing for that date to arrive."
      />

      <Calendar onChange={(event) => setDate(new Date(event.target.value))} />

      {date ? (
        dateDiffInDays(date) >= 0 ? (
          <Text>
            {dateDiffInDays(date)} days left for {date.toUTCString()}.
          </Text>
        ) : (
          <Text>
            {dateDiffInDays(date).toString().replace('-', '')} days have passed
            since {date.toUTCString()}.
          </Text>
        )
      ) : null}

      <Footer text="UltiRequiem © 2021" />
    </>
  )
}

export default App
