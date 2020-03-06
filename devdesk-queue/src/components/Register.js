import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { updateUser } from '../actions/actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from "styled-components";


export default function Register(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  // const onSubmit = data => console.log(data);
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
         <StyledH1>Register to Join DevDesk Q</StyledH1>
        <StyledP>Please enter your information below.</StyledP>
        <StyledSection>
      <StyledForm onSubmit={handleSubmit(handleRegister)}>
        <FormGroup>
        <Label for="first_name">First Name: </Label>
        <input type="text" name="first_name" id="first_name" placeholder="first name" required/>
      </FormGroup>
      <FormGroup>
        <Label for="last_name">Last Name: </Label>
        <input type="text" name="last_name" id="last_name" placeholder="last name" required/>
      </FormGroup>      
      <FormGroup>
        <Label for="email">Email: </Label>
        <input type="text" name="email" id="email" placeholder="email" required/>
      </FormGroup>
      <FormGroup>
        <Label for="username">Username: </Label>
        <input type="text" name="username" id="username" placeholder="username" required/>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password: </Label>
        <input type="password" name="password" id="password" placeholder="password" required/>
      </FormGroup>      
      <FormGroup>
        <Label for="role">Role: </Label>
        <select type="select" name="role" id="role">
          <option disabled>Choose one...</option>
          <option>Student</option>
          <option>Team Lead</option>
        </select>
      </FormGroup>
      <StyledButton className="register-button" type="submit" color="success">
          Register
        </StyledButton>
    </StyledForm>
    </StyledSection>
    </div>

    )
  }

const StyledForm = styled.form`
padding: 3% 10%;
`

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  width: 30%;
  border-radius: 5px;
`;

const StyledSection = styled.section`
  width: 50%;
  margin: auto;
  border: 4px solid blue;
  color: blue;
  font-weight: bold;
`;

const StyledH1 = styled.h1`
color: blue;
`

const StyledP = styled.p`
color: blue;
margin-bottom: 2.5%;
`