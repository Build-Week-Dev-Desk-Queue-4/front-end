import React from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth"

const TicketCard = ({ticket, toHome}) => {  
    return (
        <div className="ticketCard">
            <div>
                <img src={ticket.asker.image} alt={`${ticket.asker.username}'s profile picture`} />
                <h2>{ticket.asker.first_name} {ticket.asker.last_name}</h2>
                <p>{ticket.asker.username}</p>
            </div>
            <h4>{ticket.category}</h4>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <div>
                <h4>Comments:</h4>
                {ticket.comments.length > 0 ? ticket.comments.map(comment => {
                    return (
                        <div key={comment.id} >
                            <p><span>{comment.first_name} {comment.last_name}</span>comment.username</p>
                            <p>{comment.comment}</p>
                        </div>
                    );
                }) :
                <div><p>Be the first to comment.</p></div>}
            </div>
        </div>
    );
};
    
export default TicketCard;