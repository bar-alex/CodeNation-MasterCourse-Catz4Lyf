
import styled from "styled-components"
import {FaShoppingBasket} from "react-icons/fa"
import CardSmall from './CardSmall'


const BasketList = (props) => {

    console.log('BasketList->props:', props );

    // props.basketList
    // props.setBasketList
    // props.removeThisCat
    
    const calcTotal = () => props.basketList.reduce( (pv,cv) => pv+cv, 0 );

    return (
        <DivStyled>
            <div id='basket-header'> <FaShoppingBasket /> </div>
            <div id='basket-body'>
            { props.basketList.length===0 && 
                <div id='empty-basket'>There are no cats in here .. </div>  
            }
            {   props.basketList && 
                props.basketList.map( (cat,idx) => 
                    <CardSmall key={idx} 
                        catInfo = {cat}  
                        removeAction = {props.removeThisCat}
                        /> )
            }
            </div>
            <div id='basket-price'>
                <p>Price { calcTotal() }</p>
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
    margin: 0px 10px;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
    position:relative;

    #basket-header {
        height: 5.2rem;
        flex-grow: 0;
        align-self:flex-start;
        /* display: flex; */
        /* justify-content: center; */
        /* text-align:center; */
    }
    #basket-header > svg {
        border: 1px solid red;
        width: 5rem;
        height: 5rem;
        /* margin: auto; */
        /* text-align:center; */
    }
    #basket-price {
        align-self: flex-end;
        flex-grow: 0;
        text-align: center;
    }
    #basket-body{
        flex-grow:2;
    }


    #empty-basket{
        justify-self:center !important;
        align-self:center !important;
        margin: 50% 0;
        width: 100%;
        text-align: center;
        position:absolute;
        border: 1px solid lightblue;
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