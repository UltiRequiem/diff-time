import React from 'react'
import PropTypes from 'prop-types'

import StyledFooter from './styles'

const Footer = ({ text, url }) => (
  <StyledFooter>
    <a href={url}>
      <p>{text}</p>
    </a>
  </StyledFooter>
)

Footer.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string
}

export default Footer
