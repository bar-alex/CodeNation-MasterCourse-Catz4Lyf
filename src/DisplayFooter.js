import styled from "styled-components";
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaSnapchat} from "react-icons/fa"

const DisplayFooter = (props) => {


    return (
        <DivStyled>
                <p style={{fontSize:"17px", width: "130px", alignItems: "center", marginLeft: "20px"}}>Cats4Lyf &copy; 2022</p>
            <div style={footerText}>
                <p style={footerTextStyle}>Privacy Statement |</p>
                <p style={footerTextStyle}>Terms &amp; Conditions</p>
            </div>
            <div style={footerSocials}>
                Follow us on
                <FaTwitter />
                <FaFacebook />
                <FaInstagram />
                <FaSnapchat />
            </div>
        </DivStyled>
    )
}

export default DisplayFooter


const DivStyled = styled.div`
    background-color: darkblue;
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: lightblue
`

const footerText = {
    display: "flex",
    marginLeft: "100px",
    fontSize: "17px",
    alignItems: "center"
}
const footerTextStyle = {
    marginLeft: "10px",
}

const footerSocials = {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
    fontSize: "20px",
    marginRight: "20px",
    alignItems: "center"
}