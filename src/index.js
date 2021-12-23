import React from 'react'
import ReactDOM from 'react-dom'

import App from './routes'
import GlobalStyles from './globalStyles'

export default function StyledApp() {
  return (
    <>
      <GlobalStyles />
      <App />
    </>
  )
}

ReactDOM.render(<StyledApp />, document.getElementById('root'))
