import React from 'react'
import { Header, Text } from '@components'

export default function NotFound() {
  return (
    <>
      <Header text="404" />
      <div style={{ textAlign: 'center' }}>
        <Text>Page not found</Text>
      </div>
    </>
  )
}
