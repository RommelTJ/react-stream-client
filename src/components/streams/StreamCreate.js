import React from 'react';
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {

    renderInput({ input, label, meta }) {

        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div>{meta.error}</div>
            </div>
        );
    }

    onSubmit(formProps) {
        console.log(formProps);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title:" />
                <Field name="description" component={this.renderInput} label="Enter Description:"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }

}

const validate = (formProps) => {
    const errors = {};

    if (!formProps.title) {
        errors.title = "You must enter a title.";
    }
    if (!formProps.description) {
        errors.description = "You must enter a description.";
    }

    return errors;
};

export default reduxForm({
    form: 'streamCreateForm',
    validate
})(StreamCreate);
