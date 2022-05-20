import styled from "styled-components";
import {FaSearch} from "react-icons/fa"

const DisplayHeader = (props) => {


    return (
        <DivStyled>
            <h1 style={{marginLeft: "30px"}}>Cats4Lyf</h1>
            <div className="nav-links" style={navbarLinks}>
                <a href="#" style={navbarLinks}>About</a>
                <a href="#" style={navbarLinks}>Services</a>
                <a href="#" style={navbarLinks}>Products</a>
                <a href="#" style={navbarLinks}>Contact</a>
                <a href="#" style={navbarLinks}>Help</a>
            </div>
            <div>
                <input className= "search-bar" placeholder="Search..."></input>
                <button className = "search-button" style={searchButton} ><FaSearch /></button>
            </div>
        </DivStyled>
    )
}

export default DisplayHeader


const DivStyled = styled.div`
    height: 100px;
    width: 100%;
    background-color: darkblue;
    color: lightblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    margin: 20px 0 20px 0;
`

const navbarLinks = {
    display: "flex",
    width: "840px",
    justifyContent: "space-between",
    textDecoration: "none",
}



const searchButton = {
    fontSize: "20px",
    padding: "5px",
    borderRadius: "10px",
    marginLeft: "10px",
    marginRight: "10px",
    border: "none",
    backgroundColor: "lightblue"
}