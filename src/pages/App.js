import React, { useState } from 'react'

import { Calendar, Footer } from '../components'

const App = () => {
  const [date, setDate] = useState(null)

  return (
    <>
      <Calendar onChange={(event) => setDate(new Date(event.target.value))} />

      {date ? (
        <p>
          {date.getDay()} days left for {date.getDay()}.
        </p>
      ) : null}

      <Footer />
    </>
  )
}

export default App
