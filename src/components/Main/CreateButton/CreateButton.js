import React from "react";
import { Button } from 'antd';

export const CreateButton = ({onClick, animation}) => {
    return (
        <Button onClick={onClick} 
            title='Create new item' 
            className={`create-button--fixed ${animation && 'create-button--animation'}`} 
            type="primary" 
            shape="circle" 
            icon="plus" size="large"/>
    )
}
//