/* eslint-disable no-nested-ternary */

import React, { useState } from 'react'

import { Calendar as StyledCalendar, Text } from '@components'

import { dateDiffInDays } from '@utils'

const Calendar = () => {
  const [date, setDate] = useState(null)

  return (
    <>
      <StyledCalendar
        onChange={(event) => setDate(new Date(event.target.value))}
      />

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
    </>
  )
}
export default Calendar
