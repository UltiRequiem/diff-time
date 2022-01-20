import React from 'react'
import { Main } from '@pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:date" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}
