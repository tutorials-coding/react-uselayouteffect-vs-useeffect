import React, { useEffect, useLayoutEffect, useState } from 'react'

import { RecursiveRectangle } from './RecursiveRectangle'
import { colorMap } from './colorMap'

export const Example1 = () => {
  useEffect(() => {
    console.log('useEffect 1')
  }, [])

  useEffect(() => {
    console.log('useEffect 2')
  }, [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect 1')
  }, [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect 2')
  }, [])

  return <></>
}

export const Example2 = () => {
  const NOT_SET_STATUS = '======= NOT SET ======='
  const INITIALIZED_STATUS = 'INITIALIZED'
  const [status, setStatus] = useState(NOT_SET_STATUS)

  const [initialized] = useState(true)

  // useLayoutEffect
  useEffect(() => {
    setStatus(initialized ? INITIALIZED_STATUS : NOT_SET_STATUS)
  }, [initialized])

  return (
    <>
      <RecursiveRectangle colorMap={colorMap} sizePx={500}>
        {status}
      </RecursiveRectangle>
    </>
  )
}

export default function App() {
  return (
    <div className="main-container">
      <Example1 />
      <Example2 />
    </div>
  )
}
