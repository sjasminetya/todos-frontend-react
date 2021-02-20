import React from 'react'
import './Button.css'

export default function Button({title, className, onClick}) {
    return (
        <div>
            <button type="submit" className={className} onClick={(event) => onClick(event)}>{title}</button>
        </div>
    )
}
