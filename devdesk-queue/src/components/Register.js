import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Button, InputGroup, Input } from "reactstrap";
import styled from "styled-components";


export default function Register(props) {

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
      console.log(res, 'token')
      console.log(res.data)
      window.localStorage.setItem('token', res.data.token);
      props.history.push('/protected');      
    })
    .catch(err => console.log('Post err', err));
  };

 
    return(
      <div className="register-form">
        <StyledSection>
      <StyledForm onSubmit={handleSubmit(handleRegister)}>
      <StyledGroup>
      <input type="text" placeholder="First name" name="first_name" ref={register({required: true, maxLength: 80})} />
      </StyledGroup>
      <StyledGroup>
      <input type="text" placeholder="Last name" name="last_name" ref={register({required: true, maxLength: 100})} />
      </StyledGroup>
      <StyledGroup>
      <input type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      </StyledGroup>
      <StyledGroup>
      <input type="text" placeholder="Username" name="username" ref={register} />
      </StyledGroup>
      <StyledGroup>
      <input type="password" placeholder="Password" name="password" ref={register} />
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
`;

const StyledGroup = styled(InputGroup)`
  margin-bottom: 2%;
`;


const StyledForm = styled.form`
  margin-top: 15%;
`;

const StyledSection = styled.section`
  width: 25%;
  margin-top: 5%;
  justify-content: center;
`;