
import styled from "styled-components";

const CardLarge = (props) => {


    return (
        <DivStyled>
            <img src={props.catInfo.url} alt="cat's photogenic mug-shot" />
            <h2>{props.catInfo.name} - {props.catInfo.age}yo</h2>
            <p>{props.catInfo.description}</p>
            <div>
                <p>Price: </p>
                <p>£{props.catInfo.price}</p>
                <button>Buy me!</button>
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

    border: 1px solid blue;

    & > img{
        width: 240px;
        max-height: 60%;
        max-width: 100%;
        object-fit: contain;
        margin: 5px auto;
        border: 1px solid green;
    }

    & > h2 {
        align-self: center;
        font-size: 1.3rem;
    }

    & > p {
        align-self: flex-start;
        text-align: start;
        padding: 0px 3px;
        /* border: 1px solid orange; */
    }

    & > div {
        width: 100%;
        padding: 0px 5px 5px 5px;

        display:flex;
        justify-content: flex-start;
        flex-grow: 0;
        /* flex-shrink: 1; */

        border: 1px solid orange;
    }

    & > div > p:nth-child(2) {
        flex-grow:1;
        /* justify-self: flex-start; */
        padding-left: 3px;
        text-align:left;
        font-size: 1rem;
        font-weight: 500;
    }

    & > button {
        padding: 0px 3px;
        border: 1px solid purple;
    }

`