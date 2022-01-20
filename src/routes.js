import React from 'react'
import { Main } from '@pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
