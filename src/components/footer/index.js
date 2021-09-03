import React from 'react'
import PropTypes from 'prop-types'

import  Text  from '../text'
import StyledFooter from './styles'

const Footer = ({text}) => (
  <StyledFooter>
    <Text text={text} />
  </StyledFooter>
)

Footer.propTypes = {
  text: PropTypes.string
}

export default Footer
