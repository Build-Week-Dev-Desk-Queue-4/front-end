import React from 'react';
import Sidebar from './Sidebar';
import TicketList from './TicketList';
import CreateTicket from './CreateTicket';

export default () => {
    return (
        <div>
            <Sidebar />
            {/* <CreateTicket /> */}
            <TicketList />
        </div>
    );
}