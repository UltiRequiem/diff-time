// https://github.com/sindresorhus/react-extras/blob/main/source/if.js
// When importing it do not work, so I just copy it here

import PropTypes from 'prop-types'

const If = (props) =>
  // eslint-disable-next-line no-nested-ternary
  props.condition ? (props.render ? props.render() : props.children) : null

If.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node,
  render: PropTypes.func
}

export default If
