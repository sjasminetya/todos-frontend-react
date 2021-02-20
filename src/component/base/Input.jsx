import React from 'react'

export default function Input() {
    const formInput = ({
        type,
        name,
        placeholder,
        onChange,
        className,
        value,
        label,
        ...props
    })

    return (
        <div>
            <label htmlFor={name}>{label}</label>
        </div>
    )
}
