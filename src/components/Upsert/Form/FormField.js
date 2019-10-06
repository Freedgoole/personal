import React from 'react'

export const FormField = props => {
    const { label, children, validationStatus, helpMsg } = props;
    const validationStatusText = !validationStatus && validationStatus !== undefined ? 'fail' : 'valid'
    return (
        <div className='form-field-container'>
            <div className='form-field--label'>{label} :</div>
            <div className='form-field--input'>
                {children}
                <div className={`form-field-input-valid-msg ${validationStatusText}`}>
                    {helpMsg}
                </div>
            </div>
            
        </div>
    )
}