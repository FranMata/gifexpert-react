import React, {useState} from 'react';
import PropType from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('Buscar...');    
    
    const handleAddValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(inputValue.trim().length > 0){
            setCategories((cate) => [inputValue, ...cate]);
            setInputValue('');            
        }
    }

    return (                
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input
                type='text'
                value={inputValue}
                onChange={handleAddValue}                   
            />                                
        </form>                    
    )
}

AddCategory.propType={
    setCategories: PropType.func.isRequired
}