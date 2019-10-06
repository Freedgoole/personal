import React, { Fragment, useState } from "react";

import { bindActionCreators } from "redux";
import { checkBindAction, LoginActions } from "../store/actions";
import { connect } from "react-redux";

import { Form, Icon, Input, Button } from "antd";

const Login = props => {

  // event 
  const { loginAuthorization } = props;
  const [dataUser, setDataUser] = useState({
    password: 'lI&^hXNBbm^R',
    name: 'freedgoole@gmail.com'
  });

  const handleSubmit = () => {
    loginAuthorization(dataUser)
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setDataUser({...dataUser, [name] : value})
  }

  return (
    <Fragment>
      <div className="login-form-page ">
        <Form className="login-form">
          <Input 
            prefix={<Icon type="user" />} 
            placeholder="Username" 
            name="name"
            defaultValue='freedgoole@gmail.com'
            onChange={handleChange}
            />
          <Input
            prefix={<Icon type="lock" />}
            type="password"
            name="password"
            placeholder="Password"
            defaultValue='lI&^hXNBbm^R'
            onChange={handleChange}
            attributes='false'
          />
          <Button
            type="primary"
            onClick={handleSubmit}
            className="login-form-button"
          >
            Log in
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

function mapActionsToProps(dispatch) {
  return bindActionCreators(
    {
      ...checkBindAction(LoginActions)
    },
    dispatch
  );
}

function mapStateToProps({
  loginStatus
}) {
  return {
    loginStatus
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);
