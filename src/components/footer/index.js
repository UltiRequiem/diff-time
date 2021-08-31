import React from 'react'

import PropTypes from 'prop-types'
import { StyledFooter, StyledP } from './styles'

const Footer = ({ message }) => (
  <StyledFooter>
    <StyledP>{message}</StyledP>
  </StyledFooter>
)

Footer.propTypes = {
  message: PropTypes.string
}

export default Footer
