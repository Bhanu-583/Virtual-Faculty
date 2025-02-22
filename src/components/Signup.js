import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupValidation from './Signupvalidation';
import axios from 'axios';
import './Signup.css'; // Ensure this file contains the custom CSS styles

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = SignupValidation(values);
        setErrors(validationErrors);

        if (validationErrors.name === "" && validationErrors.email === "" && validationErrors.password === "") {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    };

    return (
        <div className='container'>
            <div className='form'>
                <h2 className='title'>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='title'><strong>Name</strong></label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Enter Name'
                            className='input'
                            onChange={handleInput}
                            autoComplete="name"
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='title'><strong>Email</strong></label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter Email'
                            className='input'
                            onChange={handleInput}
                            autoComplete="email" 
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='title'><strong>Password</strong></label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Enter Password'
                            className='input'
                            onChange={handleInput}
                            autoComplete="new-password" 
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='button-confirm'><strong>Sign up</strong></button>
                    <p>You agree to our terms and conditions</p>
                    <Link to="/" className='button-log text-decoration-none'>Log in</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
