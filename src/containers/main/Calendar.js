/* eslint-disable no-nested-ternary */

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Calendar as StyledCalendar } from '@components'
import { dateDiffInDays } from '@utils'

const Calendar = ({ dateQuery }) => {
  const [date, setDate] = useState(null)

  // eslint-disable-next-line no-param-reassign
  if (dateQuery !== null) dateQuery = new Date(dateQuery)

  return (
    <>
      <StyledCalendar
        onChange={(event) => setDate(new Date(event.target.value))}
        value={
          dateQuery instanceof Date
            ? `${dateQuery.getFullYear()}-${
                dateQuery.getMonth() + 1
              }-${dateQuery.getDate()}`
            : ''
        }
      />

      {dateQuery ? (
        <p>
          {dateDiffInDays(
            dateQuery >= 0
              ? `${dateDiffInDays(
                  dateQuery
                )} days left for ${dateQuery.toUTCString()}.`
              : `${dateDiffInDays(dateQuery)
                  .toString()
                  .replace(
                    '-',
                    ''
                  )} days have  passed since ${dateQuery.toUTCString()}.`
          )}
        </p>
      ) : null}

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
    </>
  )
}

Calendar.propTypes = {
  dateQuery: PropTypes.string
}

export default Calendar
