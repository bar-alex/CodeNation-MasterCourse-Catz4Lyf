

import styled from 'styled-components';
import { apiUrls } from './apiData'
import { useEffect  } from 'react';
import useFetch from './useFetch'
import makeCatInfoObject from './makeCatInfoObject';
import CardLarge from './CardLarge'
//import BasketList from './BasketList'



const DisplayList = (props) => {

    console.log( 'DisplayList.props', props );

    // the api is used here to populate the list with the cats
    const apiURL = apiUrls.search_10
    //console.log(apiURL);    // , apiInitObj
    
    // get some cats from the website
    const { data:dataAPI, isPending, error:errorAPI } = useFetch( apiURL )     // , apiInitObj;

    // shortcut, fixes some bug where it triggers continuos api calls
    const setCatList = props.setCatList;

    // for each cat add some extra properties so we have a nice set of cats with all the needed properties
    useEffect( ()=>{
        // if there is an error with fetching the cats from the api 
        // or the fetching is still pending, abandon the rest
        if(errorAPI || isPending) return;
        
        // build a new list for the cats from the api, by adding the missing information
        //console.log('dataAPI',dataAPI,errorAPI);
        const newCatList = dataAPI.map( (it,idx) => makeCatInfoObject(it) );
        // set the new lits to the state variable
        setCatList( [...newCatList] )

    }, [dataAPI,errorAPI,isPending,setCatList])

    // console.log( data, error );

    return (
        <DivStyled>

            { isPending && <p>pending ...</p> }
            { errorAPI && <p>Error: {errorAPI}</p> }
            {   props.catList &&
                props.catList.map( (it,idx) => 
                    <CardLarge key={idx} 
                        catInfo = {it}  
                        buyAction = {props.buyThisCat}
                        /> )
                    
            }

        </DivStyled>
    )
}

export default DisplayList


const DivStyled = styled.div`
    /* width: 100%; */
    margin: 0px 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    flex-grow: 0;
    /* justify-content:space-around; */
    /* justify-items: flex-start; */
    /* align-items: flex-start; */
    /* flex-basis: 300px; */

    /* border: 1px solid purple; */
`