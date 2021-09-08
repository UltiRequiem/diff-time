import React from 'react'
import PropTypes from 'prop-types'

import  Text  from '../text'
import StyledFooter from './styles'

const Footer = ({text, url}) => (
  <StyledFooter>
    <a href={url}>
       <Text text={text} />
    </a>
  </StyledFooter>
)

Footer.propTypes = {
  text: PropTypes.string
}

export default Footer
