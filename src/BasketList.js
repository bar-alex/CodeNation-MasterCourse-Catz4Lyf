
import styled from "styled-components"
import {FaShoppingBasket} from "react-icons/fa"
import CardSmall from './CardSmall'


const BasketList = (props) => {

    console.log('BasketList->props:', props );

    const basketCats = props.catList

    let number = 0
    const handleClick = () =>{
        number++
        console.log(number)
    }
    
    return (
        <DivStyled>
            <FaShoppingBasket />
            <div style={basketCatsStyle}>
            { 
            basketCats && 
            basketCats.map( (cat,idx) => 
                <CardSmall  />
             )
            }
            </div>

        </DivStyled>
    )
    
}

const DivStyled = styled.div`
    background-color: silver;
    height: 100vh;
    width: 45vh;
    //float: right;
    /* display:flex; */ // Lets basket fill up - removed luka

    & > svg {
        border: 1px solid red;
        width: 5rem;
        height: 5rem;

    }

`

//--------------------------------------------------------

/* 
<div style={shoppingBasketStyle}>
        <FaShoppingBasket onClick = {handleClick}/>
        </div>
        <div style={basketItems}>
        <div style={basketItemOne}>
        </div>       
        <div style={basketItemTwo}>
        </div>       
        <div style={basketItemThree}>
        </div>
        </div> 
        <div style={totalPrice}>
            <h1 style={{margin: "0", fontSize: "30px"}}>Total Price</h1>
            <p style={{fontSize: "20px", margin: "0"}}>£</p>
            <button style={checkoutButton}>Checkout</button>
        </div>
        <div style={totalItems}>
            <h1 style={{margin: "0"}}>0 Items</h1>
        </div>       */



const shoppingBasketStyle = {
    backgroundColor: "black",
    color: "white",
    fontSize: "30px",
    display: "flex",
    justifyContent: "center",
    padding: "10px 0 10px 0"
}

const basketItems = {
    height: "63vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
}

const basketItemOne = {
    backgroundColor: "grey",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    height: "20vh"
}

const basketItemTwo = {
    backgroundColor: "grey",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    height: "20vh"
}

const basketItemThree = {
    backgroundColor: "grey",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    height: "20vh"
}

const totalPrice = {
    margin: "0",
    backgroundColor: "grey",
    height: "19vh",
    borderTop: "5px solid black"
}

const checkoutButton = {
    height: "40px",
    width: "200px",
    fontSize: "20px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    marginTop: "10px"
}

const totalItems = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    color: "white",
    height: "9.7vh"
}

const basketCatsStyle = {
    height: "400px",
    backgroundColor: "red"
}

export default BasketList