import styled from "styled-components";

const CardSmall = (props) => {
    return (
        <DivStyled>
            <img src={props.catInfo.url} alt='here kitty kitty' />
            <div>
                <h2>{props.catInfo.name}</h2>
                {/* <p>{props.catInfo.description}</p> */}
                <div>
                    <p>Price: £{props.catInfo.price}</p>
                    <button onClick={ () => props.removeAction(props.catInfo) } >Remove</button>
                </div>
            </div>
        </DivStyled>
    )
}

export default CardSmall


const DivStyled = styled.div`
    /* width : 250px; */
    height: 15vh;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 0;

    background-color: #91dadb;
    box-shadow: 2.5px 5px #000000;

    border: 3px solid grey;
    border-width: 2px;
    background-color: #91dadb;
    
    & > img {
        width: 45%;
        height: auto;
        object-fit: contain;

        border: 1px solid purple;
        border-radius: 5px;
        margin: 2px 4px auto 2px
    }

    & :nth-child(1){
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:flex-start;
        flex-wrap: wrap
    }

    /* the name and the age */
    & > div > h2 {
        width: 70%;
        /* display:inline-block; */
        align-self: flex-start;
        font-size: 1.3rem;
    }
    & > div > p { 
        width: 70%;
        align-self: flex-start;
        text-align: start;
        flex-grow:1;
        /* text-align: center; */
        padding: 0px 3px 0px 5px;
    }

    & > div > div > button {
        /* border-radius: 8px; */
        /* border: none; */
        /* font-size: 1.2rem; */
        padding: 2px 2px;
        border: 2px solid purple;
        border-radius: 8px;
        
    }

    /* & h2 { 
        border: 1px solid blue;
        display: flex;
        position: absolute;
        top: 1rem;
        left: 18rem;    
    } */

    /* & p {
        /* border: 1px solid orange; 
        display: flex;
        position: absolute;
        top: 6rem;
        left: 16rem;
        width: 19rem;
        height: 5rem;
    } */
`