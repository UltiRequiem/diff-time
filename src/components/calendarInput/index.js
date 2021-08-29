import React, { useState } from 'react'

import StyledInput from './styles'

const Calendar = (props) => {
  return <StyledInput type="date"  {...props} />
}

export default Calendar
