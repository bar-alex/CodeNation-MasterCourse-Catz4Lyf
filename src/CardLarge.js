
import styled from "styled-components";

const CardLarge = (props) => {


    return (
        <DivStyled>
    <img alt='' src={props.catImage} />
    <h2>{props.catTitle}</h2>
    <p>{props.catDesc}</p>
    <p1>{props.catPrice}</p1>
    <button>Add to cart</button>

        </DivStyled>
    )
}

export default CardLarge


const DivStyled = styled.div`

border: 2px solid grey;
width: 50vh;
height: 75vh;
margin: 20px;
background-color: #61dafb;
border-radius: 10px;
box-shadow: 2.5px 5px #000000;

 & p1 {
    border: 3px solid grey;
     padding: 0rem;
     border: 1px solid grey;
     margin: 20px;
    
     
 }
& h2 {
    margin: 0rem;
    border: 1px solid grey;

 
}


& img {
    padding: 5px;
    width: 18rem;
    margin: 2rem;
    border-radius: 20px;
    border: 0px solid grey;
}`
