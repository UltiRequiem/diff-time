/* eslint-disable no-nested-ternary */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Calendar as StyledCalendar } from '@components'
import { dateDiffInDays } from '@utils'

const Calendar = ({ dateQuery }) => {
  const [date, setDate] = useState(null)

  useEffect(() => {
    if (dateQuery) setDate(new Date(dateQuery))
  }, [dateQuery])

  return (
    <>
      <StyledCalendar
        onChange={(event) => setDate(new Date(event.target.value))}
        value={
          date instanceof Date ??
          `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }
      />

      <p>
        {date instanceof Date
          ? dateDiffInDays(date) >= 0
            ? `${dateDiffInDays(date)} days left for ${date.toString()}.`
            : `${dateDiffInDays(date)} days passed since ${date.toString()}.`
          : null}
      </p>
    </>
  )
}

Calendar.propTypes = {
  dateQuery: PropTypes.string
}

export default Calendar
