import React from 'react';

export const Btn =  (props)=>{
    return (
        <button {...props}>
            {props.children}
        </button>
    )
}