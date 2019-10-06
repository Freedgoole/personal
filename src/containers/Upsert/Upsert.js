import React, { useEffect, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {checkBindAction, RoutesActions, MainActions, UspectActions} from "../store/actions";

import useForm from '../../components/Upsert/Steps/useFromSteps'

// components
import { UpsertHeader } from  '../../components/Upsert/UpsertHeader'
import { UpsertFooter } from  '../../components/Upsert/UpsertFooter'
import { StepFirst } from '../../components/Upsert/Steps/StepFirst'
import { StepSecond} from '../../components/Upsert/Steps/StepSecond'

const steps = [
    {
        title: 'First',
        content: (data, handleChange, values, errors) => 
            <StepFirst 
                errors={errors} 
                values={values} 
                handleChange={handleChange} 
                data={data}
            />,
    },
    {
        title: 'Second',
        content: (data,handleChange, values, errors) => 
            <StepSecond 
                errors={errors} 
                values={values} 
                handleChange={handleChange} 
                data={data}
            />,
    },
];

const Upsert = props => {

    //event
    const { createNewItemData, updateItemData } = props;
    // store
    const { mainMedicationSheet, selectedItem } = props;

    const [currentStep, setCurrentStep] = useState(0)
    const { values, handleChange, setValues, errors} = useForm();

    useEffect(() => {
        if(selectedItem !== null) {
            let data = mainMedicationSheet[selectedItem];
            setValues(data)
        }
    }, [selectedItem, mainMedicationSheet, setValues])

    const handleNextFromStep = () => {
        const current = currentStep + 1;
        setCurrentStep(current);
    }

    const handlePrevFormStep = () => {
        const current = currentStep - 1;
        setCurrentStep(current);
    }

    const handleSendDataForNewItem = () => {
        selectedItem ? updateItemData({ values, selectedItem }) : createNewItemData(values)
    }

    return (
        <div className='steps-container'>
            <UpsertHeader 
                title='Add/edit medicine' 
                totalSteps={steps.length} 
                currentStep={currentStep}
            />
            <div className="steps-content">
                { 
                    steps[currentStep]
                    .content(mainMedicationSheet, handleChange, values, errors)
                }
            </div>
            <UpsertFooter 
                totalSteps={steps.length} 
                currentStep={currentStep} 
                errors={errors}
                values={values}
                handleNext={handleNextFromStep} 
                handlePrev={handlePrevFormStep} 
                handleSendDataForNewItem={handleSendDataForNewItem}
            />
        </div>
    )
}

function mapActionsToProps(dispatch) {
    return bindActionCreators(
        {
            ...checkBindAction(RoutesActions, MainActions, UspectActions)

        }
        , dispatch)
}
function mapStateToProps({mainMedicationSheet, selectedItem}) {
    return {
        mainMedicationSheet,
        selectedItem
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Upsert);