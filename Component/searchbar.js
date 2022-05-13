import styled from "@emotion/styled";

// const Input = styled.span`
//     color: rgba(255, 255, 255, 0.1);
//     border: 2px black;
//     border-radius: 3px;
// `;

const SearchBar = () => {
    return(
        // <Input>
            <input
                type="text"
                id="header-search"
                placeholder="&#xF002;"
                name="search"
            />
        // </Input>
    );
}

export default SearchBar;