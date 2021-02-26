import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const BackComponent = () => {
    return (
        <div>
            <Link to="/home">
                <Button color="dark" style={{width: 'max-content'}}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to home
                </Button>
            </Link>
        </div>
    )
}
