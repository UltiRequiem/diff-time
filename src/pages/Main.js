import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'

const Calendar = React.lazy(() => import('@containers/main/Calendar'))
const Header = React.lazy(() => import('@components/header'))
const Footer = React.lazy(() => import('@components/footer'))

export default function App() {
  const { date } = useParams()

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header text="Diff Time" />
        <div style={{ marginTop: '15%' }}>
          <p>
            In the calendar, put a date and I will tell you how many days have
            passed or are missing for that date to arrive.
          </p>

          <Calendar dateQuery={date} />
        </div>
        <Footer
          text="UltiRequiem © 2021"
          url="https://github.com/UltiRequiem"
        />
      </Suspense>
    </>
  )
}
