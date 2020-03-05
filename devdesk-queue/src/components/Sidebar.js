import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export default () => {
    const filterDiv = useRef(null);
    const statusDiv = useRef(null);
    const sortDiv = useRef(null);
    const catgories = [
        'HTML', 'CSS', 'JavaScipt', 'React', 'Redux', 'Git', 'Node', 'Testing', 'Python', 'Java', 'SQL'
    ];

    const populateCategories = () => {
        return catgories.map(category => {
            return <option value={category}>{category}</option>;
        });
    }

    const collapseDiv = (element) => {
        if (!element.current.style) {
            element.current.style = 'display: none;';
        } else if (element.current.style.display !== 'none') {
            element.current.style = 'display: none;';
        } else {
            element.current.style = 'display: flex;';
        }
        
    }

    return (
        <Container>
            <NavLink to='/protected' >The Queue</NavLink>
            <button class='all-tickets-btn'>All Tickets</button>
            <button class='my-tickets-btn'>My Tickets</button>
            <button onClick={() => collapseDiv(filterDiv)}>> Filter Tickets</button>
            <div class='filterDiv' ref={filterDiv} style={{display: 'none'}} >
                <button onClick={() => collapseDiv(statusDiv)} >Status</button>
                <div ref={statusDiv} style={{display: 'none'}} >
                    <button>Open</button>
                    <button>Closed</button>
                </div>
                <select name='category' defaultValue='category'>
                    <option disabled value='category' >Category</option>
                    {populateCategories()}
                </select>
            </div>
            <button onClick={() => collapseDiv(sortDiv)} >> Sort Tickets</button>
            <div ref={sortDiv} style={{display: 'none'}} >
                <button>Newest</button>
                <button>Oldest</button>
            </div>
            <form>
                <input type="text" placeholder="Search.." name="search" />
                <select name='search-option' defaultValue='search-by'>
                    <option disabled value='search-by' >Search by...</option>
                    <option value='title'>Title</option>
                    <option value='description'>Description</option>
                </select>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 20%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow: hidden;
    background: #FFF;
    padding-left: 30px;
    padding-top: 30px;
    a {
        color: black;
        font-size: 2rem;
        margin-bottom: 20px;
    }
    button {
        margin: 20px 0;
        font-size: 1.2rem;
        background: transparent;
        border: none;
    }
    .all-tickets-btn, .my-tickets-btn {
        font-size: 1.6rem;
    }
    div {
        margin-top: -15px;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        button {
            margin: 5px 0;
            font-size: 1.1rem;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        input {
            width: 100%;
        }
        select {
            width: 100%;
        }
    }
`