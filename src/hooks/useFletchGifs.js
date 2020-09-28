import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs";

export const useFletchGifs = (categories) => {
    
    const [state, setstate] = useState({
        data: [],
        load: true
    });
    

    useEffect(() => {
        getGif(categories).then((img) => 
            {setstate({
                data: img,
                load: false
            })}
        )
    }, [categories]);
    
    return state;
}
