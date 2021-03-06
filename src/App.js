
import './App.css';
import styled from 'styled-components';
import DisplayList from './DisplayList';
import DisplayHeader from './DisplayHeader';
import DisplayFooter from './DisplayFooter';
import BasketList from './BasketList';
import { useState } from 'react';
//import CardSmall from './CardSmall';
//import CardLarge from './CardLarge';


function App() {


  // this holds the list of cats that are available to purchase
  const [ dataCats, setDataCats ] = useState( [] );
  // this holds the list of cats that are in the process of being purchased
  const [ basketCats, setBasketCats ] = useState( [] );
  // used to filter the cats shown in the list
  const [ catsFilter, setCatsFilter ] = useState( '' );

  const filteredCatList = (hasText) => dataCats.filter( x => !hasText || x.name.toLowerCase().indexOf(hasText)>-1 );

  // will copy this cat's information to basketCats
  // must receive a catInfo object (copied from dataCats)
  const buyThisCat = (catInfo) => {
    // will hold the list for the new basket
    const newBasketList = [...basketCats, catInfo]
    setBasketCats( newBasketList )

    console.log('buyThisCat -> new cat', catInfo, ' \n new list -> ',newBasketList);
  }

  // will remove the cat passed as param from the baskekCats list 
  const removeThisCat = (catInfo,indexValue) => {
    
    // const newBasketList = basketCats
    //     .filter( (it,idx) => it.id !== catInfo.id )
    //     .map( (it,idx) => { return {...it} } );
    const newBasketList = basketCats
      .filter( (it,idx) => idx !== indexValue )
      .map( (it,idx) => { return {...it} } );


    setBasketCats( newBasketList );
  }


  return (

    <DivApp className="App">
      <header className="App-header">
      
      </header>

      <DisplayHeader setCatsFilter={setCatsFilter} />
      
      <div id='main-area'>
        <DisplayList 
          catList = { filteredCatList(catsFilter) }
          setCatList = {setDataCats} 
          buyThisCat = {buyThisCat}
          />

        <BasketList 
          basketList = {basketCats}
          setBasketList = {setBasketCats} 
          removeThisCat = {removeThisCat}
          />
      </div>

      <DisplayFooter />

    </DivApp>
  );
}

export default App;



const DivApp = styled.div`
  /* border: 1px solid red; */

  /* text-align: center; */
  background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);  

  display:flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  #main-area{
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  #main-area > :first-child {
    /* border: 1px solid green; */
    /* min-width: 80%; */
    width: 80%;
    /* align-self:flex-start; */
  }

  #main-area > :nth-child(2) {
    border: 1px solid slategray;
    /* min-width: 20%; */
    width: 20%;
    /* align-self:flex-end; */
  }

  /* & > div {
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;

    border: 1px solid orange;
  }

  & > div:first-child(){
    width: 70%;
    border: 2px solid purple;
  }

  & > div BasketList {
    width: 18%;
  } */

`