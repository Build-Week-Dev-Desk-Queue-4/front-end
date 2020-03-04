import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import TicketCard from '../components/TicketCard'
import styled from 'styled-components';


const TicketList = (props) => {
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

    const toAxios = (id) =>{
        axiosWithAuth()
        .get(`api/tickets`)
        .then(res => {
            const ticketData = res.data;
            setTickets(ticketData)
            console.log('success', ticketData)
        })
        .catch(err => console.log('Error', err.respond))
    }

    const toHome = () =>{
        props.history.push("/home")
    }

    useEffect(() => {
        const url = props.match.url;
        const id = props.location.pathname.replace(`${url}/`, "")
        if (id !== ""){
            return toAxios(id)
        }
    }, []);


    return (
        <div className="card-container">
            {/* <TicketCard tickets={tickets} toHome={toHome} /> */}
            {tickets.length > 0 ? tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} toHome={toHome} />) :
            <div>Loading tickets...</div>}
            
        </div>
    )
}

export default TicketList;