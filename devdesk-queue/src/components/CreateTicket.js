import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import styled from "styled-components";
import { createStore } from "redux";

export default function CreateTicket({ newTicket, setNewTicket }) {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  const createTicket = (data) => {
    data = {
      ...data,
      asker_id: localStorage.getItem('user')
    }
    console.log('this is data in createTicket:', data);
    axiosWithAuth().post('api/tickets/', data)
    .then(res => {
      //res.data returns the created ticket
      setNewTicket(res.data);
      history.push('/protected');
    })
    .catch(({message, errorMessage}) => console.log('Post err', message, errorMessage));
  }

  return (
    <div className="create-ticket-form">
       <H1Styled>Submit Your Question to the Q!</H1Styled>
       <StyledP>Please fill out the form below to submit a question.</StyledP>
      <FormStyled onSubmit={handleSubmit(createTicket)}>
        <FormGroup>
        <Label for="title">Title: </Label>
        <input type="text" name="title" id="title" placeholder="Question title" ref={register} required/>
      </FormGroup>
        <FormGroup>
        <Label for="description">Description: </Label>
        <input type="textarea" name="description" id="description" placeholder="Ask your question here" ref={register} required/>
      </FormGroup>
      <FormGroup>
        <Label for="category">Category: </Label>
        <select type="select" name="category" id="category" ref={register}>
          <option disabled>Choose one...</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>JavaScript</option>
          <option>React</option>
          <option>Java</option>
          <option>Python</option>
          <option>Other</option>
        </select>
      </FormGroup>
        <ButtonStyled className="submit-to-q-button" type="submit">
          Submit to Q
        </ButtonStyled>
      </FormStyled>
    </div>
  );
}

const FormStyled = styled.form`
border: 5px solid blue;
padding: 5%;
margin: 5% 0;
width: 100%;
color: blue;
font-weight: bold;
`

const ButtonStyled = styled.button`
background-color: blue;
color: white;
border-radius: 5px;
`

const H1Styled = styled.h1`
color: blue;
`

const StyledP = styled.p`
color: blue;
margin-bottom: 2.5%;
`