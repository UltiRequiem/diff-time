import React, { useState } from 'react'

import {Calendar, Footer} from '../components'

import { dateDiffInDays } from '../utils'

const App = () => {
  const [date, setDate] = useState(null)

  return (
    <>
      <Calendar onChange={(event) => setDate(new Date(event.target.value))} />

      {date ? (
        <p>
          {dateDiffInDays(date)} days left for {date.toUTCString()}.
        </p>
      ) : null}

      <Footer />
    </>
  )
}

export default App
