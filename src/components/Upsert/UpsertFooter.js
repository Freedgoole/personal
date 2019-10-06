import React from "react";
import { Button } from 'antd';
import {Link} from "react-router-dom";

export const UpsertFooter = props => {
    const { totalSteps, currentStep, errors, values } = props;
    const { handleNext, handlePrev, handleSendDataForNewItem } = props;
    
    const checkDisabledBtn = () => {
        if(!values) {
            return true
        } else if(errors) {
            return Object.values(errors).includes(false)
        } else {
            return false
        }
    } 
    //errors ? Object.values(errors).includes(true) : false

    return (
        <div className="steps-action">
         <div className='steps-action--col'>
            <Link to='/' > <Button type="dashed">Cancel</Button></Link>
         </div>
         <div className='steps-action--col'>
         {currentStep < totalSteps - 1 && (
            <Button type="primary" onClick={handleNext}>
                Next
            </Button>
        )}
        {currentStep > 0 && (
            <Button type="primary" onClick={handlePrev}>
                Previous
            </Button>
        )}
         </div>      
         <div className='steps-action--col'>
         {currentStep === totalSteps - 1 && (
            <Button 
                type="danger" 
                disabled={checkDisabledBtn()}
                title={!checkDisabledBtn ? 'incorrect value' : null}
                onClick={handleSendDataForNewItem}>
                Done
            </Button>
        )}
         </div>          
        </div>
    )
}