import React from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";

const ListItem = ({list, handleEditItem, handleDeleteItem,  handleCheck, handleChange, handleSaved}) => {
    return (
        <div className='Show-List'>
            <ul className='ListItem'>
                {list.length? (
                    <p className='list-number'>you have {list.length} items in List</p>) :
                    (<h2>you list  is empty</h2>)}
                {list.map ((item)=> (
                    <li className='ListItem-box' key={item.id}>

                        <button className='check-box' onClick={()=> handleCheck(item.id)}>
                            {item.checked ? <MdCheckBox />:<MdCheckBoxOutlineBlank />}
                        </button>

                        {item.editState?  
                        (<input 
                            className='item-box' 
                            type="text" 
                            value={item.item} 
                            autoFocus   
                            onChange={(e)=> handleChange(item.id, e.target.value)} 
                            onBlur={()=> handleSaved(item.id)}/>) 
                        : item.checked ? 
                        (<span className='checked-box'>{item.item}</span>) 
                        : (<span onClick={()=>handleEditItem(item.id)}>{item.item}</span>) } 
                        <button className='btn_delete' onClick={() => handleDeleteItem(item.id)}><IoTrashBinOutline/></button>
                    </li>
                )) } 

            </ul>
        </div>
    )
}

export default ListItem
