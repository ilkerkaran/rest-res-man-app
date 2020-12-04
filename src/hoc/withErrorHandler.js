/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import Modal from '../components/UI/Modal/Modal'

// eslint-disable-next-line react/display-name
const withErrorHandler = (WrappedComponent, axios) => (props) => {
  const [error, setError] = useState('')

  const reqInterceptor = axios.interceptors.request.use((req) => {
    setError(null)
    return req
  })
  const resInterceptor = axios.interceptors.response.use((res) => res,
    (err) => {
      const message = (err
        && err.response
        && err.response.data
        && err.response.data.error
        && err.response.data.error.message) || err.toString()
      setError(message)
      throw err
    })

  useEffect(() => () => {
    axios.interceptors.request.eject(reqInterceptor)
    axios.interceptors.response.eject(resInterceptor)
  }, [reqInterceptor, resInterceptor])

  return (
    <>
      <Modal
        onClose={() => { setError(null) }}
        show={!!error}
      >
        <p>{error}</p>
      </Modal>
      <WrappedComponent {...props} />
    </>
  )
}

export default withErrorHandler
