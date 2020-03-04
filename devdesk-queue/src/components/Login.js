import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useForm } from "react-hook-form";
import { Button, InputGroup } from "reactstrap";
import styled from "styled-components";

export default function Login(props) {

    const { register, handleSubmit, errors } = useForm();
    //const onSubmit = data => console.log(data);
    console.log(errors);

    // const [credentials, setCredentials] = useState({
    //     username: '',
    //     password: ''
    // })
  
    const handleLogin = (data) => {
        console.log(data)
        axiosWithAuth()
            .post('api/auth/login', data)
            .then(res => {
                console.log(res.data)
                console.log(res.data.token)
                window.localStorage.setItem('token', res.data.token);
                props.history.push('/protected');
            })
            .catch(err => console.log('Post err', err));
    };

   
        return (
        <div className="login-form">
            <StyledSection>
      <StyledForm onSubmit={handleSubmit(handleLogin)}>
      <StyledGroup>
      <input type="text" placeholder="Username" name="username" ref={register} />
      </StyledGroup>
      <StyledGroup>
      <input type="password" placeholder="Password" name="password" ref={register} />
      </StyledGroup>
      <StyledGroup>
      <StyledButton block type="submit" color="success">
          Login
        </StyledButton>
      </StyledGroup>
    </StyledForm>
    </StyledSection>
            </div>
        );
    
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