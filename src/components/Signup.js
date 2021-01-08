import React from 'react';
import { useForm } from '../hooks/useForm';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignup } from '../redux/actions/SignupActions';


const initialValues = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
}

function Signup({userSignup}) {
    const [formValues, handleChange, clearForm] = useForm(initialValues);
    const history = useHistory();

    const submitForm = (e) => {
        e.preventDefault();
        console.log('submitting form', formValues)
        userSignup(formValues);
        clearForm();
        history.push('/library');
    }

    return (
    <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={submitForm}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label htmlFor='firstName'>First name</label>
                    <input id='firstName'
                        name='firstName'
                        type="text" 
                        className="form-control" 
                        placeholder="First name"
                        value={formValues.firstName}
                        onChange={(e) => {
                            handleChange(e.target.name, e.target.value)
                        }} />
                </div>

                <div className="form-group">
                    <label htmlFor='lastName'>Last name</label>
                    <input id='lastName'
                        name='lastName'
                        type="text" 
                        className="form-control" 
                        placeholder="Last name"
                        value={formValues.lastName}
                        onChange={(e) => {
                            handleChange(e.target.name, e.target.value)
                        }} />
                </div>

                <div className="form-group">
                    <label htmlFor='email'>Email address</label>
                    <input id='email'
                        name='email'
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        value={formValues.email}
                        onChange={(e) => {
                            handleChange(e.target.name, e.target.value)
                        }}/>
                </div>

                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input id='password'
                        name='password'
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                        value={formValues.password}
                        onChange={(e) => {
                            handleChange(e.target.name, e.target.value)
                        }} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">log in?</Link>
                </p>
            </form>
        </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSignup: (user) => {
            dispatch(userSignup(user))
        }
    }
};

export default connect(null, mapDispatchToProps)(Signup);
