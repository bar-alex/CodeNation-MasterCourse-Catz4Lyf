import styled from "styled-components";


const CardSmall = (props) => {
    return (
        <div>
<DivStyled>
    <img alt='' src={props.catImage} />
    <h2>{props.catTitle}</h2>
    <p>{props.catDesc}</p>
    <p1>{props.catPrice}</p1>
    <button>  Remove </button>
</DivStyled>
</div>
    )
}

export default CardSmall


const DivStyled = styled.div`
    border: 3px solid grey;
    border-width: 2px;
    background-color: #91dadb;
    width: 80vh;
    box-shadow: 2.5px 5px #000000;

    & p1 { 
        font-size: 16px;
        display:flex;
    
    }

    & button {
    border-radius: 8px;
    border: none;
    font-size: 20px
    }

    & img {
        border: 3px solid purple;
        width: 12rem;
        border-radius: 6px;
        display: flex;
        margin-top: 1rem;

    }
    & h2 { 
        border: 1px solid blue;
        display: flex;
        position: absolute;
        top: 1rem;
        left: 18rem;    
    }

    & p {
        /* border: 1px solid orange; */
        display: flex;
        position: absolute;
        top: 6rem;
        left: 16rem;
        width: 19rem;
        height: 5rem;
    }`