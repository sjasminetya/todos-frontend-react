import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

export default function Input({value, type, placeholder, onChange, label, id, className}) {

    const handleChange = (event) => {
        const {value} = event.target
        onChange(value)
    }

    return (
        <div>
            <label htmlFor={id}>
                <span>{label}</span>
                <input type={type} id={id} className={className} value={value} placeholder={placeholder} onChange={handleChange} />
            </label>
        </div>
    )
}

Input.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
    value: '',
    type: 'text',
    placeholder: '',
    id: '',
    className: '',
    label: ''
}