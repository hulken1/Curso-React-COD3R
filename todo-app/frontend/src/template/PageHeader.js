import React from 'react'

export default props => (
    <header >
        <div className='pb-2 mt-4 mb-2 border-bottom'>
            <h2>{props.name}<small>{props.small}</small></h2>
        </div>
    </header>
)