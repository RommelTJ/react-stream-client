import React from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';

import { createStream } from "../../actions";

class StreamCreate extends React.Component {

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {StreamCreate.renderError(meta)}
            </div>
        );
    };

    static renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        { error }
                    </div>
                </div>
            );
        }
    }

    static onSubmit(formProps) {
        console.log(formProps);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(StreamCreate.onSubmit)} className="ui form error">
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

const formWrapped = reduxForm({
    form: 'streamCreateForm',
    validate
})(StreamCreate);

export default connect()(formWrapped);
