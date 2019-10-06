import React from 'react'
import { Button, Popconfirm } from 'antd'

export const MedicineItem = props => {

    // props
    const { code, name, price, id  } = props;
     // props event 
    const { handleEdit, handleDeleteDataItem }= props;

    const edit = () => handleEdit(id)
    const deleteItem = () => handleDeleteDataItem(id)
    
    return (
        <div className='m-item-container' onDoubleClick={edit}>
            <div className='m-item m-item--code'>
                <span className='m-item m-item--label'>code: </span>
                <span className='m-item m-item--value'>{code}</span>
            </div>
            <div className='m-item m-item--name'>
                <span className='m-item m-item--label'>name: </span>
                <span className='m-item m-item--value'>{name}</span>
            </div>
            <div className='m-item m-item--price'>
                <span className='m-item m-item--label'>price: </span>
                <span className='m-item m-item--value'>{price}</span>
            </div>
            <div className='m-item--btns'>
                <Button onClick={edit} className='m-item--btns-edit'>Edit</Button>
                <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={deleteItem}>
                    <Button type='danger' className='m-item--btns-delete'>Delete</Button>
                </Popconfirm>
            </div>
        </div>
    )
}