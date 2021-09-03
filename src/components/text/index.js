import React from 'react'
import PropTypes from 'prop-types'

import StyledP from './styles'

const Text = ({ text }) => <StyledP>{text}</StyledP>

Text.propTypes = {
  text: PropTypes.string
}

export default Text
