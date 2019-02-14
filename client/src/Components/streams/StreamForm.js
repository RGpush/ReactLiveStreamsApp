import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{

    renderError ({error, touched}) {
        if(touched && error){
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
        /* we can write same thing in another way below
        return (
            <input
                onChange={formProps.input.onChange}
                value={formProps.input.value}
            />
        );*/
        const className = `field ${meta.error && meta.touched ? 'error':''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input  {...input} />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                <Field name='title' component={this.renderInput} label='Enter Title'/>
                <Field name='description' component={this.renderInput} label='Enter Description'/>
                <button className='ui button primary'>Submit</button>
            </form>
        );
    }
}

const valiDate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'Title is Required';
    }
    if(!formValues.description){
        errors.description = 'Description is Required';
    }
    return errors;
}

export default reduxForm({
    form: 'StreamCreate',
    validate: valiDate
})(StreamForm);

