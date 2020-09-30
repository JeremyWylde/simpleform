import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../validators/validators";
import {MyInput} from "./FormControl";
import styled from '@emotion/styled'

const Form = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </>
}
const maxLength2 = maxLength(2)
const maxLength3 = maxLength(3)


const Button = styled.button`
  background-color: hotpink;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const LoginForm = (props) => {

    return <>
        <h1>Form</h1>
        <form onSubmit={props.handleSubmit}>
            <Field type={'text'}
                   name={"login"}
                   placeholder={"Login"}
                   component={MyInput}
                   validate={[required, maxLength2]}
            />
            <Field type={'text'}
                   name={"Pas"}
                   placeholder={"Pas"}
                   component={MyInput}
                   validate={[required, maxLength3]}
            />
            <Button>submit</Button>
        </form>
    </>
}

const ReduxLoginForm = reduxForm({
    // a unique name for the form
    form: 'loginForm'
})(LoginForm)


export default Form;
