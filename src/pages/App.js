/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'

import { Calendar, Footer } from '../components'

import { dateDiffInDays } from '../utils'

const App = () => {
  const [date, setDate] = useState(null)

  return (
    <>
      <Calendar onChange={(event) => setDate(new Date(event.target.value))} />

      {date ? (
        dateDiffInDays(date) >= 0 ? (
          <p>
            {dateDiffInDays(date)} days left for {date.toUTCString()}.
          </p>
        ) : (
          <p>
            {dateDiffInDays(date).toString().replace('-', '')} days have passed
            since {date.toUTCString()}.
          </p>
        )
      ) : null}

      <Footer message="UltiRequiem © 2021"/>
    </>
  )
}

export default App
