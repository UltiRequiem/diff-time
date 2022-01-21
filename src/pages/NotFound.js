import React from 'react'
import { Header } from '@components'

export default function NotFound() {
  return (
    <>
      <Header text="404" />
      <div style={{ textAlign: 'center' }}>
        <p>Page not found</p>
      </div>
    </>
  )
}
