import React from 'react'
import PropTypes from 'prop-types'

import StyledTitle from './styles'

const Title = ({ text }) => <StyledTitle>{text}</StyledTitle>

Title.propTypes = {
  text: PropTypes.string
}

export default Title
