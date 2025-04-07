import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink, useRouteError } from 'react-router-dom'
import Mainlayout from './Mainlayout'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <Mainlayout />
            <div className='d-flex justify-content-center mt-5'>
                <h2> Page Not Found
                </h2>
            </div>

            <div className='d-flex justify-content-center mt-5'>
                {
                    error.data && <p> {error.data}  </p>
                }

                <NavLink to={"/"}>
                    <Button className='btn-secondary'>Back Home </Button>
                </NavLink>
            </div>
        </>

    )
}

export default ErrorPage;
