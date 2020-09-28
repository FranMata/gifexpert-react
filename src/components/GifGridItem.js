import React from 'react'

export const GifGridItem = ({title, urlGif}) => {
    return (
        <div className="card">
            <img src={urlGif} alt = {title}/>
            <p>{ title }</p>
        </div>
    )
}
