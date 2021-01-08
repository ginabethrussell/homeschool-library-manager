import React from 'react';
import { useForm } from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInUser } from '../redux/actions/LoginActions';

import './Forms.css'; 

const initialValues = {
    email: '',
    password: ''
}

function Login({logInUser}) {
    const [formValues, handleChange, clearForm] = useForm(initialValues);
    const history = useHistory();

    const submitForm = (e) => {
        e.preventDefault();
        logInUser(formValues);
        history.push('/library');
    }
    return (
    <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit= {submitForm}>
                <h3>Log In</h3>

                <div className="form-group">
                    <label htmlFor='email'>Email address</label>
                    <input id='email'
                        name='email'
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        value={formValues.email}
                        onChange={(e) => handleChange(e.target.name, e.target.value) } />
                </div>

                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input id='password'
                        name='password'
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                        value={formValues.password}
                        onChange={(e) => handleChange(e.target.name, e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    </div>
    )
}

const mapDispatchToProps = {logInUser};

export default connect(null, mapDispatchToProps)(Login);
