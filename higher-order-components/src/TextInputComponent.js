import React from 'react';

export const TextInputComponent = (props) => {
    return (
        <input type="text" value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
    )
}
