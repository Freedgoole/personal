import React from 'react';

export const UpsertHeader = props => {
    const { title, totalSteps, currentStep } = props;
    return (
        <h4 className='steps-header--title'>
            {title}
            <span>{currentStep + 1}/{totalSteps}</span>
        </h4>
    )
}