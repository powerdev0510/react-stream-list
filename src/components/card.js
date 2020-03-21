import React from 'react';

export default function Card({img, alt, title}){
    return (
        <div className='item'>
            <img src={img} alt={alt} />
            <span>{title}</span>
        </div>
    );
}