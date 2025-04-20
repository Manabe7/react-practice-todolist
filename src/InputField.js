import React from 'react'

const InputField = ( {inputValue, setInputValue, handleAddItem, handleClearList}) => {
    return (
        <div className='input-fleid'>
            <input 
                className='input-box'
                type="text" 
                placeholder='input Item'
                required
                value={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
            /> 
            <button className='btn_add' onClick={handleAddItem}>Add to List</button>
            <button className='btn_clear' onClick={handleClearList}>Clear List</button>
        </div>
    )
}

export default InputField
