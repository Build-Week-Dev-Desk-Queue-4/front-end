import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
export default function TicketList() {

    const [tickets, setTickets ] = useState({
        id: "",
        asker_id: "",
        created_at: "",
        title: "",
        description: "",
        category: "",
        resolved: "",
        being_solved: "",
        solved_by: "",
        assignee: "",
        assigned_by: ""
    })



    return (
        <div>
            <h1>TicketList</h1>
        </div>
    )
}
