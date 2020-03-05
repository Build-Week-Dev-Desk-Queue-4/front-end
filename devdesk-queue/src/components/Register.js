import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { updateUser } from '../actions/actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Button, InputGroup, Input } from "reactstrap";
import styled from "styled-components";


export default function Register(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log('Errors:', errors);

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    role: '',
    first_name: "",
    last_name: '',
    email: ''
})


  const handleRegister = (data) => {
    console.log(data)
    axiosWithAuth()
    .post('api/auth/register', data)
    .then(res => {
      dispatch(updateUser(res.data.user));
      localStorage.setItem('user', res.data.user.id);
      localStorage.setItem('token', res.data.token);
      history.push('/protected');      
    })
    .catch(err => console.log('Post err', err));
  };

 
    return(
      <div className="register-form">
        <StyledSection>
      <StyledForm onSubmit={handleSubmit(handleRegister)}>
        <StyledH1>Register to Join DevDesk Q</StyledH1>
        <p>Please enter your infromation below.</p>
      <StyledGroup>
      <input type="text" placeholder="First name" name="first_name" ref={register({required: "Error: First Name is required", maxLength: 80})} />
      {errors.first_name && (
            <p className="errors">{errors.first_name.message}</p>
          )}
      </StyledGroup>
      <StyledGroup>
      <input type="text" placeholder="Last name" name="last_name" ref={register({required: "Error: Last Name is required", maxLength: 100})} />
      {errors.last_name && (
            <p className="errors">{errors.last_name.message}</p>
          )}
      </StyledGroup>
      <StyledGroup>
      <input type="text" placeholder="Email Address" name="email" ref={register({required: "Error: Email Address is required", pattern: /^\S+@\S+$/i})} />
      {errors.email && (
            <p className="errors">{errors.email.message}</p>
          )}
      </StyledGroup>
      <StyledGroup>
      <input type="text" placeholder="Username" name="username" ref={register({required: "Error: Username is required"})} />
      {errors.username && (
            <p className="errors">{errors.username.message}</p>
          )}
      </StyledGroup>
      <StyledGroup>
      <input type="password" placeholder="Password" name="password" ref={register({required: "Error: Password is required"})} />
      {errors.password && (
            <p className="errors">{errors.password.message}</p>
          )}
      </StyledGroup>
      <StyledGroup>
      <select name="role" ref={register}>
        <option value="student">Student</option>
        <option value="team lead"> Team Lead</option>
        <option value="section lead"> Section Lead</option>
      </select>
      </StyledGroup>
      <StyledButton block type="submit" color="success">
          Register
        </StyledButton>
    </StyledForm>
    </StyledSection>
    </div>

    )
  }


const StyledButton = styled(Button)`
  background-color: #0066ff;
  width: 30%;
  margin-bottom: 10%;
  border-radius: 5px;
`;

const StyledGroup = styled(InputGroup)`
  margin-bottom: 2%;
`;


const StyledForm = styled.form`
 
`;

const StyledSection = styled.section`
  width: 30%;
  margin: auto;
  border: 2px solid blue;
`;

const StyledH1 = styled.h1`
color: blue;
`