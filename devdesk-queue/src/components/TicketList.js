import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import TicketCard from '../components/TicketCard';
import CreateTicket from '../components/CreateTicket';
import styled from 'styled-components';

const TicketList = (props) => {
    const history = useHistory();
    const [tickets, setTickets] = useState([
    // {
        // id: "",
        // asker_id: "",
        // created_at: "",
        // title: "",
        // description: "",
        // category: "",
        // resolved: "",
        // being_solved: "",
        // solved_by: "",
        // assignee: "",
        // assigned_by: ""
    // }
    ]);
    const [newTicket, setNewTicket] = useState({});

    const getAllTickets = (id) =>{
        axiosWithAuth()
        .get(`api/tickets/all/newest`)
        .then(res => {
            const ticketData = res.data;
            setTickets(ticketData);
            console.log('success', ticketData)
        })
        .catch(err => {
            console.log('Error', err.respond);
            //If unable to load initial tickets, it's likely due to
            //an expired token. We need to route the user back to login
            //when their token expires.
            history.push('/login');
        });
    }

    const toHome = () =>{
        props.history.push("/home");
    }

    useEffect(() => {
        getAllTickets();
    }, [newTicket]);


    return (
        <Container className="card-container">
            <CreateTicket setNewTicket={setNewTicket} />
            <H1Styled>Questions In The Q</H1Styled>
            {/* <TicketCard tickets={tickets} toHome={toHome} /> */}
            {tickets.length > 0 ? tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} toHome={toHome} />) :
            <div>Loading tickets...</div>}
        </Container>
    )
}

const H1Styled = styled.h1`
color: blue;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default TicketList;