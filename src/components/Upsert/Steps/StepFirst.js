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
        validateStatus='error' 
        helpMsg="a number in the range from 0.01 to 1,000,000"
        validationStatus={errors && errors.price}
        >
        
            <InputNumber 
                defaultValue={3}
                onChange={(e) => handleChange('price', e)}
                name='price'
                value={values && values.price}
                />
        </FormField>   
        <FormField 
        label='Expiration date' 
        validateStatus='error' 
        helpMsg="number from 1 to 1000 (days of storage time)"
        validationStatus={errors && errors.expiration_date}
        >
            <InputNumber 
                defaultValue={3}
                value={values && values.expiration_date}
                onChange={(e) => handleChange('expiration_date', e)}
                />
        </FormField>               
        </Fragment>
        //
    )
}