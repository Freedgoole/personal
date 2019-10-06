import React, { Fragment } from "react";
import { Input, InputNumber, Icon } from 'antd'

// components
import { FormField } from '../Form/FormField'

export const StepFirst = props => {

const {handleChange, values, errors} = props;

    return (
        <Fragment>
        <FormField 
            label='Code' 
            helpMsg="string from 5 to 10 characters"
            validationStatus={errors && errors.code}
        >
            <Input 
                allowClear 
                onChange={handleChange}
                name='code'
                suffix={
                        <Icon type="exclamation-circle" />
                }
                value={values && values.code}
                />
        </FormField>
        <FormField 
        label='Name' 
        helpMsg="string from 5 to 100 characters"
        validationStatus={errors && errors.name}
        >
            <Input 
                allowClear
                onChange={handleChange}
                name='name'
                value={values && values.name}
                suffix={
                        <Icon type="exclamation-circle" />
                }
                />
        </FormField>
        <FormField 
        label='Price' 
        helpMsg="a number in the range from 0.01 to 1,000,000"
        validationStatus={errors && errors.price}
        >
        
            <InputNumber 
                defaultValue={3}
                onChange={(e) => handleChange('price', e)}
                name='price'
                min={0.01}
                max={1000000}
                value={values && values.price}
                />
        </FormField>   
        <FormField 
        label='Expiration date' 
        helpMsg="number from 1 to 1000 (days of storage time)"
        validationStatus={errors && errors.expiration_date}
        >
            <InputNumber 
                defaultValue={3}
                min={1}
                max={1000}
                value={values && values.shelfLife}
                onChange={(e) => handleChange('shelfLife', e)}
                />
        </FormField>               
        </Fragment>
        //
    )
}