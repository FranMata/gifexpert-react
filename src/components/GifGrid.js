import React from 'react'
import { useFletchGifs } from '../hooks/useFletchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categories}) => {

    const {data:images, load} = useFletchGifs(categories);
    
console.log(images);
    return (
        <>        
            <h3>{categories}</h3>

            { load && <h2>Cargando</h2> }

            <div className="card-grid">                        
                {
                    images.map(img =>(
                    <GifGridItem key = {img.id} {...img}/>
                    ))
                }                            
             </div>
        </>
    );
}
