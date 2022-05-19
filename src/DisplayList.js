

import styled from 'styled-components';
import { apiUrls } from './apiData'
import { useEffect, useState } from 'react';
import useFetch from './useFetch'
import makeCatInfoObject from './makeCatInfoObject';
import CardLarge from './CardLarge'



const DisplayHeader = (props) => {

    const apiURL = apiUrls.search_10
    //console.log(apiURL);    // , apiInitObj
    
    // this holds the list of cats that are available to purchase
    const [ dataCats, setDataCats ] = useState( [] );
    // this holds the list of cats that are in the process of being purchased
    const [ basketCats, setBasketCats ] = useState( [] );
    // get some cats from the website
    const { data:dataAPI, isPending, error:errorAPI } = useFetch( apiURL )     // , apiInitObj;
    
    
    // will copy this cat's information to basketCats
    // must receive a catInfo object (copied from dataCats)
    const buyThisCat = (catInfo) => {

    }


    // for each cat add some extra properties so we have a nice set of cats with all the needed properties
    useEffect( ()=>{
        // if there is an error with fetching the cats from the api 
        // or the fetching is still pending, abandon the rest
        if(errorAPI || isPending) return;
        
        // build a new list for the cats from the api, by adding the missing information
        //console.log('dataAPI',dataAPI,errorAPI);
        const newCatList = dataAPI.map( (it,idx) => makeCatInfoObject(it) );
        // set the new lits to the state variable
        setDataCats( [...newCatList] )

    } ,[dataAPI,errorAPI,isPending])

    // console.log( data, error );

    return (
        <DivStyled>
            { isPending && <p>pending ...</p> }
            { errorAPI && <p>Error: {errorAPI}</p> }
            {   dataCats &&
                dataCats.map( (it,idx) => 
                    <CardLarge key={idx} 
                        catInfo={it}  
                        buyAction={buyThisCat}
                        /> )
            }
        </DivStyled>
    )
}

export default DisplayHeader


const DivStyled = styled.div`
    width: 100%;
    margin: 0px 10px;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;

    border: 1px solid purple;
`