import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { updateUser } from '../actions/actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function CreateTicket() {
  const { register, handleSubmit, errors } = useForm();
  const [createTicket, setCreateTicket] = useState();
  const dispatch = useDispatch();
    const history = useHistory();
  // const onSubmit = data => console.log(data);
  console.log(errors);

  const handleCreateTicket = (data) => {
    console.log()
    data = {
      ...data,
      asker_id: localStorage.getItem('user')
    }
    axiosWithAuth().post('api/tickets/', data).then(res => {
      //res.data returns the created ticket
      history.push('/protected');
    })
    .catch(err => console.log('Post err', err));
  }


//   const handleCreateTicket = (data) => {
//     console.log(data)
//     axiosWithAuth()
//         .post('api/tickets/', data)
//         .then(res => {
//           dispatch(updateUser(res.data.user));
//           setCreateTicket(res.data.user);
//           localStorage.setItem('user', res.data.user.id);
//           localStorage.setItem('token', res.data.token);
//           history.push('/protected');
//         })
//         .catch(err => console.log('Post err', err));
// };

  return (
    <div className="create-ticket-form">
      <form onSubmit={handleSubmit(handleCreateTicket)}>
        <h1>Submit Your Question to the Q!</h1>
        <label>
          Title:
          <input
            type="text"
            placeholder="Question title"
            name="title"
            ref={register({ required: "Title is required" })}
          />
          {errors.title && <p className="errors">{errors.title.message}</p>}
        </label>
        <label>
          Description:
          <textarea
            name="description"
            placeholder="Ask your question here"
            ref={register({ required: "Description is required" })}
          />
          {errors.description && (
            <p className="errors">{errors.description.message}</p>
          )}
        </label>
        <label>
          Category:
          <select
            name="category"
            ref={register({ required: "Category is required" })}
          >
            <option disabled>Select a category</option>
            <option value="HTML">HTML</option>
            <option value="CSS"> CSS</option>
            <option value="JavaScript"> JavaScript</option>
            <option value="React"> React</option>
            <option value="Java"> Java</option>
            <option value="Python"> Python</option>
            <option value="Other"> Other</option>
          </select>
          {errors.category && (
            <p className="errors">{errors.category.message}</p>
          )}
        </label>
        <button type="submit" className="btn btn-dark">
          Submit to Q
        </button>
      </form>
    </div>
  );
}