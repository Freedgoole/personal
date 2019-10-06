import React, { Fragment } from "react";
import { FormField } from '../Form/FormField'
import { Input } from 'antd'

const { TextArea } = Input;

export const StepSecond = props => {

    // useForm 
    const {handleChange, values} = props;

    return (
        <Fragment>
        <FormField 
        label='Composition and releases form' 
        validateStatus='error' 
        helpMsg="string from 0 to 2000 characters"
        >
            <TextArea
            placeholder="composition"
            name='composition'
            onChange={handleChange}
            value={values && values.composition}
            autosize={false}
            />
        </FormField>
        <FormField 
        label='Indication' 
        validateStatus='error' 
        helpMsg="string from 0 to 2000 characters"
        >
            <TextArea
            placeholder="indication"
            autosize={false}
            name='indication'
            value={values && values.indication}
            onChange={handleChange}
            />
        </FormField>   
        <FormField 
        label='Contraindication' 
        validateStatus='error' 
        helpMsg="string from 0 to 2000 characters"
        >
            <TextArea
            placeholder="controlled"
            autosize={false}
            name='controlled'
            alue={values && values.controlled}
            onChange={handleChange}
            />
        </FormField>      
        </Fragment>
    )
}