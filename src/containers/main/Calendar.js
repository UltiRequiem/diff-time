import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Calendar as StyledCalendar } from '@components'
import { dateDiffInDays } from '@utils'

const Calendar = ({ dateQuery }) => {
  const [date, setDate] = useState(dateQuery ? new Date(dateQuery) : null)

  return (
    <>
      <StyledCalendar
        onChange={(event) => setDate(new Date(event.target.value))}
        value={
          date instanceof Date
            ? `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
            : ''
        }
      />

      {date instanceof Date ? (
        <p>
          {dateDiffInDays(date) >= 0
            ? `${dateDiffInDays(date)} days left for ${date.toString()}.`
            : `${dateDiffInDays(date)
                .toString()
                .replace('-', '')} days have passed since ${date.toString()}.`}
        </p>
      ) : null}
    </>
  )
}

Calendar.propTypes = {
  dateQuery: PropTypes.string
}

export default Calendar
