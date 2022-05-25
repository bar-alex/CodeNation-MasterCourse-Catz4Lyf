
import styled from "styled-components";

const CardLarge = (props) => {

    // props.catInfo
    // props.buyAction

    return (
        <DivStyled>
            <img src={props.catInfo.url} 
                alt="cat's photogenic mug-shot" />
            <h2>
                {props.catInfo.name} - {props.catInfo.age} Years Old
            </h2>
            <p>{props.catInfo.description}</p>
            <div>
                <p>Price: </p>
                <p>£{props.catInfo.price}</p>
                <button onClick={ () => props.buyAction(props.catInfo) } >Add to cart</button>
            </div>
        </DivStyled>
    )
}

export default CardLarge

const DivStyled = styled.div`
    width : 250px;
    height: 300px;

    display: flex;
    /* flex: 1 1 200px; */
    flex-direction: column;
    /* flex-flow: column wrap; */
    justify-content: space-between;
    align-items: flex-start;
    flex-grow: 0;

    border: 1px solid blue;
    padding-bottom: 10px;

    /* background-color: #61dafb; */
    background-color: lightcyan;
    border-radius: 8px;
    box-shadow: 1.5px 2px darkcyan;    
    border: 2px solid grey;
    width: 45vh;
    height: 45vh;
    margin: 0px auto 20px;

    & > img{
        width: 240px;
        max-height: 60%;
        max-width: 100%;
        object-fit: contain;
        margin: 10px auto 5px;
        /* border: 1px solid cyan; */
        border: 1px solid slategray;
        border-radius: 10px;
        opacity: .8;
        transition: opacity .5s ease;

        :hover{
            opacity: 1;
        }
    }


    /* the name and the age */
    & > h2 {
        align-self: center;
        font-size: 1.3rem;
    }

    /* the description */
    & > p {
        align-self: flex-start;
        text-align: start;
        flex-grow:1;
        /* text-align: center; */
        padding: 0px 5px 0px 5px;
        /* border: 1px solid orange; */
    }

    /* the price and buy me button */
    & > div {
        width: 100%;
        /* padding: 0px 5px 5px 5px; */
        margin: auto 5px;

        display:flex;
        justify-content: flex-start;
        flex-grow: 0;
        /* flex-shrink: 1; */

        /* border: 1px solid orange; */
    }

    /* the price */
    & > div > p:nth-child(2) {
        flex-grow:1;
        /* justify-self: flex-start; */
        padding-left: 3px;
        text-align:left;
        font-size: 1rem;
        font-weight: 500;
    }

    & > div > button {
        user-select: none;
        padding: 2px 2px;
        border: 2px solid purple;
        border-radius: 8px;
        /* margin-left: 20px; */
        margin-right: 7px;
    }
    
`
