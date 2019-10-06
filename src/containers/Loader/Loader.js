import React from 'react'
import { connect } from "react-redux";

import { Spin } from 'antd'

const Loader = props => {
    const { loaderStatus } = props;
    if(!loaderStatus) {
        return null
    }
    return (
        <div className='loader-container'>
            <Spin size="large" />
        </div>
    )
}

function mapStateToProps({ loaderStatus }) {
    return {
    loaderStatus
    };
  }
  
  export default connect(
    mapStateToProps,
    null
  )(Loader);
  