import React, { useEffect, useLayoutEffect, useState } from 'react'

// Call order
export const Example1 = () => {
  // expected output:
  // useLayoutEffect 1
  // useLayoutEffect 2
  // useEffect 1
  // useEffect 2

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

// Flickering
export const Example2 = () => {
  const NOT_SET_STATUS = '======= NOT SET ======='
  const INITIALIZED_STATUS = 'INITIALIZED'
  const [status, setStatus] = useState(NOT_SET_STATUS)

  const [initialized] = useState(true)

  // try: useLayoutEffect
  useEffect(() => {
    setStatus(initialized ? INITIALIZED_STATUS : NOT_SET_STATUS)
  }, [initialized]) // try: []

  return <h1>{status}</h1>
}

export default function App() {
  return (
    <div className="main-container">
      <Example1 />
      {/* <Example2 /> */}
    </div>
  )
}
