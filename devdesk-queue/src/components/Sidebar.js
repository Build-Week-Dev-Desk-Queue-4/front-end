import React, { useState, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

export default () => {
    const filterDiv = useRef(null);
    const statusDiv = useRef(null);
    const sortDiv = useRef(null);
    const [isFilterDivCollapsed, setIsFilterDivCollapsed] = useState(true);
    const [isStatusDivCollapsed, setIsStatusDivCollapsed] = useState(true);
    const [isSortDivCollapsed, setIsSortDivCollapsed] = useState(true);
    const catgories = [
        'HTML', 'CSS', 'JavaScipt', 'React', 'Redux', 'Git', 'Node', 'Testing', 'Python', 'Java', 'SQL'
    ];

    const populateCategories = () => {
        return catgories.map(category => {
            return <option value={category}>{category}</option>;
        });
    }

    //toggles display of passed in element
    const collapseDiv = (element) => {
        //toggle display
        if (!element.current.style) {
            element.current.style = 'display: none;';
        } else if (element.current.style.display !== 'none') {
            element.current.style = 'display: none;';
            switch (element) {
                case filterDiv:
                    setIsFilterDivCollapsed(true);
                    break;
                case statusDiv:
                    setIsStatusDivCollapsed(true);
                    break;
                case sortDiv:
                    setIsSortDivCollapsed(true);
                    break;
                default:
                    break;
            }
        } else {
            element.current.style = 'display: flex;';
            switch (element) {
                case filterDiv:
                    setIsFilterDivCollapsed(false);
                    break;
                case statusDiv:
                    setIsStatusDivCollapsed(false);
                    break;
                case sortDiv:
                    setIsSortDivCollapsed(false);
                    break;
                default:
                    break;
            }
        }
        //Ensure other collapsibles collapse
        if (element === filterDiv) {
            if (sortDiv.current.style.display !== 'none') {
                sortDiv.current.style = 'display: none;';
                setIsSortDivCollapsed(true);
            }
        } else if (element === sortDiv) {
            if (statusDiv.current.style.display !== 'none') {
                statusDiv.current.style = 'display: none;';
                setIsStatusDivCollapsed(true);
            }
            if (filterDiv.current.style.display !== 'none') {
                filterDiv.current.style = 'display: none;';
                setIsFilterDivCollapsed(true);
            }
        }
    }

    const displayChevron = (boolean) => {
        if (boolean) {
            return <FontAwesomeIcon icon={faChevronRight} />;
        } else {
            return <FontAwesomeIcon icon={faChevronDown} />;
        }
    }

    return (
        <Container>
            <NavLink to='/protected' >The Queue</NavLink>
            <button className='all-tickets-btn'>All Tickets</button>
            <button className='my-tickets-btn'>My Tickets</button>
            <button onClick={() => collapseDiv(filterDiv)}>{displayChevron(isFilterDivCollapsed)} Filter Tickets</button>
            <div ref={filterDiv} style={{display: 'none'}} >
                <button onClick={() => collapseDiv(statusDiv)} >{displayChevron(isStatusDivCollapsed)} Status</button>
                <div ref={statusDiv} style={{display: 'none'}} >
                    <button>Open</button>
                    <button>Closed</button>
                </div>
                <select name='category' defaultValue='category'>
                    <option disabled value='category' >Category</option>
                    {populateCategories()}
                </select>
            </div>
            <button onClick={() => collapseDiv(sortDiv)} >{displayChevron(isSortDivCollapsed)} Sort Tickets</button>
            <div ref={sortDiv} style={{display: 'none'}} >
                <button>Newest</button>
                <button>Oldest</button>
            </div>
            <form>
                <div>
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                
                <select name='search-option' defaultValue='search-by'>
                    <option disabled value='search-by' >Search by...</option>
                    <option value='title'>Title</option>
                    <option value='description'>Description</option>
                </select>
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
    background: orange;
    color: white;
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
        margin-left: 10px;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        button {
            margin: 5px 0;
            font-size: 1.1rem;
        }
        div {
            margin-top: 0;
            button {
                font-size: 1rem;
            }
        }
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        select {
            width: 100%;
            margin-top: 0;
        }
        div {
            display: flex;
            flex-direction: row;
            margin-top: 0;
            margin-left: 0;
            margin-bottom: -2px;
            align-items: center;
            input {
                width: 100%;
                margin-right: -32px;
            }
            button {
                color: lightgray;
                vertical-align: middle;
            }
        }
    }
`