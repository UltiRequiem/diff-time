/* eslint-disable no-nested-ternary */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { dateDiffInDays } from '@utils'

export const DateMessage = ({ date }) => {
  const diff = dateDiffInDays(date)
  const [dateString, diffString] = [date, diff].map(String)
  const formattedDiff = diffString.replace('-', '')

  return (
    <p style={{ fontSize: '1.3em' }}>
      <em>
        {`${formattedDiff} days ${
          diff >= 0 ? 'left for' : 'passed since'
        } ${dateString.split(' ').slice(0, 4).join(' ')}.`}
      </em>{' '}
    </p>
  )
}

const Calendar = ({ dateQuery }) => {
  const [date, setDate] = useState(null)

  useEffect(() => {
    if (dateQuery) setDate(new Date(dateQuery))
  }, [dateQuery])

  return (
    <>
      <input
        type="date"
        onChange={(event) => setDate(new Date(event.target.value))}
        value={
          date instanceof Date ??
          `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }
      />

      {date instanceof Date ? <DateMessage date={date} /> : null}
    </>
  )
}

Calendar.propTypes = {
  dateQuery: PropTypes.string
}

DateMessage.propTypes = {
  date: PropTypes.instanceOf(Date)
}

export default Calendar
