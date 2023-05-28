import React from 'react'

const Button = ({ title, onClick }) => {
    return (
        <div onClick={onClick} className='button'>
            {title}
        </div>
    )
}

export default Button