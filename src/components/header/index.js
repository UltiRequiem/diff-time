import React from 'react'
import PropTypes from 'prop-types'

import StyledHeader from './styles'

const Header = ({ text }) => (
  <StyledHeader>
    <h1>{text}</h1>
  </StyledHeader>
)

Header.propTypes = {
  text: PropTypes.string
}

export default Header
