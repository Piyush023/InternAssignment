import styled from "@emotion/styled";
import React from "react";
import { IoMdSearch } from 'react-icons/io';


const Search = styled.div`
    position: relative;
    display: flex;  
    align-items: center;
    flex: 2;
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 10;
    line-height: 2;
    word-spacing: 20px;
    text-transform: capitalize;
    color: #FFFFFF;
    opacity: 0.4;
`

const SearchBarView = styled.input`
    padding: 1rem 1rem 1rem 3.5rem;
    width: 100%;
    border: 2px black;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.1)
`

const SearchBar = () => {
    return (
        <Search>
            <IoMdSearch 
            style={{marginLeft: "1rem",position: "absolute"}} color="white" 
            size="1.5em" 
            />
            <SearchBarView 
                id="search-bar"
                type="text"
                placeholder="Search">
            </SearchBarView>
        </Search>
    )
  }

export default SearchBar;
