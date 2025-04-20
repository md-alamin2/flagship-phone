import React from 'react'
import { Link, useRouteError } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'
import MainButton from "../../components/Buttons/MainButton"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <Navbar />
      <div className='py-24 text-center'>
        <h1 className='mb-8 text-7xl font-thin text-gray-900'>
          {error?.status || 404}
        </h1>
        <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
          {error?.error?.message || 'Something Went Wrong!'}
        </p>
        <Link to='/'>
          <MainButton label='Go To Homepage' />
        </Link>
      </div>
    </>
  )
}

export default ErrorPage