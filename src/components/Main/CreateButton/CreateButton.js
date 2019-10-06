import React from "react";
import { Button } from 'antd';

export const CreateButton = ({onClick}) => {
    return (
        <Button onClick={onClick} 
            title='Create new item' 
            className='create-button--fixed' 
            type="primary" 
            shape="circle" 
            icon="plus" size="large"/>
    )
}