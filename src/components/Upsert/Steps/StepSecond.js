import React, { Fragment } from "react";
import { FormField } from '../Form/FormField'
import { Input } from 'antd'

const { TextArea } = Input;

export const StepSecond = props => {

    // useForm 
    const {handleChange, values, errors} = props;

    return (
        <Fragment>
        <FormField 
        label='Composition and releases form' 
        validationStatus={errors && errors.compositionAndFormOfRelease}
        helpMsg="string from 0 to 2000 characters"
        >
            <TextArea
            placeholder="composition"
            name='compositionAndFormOfRelease'
            onChange={handleChange}
            value={values && values.compositionAndFormOfRelease}
            autosize={false}
            style={{height: 80}}
            />
        </FormField>
        <FormField 
        label='Indication' 
        validationStatus={errors && errors.indication}
        helpMsg="string from 0 to 2000 characters"
        >
            <TextArea
            placeholder="indication"
            autosize={false}
            name='indication'
            value={values && values.indication}
            onChange={handleChange}
            style={{height: 80}}
            />
        </FormField>   
        <FormField 
        label='Contraindication' 
        validationStatus={errors && errors.сontraindications}
        helpMsg="string from 0 to 2000 characters"
        >
            <TextArea
            placeholder="controlled"
            autosize={false}
            name='сontraindications'
            value={values && values.сontraindications}
            onChange={handleChange}
            style={{height: 80}}
            />
        </FormField>      
        </Fragment>
    )
}