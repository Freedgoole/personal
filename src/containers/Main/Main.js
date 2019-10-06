import React, { useEffect } from "react";
import { Layout } from 'antd'
// components
import { CreateButton } from '../../components/Main/CreateButton/CreateButton'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {checkBindAction, MainActions} from "../store/actions";
//components 
import { MedicineItem } from '../../components/Main/MedicineItem/MedicineItem'
const { Content } = Layout;

const Main = props => {
    // event
    const { getDataAll, editDataItem, createNewItem , deleteDataItem, setSelectedItem } = props;
    // store 
    const { mainMedicationSheet } = props;

    useEffect(()=> {
        getDataAll()
        setSelectedItem(null)
    },[setSelectedItem, getDataAll])

    const handleEdit = code => editDataItem(code)

    return (
        <Content className='main-content'>
            { 
                Object.keys(mainMedicationSheet).map( item => (
                    <MedicineItem 
                        id={item} 
                        key={item} 
                        handleEdit={handleEdit} 
                        handleDeleteDataItem={deleteDataItem}
                        {...mainMedicationSheet[item]}
                    />))
             }
            <CreateButton onClick={createNewItem}/>
        </Content>

    )
}
function mapActionsToProps(dispatch) {
    return bindActionCreators(
        {
            ...checkBindAction(MainActions)

        }
        , dispatch)
}
function mapStateToProps({mainMedicationSheet, selectedItem}) {
    return {
        mainMedicationSheet,
        selectedItem
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Main);
