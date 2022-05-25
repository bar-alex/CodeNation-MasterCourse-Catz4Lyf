import styled from "styled-components";
// import {FaSearch} from "react-icons/fa"

const DisplayHeader = (props) => {

    // every time the textbox changes
    const handleOnChange = () => {
        const input = document.querySelector('input[name="search"]');
        console.log(input, input.value);;
        props.setCatsFilter(input.value)
    }

    // click on the button
    // const handleClick = () => {
    //     const input = document.querySelector('input[name="search"]');
    //     console.log(input, input.value);;
    //     props.setCatsFilter()
    // }

    return (
        <DivStyled>
            <h1 id="cats4lyf">Cats4Lyf</h1>
            <div>
                <a href="#cats4lyf" >About</a>
                <a href="#cats4lyf" >Services</a>
                <a href="#cats4lyf" >Products</a>
                <a href="#cats4lyf" >Contact</a>
                <a href="#cats4lyf" >Help</a>
            </div>
            <div>
                <input className="search-bar" placeholder="Filter by name ..." name="search" onChange={handleOnChange}></input>
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
    /* align-items: flex-end; */
    align-items: center;
    font-size: 24px;
    margin: 0 0 20px 0;
    
    /* top:0; */
    overflow:hidden;
    /* position: fixed; */
    z-index: 1;

    h1 {
        align-self: center;
        margin-left: 30px;
    }

    /* div{
        padding-bottom: 20px;
    } */

    div:first-child{
        display: flex;
        width: 840px;
        justify-content: space-between;
        text-decoration: none;
    }

    a{
        text-decoration: none;
        color: lightblue;
        align-items: center;
        padding: 35px;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        text-transform: uppercase;

        :hover{
            background-color: blue;
            color: white;
            border-left: 3px solid lightblue;
            border-right: 3px solid lightblue;
            transition: all 0.4s ease-in;
        }
    }

    input{
        margin-right: 20px;
        height: 40px;
        width: 230px;
        font-size: 24px;
        border-radius: 5px;
        padding-left: 20px;
        border: 5px solid lightblue;
        background-color: lightblue;
        color: blue;

        :hover{
            border: 5px solid white;
        }

        :focus,:active{
            border: 5px solid white;
            outline: none;
        }
    }
`    

// const navbarLinks = {
//     display: "flex",
//     width: "840px",
//     justifyContent: "space-between",
//     textDecoration: "none",
// }



// const searchButton = {
//     fontSize: "20px",
//     padding: "5px",
//     borderRadius: "10px",
//     marginLeft: "10px",
//     marginRight: "10px",
//     border: "none",
//     backgroundColor: "lightblue"
// }