import React from 'react'

import PropTypes from 'prop-types'

import Title from '../title'
import StyledHeader from './styles'

const Header = ({ text }) => (
  <StyledHeader>
    <Title text={text} />
  </StyledHeader>
)

Header.propTypes = {
  text: PropTypes.string
}

export default Header
