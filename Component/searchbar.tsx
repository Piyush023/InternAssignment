import styled from "@emotion/styled";
import Image from "next/image";
import search from '../public/VectorSearch.svg';

const Search = styled.div`
    display: flex;
    // flex: 0 1;
    flex-shrink: 1;
    position: absolute;
    width: 400px;
    height: 25px;
    // left: 700px;
    // top: 50px;
    background: rgba(255, 255, 255, 0.1);
`;

const Text = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 10;
    line-height: 2;
    word-spacing: 20px;
    padding-left: 10px;
    text-transform: capitalize;
    color: #FFFFFF;
    opacity: 0.4;
`;

const SearchBar = () => {
    return(
        <Search>
            <Image
                src={search}
                alt="This the logo"
            />
            <Text>
                {/* <input> */}
                Search
                {/* </input> */}
            </Text>
        </Search>
    );
}

export default SearchBar;