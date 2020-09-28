import React, {useState} from 'react';

//COMPONENTES
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid'



const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One Punch']);

    //CODIGO DE REFERENCIA
    // const handleAdd = ()=>{
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return(
        <>
            <h1>GifExpertApp</h1>
            <hr/>

            <AddCategory setCategories = {setCategories}/>

            <ol>
                {
                    categories.map(category=>
                        <GifGrid key = {category} categories = {category}/>                    
                )}
            </ol>

        </>
    );
}

export default GifExpertApp;