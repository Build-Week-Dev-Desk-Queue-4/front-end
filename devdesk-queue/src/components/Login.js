import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../actions/actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from "styled-components";

export default function Login(props) {
  const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [ user, setUser ] = useState({});
    console.log(errors);
  
    const handleLogin = (data) => {
        console.log(data)
        axiosWithAuth()
            .post('api/auth/login', data)
            .then(res => {
              dispatch(updateUser(res.data.user));
              setUser(res.data.user);
              localStorage.setItem('user', res.data.user.id);
              localStorage.setItem('token', res.data.token);
              history.push('/protected');
            })
            .catch(err => console.log('Post err', err));
    };

  return (
  <div className="login-form">
    <StyledH1>Welcome Back!</StyledH1>
        <StyledP>Please login to continue.</StyledP>
     <StyledSection>
        <StyledForm onSubmit={handleSubmit(handleLogin)}>
        <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" placeholder="username" required/>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="password" required/>
      </FormGroup>      
        <StyledButton className="login-button" type="submit" color="success">
          Login
        </StyledButton>     
    </StyledForm>
    </StyledSection>
    </div>
  );
}

const StyledButton = styled.button`
  background-color: blue;
  width: 30%;
  color: white;
  border-radius: 5px;
`;

const StyledSection = styled.section`
  width: 25%;
  margin: auto;
  border: 2px solid blue;
`;

const StyledH1 = styled.h1`
color: blue;
`;

const StyledForm = styled.form`
padding: 5%;
color: blue;
font-weight: bold;
`

const StyledP = styled.p`
color: blue;
`
